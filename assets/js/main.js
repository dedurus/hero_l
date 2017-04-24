(function() {
    if($(window).width() > 920){
        var small_card_height =  $('#small_card').outerHeight(true),
            news = $('#news_height').outerHeight(true);
        $('#small_card_text').height(small_card_height + 'px');
        $('#news_apply_height').height(news + 'px');
        console.dir(news);
    }else{
        $('#small_card_text').css('paddingTop', '30px auto');
      }

    // resize
    $( window ).resize(function() {
      if($(window).width() > 920){
              var small_card_height =  $('#small_card').outerHeight(true),
                  news = $('#news_height').outerHeight(true);
              $('#small_card_text').height(small_card_height + 'px');
              $('#news_apply_height').height(news + 'px');
              console.dir(news);
      }else{
        $('#small_card_text').css('paddingTop', '30px');
      }
    });


})();