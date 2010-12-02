#License#
@author Adam Eivy (antic | atomantic) 
@link [http://intellectualpirates.net](http://intellectualpirates.net)  

@license Copyright (c) 2010 Adam Eivy (antic | atomantic) Dual licensed under the MIT and GPL licenses:  
 * [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)  
 * [http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

#What it does:#

This is a simple wrapper for the Google Maps API to load a map and handle a start/end address submission for retrieving driving directions.

#Usage:#

1. Get a Google Maps API Key: [http://code.google.com/apis/maps/signup.html](http://code.google.com/apis/maps/signup.html)
2. Include the needed js files:

  <!-- Include jQuery >= 1.4.2: [http://paulirish.com/2010/the-protocol-relative-url/](http://paulirish.com/2010/the-protocol-relative-url/) -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js"></script>
  <!-- non google fallback -->
  <script>!window.jQuery && document.write(unescape('%3Cscript src="js/lib/jquery-1.4.2.js"%3E%3C/script%3E'))</script>
  <!-- Google Maps API library (Make sure to replace YOUR_API_KEY_HERE) -->
  <script type="text/javascript" src="http://maps.google.com/maps?file=api&v=2&sensor=true&key=YOUR_API_KEY_HERE"></script>
  <!-- Load the gmapDirections wrapper -->
  <script type="text/javascript" src="/js/lib/jquery.gmapDirections.js?BUILD_VERSION_NUMBER"></script>

  <!-- call the plugin -->
	<script type="text/javascript">
		$(funciton(){
			$('#Map').gmapDirections();
		})
	</script>
	
#Demos:#

The repository holds a demo in index.html, which is published on the github project page:
[Demo](http://atomantic.github.com/jquery.gmapDirections)