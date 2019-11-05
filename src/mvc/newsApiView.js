import $ from 'jquery';

export default class newsApiView {
    constructor(model) {
        this.model = model;
        console.log('model', model)
    }
    
    render () {
        renderNewsCards(this.model);
    }
};

function renderNewsCards(model) {
    $('.card').remove();

    model.data.articles.map((article) => {
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
}
