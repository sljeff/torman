/**
 * Created by Jeff on 2016/12/21.
 */
function get_info_from_title(title_id){

}

$(".titleLi").on('click', function(){
    var title_id = $(this).attr('id');
    get_info_from_title(title_id);
    $(".titleLi").removeClass("selLi");
    $(this).addClass("selLi");
});

$('.manBtn').on('click', function(){
    $('#manModal').show();
});

$(".close").on('click', function(){
    $('.modal').hide();
});
