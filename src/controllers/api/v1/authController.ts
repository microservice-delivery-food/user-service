import { Service, Inject, Container } from "typedi";

import userRepository from "../../../repositories/userRepository";
import { Request, Response } from "express";

@Service()
export class authController {
    userRepo: userRepository;

    constructor(@Inject() userRepo: userRepository) {
        console.log(userRepo);
        
        this.userRepo = userRepo;
    }

    index(req: Request, res: Response) {
        console.log(this.userRepo.getAll());
        
        const { name } = req.params;
        res.send(`Hello aaaaaAli, ${name}`);
    }
} 