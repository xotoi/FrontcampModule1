import $ from 'jquery';

export default function sourceSelectHandler(sourceId, service){
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