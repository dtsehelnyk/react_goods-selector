(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),l=n.n(r),s=n(6),o=n(3),u=n(4),i=n(8),m=n(7),p=n(5),d=n.n(p),b=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),f=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selected:[]},e.clear=function(){e.setState({selected:[]})},e.toggle=function(t){var n=e.state.selected;n.includes(t)?e.setState({selected:n.filter((function(e){return e!==t}))}):e.setState({selected:[].concat(Object(s.a)(n),[t])})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selected;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected goods: ",c.a.createElement("span",null,t.join(", "))),c.a.createElement("button",{onClick:this.clear,className:"button products__button",type:"button"},"+"),c.a.createElement("ul",{className:"products__list"},b.map((function(n){return c.a.createElement("li",{key:n,className:d()("products__item",{active:t.includes(n)})},c.a.createElement("span",null,n),c.a.createElement("button",{onClick:function(){return e.toggle(n)},className:"button products__item-button",type:"button"},"+"))}))))}}]),n}(c.a.Component);l.a.render(c.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2901536f.chunk.js.map