$(document).on('mouseover', '.ndContentImage', function (e) {
    $('img', this).toggleClass('ndContentImageHover');
});

$(document).on('mouseout', '.ndContentImage', function (e) {
    $('img', this).toggleClass('ndContentImageHover');
});