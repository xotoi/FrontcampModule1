import $ from 'jquery';
import newsApiServiceFactory from './factories/newsApiServiceFactory';
import 'bootstrap';

const factory = new newsApiServiceFactory();
const service = factory.createService('GET');

service.getNewsSources().then(result => {
    let sources = [];
    for(var i =0; i < 11; i++){
        const { id, name } = result.sources[i];
        const selectorElement = $(`<button id="${id}" class="dropdown-item" type="button">${name}</a>`);
        selectorElement.click(function() {onSelectorClick(id, service)});
        sources.push(selectorElement);
    };
    $('#sourceSelector').append([...sources]);
});

async function onSelectorClick(id, service){
    const handlers = await import('./handlers/sourceSelectHandler');
    handlers.default(id, service);
};