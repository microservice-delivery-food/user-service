import {Model} from "mongoose";
import baseODMInterface from "../interfaces/baseODMInterface";

export default abstract class baseRepository implements baseODMInterface {
    public abstract model: Model<any>;

    public getAll() {
        console.log(this.model.find({}));
    };

    public findById(id: Number) {

    };

    public async create(data: Object) {
        return await this.model.create(data);
    };

    public update(data: String[], id: Number) {

    };

    public delete(id: Number) {

    };

}