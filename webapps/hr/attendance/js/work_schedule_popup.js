/*근무지 등록 팝업*/
function wrapWindowByMask(){
        //화면의 높이와 너비를 구한다.
        var maskHeight = $(document).height();
        var maskWidth = $('#wrap').width();  
 
        //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
        $('#mask').css({'width':maskWidth,'height':maskHeight});  
 
        //애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
        $('#mask').fadeIn(100);
        $('#mask').fadeTo("slow",0.8);    
        
        $('#address_input').css('display','inline-block');
        $('.close_btn').css('display','block');
        $('.close_btn.appointed_Entry_btn').css('display','none');
        $('.appointed_Entry_btn').css('display','none');
        $('.designation_hidden').css('display','table-row');
        $('.appointed').css('display','none');
        $('.appointed_option01').css('display','block');
        $('.appointed_option02').attr('selected', false);
        $('#selectBox_Entry option').attr('selected', false);
        $('#selectBox_Entry option').css('display','block');
        $('#basic_text').css('display','none');
        //윈도우 같은 거 띄운다.
        $('.window').show();
    }
 
    $(document).ready(function(){
       
       
        //검은 막 띄우기
        $('.openMask').click(function(e){
            e.preventDefault();
            wrapWindowByMask();
        });
        
        
        
        //닫기 버튼을 눌렀을 때
        $('.window .close').click(function (e) {
            //링크 기본동작은 작동하지 않도록 한다.
            e.preventDefault();
            $('#mask, .window').hide();
        });       
 
        //검은 막을 눌렀을 때
        $('#mask').click(function () {
            $(this).hide();
            $('.window').hide();
        });
        
        $( '.close_btn, #mask').click(function () {
            $( "#working_info_data" ).each( function () {
                this.reset();
            });
        });
        
    });
    
/*지정근무지 등록 팝업*/
function wrapWindowByMask_designation(){
        //화면의 높이와 너비를 구한다.
        var maskHeight = $(document).height();
        var maskWidth = $('#wrap').width();  
 
        //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
        $('#mask').css({'width':maskWidth,'height':maskHeight});  
 
        //애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
        $('#mask').fadeIn(100);
        $('#mask').fadeTo("slow",0.8);    
        
        $('.close_btn').css('display','none');
        $('.close_btn.appointed_Entry_btn').css('display','block');
        $('.appointed_Entry_btn').css('display','block');
        $('.designation_hidden').css('display','none');
        $('.appointed').css('display','table-row');
        $('.appointed_option01').css('display','none');
        $('.appointed_option02').css('display','block');
        $('.appointed_option02').attr('selected','selected');
        $('#basic_text').css('display','none');
        //윈도우 같은 거 띄운다.
        $('.window').show();
    }
 
    $(document).ready(function(){
       
       
        //검은 막 띄우기
        $('.schedule_table .schedule_select li.place_work a').click(function(e){
            e.preventDefault();
            wrapWindowByMask_designation();
        });
        
        
        
        //닫기 버튼을 눌렀을 때
        $('.window .close').click(function (e) {
            //링크 기본동작은 작동하지 않도록 한다.
            e.preventDefault();
            $('#mask, .window').hide();
        });       
 
        //검은 막을 눌렀을 때
        $('#mask').click(function () {
            $(this).hide();
            $('.window').hide();
        });
        
        $( '.close_btn, #mask').click(function () {
            $( "#working_info_data" ).each( function () {
                this.reset();
            });
            $('.blue_pencil_btn').css('display','none');
            $('.Entry_btn').css('display','block');
        });
        
    });