import { Model } from "mongoose";
import baseODMInterface from "../interfaces/baseODMInterface";

export default abstract class baseRepository implements baseODMInterface {
    public abstract model: Model<any>;

    public getAll() {
        console.log(this.model.find({}));
    };
    public findById(id: Number) {

    };
    public create(data: String[]) {

    };
    public update(data: String[], id: Number) {
        
    };
    public delete(id: Number) {

    };

}