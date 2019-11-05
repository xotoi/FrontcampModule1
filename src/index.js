import $ from 'jquery';
import newsApiServiceFactory from './factories/newsApiServiceFactory';
import 'bootstrap';
import newsApiController from './mvc/newsApiController';


const factory = new newsApiServiceFactory();
const service = factory.createService('GET');

service.getNewsSources().then(result => {
    let ids = [];
    let sources = [];
    for(var i =0; i < 11; i++){
        const { id, name } = result.sources[i];
        const selectorElement = $(`<button id="${id}" class="dropdown-item" type="button">${name}</a>`);        
        sources.push(selectorElement);
        ids.push(id);
    };
    $('#sourceSelector').append([...sources]);
    const controller = new newsApiController(ids);
});