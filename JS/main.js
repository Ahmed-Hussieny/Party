var open=0;
    $(".opClose").click(function(){
        if(open===0){
            $(".sidebar").animate({width:"200px"},1000)
            open=1;
        }else{
            $(".sidebar").animate({width:"0%"},1000)
            open=0;
        }
        
    })

$(".close").click(function(){
        $(".sidebar").animate({width:"0%"},1000)
        open=0;
    
})

var contentopen=0;

$(".head1 , .head2 , .head3 , .head4").click(function(e){
    $(this).find(".content").slideToggle(1000);
    $(this).siblings().find(".content").slideUp(1000);
})

function updateCountdown() {
    const now = new Date();
    const targetDate = new Date("2023-12-31");
    const timeLeft = targetDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent =  days +" D ";
    document.getElementById("hours").textContent = hours +" h ";
    document.getElementById("minutes").textContent = minutes +" m ";
    document.getElementById("seconds").textContent = seconds +" s ";
  }
  updateCountdown();

  setInterval(updateCountdown, 1000);

var len=0;
function findLen(){
    var l=""+document.getElementById("inputArea").value;
    len=l.length;
    console.log(len);
    var res=Number(100 - len);
    if(res>0){
        document.getElementById("res").innerHTML=res;
    }else{
        document.getElementById("res").innerHTML="your available character finished";
    }
}

// $(window).scroll(function(){
//     let scrollTop = $(window).scrollTop();
//     console.log(scrollTop);
// })
$(".link").click(function(){
    $(".sidebar").animate({width:"0%"},1000)
        open=0;
    let hrefVal= $(this).attr("href");
    let sectionTop = $(hrefVal).offset().top
    $("html,body").animate({scrollTop:sectionTop},{duration : 3000 ,queue : false} )
    // $(this).addClass(".bg-hea");
    // console.log("ffff")
    
})