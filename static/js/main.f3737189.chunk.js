(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(12),r=n.n(o),c=(n(21),n(2)),u=n.n(c),s=n(13),i=n(15),m=n(14),h=n.n(m);n(40);var E=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],o=t[1],r=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a");case 2:t=e.sent,o(t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Open Book Library"),l.a.createElement("h2",null,"Fetch a list of books and display it"),l.a.createElement("div",null,l.a.createElement("button",{className:"fetch-button",onClick:r},"Fetch Data")),l.a.createElement("div",{className:"books"},n&&n.map((function(e,t){var n=e.volumeInfo.publishedDate.toString(),a=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):"";return l.a.createElement("div",{className:"book",key:t},l.a.createElement("h3",null,"Book ",t+1),l.a.createElement("h2",null,e.volumeInfo.title),l.a.createElement("div",{className:"details"},l.a.createElement("p",null,l.a.createElement("strong",null,"Authors:"),"  ",a),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Published Date:"),"  ",n),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Title:"),"  ",e.volumeInfo.title),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Subtitle:"),"  ",e.volumeInfo.subtitle?e.volumeInfo.subtitle:"Not available"),l.a.createElement("br",null)))})))),l.a.createElement("footer",null,"Copyright \xa9 Abhishek",l.a.createElement("br",null),l.a.createElement("br",null),"This React Project is a part of Internship Work"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f3737189.chunk.js.map