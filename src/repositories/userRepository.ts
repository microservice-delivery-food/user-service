import { Service } from "typedi";

import UserRepositoryInterface from "../interfaces/userInterface";
import user from "../models/user";
import baseRepository from "./baseRepository";

@Service()
class userRepository extends baseRepository implements UserRepositoryInterface{
    model = user;


}

export default userRepository;