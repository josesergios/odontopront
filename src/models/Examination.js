export class Examination {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.color = obj.color || null;
        this.consistency = obj.consistency || null;
        this.injury_location = obj.injury_location || null;
        this.insertion = obj.insertion || null;
        this.medical_record_id = obj.medical_record_id || null;
        this.mobility = obj.mobility || null;
        this.secundary_signals = obj.secundary_signals || null;
        this.shape = obj.shape || null;
        this.size = obj.size || null;
        this.soft_parts = obj.soft_parts || null;
    }

    static init(obj) {
        return new Examination(obj);
    }
}
