import {Address} from "./Address";

export class Patient {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.address_id = obj.address_id || null;
        this.age = obj.age || null;
        this.birth_city = obj.birth_city || null;
        this.birth_date = obj.birth_date || null;
        this.birth_uf = obj.birth_uf || null;
        this.commercial_address_id = obj.commercial_address_id || null;
        this.document = obj.document || null;
        this.gender = obj.gender || null;
        this.id = obj.id || null;
        this.marital_status = obj.marital_status || null;
        this.mobile = obj.mobile || null;
        this.name = obj.name || null;
        this.occupation = obj.occupation || null;
        this.skin_color = obj.skin_color || null;

        this.address = new Address();
        this.commercial_address = new Address();

        if(typeof obj.address !== 'undefined'){
            this.address = new Address(obj.address);
        }

        if(typeof obj.commercial_address !== 'undefined'){
            this.commercial_address = new Address(obj.commercial_address);
        }
    }

    static init(obj) {
        return new Patient(obj);
    }
}
