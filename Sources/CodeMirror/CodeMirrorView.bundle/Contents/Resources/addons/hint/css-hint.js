'use strict';(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror"),require("../../mode/css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/css/css"],b):b(CodeMirror)})(function(b){var n={active:1,after:1,before:1,checked:1,"default":1,disabled:1,empty:1,enabled:1,"first-child":1,"first-letter":1,"first-line":1,"first-of-type":1,focus:1,hover:1,"in-range":1,indeterminate:1,invalid:1,lang:1,"last-child":1,"last-of-type":1,
link:1,not:1,"nth-child":1,"nth-last-child":1,"nth-last-of-type":1,"nth-of-type":1,"only-of-type":1,"only-child":1,optional:1,"out-of-range":1,placeholder:1,"read-only":1,"read-write":1,required:1,root:1,selection:1,target:1,valid:1,visited:1};b.registerHelper("hint","css",function(d){function f(p){for(var m in p)h&&0!=m.lastIndexOf(h,0)||k.push(m)}var e=d.getCursor(),c=d.getTokenAt(e),a=b.innerMode(d.getMode(),c.state);if("css"==a.mode.name){if("keyword"==c.type&&0=="!important".indexOf(c.string))return{list:["!important"],
from:b.Pos(e.line,c.start),to:b.Pos(e.line,c.end)};d=c.start;var l=e.ch,h=c.string.slice(0,l-d);/[^\w$_-]/.test(h)&&(h="",d=l=e.ch);var g=b.resolveMode("text/css"),k=[];a=a.state.state;if("pseudo"==a||"variable-3"==c.type)f(n);else if("block"==a||"maybeprop"==a)f(g.propertyKeywords);else if("prop"==a||"parens"==a||"at"==a||"params"==a)f(g.valueKeywords),f(g.colorKeywords);else if("media"==a||"media_parens"==a)f(g.mediaTypes),f(g.mediaFeatures);if(k.length)return{list:k,from:b.Pos(e.line,d),to:b.Pos(e.line,
l)}}})});
