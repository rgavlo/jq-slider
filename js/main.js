$(function () {
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideShow = $('.slide-show');
    var slideIndex = 0;
    
    slideShow.css('width', slideCount * 100 + "%");


    slideShow.find(".single-slide").each(function (index) {
        $(this).css({"width": slideWidth + "%", "left": index * slideWidth + "%"});
        
    });
    
   $(".prev-slide").click(function(){
      
      slide(slideIndex - 1);     
       
   });
    
    $(".next-slide").click(function() {
        
        slide(slideIndex + 1);   
});
    function slide(newslideIndex) {
        
//        if (newslideIndex < 0 || newslideIndex >= slideCount){
//            return;
//        }
        
        var marginLeft = (newslideIndex * (-100)) + "%";
        if (newslideIndex >= slideCount) {
            slideShow.animate({"margin-left": 0 + "%"}, 800);
            return;
        }
        
        
        var napisPoprzedzajacy = $('.slider-caption').eq(newslideIndex);
        napisPoprzedzajacy.hide();
        
        slideShow.animate({"marginLeft":marginLeft}, 800, function() {
                    slideIndex = newslideIndex;
                    napisPoprzedzajacy.fadeIn('slow');
   
        
        });
        
    

}});