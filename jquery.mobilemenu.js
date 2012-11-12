/**
 * jQuery Mobile menu v2.1.04
 * A plugin to change a list
 * to a select menu and back
 * http://davidslack.co.uk
 *
 * Copyright 2012 Dave Slack
 */
(function($)
{  
	$.fn.mobileMenu = function(options)
	{
		var defaults =
		{
			smallWindow: 	480, 			// Size for the change
			activeClass: 	'active-trail', // The class to show the active link
			chooseText:		'Please choose' // The text to show when there is no selected
		};
		var options = $.extend(defaults, options);
		
		return this.each(function()
		{
			var smallWindow = options.smallWindow;
			var windowWidth = $(window).width(); // Width of the window
			var listElement = $(this);
	
			function changeNow()
			{			
				listElement.each(function(index, value)
				{
					// If the menu has been changed don't change it again
					if((listElement.css('display') != 'none')&&($('.clChangedMenu').length == 0))
					{
						// Setup the vars for this and the select list
						var selectedFlag = false;
						var list=$(this);						
						// Create the select list adding classes then add to the DOM
						var select=$(document.createElement('select')).addClass('clChangedMenu' + index).addClass('clChangedMenu').insertBefore($(this).hide()).change(function()
						{
							window.location.href=$(this).val(); // Onclick we go to the link
						});
						
						// All the links in the list
						$('>li a', this).each(function()
						{
							// Change the list and link to an option
							var option=$(document.createElement('option'))
							.appendTo(select)
							.val(this.href)
							.html($(this).html());
							
							// Add the selected option
							if(($(this).attr('class'))&&($(this).attr('class').indexOf(options.activeClass) != -1))
							{
								option.addClass('selected');
								option.attr("selected","selected");
								option.attr('checked','checked');
								selectedFlag = true;
							}
						});
					
						// If there is no selected flag we must add a Choose item
						if(selectedFlag == false)
						{
							$(document.createElement('option'))							
							.prependTo(select)
							.text(options.chooseText);
						}
					}
					else
					{
						// If it exists make sure it's visible	
						$('.clChangedMenu' + index).show();
						listElement.hide();
					}
					
					//list.remove(); // Removes the origional list, no good if we want to bring it back
				});
			}
			
			function changeBack()
			{
				$('.clChangedMenu').hide();
				listElement.show();
			}
			
			if(windowWidth <= smallWindow)
			{
				// Change to select list
				changeNow();
			}
			else
			{
				// Change back to list	
				changeBack();
			}
			
			// On resize
			$(window).resize(function() 
			{
				windowWidth = $(window).width(); // Width of the window
						
				if(windowWidth <= smallWindow)
				{
					// Change to select list
					changeNow();
				}
				else
				{
					// Change back to list	
					changeBack();
				}
			});
		});  
	};  
})(jQuery); 