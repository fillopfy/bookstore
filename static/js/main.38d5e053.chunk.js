(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(26),r=a.n(l),c=(a(35),a(13)),s=a.n(c),u=a(27),m=a(29),i=a(12),f=a.n(i),b=(a(54),a(10),a(55),function(e){var t=e.fetchData;return o.a.createElement("header",null,o.a.createElement("h1",{className:"font-header"},"Open Book Library"),o.a.createElement("h2",null,"Fetch a list of books and display it"),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-success btn-lg mb-4",onClick:t},"Fetch Books")))}),d=(a(56),a(7)),v=function(e){var t=e.book,a=(t.volumeInfo.publishedDate.toString(),t.volumeInfo.authors?t.volumeInfo.authors.join(", "):""),n=t.volumeInfo.imageLinks.thumbnail,l=t.volumeInfo.title.length>20?t.volumeInfo.title.substring(0,20)+"...":t.volumeInfo.title,r=t.volumeInfo.subtitle?t.volumeInfo.subtitle.length>30?t.volumeInfo.subtitle.substring(0,30)+"...":t.volumeInfo.subtitle:"Not Available";return o.a.createElement("div",{className:"card border-dark try"},o.a.createElement("div",{className:"card-header font-header"},o.a.createElement("h3",null,l)),o.a.createElement("img",{src:n,class:"img",alt:"thumbnail"}),o.a.createElement("div",{className:"card-body text-dark d-flex flex-column"},o.a.createElement("p",{className:"card-text font"},o.a.createElement("strong",null,"Author:"),"  ",a),o.a.createElement("p",{className:"card-text font"},o.a.createElement("strong",null,"Title:"),"  ",l),o.a.createElement("p",{className:"card-text font"},o.a.createElement("strong",null,"Subtitle:"),"  ",r),o.a.createElement(d.b,{className:"btn btn-primary mt-auto",to:"/bookinfo/".concat(t.id),target:"_blank"},o.a.createElement("button",{className:"btn btn-primary  mt-auto"},"See More"))))},E=(a(62),function(e){var t=e.books;return o.a.createElement("div",{className:"d-flex flex-wrap"},t&&t.map((function(e){return o.a.createElement(v,{key:e.id,book:e})})))});var h=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],r=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a");case 2:t=e.sent,l(t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"App"},o.a.createElement(b,{fetchData:r}),o.a.createElement(E,{books:a}))};r.a.render(o.a.createElement(d.a,null,o.a.createElement(h,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.38d5e053.chunk.js.map