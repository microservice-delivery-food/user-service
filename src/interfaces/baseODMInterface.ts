interface baseODMInterface {
    getAll: () => any;
    findById: (id: Number) => any;
    create: (data: Object) => any;
    update: (data: Object, id: Number) => any;
    delete: (id: Number) => any;
    findOne: (columnName: String , value: any) => any;

}

export default baseODMInterface;