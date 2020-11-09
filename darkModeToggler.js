document.getElementById('darkModeToggle').onclick = function(){
    $('#aboutMe').toggleClass('darkAboutMe');
    $('#JumboHeading').toggleClass('darkHeading');
    $('body').toggleClass('darkContent');
    $('.card').toggleClass('darkContentCard');
    $('#chekOutOnGHCard').toggleClass('darkCard');
    $('#chekOutOnGHCard').toggleClass('darkContentCard');
}