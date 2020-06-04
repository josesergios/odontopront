export class User {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.email =  obj.email || null;
        this.phone =  obj.phone || null;
        this.name =  obj.name || null;
        this.type =  obj.type || null;
        this.code =  obj.code || null;
    }

    static init(obj) {
        return new User(obj);
    }
}
