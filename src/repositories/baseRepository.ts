import {Model} from "mongoose";
import baseODMInterface from "../interfaces/baseODMInterface";

export default abstract class baseRepository implements baseODMInterface {
    public abstract model: Model<any>;

    public async getAll() {
        return await this.model.find({}).exec();
    };

    public findById(id: Number) {
        return this.model.findById(id);

    };

    public async create(data: Object) {
        return await this.model.create(data);
    };

    public update(data: Object, id: Number) {
        return this.model.findOneAndUpdate({
            _id: id
        }, data);
    };

    public delete(id: Number) {
        return this.model.findById(id).deleteOne();
    };

    public async findOne(columnName: any, value: any) {
        let filter = {[columnName]: value};
        return await this.model.findOne(filter).exec();
    }

}