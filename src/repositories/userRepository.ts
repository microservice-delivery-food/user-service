import { Service } from "typedi";

import userRepositoryInterface from "../interfaces/userInterface";
import user from "../models/user";
import baseRepository from "./baseRepository";

@Service()
class userRepository extends baseRepository implements userRepositoryInterface{
    model = user;


}

export default userRepository;