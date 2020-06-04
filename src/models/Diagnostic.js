export class Diagnostic {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.clinical_suspicion = obj.clinical_suspicion || null;
        this.histopathological_diagnosis = obj.histopathological_diagnosis || null;
        this.prognosis = obj.prognosis || null;
    }

    static init(obj) {
        return new Diagnostic(obj);
    }
}
