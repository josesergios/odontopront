export class Measurement {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.diastolic = obj.diastolic || null;
        this.medical_record_id = obj.medical_record_id || null;
        this.pulse = obj.pulse || null;
        this.systolic = obj.systolic || null;
        this.created_at = obj.created_at || null;
    }

    static init(obj) {
        return new Measurement(obj);
    }
}
