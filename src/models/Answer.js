import {Question} from "./Question";

export class Answer {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.medical_record_id = obj.medical_record_id || null;
        this.question_id = obj.question_id || null;
        this.value = obj.value || null;
        this.observations = obj.observations || null;

        this.question = new Question();

        if(typeof obj.question !== "undefined"){
            this.question = new Question(obj.question);
        }
    }

    static init(obj) {
        return new Answer(obj);
    }
}
