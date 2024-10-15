






















// 합계 금액 js 
(function($) {
    var total, initialValue;
    var sum, options;
    var inc;
    
    // updates total value
    var updateTotal = function(evt, cb) {
      inc = (this.checked ? 1 : -1);
      total += this.value * inc;
      
      // animation is only a test
      // you should do ok with:
      // sum.text(total);
      sum.animate({top: 12 * inc + "px"},{
        duration:150,
        easing: "linear",
        complete: function() {
          sum.css({"top": 12 * (inc * -1) + "px"}).animate({top:"0px"}, 100, "linear").text("$" + total);
          if(cb) { cb(); }
        }
      });
    };
    
    var initTotal = function() {
      
      var ind = 0;
      var selected;
      var opt, fn;
      
      total = initialValue; 
      selected = options.filter(":checked");
      
      (fn = function() {
        if( (opt = selected[ind++]) ) {
          updateTotal.apply(opt, [null, fn]);
        }
      })();
    }
    
    // Called when dom is ready
    $(function() {
      options = $('fieldset input[type=checkbox]');
      sum = $('#sum strong');
      initialValue = parseInt($("fieldset>input[name=initialValue]").val(), 10);
      
      options.on('click', updateTotal);
      initTotal();
      
    });
    
  })(jQuery);