/*
jQWidgets v2.7.0 (2013-Feb-08)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxExpander","",{});a.extend(a.jqx._jqxExpander.prototype,{defineInstance:function(){this.width="auto";this.height="auto";this.expanded=true;this.expandAnimationDuration=259;this.collapseAnimationDuration=250;this.animationType="slide";this.toggleMode="click";this.showArrow=true;this.arrowPosition="right";this.headerPosition="top";this.disabled=false;this.initContent;this.rtl=false;this.easing="easeInOutSine";this._eventsMap={mousedown:"touchstart",mouseup:"touchend"};this.events=["expanding","expanded","collapsing","collapsed"]},createInstance:function(b){this._isTouchDevice=a.jqx.mobile.isTouchDevice();this._cachedHTMLStructure=this.host.html();this.render()},expand:function(){if(this.disabled==false&&this.expanded==false&&this._expandChecker==1){var b=this;this._expandChecker=0;this._raiseEvent("0");this._header.removeClass(this.toThemeProperty("jqx-fill-state-normal"));this._header.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._header.addClass(this.toThemeProperty("jqx-expander-header-expanded"));if(this.headerPosition=="top"){this._arrow.removeClass(this.toThemeProperty("icon-arrow-down"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-top"));this._arrow.addClass(this.toThemeProperty("icon-arrow-up"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-expanded"))}else{if(this.headerPosition=="bottom"){this._arrow.removeClass(this.toThemeProperty("icon-arrow-up"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-bottom"));this._arrow.addClass(this.toThemeProperty("icon-arrow-down"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-expanded-top"))}}switch(this.animationType){case"slide":if(this.headerPosition=="top"){this._content.slideDown(this.expandAnimationDuration,this.easing,function(){b.expanded=true;b._header.attr("aria-expanded",true);b._content.attr("aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized==false){b.initContent();b._initialized=true}})}else{if(this.headerPosition=="bottom"){this._content.css({display:"inherit",height:0});if(this._cntntEmpty==true){this._content.animate({height:0},this.expandAnimationDuration,this.easing,function(){b.expanded=true;b._header.attr("aria-expanded",true);b._content.attr("aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized==false){b.initContent();b._initialized=true}})}else{this._content.animate({height:this._contentHeight},this.expandAnimationDuration,this.easing,function(){b.expanded=true;b._header.attr("aria-expanded",true);b._content.attr("aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized==false){b.initContent();b._initialized=true}})}}}break;case"fade":this._content.fadeIn(this.expandAnimationDuration,this.easing,function(){b.expanded=true;b._header.attr("aria-expanded",true);b._content.attr("aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized==false){b.initContent();b._initialized=true}});break;case"none":this._content.css("display","inherit");this.expanded=true;this._header.attr("aria-expanded",true);this._content.attr("aria-hidden",false);this._raiseEvent("1");if(this.initContent&&this._initialized==false){this.initContent();this._initialized=true}break}}},collapse:function(){if(this.disabled==false&&this.expanded==true&&this._expandChecker==0){var b=this;this._expandChecker=1;this._raiseEvent("2");this._header.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._header.removeClass(this.toThemeProperty("jqx-expander-header-expanded"));this._header.addClass(this.toThemeProperty("jqx-fill-state-normal"));if(this.headerPosition=="top"){this._arrow.removeClass(this.toThemeProperty("icon-arrow-up"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-bottom"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-expanded"));this._arrow.addClass(this.toThemeProperty("icon-arrow-down"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top"))}else{if(this.headerPosition=="bottom"){this._arrow.removeClass(this.toThemeProperty("icon-arrow-down"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-top"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-expanded-top"));this._arrow.addClass(this.toThemeProperty("icon-arrow-up"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom"))}}switch(this.animationType){case"slide":if(this.headerPosition=="top"){this._content.slideUp(this.collapseAnimationDuration,this.easing,function(){b.expanded=false;b._header.attr("aria-expanded",false);b._content.attr("aria-hidden",true);b._raiseEvent("3")})}else{if(this.headerPosition=="bottom"){this._content.animate({height:0},this.expandAnimationDuration,function(){b._content.css("display","none");b.expanded=false;b._header.attr("aria-expanded",false);b._content.attr("aria-hidden",true);b._raiseEvent("3")})}}break;case"fade":this._content.fadeOut(this.collapseAnimationDuration,this.easing,function(){b.expanded=false;b._header.attr("aria-expanded",false);b._content.attr("aria-hidden",true);b._raiseEvent("3")});break;case"none":this._content.css("display","none");this.expanded=false;b._header.attr("aria-expanded",false);b._content.attr("aria-hidden",true);this._raiseEvent("3");break}}},setHeaderContent:function(b){this._header_text.html(b)},getHeaderContent:function(){return this._header_text.html()},setContent:function(b){this._content.html(b);this._checkContent()},getContent:function(){return this._content.html()},enable:function(){this.disabled=false;this.refresh()},disable:function(){this.disabled=true;this.refresh()},invalidate:function(){this.refresh()},refresh:function(b){if(b==true){return}this._removeHandlers();if(this.showArrow==true){this._arrow.css("display","inherit")}else{this._arrow.css("display","none")}this._setTheme();this._setSize();if(this.disabled==false){this._toggle()}this._keyBoard()},render:function(){this.widgetID=this.element.id;if(this._header){this._header.removeClass();this._header.attr("tabindex",null);this._content.attr("tabindex",null);this._header[0].className="";this._header_text.removeClass();this._header_text[0].className="";this._header.css("margin-top",0);this._header[0].innerHTML=this._header_text[0].innerHTML}if(this.headerPosition=="top"){this._header_temp=this.host.children("div:eq(0)")}else{if(this.headerPosition=="bottom"){this._header_temp=this.host.children("div:eq(1)")}}this._header_temp.wrap("<div></div>");if(this.headerPosition=="top"){this._header=this.host.children("div:eq(0)");this._content=this.host.children("div:eq(1)")}else{if(this.headerPosition=="bottom"){this._header=this.host.children("div:eq(1)");this._content=this.host.children("div:eq(0)")}}this._header_text=this._header.children("div:eq(0)");if(!this.rtl){this._header_text.addClass(this.toThemeProperty("jqx-expander-header-content"))}else{this._header_text.addClass(this.toThemeProperty("jqx-expander-header-content-rtl"))}this._header.append("<div></div>");this._arrow=this._header.children("div:eq(1)");if(this.showArrow==true){this._arrow.css("display","inherit")}else{this._arrow.css("display","none")}this.tI=-1;if(this._header.attr("tabindex")==undefined){this.tI++;this._header.attr("tabindex",this.tI)}if(this._content.attr("tabindex")==undefined){this.tI++;this._content.attr("tabindex",this.tI)}this._setTheme();this._checkContent();var b="Invalid jqxExpander structure. Please add only two child div elements to your jqxExpander div that will represent the expander's header and content.";try{if(this._header.length==0||this._content.length==0||this.host.children().length<2||this.host.children().length>2){throw b}}catch(c){alert(c)}this._expandChecker;this._initialized;if(this.expanded==true){if(this.headerPosition=="top"){this._arrow.addClass(this.toThemeProperty("icon-arrow-up"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-expanded"))}else{if(this.headerPosition=="bottom"){this._arrow.addClass(this.toThemeProperty("icon-arrow-down"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-expanded-top"))}}if(this.initContent){this.initContent()}this._initialized=true;this._expandChecker=0}else{if(this.expanded==false){if(this.headerPosition=="top"){this._arrow.addClass(this.toThemeProperty("icon-arrow-down"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top"))}else{if(this.headerPosition=="bottom"){this._arrow.addClass(this.toThemeProperty("icon-arrow-up"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom"))}}this._initialized=false;this._expandChecker=1;this._content.css("display","none")}}this._setSize();if(this.disabled==false){this._toggle()}this._keyBoard()},destroy:function(){this.host.remove();a(this.element).removeData("jqxExpander")},focus:function(){try{if(this.disabled==false){this._header.focus()}}catch(b){}},propertyChangedHandler:function(b,c,e,d){if(c=="expanded"){if(d==true&&e==false){this.expanded=false;this.expand()}else{if(d==false&&e==true){this.expanded=true;this.collapse()}}}else{this.refresh()}},_raiseEvent:function(g,e){var c=this.events[g];var f=new jQuery.Event(c);f.owner=this;f.args=e;try{var b=this.host.trigger(f)}catch(d){}return b},_setSize:function(){this._contentHeight;this.host.width(this.width);this.host.height(this.height);this._header.width(this.width);var c=parseInt(this._header_text.css("padding-left"));if(this.rtl){var c=parseInt(this._header_text.css("padding-right"))}if(isNaN(c)){c=0}if(this.showArrow==true&&this.width!="auto"){this._header_text.width(this._header.width()-this._arrow.width()-c)}else{this._header_text.width("auto")}this._content.width(this._header.width());this._header.height("auto");this._header.css("min-height",this._arrow.height());if(this.height=="auto"){this._contentHeight=this._content.height()}else{this._content.css("overflow","auto");this._content.height(this.host.height()-this._header.height());this._contentHeight=this._content.height()}this._arrow.css("margin-top",this._header_text.height()/2-this._arrow.height()/2);var b=this.arrowPosition;if(this.rtl){switch(b){case"left":b="right";break;case"right":b="left";break}}if(b=="right"){this._header_text.css({"float":"left","margin-left":"0px"});this._arrow.css({"float":"right",position:"relative"})}else{if(b=="left"){if(this.width=="auto"){this._header_text.css({"float":"left","margin-left":"17px"});this._arrow.css({"float":"left",position:"absolute"})}else{this._header_text.css({"float":"right","margin-left":"0px"});this._arrow.css({"float":"left",position:"relative"})}}}},_toggle:function(){var b=this;if(this._isTouchDevice==false){switch(this.toggleMode){case"click":this.addHandler(this._header,"click.expander"+this.widgetID,function(){b._animate()});break;case"dblclick":this.addHandler(this._header,"dblclick.expander"+this.widgetID,function(){b._animate()});break;case"none":break}}else{if(this.toggleMode!="none"){this.addHandler(this._header,"touchstart.expander"+this.widgetID,function(){b._animate()})}else{return}}},_animate:function(){if(this.expanded==true){this.collapse();this._header.addClass(this.toThemeProperty("jqx-fill-state-hover"));this._header.addClass(this.toThemeProperty("jqx-expander-header-hover"));if(this.headerPosition=="top"){this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top-hover"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-down-hover"))}else{if(this.headerPosition=="bottom"){this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom-hover"));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-up-hover"))}}}else{this.expand();this._header.removeClass(this.toThemeProperty("jqx-fill-state-hover"));this._header.removeClass(this.toThemeProperty("jqx-expander-header-hover"));if(this.headerPosition=="top"){this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-top-hover"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-down-hover"))}else{if(this.headerPosition=="bottom"){this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-bottom-hover"));this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-up-hover"))}}}},_removeHandlers:function(){this.removeHandler(this._header,"click.expander"+this.widgetID);this.removeHandler(this._header,"dblclick.expander"+this.widgetID);this.removeHandler(this._header,"mouseenter.expander"+this.widgetID);this.removeHandler(this._header,"mouseleave.expander"+this.widgetID)},_setTheme:function(){var b=this;this.host.addClass(this.toThemeProperty("jqx-widget"));this._header.addClass(this.toThemeProperty("jqx-widget-header"));this._content.addClass(this.toThemeProperty("jqx-widget-content"));if(this.rtl==true){this.host.addClass(this.toThemeProperty("jqx-rtl"))}if(this.disabled==false){this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));if(this.expanded==true){this._header.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._header.addClass(this.toThemeProperty("jqx-expander-header-expanded"))}else{this._header.addClass(this.toThemeProperty("jqx-fill-state-normal"));this._header.removeClass(this.toThemeProperty("jqx-expander-header-expanded"))}this.addHandler(this._header,"mouseenter.expander"+this.widgetID,function(){if(b._expandChecker==1){b._header.removeClass(b.toThemeProperty("jqx-fill-state-normal"));b._header.removeClass(b.toThemeProperty("jqx-fill-state-pressed"));b._header.addClass(b.toThemeProperty("jqx-fill-state-hover"));b._header.addClass(b.toThemeProperty("jqx-expander-header-hover"));if(b.headerPosition=="top"){b._arrow.addClass(b.toThemeProperty("jqx-expander-arrow-top-hover"));b._arrow.addClass(b.toThemeProperty("jqx-expander-arrow-down-hover"))}else{if(b.headerPosition=="bottom"){b._arrow.addClass(b.toThemeProperty("jqx-expander-arrow-bottom-hover"));b._arrow.addClass(b.toThemeProperty("jqx-expander-arrow-up-hover"))}}}});this.addHandler(this._header,"mouseleave.expander"+this.widgetID,function(){b._header.removeClass(b.toThemeProperty("jqx-fill-state-hover"));b._header.removeClass(b.toThemeProperty("jqx-expander-header-hover"));if(b.headerPosition=="top"){b._arrow.removeClass(b.toThemeProperty("jqx-expander-arrow-top-hover"));b._arrow.removeClass(b.toThemeProperty("jqx-expander-arrow-down-hover"))}else{if(b.headerPosition=="bottom"){b._arrow.removeClass(b.toThemeProperty("jqx-expander-arrow-bottom-hover"));b._arrow.removeClass(b.toThemeProperty("jqx-expander-arrow-up-hover"))}}if(b._expandChecker==1){b._header.addClass(b.toThemeProperty("jqx-fill-state-normal"))}else{b._header.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}})}else{this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))}this.host.addClass(this.toThemeProperty("jqx-expander"));this._header.addClass(this.toThemeProperty("jqx-expander-header"));this._content.addClass(this.toThemeProperty("jqx-expander-content"));if(this.headerPosition=="top"){this._content.addClass(this.toThemeProperty("jqx-expander-content-bottom"))}else{if(this.headerPosition=="bottom"){this._content.addClass(this.toThemeProperty("jqx-expander-content-top"))}}this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow"))},_checkContent:function(){this._cntntEmpty=/^\s*$/.test(this._content.html());if(this._cntntEmpty==true){this._content.height(0);this._content.addClass(this.toThemeProperty("jqx-expander-content-empty"))}else{this._content.height(this._contentHeight);this._content.removeClass(this.toThemeProperty("jqx-expander-content-empty"))}},_keyBoard:function(){var b=this;this._focus();this.addHandler(this.host,"keydown.expander"+this.widgetID,function(c){var d=false;if((b.focusedH==true||b.focusedC==true)&&b.disabled==false){switch(c.keyCode){case 13:case 32:if(b.toggleMode!="none"){if(b.focusedH==true){b._animate()}d=true}break;case 38:if(c.ctrlKey==true&&b.focusedC==true){b._header.focus()}d=true;break;case 40:if(c.ctrlKey==true&&b.focusedH==true){b._content.focus()}d=true;break}return false}if(d&&c.preventDefault){c.preventDefault()}return !d})},_focus:function(){var b=this;this.addHandler(this._header,"focus.expander"+this.widgetID,function(){b.focusedH=true;b._header.attr("aria-selected",true);b._header.addClass(b.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this._header,"blur.expander"+this.widgetID,function(){b.focusedH=false;b._header.attr("aria-selected",false);b._header.removeClass(b.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this._header_text,"focus.expander"+this.widgetID,function(){b._header.focus()});this.addHandler(this._arrow,"focus.expander"+this.widgetID,function(){b._header.focus()});this.addHandler(this._content,"focus.expander"+this.widgetID,function(){b.focusedC=true;b._content.addClass(b.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this._content,"blur.expander"+this.widgetID,function(){b.focusedC=false;b._content.removeClass(b.toThemeProperty("jqx-fill-state-focus"))})}})})(jQuery);