cnt = 40;

$(window).on('load', function(){
    for (let i = 0; i < cnt; i++){

        var zaseki_i = i + 1 ;

        $('#box').append(
            '<div class="box-child child' + zaseki_i + '" onclick="box_c(this)">' +
            '<p>' + zaseki_i + '</p>' +
            '</div>'
        );
    }
});

function box_c(self){
    let txt = $(self).text();
    $("input").val(txt);

    if ($(self).hasClass('active')){
        $(self).removeClass('active');
    }else{
        $(self).addClass('active');
    }

}