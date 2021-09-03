$(window).load(function() {
	$("body").css('visibility','visible').animate({opacity:1},100);
});
$(document).ready(function(){
var contentColHeight = $('.navbar').height();
//var optionColHeight = $('.detail_area ').height();
var num = contentColHeight+ 80;
var box = $('.container').height();
var windowbox = $(window).height();


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 57) {
		$('.navbar').css('padding-top','0').css('position','fixed');
         
    } else {
		$(".navbar").css('padding-top','4%').css('position','static');/*★수정★*/
    }
});
});



$(function(){

    var link = $('#navbar a.dot');
    link.on('click',function(e){
        
        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('href')); 
        
        //target section의 좌표를 통해 꼭대기로 이동
        $('html, body').animate({
            scrollTop: target.offset().top
        },100);
        
        //active 클래스 부여
        $(this).addClass('active');

        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });
    
    $(window).on('scroll',function(){
        findPosition();
    });

    function findPosition(){
        $('section').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 20){
                link.removeClass('active');
                $('#navbar').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
            }
        });
    }

    findPosition();
});



$(function(){
	includeLayout();
});
function includeLayout(){
	var includeArea= $('[data-include]');
	var self, url;

	$.each(includeArea, function(){
		self= $(this);
		url= self.data("include");
		self.load(url, function(){
			self.removeAttr("data-include");
		});
	});
}



/*
window.addEventListener('load', function() {
            var allElements = document.getElementsByTagName('*');
            Array.prototype.forEach.call(allElements, function(el) {
                var includePath = el.dataset.includePath;
                if (includePath) {
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            el.outerHTML = this.responseText;
                        }
                    };
                    xhttp.open('GET', includePath, true);
                    xhttp.send();
                }
            });
        });
*/


