
$(document).on('click', '.schedule_table tr td ul li #add_action', function(){
    var ul_list = $('.list_ul_work #ul_list');
     var text_add = '지정근무지'
    var btn_delete = 'X'
     $(this).parent().find(ul_list).append("<li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>"+text_add+"</a><span class='btn-delete'>"+btn_delete+"</span></li>");
});



//Javascript
$(document).on('click', '#ul_list li .btn-delete', function(e){
    var idx = $('#ul_list li').index(this);
    $(this).parent().eq(idx).remove();
    event.stopPropagation();
});



$(function(){
$("#selectBox_sun").on("change",function() {

     
    if($("#selectBox_sun").val() == "option1") {
         $(this).parent().parent().append("<li class='place_work'>기본근무지</li>");

    }  else {
         $(this).parent().parent().find('.place_work').remove();
    }
    
    if($("#selectBox_sun").val() == "option2") {
         $(this).parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul><div class='add_action' id='add_action'>+ 추가하기</div></li>");

    }  else {
         $(this).parent().parent().find('.list_ul_work').remove();
    }
    
    if($("#selectBox_sun").val() == "option3") {
         $(this).parent().prevAll().children().css('display','none');
          $(this).parent().nextAll().css('display','none');

    }  else {
         $(this).parent().prevAll().children().css('display','block');
          $(this).parent().nextAll().css('display','block');

    }
}) 
});

$(function(){
$("#selectBox_mon").on("change",function() {

     
    if($("#selectBox_mon").val() == "option1") {
         $(this).parent().parent().append("<li class='place_work'>기본근무지</li>");

    }  else {
         $(this).parent().parent().find('.place_work').remove();
    }
    
    if($("#selectBox_mon").val() == "option2") {
         $(this).parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul><div class='add_action' id='add_action'>+ 추가하기</div></li>");

    }  else {
         $(this).parent().parent().find('.list_ul_work').remove();
    }
    
    if($("#selectBox_mon").val() == "option3") {
         $(this).parent().prevAll().children().css('display','none');
          $(this).parent().nextAll().css('display','none');

    }  else {
         $(this).parent().prevAll().children().css('display','block');
          $(this).parent().nextAll().css('display','block');

    }
}) 
});

$(function(){
$("#selectBox_tue").on("change",function() {

     
    if($("#selectBox_tue").val() == "option1") {
         $(this).parent().parent().append("<li class='place_work'>기본근무지</li>");

    }  else {
         $(this).parent().parent().find('.place_work').remove();
    }
    
    if($("#selectBox_tue").val() == "option2") {
         $(this).parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul><div class='add_action' id='add_action'>+ 추가하기</div></li>");

    }  else {
         $(this).parent().parent().find('.list_ul_work').remove();
    }
    
    if($("#selectBox_tue").val() == "option3") {
         $(this).parent().prevAll().children().css('display','none');
          $(this).parent().nextAll().css('display','none');

    }  else {
         $(this).parent().prevAll().children().css('display','block');
          $(this).parent().nextAll().css('display','block');

    }
}) 
});

$(function(){
$("#selectBox_wed").on("change",function() {

     
    if($("#selectBox_wed").val() == "option1") {
         $(this).parent().parent().append("<li class='place_work'>기본근무지</li>");

    }  else {
         $(this).parent().parent().find('.place_work').remove();
    }
    
    if($("#selectBox_wed").val() == "option2") {
         $(this).parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul><div class='add_action' id='add_action'>+ 추가하기</div></li>");

    }  else {
         $(this).parent().parent().find('.list_ul_work').remove();
    }
    
    if($("#selectBox_wed").val() == "option3") {
         $(this).parent().prevAll().children().css('display','none');
          $(this).parent().nextAll().css('display','none');

    }  else {
         $(this).parent().prevAll().children().css('display','block');
          $(this).parent().nextAll().css('display','block');

    }
}) 
});

