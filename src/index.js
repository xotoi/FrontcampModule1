import $ from 'jquery';
import newsApiService from './services/newsApiService'

const service = new newsApiService();
service.getNewsSources().then(result => {
    for(var i =0; i < 11; i++){
        const source = result.sources[i];
        const selectorElement = $(`<button id="${source.id}" class="dropdown-item" type="button">${source.name}</a>`);
        selectorElement.click(function() {sourceSelectHandler(source.id)});
        $('#sourceSelector').append(selectorElement);
    };
});

function sourceSelectHandler(sourceId){
    service.getNewsFromSource(sourceId).then(result => {
        $('.card').remove();

        result.articles.map((article) => {
            $('body').append(
                $('<div>', {
                'class': 'card',
                'style': 'width: 18rem;'
            }).append(
                $('<img>', {
                    'class': 'card-img-top',
                    'src': article.urlToImage
                }),
                $('<div>', {
                    'class': 'card-body',
                }).append(
                    $('<p>', {
                        'class': 'card-text'
                    }).text(article.content)
                    )
                    
                )
            );
        });
    });
};