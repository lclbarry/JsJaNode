(function($) {
  $.fn.highlight04 = function(options, callback) {
    if ($.isFunction(options)) {  // �O�_�O�^�����
      callback = options;
      options = null;
    }
    options = $.extend($.fn.highlight04.defaults, options);
    return this.each(function() {
      $(this)
      .data('original-color', $(this).css('background-color'))
      .mouseenter(function() {
        $(this).css('background-color', options.color);
      })
      .mouseleave(function() { 
        $(this).css('background-color', $(this).data('original-color'));
      });
      // �I�ssetup�^�����
      $.isFunction( options.setup ) && options.setup.call(this);
    });
  }
  $.fn.highlight04.defaults = {
    color: '#fff47f',
    setup: null  
  };
})(jQuery);