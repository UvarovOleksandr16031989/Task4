
var $win = $(window)
    , $fixed = $(".button_top")
    , limit = 400;
function tgl(state) {
    $fixed.toggleClass("hidden", state);
}
$win.on("scroll", function() {
    var top = $win.scrollTop();
    if(top > limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});
$('#btn_head').click(function() {
    $('.section_header__burger_item').toggleClass('is-active');
    $('.section_header__menu').toggleClass('is-hidden');
});