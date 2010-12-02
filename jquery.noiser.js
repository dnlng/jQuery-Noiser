(function($) {
	$.fn.noiser = function(options) {
		var opts = $.extend({
			contrast: 120,
			opacity: 0.1,
			red: 0,
			green: 0,
			blue: 0,
			size: 60
		}, options);
				
		var canvas = $('<canvas width="' + opts.size + '" height="' + opts.size + '">')[0];
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			for ( x = 0; x < canvas.width; x++ ) {
				for ( y = 0; y < canvas.height; y++ ) {
					var number = Math.floor( Math.random() * opts.contrast );
					var color_r = number + opts.red;
					if (color_r > 255) {color_r = 255};
					var color_g = number + opts.green;
					if (color_g > 255) {color_g = 255};
					var color_b = number + opts.blue;
					if (color_b > 255) {color_b = 255};

					ctx.fillStyle = 'rgba(' + color_r + ',' + color_g + ',' + color_b + ',' + opts.opacity + ')';
					ctx.fillRect(x, y, 1, 1);
				}
			}
			$(this).css({'background-image': 'url(' + canvas.toDataURL('image/png') + ')'});			
		}
	};
})(jQuery);