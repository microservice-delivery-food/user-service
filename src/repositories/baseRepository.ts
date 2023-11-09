import { Model } from "mongoose";
import baseODMInterface from "../interfaces/baseODMInterface";

export default abstract class baseRepository implements baseODMInterface {
    public abstract model: Model<any>;

    getAll() {
        
    };
    findById(id: Number) {

    };
    create(data: String[]) {

    };
    update(data: String[], id: Number) {

    };
    delete(id: Number) {

    };

}