$(function(){
    var flag=0;
    
    $('.share').on('click',function(){
    if(flag == 0)
        {
        $(this).siblings('.one').animate({
        top:'450px',
        left:'50%',
        },200);
        
        $(this).siblings('.two').delay(200).animate({
        top:'260px',
        left:'0%'
        },200);
        
        $(this).siblings('.three').delay(300).animate({
        top:'260px',
        left:'100%'
        },200);
                
        $('.one i,.two i, .three i').delay(500).fadeIn(200);  
        flag = 1;
        }
        
        
    else{
        $('.one, .two, .three').animate({
            top:'350px',
            left:'50%'
        },200);
        
    $('.one i,.two i, .three i').delay(500).fadeOut(200);
        flag = 0;
        }
    });
    });