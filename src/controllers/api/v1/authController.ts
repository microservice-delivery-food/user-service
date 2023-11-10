import {Service, Inject} from "typedi";

import userRepository from "../../../repositories/userRepository";
import {Request, Response} from "express";

@Service()
export class authController {
    userRepo: userRepository;

    constructor(@Inject() userRepo: userRepository) {
        this.userRepo = userRepo;
    }

    login = async (req: Request, res: Response) => {

        const {name} = req.body;

        const data = await this.userRepo.getAll();

        res.send(data);
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

    me = (req: Request, res: Response) => {
        console.log(this);

        const {name} = req.params;
        res.send(`Hello Ali, ${name}`);
    };

    logout = (req: Request, res: Response) => {
        console.log(this);

        const {name} = req.params;
        res.send(`Hello aaaaaAli, ${name}`);
    };

    refresh = (req: Request, res: Response) => {
        console.log(this);

        const {name} = req.params;
        res.send(`Hello aaaaaAli, ${name}`);
    };
} 