
$('li:first').attr('id','one');
$('#one').after('');
$('li').each(function(){
	var ids = $(this).attr('id');
}) 

var ids = '';
var $listitem = $('li');
var change = $('li');
/*$listitem.on('mouseover', function() {
    $('li span').remove();
    ids = this.id;
    var dar = new Date().toTimeString();
    $(this).append('<span>' + dar + '</span>');
});
var $lispan = $('ul');
$('li > span').on('mouseout', function() {
    $('li span').remove();
});*/

var cont = $('#li7');
var cont_dis = $('.cont');
cont.on('click', function() {
    cont_dis.css('display','block');
})

var close = $('.close');
close.on('click', function() {
    cont_dis.css('display','none');
})




$(function() {
$('li').on('click', function() {
    $(this).animate ({
    opacity: 0.5,
    paddingRight: '+=80'
     } , 1500, function() {
     $(this).remove();
     });
});
});
var $showlessBut = $('.showlessBut');

$(function() {
    var $showMore = $('.showMore');
    $showMore.hide();
    $showMore.before('<a class="showMoreBut text-primary">Show more</a>');
    $showMore.after('<a class="showlessBut text-primary">Show less</a>');
    var $showMoreBut = $('.showMoreBut');
    var $lessBut = $('.showlessBut');
    $lessBut.hide();
    $lessBut.on('click',function() {
            $showMore.hide();
            $lessBut.hide();
            $showMoreBut.fadeIn(500);
        });
    $showMoreBut.on('click',function() {
        $showMore.fadeIn(500);
        $lessBut.fadeIn(500);
        $showMoreBut.hide();
    });
    
});
/*$(function() {
    var $showMore = $('.showMore');
    var $showMoreBut = $('.showMoreBut');
    var $lessBut = $('.less-but');
    $lessBut.on('click',function() {
            $showMore.css('background','orange');
            $showMoreBut.removeClass('less-but');
            $showMoreBut.addClass('showMoreBut');
            $showMore.hide();
        });  
})*/



/*search butt
    position: relative;
    top: -53px;
    left: 300%;
    width: 80%;
   height: 20px; 
    padding: 15px;


 all librar
 	    position: relative;
    top: 2px;
    left: 265.5%;
    width: 57%;
    border-radius: 2px;
    max-width: 200%;
    height: 40px;
    background: transparent;
    border: none;
    color: white;*/