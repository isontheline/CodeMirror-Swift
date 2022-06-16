'use strict';(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],k):k(CodeMirror)})(function(k){function m(a,e){function b(f){clearTimeout(c.doRedraw);c.doRedraw=setTimeout(function(){c.redraw()},f)}this.cm=a;this.options=e;this.buttonHeight=e.scrollButtonHeight||a.getOption("scrollButtonHeight");this.annotations=[];this.doRedraw=this.doUpdate=null;this.div=a.getWrapperElement().appendChild(document.createElement("div"));
this.div.style.cssText="position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none";this.computeScale();var c=this;a.on("refresh",this.resizeHandler=function(){clearTimeout(c.doUpdate);c.doUpdate=setTimeout(function(){c.computeScale()&&b(20)},100)});a.on("markerAdded",this.resizeHandler);a.on("markerCleared",this.resizeHandler);if(!1!==e.listenForChanges)a.on("changes",this.changeHandler=function(){b(250)})}k.defineExtension("annotateScrollbar",function(a){"string"==typeof a&&(a={className:a});
return new m(this,a)});k.defineOption("scrollButtonHeight",0);m.prototype.computeScale=function(){var a=this.cm;a=(a.getWrapperElement().clientHeight-a.display.barHeight-2*this.buttonHeight)/a.getScrollerElement().scrollHeight;if(a!=this.hScale)return this.hScale=a,!0};m.prototype.update=function(a){this.annotations=a;this.redraw()};m.prototype.redraw=function(a){function e(n,v){if(p!=n.line){p=n.line;d=b.getLineHandle(n.line);var q=b.getLineHandleVisualStart(d);q!=d&&(p=b.getLineNumber(q),d=q)}return d.widgets&&
d.widgets.length||w&&d.height>y?b.charCoords(n,"local")[v?"top":"bottom"]:b.heightAtLine(d,"local")+(v?0:d.height)}!1!==a&&this.computeScale();var b=this.cm;a=this.hScale;var c=document.createDocumentFragment(),f=this.annotations,w=b.getOption("lineWrapping"),y=w&&1.5*b.defaultTextHeight(),p=null,d=null,x=b.lastLine();if(b.display.barWidth)for(var g=0,r;g<f.length;g++){var h=f[g];if(!(h.to.line>x)){for(var t=r||e(h.from,!0)*a,l=e(h.to,!1)*a;g<f.length-1&&!(f[g+1].to.line>x);){r=e(f[g+1].from,!0)*
a;if(r>l+.9)break;h=f[++g];l=e(h.to,!1)*a}if(l!=t){l=Math.max(l-t,3);var u=c.appendChild(document.createElement("div"));u.style.cssText="position: absolute; right: 0px; width: "+Math.max(b.display.barWidth-1,2)+"px; top: "+(t+this.buttonHeight)+"px; height: "+l+"px";u.className=this.options.className;h.id&&u.setAttribute("annotation-id",h.id)}}}this.div.textContent="";this.div.appendChild(c)};m.prototype.clear=function(){this.cm.off("refresh",this.resizeHandler);this.cm.off("markerAdded",this.resizeHandler);
this.cm.off("markerCleared",this.resizeHandler);this.changeHandler&&this.cm.off("changes",this.changeHandler);this.div.parentNode.removeChild(this.div)}});
