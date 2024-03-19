import Validator from "validator";
import isEmpty from "./is-empty";

const validateNewKanban = (data: any) => {
    let errors = { name: "", desc: "" };
    let isValid = true;

    data.name = !isEmpty(data.name) ? data.name : "";
    data.desc = !isEmpty(data.desc) ? data.desc : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "This value is required.";
        isValid = false;
    }

    if (Validator.isEmpty(data.desc)) {
        errors.desc = "This value is required.";
        isValid = false;
    }

    return {
        errors,
        isValid
    };
}

export {
    validateNewKanban,
}