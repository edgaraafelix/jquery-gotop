/*! GoTop v0.0.1 (.)(.) by @edgaraafelix | (c) 2011, 2014 Onwi. | https://github.com/edgaraafelix/jquery-gotop | Licensed under MIT (https://github.com/edgaraafelix/jquery-gotop/blob/master/LICENSE) */

if (typeof jQuery === 'undefined') {
  throw new Error('GoTop JavaScript requires jQuery');
}

/* global window, document, jQuery */

(function ( $ ) {
  
  'use strict';
  
  var GoTop = window.GoTop || {};
  
  GoTop = (function() {
    
    function GoTop(element, settings) {
      
      var _ = this;
      
      _.defaults = {
        animation: true,
        target: 'html',
        speed: 600,
        distance: 200,
        position: 'BOTTOM_RIGHT'
      };
      
      _.options = $.extend({}, _.defaults, settings);
      
      _.$element = null;
      _.animation = _.options.animation;
      _.target = _.options.target;
      _.speed = _.options.speed;
      _.distance = _.options.distance;
      _.position = _.options.position;
      
      _.types = [
        {
          "option": 'animation', 
          "default": _.animation, 
          "type": 'boolean' 
        },
        {
          "option": 'target', 
          "default": _.target, 
          "type": 'string' 
        },
        {
          "option": 'speed', 
          "default": _.speed, 
          "type": 'number' 
        },
        {
          "option": 'distance', 
          "default": _.distance, 
          "type": 'number' 
        },
        {
          "option": 'position', 
          "default": _.position, 
          "type": 'string' 
        }
      ];

      _.init();
      
    }
    
    return GoTop;
    
  }());
  
  GoTop.prototype.buildDefaults = function() {
    var _ = this;
    for (var i = 0; i < _.types.length; i++) {
      if (typeof(_.types[i].default) !== _.types[i].type) {
        throw new Error('Yo! Type of option ' + _.types[i].option + ' is ' + _.types[i].type + '!');
      }
    };
  };
  
  GoTop.prototype.buildPosition = function() {
    var _ = this;
    switch (_.position) {
      case 'TOP_LEFT':
        _.applyCss({position: 'fixed', top: '15px', left: '15px'});
        break;
      case 'TOP_MIDDLE':
        _.applyCss({position: 'fixed', top: '15px', left: '50%'});
        break;
      case 'TOP_RIGHT':
        _.applyCss({position: 'fixed', top: '15px', right: '15px'});
        break;
      case 'BOTTOM_LEFT':
        _.applyCss({position: 'fixed', bottom: '15px', left: '15px'});
        break;
      case 'BOTTOM_MIDDLE':
        _.applyCss({position: 'fixed', bottom: '15px', left: '50%'});
        break;
      case 'BOTTOM_RIGHT':
        _.applyCss({position: 'fixed', bottom: '15px', right: '15px'});
        break;
      default:
        // BOTTOM_RIGHT
        _.applyCss({position: 'fixed', bottom: '15px', right: '15px'});
    }
  };
  
  GoTop.prototype.applyCss = function(style) {
    var _ = this;
    if (_.$element !== null) {
      $(_.$element).css(style);
    }
  };

  GoTop.prototype.applyTransition = function(transitioned, transition) {
    var _ = this;
    if (null !== _.$element) {
      if ($(_.$element).hasClass(transitioned)) {
        $(_.$element).removeClass(transitioned);
      }
      $(_.$element).addClass(transition);
    }
  };
  
  GoTop.prototype.buildOut = function() {
    var _ = this;
    if (null === _.$element) {
      if ($('.go-top').length) {
        $('.go-top').remove();
      }
      $('<div class="go-top"><div class="up"/>').appendTo('body');
      _.$element = $('.go-top');
    }
    _.buildPosition();
  };
  
  GoTop.prototype.scrollDistance = function() {
    var _ = this;
    $(window).scroll(function() {
      if ( $(window).scrollTop() > _.distance ) {
        _.transitionIn();
      } else {
        _.transitionOut();
      }
    });
  };
  
  GoTop.prototype.transitionIn = function() {
    var _ = this;
    if (true === _.animation) {
      _.applyTransition('fade-out', 'fade-in');
    } else {
      _.applyTransition('hidden', 'visible');
    }
  };
  
  GoTop.prototype.transitionOut = function() {
    var _ = this;
    if (true === _.animation) {
      _.applyTransition('fade-in', 'fade-out');
    } else {
      _.applyTransition('visible', 'hidden');
    }
  };
  
  GoTop.prototype.scrollTop = function() {
    var _ = this;
    $(_.$element).on('click', function() {
      $(_.target).animate({
        scrollTop: 0
      }, _.speed);
      return false;
    });
  };
  
  GoTop.prototype.init = function() {
      var _ = this;
      _.buildDefaults();
      _.buildOut();
      _.scrollDistance();
      _.scrollTop();
  };
  
  $.fn.goTop = function(options) {
    var _ = this;
    return _.each(function(index, element) {
      element.goTop = new GoTop(element, options);
    });
  };
  
}( jQuery ));
