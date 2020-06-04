export class Referral {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.dentistry = obj.dentistry || null;
        this.endodontics = obj.endodontics || null;
        this.medical_record_id = obj.medical_record_id || null;
        this.orthodontics = obj.orthodontics || null;
        this.pediatric_dentistry = obj.pediatric_dentistry || null;
        this.periodontics = obj.periodontics || null;
        this.radiography = obj.radiography || null;
        this.surgery = obj.surgery || null;
    }

    static init(obj) {
        return new Referral(obj);
    }
}
