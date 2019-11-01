import errorController from './../errorController';

export default (errorMessage) => {
    const controller = new errorController();
    controller.setErrorMessage(errorMessage);
    controller.showError();
};
