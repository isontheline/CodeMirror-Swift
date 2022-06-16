'use strict';(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],k):k(CodeMirror)})(function(k){function v(a,c,b){var f=a.getLineHandle(c.line),d=c.ch-1,g=b&&b.afterCursor;null==g&&(g=/(^| )cm-fat-cursor($| )/.test(a.getWrapperElement().className));var h=b&&b.bracketRegex||/[(){}[\]]/;f=!g&&0<=d&&h.test(f.text.charAt(d))&&t[f.text.charAt(d)]||h.test(f.text.charAt(d+1))&&t[f.text.charAt(++d)];
if(!f)return null;g=">"==f.charAt(1)?1:-1;if(b&&b.strict&&0<g!=(d==c.ch))return null;h=a.getTokenTypeAt(p(c.line,d+1));a=w(a,p(c.line,d+(0<g?1:0)),g,h,b);return null==a?null:{from:p(c.line,d),to:a&&a.pos,match:a&&a.ch==f.charAt(0),forward:0<g}}function w(a,c,b,f,d){var g=d&&d.maxScanLineLength||1E4,h=d&&d.maxScanLines||1E3,m=[];d=d&&d.bracketRegex||/[(){}[\]]/;h=0<b?Math.min(c.line+h,a.lastLine()+1):Math.max(a.firstLine()-1,c.line-h);for(var e=c.line;e!=h;e+=b){var n=a.getLine(e);if(n){var l=0<b?
0:n.length-1,z=0<b?n.length:-1;if(!(n.length>g))for(e==c.line&&(l=c.ch-(0>b?1:0));l!=z;l+=b){var q=n.charAt(l);if(d.test(q)&&(void 0===f||(a.getTokenTypeAt(p(e,l+1))||"")==(f||""))){var x=t[q];if(x&&">"==x.charAt(1)==0<b)m.push(q);else if(m.length)m.pop();else return{pos:p(e,l),ch:q}}}}}return e-b==(0<b?a.lastLine():a.firstLine())?!1:null}function y(a,c,b){for(var f=a.state.matchBrackets.maxHighlightLineLength||1E3,d=b&&b.highlightNonMatching,g=[],h=a.listSelections(),m=0;m<h.length;m++){var e=h[m].empty()&&
v(a,h[m].head,b);if(e&&(e.match||!1!==d)&&a.getLine(e.from.line).length<=f){var n=e.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";g.push(a.markText(e.from,p(e.from.line,e.from.ch+1),{className:n}));e.to&&a.getLine(e.to.line).length<=f&&g.push(a.markText(e.to,p(e.to.line,e.to.ch+1),{className:n}))}}if(g.length)if(A&&a.state.focused&&a.focus(),b=function(){a.operation(function(){for(var l=0;l<g.length;l++)g[l].clear()})},c)setTimeout(b,800);else return b}function r(a){a.operation(function(){a.state.matchBrackets.currentlyHighlighted&&
(a.state.matchBrackets.currentlyHighlighted(),a.state.matchBrackets.currentlyHighlighted=null);a.state.matchBrackets.currentlyHighlighted=y(a,!1,a.state.matchBrackets)})}function u(a){a.state.matchBrackets&&a.state.matchBrackets.currentlyHighlighted&&(a.state.matchBrackets.currentlyHighlighted(),a.state.matchBrackets.currentlyHighlighted=null)}var A=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||8>document.documentMode),p=k.Pos,t={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<",
"<":">>",">":"<<"};k.defineOption("matchBrackets",!1,function(a,c,b){b&&b!=k.Init&&(a.off("cursorActivity",r),a.off("focus",r),a.off("blur",u),u(a));c&&(a.state.matchBrackets="object"==typeof c?c:{},a.on("cursorActivity",r),a.on("focus",r),a.on("blur",u))});k.defineExtension("matchBrackets",function(){y(this,!0)});k.defineExtension("findMatchingBracket",function(a,c,b){if(b||"boolean"==typeof c)b?(b.strict=c,c=b):c=c?{strict:!0}:null;return v(this,a,c)});k.defineExtension("scanForBracket",function(a,
c,b,f){return w(this,a,c,b,f)})});
