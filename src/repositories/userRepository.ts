import UserRepositoryInterface from "../interfaces/userInterface";
import user from "../models/user";
import baseRepository from "./baseRepository";

export default class userRepository extends baseRepository implements UserRepositoryInterface{
    model = user;

    
}