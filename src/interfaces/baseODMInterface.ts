interface baseODMInterface {
    getAll: () => any;
    findById: (id: Number) => any;
    create: (data: Array<String>) => any;
    update: (data: Array<String>, id: Number) => any;
    delete: (id: Number) => any;
}

export default baseODMInterface;