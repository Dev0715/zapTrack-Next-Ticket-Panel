import Validator from "validator";
import isEmpty from "./is-empty";

const validateLoginInput = (data: any) => {
    let errors = { email: "", password: "" };
    let isValid = true;

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "This value is required.";
        isValid = false;
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Enter a valid email address.";
        isValid = false;
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "This value is required.";
        isValid = false;
    } else if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = "Ensure this value has at least 6 characters.";
        isValid = false;
    }

    return {
        errors,
        isValid
    };
}

const validateRegisterInput = (data: any) => {
    let errors = { username: "", full_name: "", email: "", password: "" };
    let isValid = true;

    data.username = !isEmpty(data.username) ? data.username : "";
    data.full_name = !isEmpty(data.full_name) ? data.full_name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.username)) {
        errors.username = "This value is required.";
        isValid = false;
    }

    if (Validator.isEmpty(data.full_name)) {
        errors.full_name = "This value is required.";
        isValid = false;
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "This value is required.";
        isValid = false;
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Enter a valid email address.";
        isValid = false;
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "This value is required.";
        isValid = false;
    } else if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = "Ensure this value has at least 6 characters.";
        isValid = false;
    }

    return {
        errors,
        isValid
    };
};

const validateForgotPwdInput = (data: any) => {
    let errors = { email: "" };
    let isValid = true;

    data.email = !isEmpty(data.email) ? data.email : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "This value is required.";
        isValid = false;
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Enter a valid email address.";
        isValid = false;
    }

    return {
        errors,
        isValid
    };
}

const validateResetPwdInput = (data: any) => {
    let errors = { password: "", password2: "" };
    let isValid = true;

    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.password)) {
        errors.password = "This value is required.";
        isValid = false;
    } else if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = "Ensure this value has at least 6 characters.";
        isValid = false;
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "This value is required.";
        isValid = false;
    } else if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "This value should be the same.";
        isValid = false;
    }

    return {
        errors,
        isValid
    };
};

export {
    validateLoginInput,
    validateRegisterInput,
    validateForgotPwdInput,
    validateResetPwdInput
}