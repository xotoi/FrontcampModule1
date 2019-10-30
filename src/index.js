import $ from 'jquery';
import newsApiService from './services/newsApiService';
import 'bootstrap';

const service = new newsApiService();
service.getNewsSources().then(result => {
    for(var i =0; i < 11; i++){
        const { id, name } = result.sources[i];
        const selectorElement = $(`<button id="${id}" class="dropdown-item" type="button">${name}</a>`);
        selectorElement.click(function() {onSelectorClick(id, service)});
        $('#sourceSelector').append(selectorElement);
    };
});

async function onSelectorClick(id, service){
    import('./clickHandlers/handlers').then((module) => {
        module.default(id, service)
    })
}