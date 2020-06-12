import {User} from "./User";

export class Procedure {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.dent =  obj.dent || null;
        this.name =  obj.name || null;
        this.created_at =  obj.created_at || null;

        this.student = new User();
        this.teacher = new User();

        if(typeof obj.student !== "undefined"){
            this.student = new User(obj.student)
        }

        if(typeof obj.teacher !== "undefined"){
            this.teacher = new User(obj.teacher)
        }
    }

    static init(obj) {
        return new Procedure(obj);
    }
}
