mobileMenu
==========

A small jQuery plugin to change a 'ul li' list to a 'select option' list and back again on mobile devices

Why?
----

I've been putting together a new admin theme and decided it should be accessible to mobile devices, not just desktop machine. My reason for this is there have been times when I've been out and about need to change something on my site. I had a hard time doing this because of the desktop only admin theme.

After making the theme mobile friendly with media queries and liquid display I still found the menu system was just too clumsy.

I needed a jQuery plugin to change one menu type to another.


How to use it?
--------------

Upload and add 'jquery.mobilemenu.js' to the head of your page:

<script type="text/javascript" src="/jquery.mobilemenu.min.js"></script>

Use the plugin on the ul element of the menu you wish to change:

$('#block-menu-menu-admin ul.menu').mobileMenu();

There are also a few options:

smallWindow:  480             // Size for the change
activeClass:  'active-trail'  // The class to show the active link
chooseText:   'Please choose' // The text to show when there is no selected option


Let me know how it goes by commenting.

This is supplied as an 'as-is' plugin and might not work exactly as intended (but should ;). Let me know if you find any bugs.