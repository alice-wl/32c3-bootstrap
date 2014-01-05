
+function ($) { "use strict";
  var Organic = function( element, options ) {
    this.$element   = null
    this.init('organic', element, options)
  }
  Organic.prototype.init = function (type, element, options) {
    this.$element = $(element)
  }

  $.fn.organic = function (option) {
    var $this   = $(this)
    var vpx, vpy;

    var ua = navigator.userAgent.toLowerCase();
    if( ua.indexOf("android 2.3") > -1 ) {
      return false;
    }

    var resizeViewport = function(){
      var screen_height = window.innerHeight;
      if( vpy !== screen_height ){
	vpy = screen_height;
	$this
	  .css( 'overflow-y', 'scroll' )
	  .css( 'height', screen_height-81 ); }
    };            
    setInterval(resizeViewport, 300);
  }

  $.fn.organic.Constructor = Organic
  $(window).on('load', function () {
    $('#main-table').organic( );    
  })
}(jQuery);
