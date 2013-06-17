/*global GDirections,GIcon,GSize,G_DEFAULT_ICON,GMarker,GBrowserIsCompatible,GMap2,GSmallMapControl,GClientGeocoder*/
/*jslint jquery:true, browser:true */
/**
 * jquery.directions provides a google maps and jquery powered driving directions form and printout
 * 
 * @version 1.0
 * @requires jquery 1.9.1 or >
 * @usage: 
 * @author Copyright (c) 2010 Adam Eivy (antic | atomantic)
 * @license Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($, window, document, undefined) {
    /**
     * The core plugin object
     * 
     * @param dom el The main element to attach directions
     * @param obj opt Configuration option overrides
     *
     * @return obj an instance of the constructed library object
     */
    var gmapDirections = window.gmapDirections = function(el, opt) {
        var o = $.extend({},
        gmapDirections.defaults, opt || '');
        if (! (this instanceof gmapDirections)) {
            return new gmapDirections(el, o);
        }
        this.geo = null;
        this.map = null;
        this.el = el;
        this.opt = o;
        this.elDirections = $('#'+o.directions);
        this.elStart = $('#'+o.start);
        this.elEnd = $('#'+o.end);
        this.elSubmit = $('#'+o.submit);
        this.load();
        return this;
    };
    /**
     * loader
     */
    gmapDirections.prototype.load = function() {
    
        this.init();
        var opt = this.opt,
            map = this.map,
            obj = this, // store context for submit
            marker,
            markerConf = {};

        this.elSubmit.click(function(e) {
            // in case of default form handling to submit (kill it)
            e.preventDefault();
            // clear previous directions (just in case)
            obj.elDirections.html('');
            map.clearOverlays();
            (new GDirections(map, obj.elDirections.get(0))).load("from: " + obj.elStart.val() + " to: " + obj.elEnd.val());
            opt.onFinish();
        });
        if (!this.geo) {
            return this;
        }

        this.geo.getLatLng(opt.center, function(point) {
            if (!point) {
                opt.onFail();
                return false;
            }
            map.setCenter(point, opt.zoom);

            if (opt.iconImg) {
                var customicon = new GIcon(G_DEFAULT_ICON, opt.iconImg);
                customicon.iconSize = new GSize(opt.iconWidth, opt.iconHeight);
                markerConf.icon = customicon;
            }
             marker = new GMarker(point,markerConf);
            map.addOverlay(marker);

            if (opt.tooltip) {
                marker.openInfoWindowHtml(opt.tooltip);
            }
        });

        return this;
    };
    /**
     * initializer
     */
    gmapDirections.prototype.init = function() {
        if (!this.map) {
            if (GBrowserIsCompatible()) {
                this.map = new GMap2(this.el);
                this.map.addControl(new GSmallMapControl());
                this.geo = new GClientGeocoder();
            }
        }
    };
    /**
     * configuration defaults
     */
    gmapDirections.defaults = {
         center: 'Seattle',         // a valid address or location search to start with
        directions: 'Directions',   // element ID to hold directions printout
        end: 'EndAddress',          // element ID for end address textfield
        iconHeight: 50,             // height of custom icon image
        iconImg: false,             // custom icon image?
        iconWidth: 50,              // width of custom icon image
        onFail: function(){         // failed loading center element
        },    
        onFinish: function(){       // after direction load
        },
        start: 'StartAddress',      // element ID for start address textfield
        submit: 'GetDirections',    // element ID for the action button
        tooltip: false,             // custom tooltip?
        zoom: 15                    // zoom level - refer to google maps API specs
    };

    /**
     * jQuery fn
     * 
     * @param obj opt The config options
     * 
     * @return instance of gmapDirections
     */
    $.fn.gmapDirections = function(opt) {
        if (!this.length) {
            return this; // nothing to do
        }
        return this.each(function() {
            // create and cache the gmapDirections object in the data cache for the map element
            return $.data(this, 'gmapDirections') || $.data(this, 'gmapDirections', new gmapDirections(this, opt));
        });
    };
})(jQuery, window, document);