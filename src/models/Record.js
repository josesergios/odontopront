import {Patient} from "./Patient";
import {Diagnostic} from "./Diagnostic";
import {Examination} from "./Examination";
import {Prosthesis} from "./Prosthesis";
import {Referral} from "./Referral";
import {Log} from "./Log";
import {Tooth} from "./Tooth";
import {Measurement} from "./Measurement";
import {Procedure} from "./Procedure";

export class Record {
    constructor(obj) {
        if (typeof obj === 'undefined' || obj === null) {
            obj = {};
        }

        this.cheek_mucous = obj.cheek_mucous || null;
        this.complementary_exams = obj.complementary_exams || null;
        this.created_at = obj.created_at || null;
        this.disease_history = obj.disease_history || null;
        this.family_history = obj.family_history || null;
        this.general_evaluation = obj.general_evaluation || null;
        this.gum = obj.gum || null;
        this.hard_palate = obj.hard_palate || null;
        this.head_neck_evaluation = obj.head_neck_evaluation || null;
        this.id = obj.id || null;
        this.lips = obj.lips || null;
        this.lymph_nodes = obj.lymph_nodes || null;
        this.main_complaint = obj.main_complaint || null;
        this.observation = obj.observation || null;
        this.oral_floor = obj.oral_floor || null;
        this.oropharynx = obj.oropharynx || null;
        this.other_information = obj.other_information || null;
        this.patient = obj.patient || null;
        this.patient_id = obj.patient_id || null;
        this.procedures = obj.procedures || null;
        this.created_at = obj.created_at || null;
        this.fixed = obj.fixed || null;
        this.full_bottom = obj.full_bottom || null;
        this.full_top = obj.full_top || null;
        this.id = obj.id || null;
        this.medical_record_id = obj.medical_record_id || null;
        this.removable_bottom = obj.removable_bottom || null;
        this.removable_top = obj.removable_top || null;
        this.updated_at = obj.updated_at || null;
        this.created_at = obj.created_at || null;
        this.dentistry = obj.dentistry || null;
        this.endodontics = obj.endodontics || null;
        this.id = obj.id || null;
        this.medical_record_id = obj.medical_record_id || null;
        this.orthodontics = obj.orthodontics || null;
        this.pediatric_dentistry = obj.pediatric_dentistry || null;
        this.periodontics = obj.periodontics || null;
        this.radiography = obj.radiography || null;
        this.surgery = obj.surgery || null;
        this.updated_at = obj.updated_at || null;
        this.social_psychological_history = obj.social_psychological_history || null;
        this.soft_palate = obj.soft_palate || null;

        this.logs = [];
        this.teeth = [];
        this.measurements = [];
        this.procedures = [];

        this.diagnostic = new Diagnostic();
        if (typeof obj.diagnostic !== "undefined") {
            this.diagnostic = new Diagnostic(obj.diagnostic);
        }

        this.examination = new Examination();
        if (typeof obj.examination !== "undefined") {
            this.examination = new Examination(obj.examination);
        }

        this.prosthesis = new Prosthesis();
        if (typeof obj.prosthesis !== "undefined") {
            this.prosthesis = new Prosthesis(obj.prosthesis);
        }

        this.referral = new Referral();
        if (typeof obj.referral !== "undefined") {
            this.referral = new Referral(obj.referral);
        }

        this.patient = new Patient();
        if (typeof obj.patient !== "undefined") {
            this.patient = new Patient(obj.patient);
        }

        if (typeof obj.logs === "array") {
            this.diagnostic = obj.logs.map(item => {
                return new Log(item);
            })
        }

        if (typeof obj.teeth === "array") {
            this.teeth = obj.teeth.map(item => {
                return new Tooth(item);
            })
        }

        if (typeof obj.measurements === "array") {
            this.measurements = obj.measurements.map(item => {
                return new Measurement(item);
            })
        }

        if (typeof obj.procedures === "array") {
            this.procedures = obj.procedures.map(item => {
                return new Procedure(item);
            })

        }
    }

    static init(obj) {
        return new Record(obj);
    }
}