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
2. Include the needed HTML:

        <label>Start:</label><input type="text" id="StartAddress" value="Seattle" />
        <label>End:</label><input type="text" id="EndAddress" value="Portland" />
        <input type="submit" id="GetDirections" value="Get Directions" />
        <div id="Directions"></div>
        <div id="Map"></div>

3. Include the needed js files:

        <!-- Include jQuery. Tested with jQuery >= 1.9.1: http://paulirish.com/2010/the-protocol-relative-url/-->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>    
    
        <!-- non google fallback -->
        <script>!window.jQuery && document.write(unescape('%3Cscript src="jquery.min.js"%3E%3C/script%3E'))</script>  
        
        <!-- Google Maps API library (Make sure to replace YOUR_API_KEY_HERE) -->
        <script type="text/javascript" src="http://maps.google.com/maps?file=api&v=2&sensor=true&key=YOUR_API_KEY_HERE"></script>

        <!-- Load the gmapDirections wrapper -->
        <script type="text/javascript" src="jquery.gmapDirections.js?BUILD_VERSION_NUMBER"></script>

        <!-- call the plugin -->
        <script type="text/javascript">
            $(function(){
                $('#Map').gmapDirections();
            })
        </script>

4. You can override the element IDs for all the needed parts in the config object passed to the plugin. Here it is called with all the defaults:

        <script type="text/javascript">
            $(function(){
                $('#Map').gmapDirections({
                    center: 'Seattle',             // a valid address or location search to start with
                    directions: 'Directions',      // element ID to hold directions printout
                    end: 'EndAddress',             // element ID for end address textfield
                    iconHeight: 50,                // height of custom icon image
                    iconImg: false,                // custom icon image?
                    iconWidth: 50,                 // width of custom icon image
                    onFail: function(){            // failed loading center element
                        // this should be something better than an alert (something useful), but for demo purposes:
                        alert('could not find address');
                    },    
                    onFinish: function(){          // after direction load
                    },
                    start: 'StartAddress',         // element ID for start address textfield
                    submit: 'GetDirections',       // element ID for the action button
                    tooltip: false,                // custom tooltip?
                    zoom: 15                       // zoom level - refer to google maps API specs
                });
            })
        </script>


#Demos:#

The repository holds a demo in index.html, which is published on the github project page:
[Demo](http://atomantic.github.com/jquery.gmapDirections)