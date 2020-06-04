export class Tooth {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.number = obj.number || null;
        this.status = obj.status || null;
    }

    static init(obj) {
        return new Tooth(obj);
    }
}
