String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function loadCurrentDocsMenu() {
    var currentUrl = window.location.href;
    var lastPart = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);

    if (!lastPart) {
        return;
    }

    if (!window.location.hash) {
        lastPart = lastPart + '#title.1';
    }

    var id = lastPart.replaceAll('#', '-').replaceAll('.', '-');

    // close open stuff
    $('.opened').removeClass('opened');
    $('.opened-ul').removeClass('opened-ul').addClass('closed-ul');

    var elem = $('#' + id);

    elem.addClass('opened');
    elem.parent('ul').prev('li').addClass('opened');
    elem.parent('ul').prev('li').parent('ul').prev('li').addClass('opened');

    // open parents
    elem.next('ul').addClass('opened-ul');
    elem.parents('ul').addClass('opened-ul');
}

function scrollToSection(url) {
    var hash = url.substring(url.indexOf('#') + 1);
    //var hash = hash.replace('', '');

    console.log(hash);

    if (hash) {
        $('.right-content').scrollTop(0);

        var position = $('a[name="' + hash + '"]').offset().top - $('.right-content').offset().top;

        console.log(position);

        $('.right-content').scrollTop(position);
    }
}

$(function() {
    loadCurrentDocsMenu();

    scrollToSection(window.location.href);

    $('.project-version-switcher').each(function() {
        $(this).attr('href', $(this).attr('href') + window.location.hash);
    });
});

window.onhashchange = loadCurrentDocsMenu;

$(function() {
    $('.toc-item a').on('click', function(e) {
        scrollToSection($(this).attr('href'));
    });
});
