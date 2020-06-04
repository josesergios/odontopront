export class Address {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.city = obj.city || null;
        this.complement = obj.complement || null;
        this.neighborhood = obj.neighborhood || null;
        this.number = obj.number || null;
        this.phone = obj.phone || null;
        this.postcode = obj.postcode || null;
        this.street = obj.street || null;
        this.uf = obj.uf || null;
    }

    static init(obj) {
        return new Address(obj);
    }
}
