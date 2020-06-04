export class Question {
    constructor(obj) {
        if(typeof obj === 'undefined' || obj === null){
            obj = {};
        }

        this.id = obj.id || null;
        this.type = obj.type || null;
        this.answer = obj.answer || null;
        this.title = obj.title || null;

    }

    static init(obj) {
        return new Question(obj);
    }
}
