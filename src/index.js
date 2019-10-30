import $ from 'jquery';
import newsApiService from './services/newsApiService';
import 'bootstrap';

const service = new newsApiService();
service.getNewsSources().then(result => {
    for(var i =0; i < 11; i++){
        const source = result.sources[i];
        const selectorElement = $(`<button id="${source.id}" class="dropdown-item" type="button">${source.name}</a>`);
        selectorElement.click(function() {onSelectorClick(source.id, service)});
        $('#sourceSelector').append(selectorElement);
    };
});

async function onSelectorClick(id, service){
    import('./clickHandlers/handlers').then((module) => {
        module.default(id, service)
    })
}