var container = $('div'),
    scrollTo = $('#top');

container.scrollTop(
    scrollTo.offset().top - container.offset().top + container.scrollTop()
);

container.animate({
    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
});

