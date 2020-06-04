import {User} from "./User";

export class Log {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.user_id = obj.user_id || null;
        this.data = obj.data || null;
        this.type = obj.type || null;
        this.created_at = obj.created_at || null;

        this.user = new User();

        if(typeof obj.user !== "undefined"){
            this.user = new User(obj.user);
        }
    }

    static init(obj) {
        return new Log(obj);
    }
}
