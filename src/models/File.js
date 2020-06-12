export class File {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.name = obj.name || null;
        this.url = obj.url || null;
        this.type = obj.type || null;
        this.created_at = obj.created_at || null;
    }

    static init(obj) {
        return new File(obj);
    }
}
