(function($) {
	
	// a11y - only display outlines for tabbing
	var lastKey = new Date(),
        lastClick = new Date();
        $(document).on( "focusin", function(e){
        	$(".keyboard-outline").removeClass("keyboard-outline");
        	var wasByKeyboard = lastClick < lastKey;
        	if( wasByKeyboard ) {
            		$( e.target ).addClass( "keyboard-outline");
        	}
    	});
    	$(document).on( "click", function(){
        	lastClick = new Date();
    	});
    	$(document).on( "keydown", function() {
        	lastKey = new Date();
    	});
    	
	// all Javascript code goes here...

})(jQuery);
