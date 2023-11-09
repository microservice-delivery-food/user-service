import {Service, Inject} from "typedi";

import userRepository from "../../../repositories/userRepository";
import {Request, Response} from "express";

@Service()
export class authController {
    userRepo: userRepository;

    constructor(@Inject() userRepo: userRepository) {
        this.userRepo = userRepo;
    }


    login = (req: Request, res: Response) => {

        const {name} = req.params;


        res.send(`Hello aaaaaAli, ${name}`);
    };

    register = (req: Request, res: Response) => {
        const {name} = req.params;

        res.send(`Hello aaaaaAli, ${name}`);
    };

    me = (req: Request, res: Response) => {
        console.log(this);

        const {name} = req.params;
        res.send(`Hello aaaaaAli, ${name}`);
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