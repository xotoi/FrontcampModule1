import renderError from './views/errorPopup'

export default class errorController {
    constructor(errorMessage = '') {
        if (typeof errorController.instance === 'object'){
            return errorController.instance;
        }
        errorController.instance = this;

        this.errorMessage = errorMessage;

        return this;
    };

    getErrorMessage() {
        return this.errorMessage;
    };

    setErrorMessage(errorMessage = '') {
        this.errorMessage = errorMessage;
    };

    showError() {
        renderError(this.errorMessage);
    }

    hideError() {
        $('.alert alert-danger').remove();
    }
};
