(this["webpackJsonptidbo-app"]=this["webpackJsonptidbo-app"]||[]).push([[0],[,,,,,,,function(e,n,t){},,,function(e,n,t){e.exports=t.p+"static/media/tm_back.8d8c7db7.svg"},function(e,n,t){e.exports=t.p+"static/media/tidbo_logo_color.f1409621.svg"},function(e,n,t){e.exports=t.p+"static/media/tm_ham_menu.86595150.svg"},function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(9),c=t.n(i),l=t(2),s=t(3),r=t(5),d=t(4),u=t(1),m=t(6),v=t(10),h=t.n(v),p=t(11),k=t.n(p),b=t(12),C=t.n(b),g=(t(7),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={},t.onClickBack=t.onClickBack.bind(Object(u.a)(t)),t.onClickLogout=t.onClickLogout.bind(Object(u.a)(t)),t.onClickMenu=t.onClickMenu.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"onClickBack",value:function(e){console.log("onBack"),console.log("click"),e.preventDefault(),e.stopPropagation()}},{key:"onClickLogout",value:function(e){console.log("onLogout"),console.log("click"),e.preventDefault(),e.stopPropagation()}},{key:"onClickMenu",value:function(e){console.log("onMenu"),console.log("click"),e.preventDefault(),e.stopPropagation(),document.getElementById("mySidenavBackground").classList.add("backgroundDimVisibility"),document.getElementById("mySidenav").classList.remove("sidenavHideMenu"),document.getElementById("mySidenav").classList.add("sidenavDisplayMenu"),document.body.classList.add("bodyNoScroll")}},{key:"render",value:function(){return a.a.createElement("header",{id:"myHeader",className:"headerContainerOuter"},a.a.createElement("div",{className:"headerContainer"},a.a.createElement("div",{className:"headerBack"},a.a.createElement("img",{src:h.a,width:"25px",alt:"",onClick:this.onClickBack,onTouchStart:this.onClickBack})),a.a.createElement("div",{className:"headerLogo"},a.a.createElement("img",{src:k.a,height:"35px",alt:"",onClick:this.onClickBack,onTouchStart:this.onClickBack})),a.a.createElement("div",{className:"headerTitle"}),a.a.createElement("div",{className:"headerLogout",onClick:this.onClickLogout,onTouchStart:this.onClickLogout},"Log Out"),a.a.createElement("div",{className:"headerMenu"},a.a.createElement("img",{src:C.a,width:"30px",alt:"",onClick:this.onClickMenu,onTouchStart:this.onClickMenu}))))}}]),n}(a.a.Component)),T=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).onClick=t.onClick.bind(Object(u.a)(t)),t.onTouchStart=t.onTouchStart.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"onClick",value:function(e,n){console.log("onClick: event"+e),n.preventDefault(),n.stopPropagation()}},{key:"onTouchStart",value:function(e){console.log("onTouchStart: event"),e.preventDefault(),e.stopPropagation()}},{key:"addMenuRow",value:function(e){var n=this;return console.log(e),e.map((function(e,t){return a.a.createElement("li",{key:t,onClick:n.onClick.bind(n,t)},0===t?a.a.createElement("div",{className:"hlMenuPadding"}):null,e.name,e.divVL?a.a.createElement("div",{className:"vlMenu"}):a.a.createElement("div",{className:"vlMenuPadding"}),e.divHL?a.a.createElement("div",{className:"hlMenu"}):a.a.createElement("div",{className:"hlMenuPadding"}))}))}},{key:"render",value:function(){return a.a.createElement("ul",{className:"navmenu"},this.addMenuRow(this.props.menuitems))}}]),n}(a.a.Component),E=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={},t.menuOpen=!1,t.onTouchMove=t.onTouchMove.bind(Object(u.a)(t)),t.closeNav=t.closeNav.bind(Object(u.a)(t)),t.openNav=t.openNav.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"onTouchMove",value:function(e){console.log("onTouchMove: onTouchMove event"),document.body.scrollTop=0}},{key:"closeNav",value:function(e){console.log("closeNav: onClick event"),e.preventDefault(),e.stopPropagation(),this.menuOpen=!1,document.getElementById("mySidenavBackground").classList.remove("backgroundDimVisibility"),document.getElementById("mySidenav").classList.remove("sidenavDisplayMenu"),document.getElementById("mySidenav").classList.add("sidenavHideMenu"),document.body.classList.remove("bodyNoScroll")}},{key:"openNav",value:function(e){console.log("openNav: onClick event"),e.preventDefault(),e.stopPropagation(),this.menuOpen=!0,document.getElementById("mySidenavBackground").classList.add("backgroundDimVisibility"),document.getElementById("mySidenav").classList.remove("sidenavHideMenu"),document.getElementById("mySidenav").classList.add("sidenavDisplayMenu"),document.body.classList.add("bodyNoScroll")}},{key:"render",value:function(){return a.a.createElement("nav",{name:"navPage1Home",className:"navFixedHeader"},a.a.createElement("div",{id:"mySidenavBackground",className:"backgroundDim",onClick:this.closeNav,onTouchStart:this.closeNav}),a.a.createElement("div",{id:"mySidenav",className:"sidenav"},a.a.createElement("div",{className:"navmenu"},a.a.createElement("div",{className:"navitemheader",onTouchMove:this.onTouchMove},a.a.createElement(T,{menuitems:[{name:"Account1",onClick:"",onTouchStart:"",divVL:!0,divHL:!1},{name:"Account2",onClick:"",onTouchStart:"",divVL:!1,divHL:!1},{name:"Account3",onClick:"",onTouchStart:"",divVL:!1,divHL:!0},{name:"Account4",onClick:"",onTouchStart:"",divVL:!0,divHL:!0},{name:"Account5",onClick:"",onTouchStart:"",divVL:!0,divHL:!0},{name:"Account6",onClick:"",onTouchStart:"",divVL:!0,divHL:!0}]})))))}}]),n}(a.a.Component),f=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={},t.onClick=t.onClick.bind(Object(u.a)(t)),t.onTouchEnd=t.onTouchEnd.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"onClick",value:function(e){console.log("onClick: Terms and Conditions"),e.preventDefault(),e.stopPropagation()}},{key:"onTouchEnd",value:function(e){console.log("onTouchEnd: Terms and Conditions"),e.preventDefault(),e.stopPropagation()}},{key:"render",value:function(){return this.props.rows.map((function(e,n){return a.a.createElement("div",{className:"sectionContainerRowLabelValue",key:n},a.a.createElement("div",{className:"sectionContainerRowLabel"},e.name,":"),a.a.createElement("div",{className:"sectionContainerRowValue"},e.value))}))}}]),n}(a.a.Component),y=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={rows:[{row:[{name:"Name",value:"Andrew Keen"},{name:"Comment",value:"This is a test row"}]},{row:[{name:"Name",value:"Another Keen"},{name:"Comment",value:"This is another test row"}]},{row:[{name:"Name",value:"Another Keen"},{name:"Comment",value:"This is another test row"}]},{row:[{name:"Name",value:"Another Keen"},{name:"Comment",value:"This is another test row"}]},{row:[{name:"Name",value:"Another Keen"},{name:"Comment",value:"This is another test row"}]},{row:[{name:"Name",value:"Another Keen"},{name:"Comment",value:"This is another test row"}]}]},t.onClick=t.onClick.bind(Object(u.a)(t)),t.onTouchEnd=t.onTouchEnd.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"onClick",value:function(e){console.log("onClick: Terms and Conditions"),e.preventDefault(),e.stopPropagation(),window.open("http://tidbo.dhp11.com/termsandconditions.html","TIDBO - Terms and Conditions")}},{key:"onTouchEnd",value:function(e){console.log("onTouchEnd: Terms and Conditions"),e.preventDefault(),e.stopPropagation(),window.open("http://tidbo.dhp11.com/termsandconditions.html","TIDBO - Terms and Conditions")}},{key:"addSectionContainerRowLabelValue",value:function(e){return this.state.rows[e].row.map((function(e,n){return a.a.createElement("div",{className:"sectionContainerRowLabelValue",key:n},a.a.createElement("div",{className:"sectionContainerRowLabel"},e.name,":"),a.a.createElement("div",{className:"sectionContainerRowValue"},e.value))}))}},{key:"render",value:function(){var e=this;return this.state.rows.map((function(n,t){return a.a.createElement("div",{className:"sectionContainerRow mySitesContainerRow",key:t},a.a.createElement("div",{className:"sectionContainerRowLabelValueHolder"},a.a.createElement(f,{rows:e.state.rows[t].row})))}))}}]),n}(a.a.Component),O=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={},t.onClick=t.onClick.bind(Object(u.a)(t)),t.onTouchEnd=t.onTouchEnd.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"onClick",value:function(e){console.log("onClick: Terms and Conditions"),e.preventDefault(),e.stopPropagation(),window.open("http://tidbo.dhp11.com/termsandconditions.html","TIDBO - Terms and Conditions")}},{key:"onTouchEnd",value:function(e){console.log("onTouchEnd: Terms and Conditions"),e.preventDefault(),e.stopPropagation(),window.open("http://tidbo.dhp11.com/termsandconditions.html","TIDBO - Terms and Conditions")}},{key:"render",value:function(){return a.a.createElement("div",{className:"sectionContainer sectionContainerFixedHeader",name:this.props.section.page},a.a.createElement("div",{className:"sectionContainerRow sectionContainerHeader"},this.props.section.title),a.a.createElement(y,null))}}]),n}(a.a.Component),w=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={},t.onClick=t.onClick.bind(Object(u.a)(t)),t.onTouchEnd=t.onTouchEnd.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"onClick",value:function(e){console.log("onClick: Terms and Conditions"),e.preventDefault(),e.stopPropagation(),window.open("http://tidbo.dhp11.com/termsandconditions.html","TIDBO - Terms and Conditions")}},{key:"onTouchEnd",value:function(e){console.log("onTouchEnd: Terms and Conditions"),e.preventDefault(),e.stopPropagation(),window.open("http://tidbo.dhp11.com/termsandconditions.html","TIDBO - Terms and Conditions")}},{key:"render",value:function(){return a.a.createElement("footer",{className:"footerContainer"},a.a.createElement("div",{className:"footerTermsAndConditions",onClick:this.onClick,onTouchEnd:this.onTouckEnd},"Terms and Conditions"))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement(E,null),a.a.createElement(O,{section:{page:"Page1",title:"A Title"}}),a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d0a88c2c.chunk.js.map