$(function(){
$("#selectBox_thu").on("change",function() {

     
    if($("#selectBox_thu").val() == "option1") {
         $(this).parent().parent().append("<li class='place_work'>기본근무지</li>");

    }  else {
         $(this).parent().parent().find('.place_work').remove();
    }
    
    if($("#selectBox_thu").val() == "option2") {
         $(this).parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul><div class='add_action' id='add_action'>+ 추가하기</div></li>");

    }  else {
         $(this).parent().parent().find('.list_ul_work').remove();
    }
    
    if($("#selectBox_thu").val() == "option3") {
         $(this).parent().prevAll().children().css('display','none');
          $(this).parent().nextAll().css('display','none');

    }  else {
         $(this).parent().prevAll().children().css('display','block');
          $(this).parent().nextAll().css('display','block');

    }
}) 
});

$(function(){
$("#selectBox_fri").on("change",function() {

     
    if($("#selectBox_fri").val() == "option1") {
         $(this).parent().parent().append("<li class='place_work'>기본근무지</li>");

    }  else {
         $(this).parent().parent().find('.place_work').remove();
    }
    
    if($("#selectBox_fri").val() == "option2") {
         $(this).parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul><div class='add_action' id='add_action'>+ 추가하기</div></li>");

    }  else {
         $(this).parent().parent().find('.list_ul_work').remove();
    }
    
    if($("#selectBox_fri").val() == "option3") {
         $(this).parent().prevAll().children().css('display','none');
          $(this).parent().nextAll().css('display','none');

    }  else {
         $(this).parent().prevAll().children().css('display','block');
          $(this).parent().nextAll().css('display','block');

    }
}) 
});

$(function(){
$("#selectBox_sat").on("change",function() {

     
    if($("#selectBox_sat").val() == "option1") {
         $(this).parent().parent().append("<li class='place_work'>기본근무지</li>");

    }  else {
         $(this).parent().parent().find('.place_work').remove();
    }
    
    if($("#selectBox_sat").val() == "option2") {
         $(this).parent().parent().append("<li class='list_ul_work'><ul id='ul_list'><li class='place_work appointed_work'><a href='javascript:wrapWindowByMask_designation();'>지정근무지</a><span class='btn-delete'>X</span></li></ul><div class='add_action' id='add_action'>+ 추가하기</div></li>");

    }  else {
         $(this).parent().parent().find('.list_ul_work').remove();
    }
    
    if($("#selectBox_sat").val() == "option3") {
         $(this).parent().prevAll().children().css('display','none');
          $(this).parent().nextAll().css('display','none');

    }  else {
         $(this).parent().prevAll().children().css('display','block');
          $(this).parent().nextAll().css('display','block');

    }
}) 
});


    
$(function(){
$("#selectBox_Entry").on("change",function() {

     
    if($("#selectBox_Entry").val() == "basic_Entry") {
         $('.appointed').css('display','none');
         $('#address_basic_input').css('display','inline-block');
         $('.Entry_btn').css('display','block');

    }  else {
         $('.appointed').css('display','table-row');
         $('#address_basic_input').css('display','none');
         $('.Entry_btn').css('display','none');
    }
    
    if($("#selectBox_Entry").val() == "appointed_Entry") {
         $('.appointed').css('display','table-row');
         $('#address_input').css('display','inline-block');
         $('.blue_pencil_btn').css('display','block');

    }  else {
         $('.appointed').css('display','none');
         $('#address_input').css('display','none');
         $('.blue_pencil_btn').css('display','none');
    }
    
}) 
});  

$(function(){
$("#list_Entry").on("change",function() {

     
    if($("#list_Entry").val() == "list") {
         $('.Entry_btn').css('display','none');
         $('.blue_pencil_btn').css('display','block');

    }  else {
         $('.Entry_btn').css('display','block');
         $('.blue_pencil_btn').css('display','none');
    }
    
}) 
});

function setValues() {
        var sh = document.getElementById("list_Entry");
        var tt = document.getElementById("address_input");
        tt.value = sh.options[sh.selectedIndex].text;
    }