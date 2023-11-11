import {Service, Inject} from "typedi";
import jsonwebtoken from 'jsonwebtoken';
import {Request, Response} from "express";

import userRepository from "../../../repositories/userRepository";
import {CustomRequest} from "../../../types/request";

@Service()
export class authController {
    userRepo: userRepository;

    constructor(@Inject() userRepo: userRepository) {
        this.userRepo = userRepo;
    }

    login = async (req: Request, res: Response) => {
        const {email, password} = req.body;

        const user = await this.userRepo.findOne('email', email);

        if (!user) {
            return res.status(401).send('User not found');
        }

        user.comparePassword(password, async function (err: any, match: boolean) {
            if (err) {
                return res.status(500).send('Error comparing passwords');
            }

            if (match) {
                const access_token = jsonwebtoken.sign(
                    {user}, process.env.JWT_SECRET || 'defaultSecret'
                );

                return res.status(200).json({access_token});
            } else {
                return res.status(401).send('Incorrect password');
            }
        });

    };

    register = async (req: Request, res: Response) => {
        const {name, email, password} = req.body;

        const user = await this.userRepo.create({
            name,
            email,
            password
        });

        res.send(user);
    };

    me = (req: CustomRequest, res: Response) => {
        res.send(req.user);
    };

    logout = (req: Request, res: Response) => {
        const {name} = req.params;
        res.send(`Hello aaaaaAli, ${name}`);
    };

    refresh = (req: Request, res: Response) => {
        console.log(this);

        const {name} = req.params;
        res.send(`Hello aaaaaAli, ${name}`);
    };
} 