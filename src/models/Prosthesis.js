export class Prosthesis {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.fixed = obj.fixed || null;
        this.full_bottom = obj.full_bottom || null;
        this.full_top = obj.full_top || null;
        this.removable_bottom = obj.removable_bottom || null;
        this.removable_top = obj.removable_top || null;
    }

    static init(obj) {
        return new Prosthesis(obj);
    }
}
