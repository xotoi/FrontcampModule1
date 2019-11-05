import newsApiView from './newsApiView';
import newsApiModel from './newsApiModel';
import newsApiServiceFactory from './../factories/newsApiServiceFactory';

export default class newsApiController {
    constructor(ids) {
        const factory = new newsApiServiceFactory();
        this.service = factory.createService('GET');
        const service = this.service;

        ids.forEach(id => {
            let element = document.getElementById(id);
            element.addEventListener('click', function() {selectorClickHandler(id, service)})
        });
    }
};

function selectorClickHandler (id, service) {
    service.getNewsFromSource(id).then(result => {
        const model = new newsApiModel(result);
        const view = new newsApiView(model);
        view.render();
    });
};

