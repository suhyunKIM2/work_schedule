// JavaScript Document
$(function () {
       
        $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        closeText: '닫기',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true, 
    });
     $("#datepicker").datepicker();
         $("#datepicker").datepicker('setDate', new Date);
        $("#datepicker2").datepicker();
        $("#datepicker2").datepicker('setDate', new Date);
        $("#datepicker3").datepicker();
        $("#datepicker3").datepicker('setDate', new Date);
        $("#datepicker4").datepicker();
        $("#datepicker4").datepicker('setDate', new Date);
        $("#datepicker5").datepicker();
        $("#datepicker5").datepicker('setDate', new Date);
        $("#datepicker6").datepicker();
        $("#datepicker6").datepicker('setDate', new Date);
    });