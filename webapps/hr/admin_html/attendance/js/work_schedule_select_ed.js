$(document).ready(function() {  
   
   var count_sun=$('.list_name #selectBox_sun option:selected').val();
    if(count_sun=="option1") 
    {
        $('.list_name #selectBox_sun').parent().parent().append("<li class='place_work'>기본근무지</li>");
    }
    else
    {
         $('.list_name #selectBox_sun').parent().parent().find('.place_work').remove();
    }
    if(count_sun=="option2") 
    {
        $('.list_name #selectBox_sun').parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul></li>");
    }
    else
    {
        $('.list_name #selectBox_sun').parent().parent().find('.list_ul_work').remove();
    }

    if(count_sun=="option3") 
    {
        $('.list_name #selectBox_sun').parent().prevAll().children().css('display','none');
        $('.list_name #selectBox_sun').parent().nextAll().css('display','none');
    }
    else
    {
        $('.list_name #selectBox_sun').parent().prevAll().children().css('display','block');
        $('.list_name #selectBox_sun').parent().nextAll().css('display','block');
    }


   var count_mon=$('.list_name #selectBox_mon option:selected').val(); 
    if(count_mon=="option1") 
    {
        $('.list_name #selectBox_mon').parent().parent().append("<li class='place_work'>기본근무지</li>");
    }
    else
    {
         $('.list_name #selectBox_mon').parent().parent().find('.place_work').remove();
    }
    if(count_mon=="option2") 
    {
        $('.list_name #selectBox_mon').parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul></li>");
    }
    else
    {
        $('.list_name #selectBox_mon').parent().parent().find('.list_ul_work').remove();
    }

    if(count_mon=="option3") 
    {
        $('.list_name #selectBox_mon').parent().prevAll().children().css('display','none');
        $('.list_name #selectBox_mon').parent().nextAll().css('display','none');
    }
    else
    {
        $('.list_name #selectBox_mon').parent().prevAll().children().css('display','block');
        $('.list_name #selectBox_mon').parent().nextAll().css('display','block');
    }

    var count_tue=$('.list_name #selectBox_tue option:selected').val(); 
    if(count_tue=="option1") 
    {
        $('.list_name #selectBox_tue').parent().parent().append("<li class='place_work'>기본근무지</li>");
    }
    else
    {
         $('.list_name #selectBox_tue').parent().parent().find('.place_work').remove();
    }
    if(count_tue=="option2") 
    {
        $('.list_name #selectBox_tue').parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul></li>");
    }
    else
    {
        $('.list_name #selectBox_tue').parent().parent().find('.list_ul_work').remove();
    }

    if(count_tue=="option3") 
    {
        $('.list_name #selectBox_tue').parent().prevAll().children().css('display','none');
        $('.list_name #selectBox_tue').parent().nextAll().css('display','none');
    }
    else
    {
        $('.list_name #selectBox_tue').parent().prevAll().children().css('display','block');
        $('.list_name #selectBox_tue').parent().nextAll().css('display','block');
    }

    var count_wed=$('.list_name #selectBox_wed option:selected').val(); 
    if(count_wed=="option1") 
    {
        $('.list_name #selectBox_wed').parent().parent().append("<li class='place_work'>기본근무지</li>");
    }
    else
    {
         $('.list_name #selectBox_wed').parent().parent().find('.place_work').remove();
    }
    if(count_wed=="option2") 
    {
        $('.list_name #selectBox_wed').parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul></li>");
    }
    else
    {
        $('.list_name #selectBox_wed').parent().parent().find('.list_ul_work').remove();
    }

    if(count_wed=="option3") 
    {
        $('.list_name #selectBox_wed').parent().prevAll().children().css('display','none');
        $('.list_name #selectBox_wed').parent().nextAll().css('display','none');
    }
    else
    {
        $('.list_name #selectBox_wed').parent().prevAll().children().css('display','block');
        $('.list_name #selectBox_wed').parent().nextAll().css('display','block');
    }

    var count_thu=$('.list_name #selectBox_thu option:selected').val(); 
    if(count_thu=="option1") 
    {
        $('.list_name #selectBox_thu').parent().parent().append("<li class='place_work'>기본근무지</li>");
    }
    else
    {
         $('.list_name #selectBox_thu').parent().parent().find('.place_work').remove();
    }
    if(count_thu=="option2") 
    {
        $('.list_name #selectBox_thu').parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul></li>");
    }
    else
    {
        $('.list_name #selectBox_thu').parent().parent().find('.list_ul_work').remove();
    }

    if(count_thu=="option3") 
    {
        $('.list_name #selectBox_thu').parent().prevAll().children().css('display','none');
        $('.list_name #selectBox_thu').parent().nextAll().css('display','none');
    }
    else
    {
        $('.list_name #selectBox_thu').parent().prevAll().children().css('display','block');
        $('.list_name #selectBox_thu').parent().nextAll().css('display','block');
    }

    var count_fri=$('.list_name #selectBox_fri option:selected').val(); 
    if(count_fri=="option1") 
    {
        $('.list_name #selectBox_fri').parent().parent().append("<li class='place_work'>기본근무지</li>");
    }
    else
    {
         $('.list_name #selectBox_fri').parent().parent().find('.place_work').remove();
    }
    if(count_fri=="option2") 
    {
        $('.list_name #selectBox_fri').parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul></li>");
    }
    else
    {
        $('.list_name #selectBox_fri').parent().parent().find('.list_ul_work').remove();
    }

    if(count_fri=="option3") 
    {
        $('.list_name #selectBox_fri').parent().prevAll().children().css('display','none');
        $('.list_name #selectBox_fri').parent().nextAll().css('display','none');
    }
    else
    {
        $('.list_name #selectBox_fri').parent().prevAll().children().css('display','block');
        $('.list_name #selectBox_fri').parent().nextAll().css('display','block');
    }

    var count_sat=$('.list_name #selectBox_sat option:selected').val(); 
    if(count_sat=="option1") 
    {
        $('.list_name #selectBox_sat').parent().parent().append("<li class='place_work'>기본근무지</li>");
    }
    else
    {
         $('.list_name #selectBox_sat').parent().parent().find('.place_work').remove();
    }
    if(count_sat=="option2") 
    {
        $('.list_name #selectBox_sat').parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul></li>");
    }
    else
    {
        $('.list_name #selectBox_sat').parent().parent().find('.list_ul_work').remove();
    }

    if(count_sat=="option3") 
    {
        $('.list_name #selectBox_sat').parent().prevAll().children().css('display','none');
        $('.list_name #selectBox_sat').parent().nextAll().css('display','none');
    }
    else
    {
        $('.list_name #selectBox_sat').parent().prevAll().children().css('display','block');
        $('.list_name #selectBox_sat').parent().nextAll().css('display','block');
    }
});
