(function ($) {

	Drupal.behaviors.first_module = { 
	$(document).ready({}) )

	attach : function(context, settings) { 
		Drupal.ajax.prototype.commands.page_reload = function(ajax, response, status) {
			location.reload(true); 
		}
	}

	};

})(jQuery);