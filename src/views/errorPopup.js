import $ from 'jquery';

export default function renderError(errorMsg) {
    $('body').prepend(
        $('<div>', {
        'class': 'alert alert-danger',
        'role': 'alert'
        }).text(`${errorMsg}`)
    );
};