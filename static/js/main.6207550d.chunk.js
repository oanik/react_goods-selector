(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(2),s=n.n(a),l=n(3),r=n(4),i=n(7),u=n(6),d=(n(13),n(5)),p=n.n(d),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.clearSelection=function(){0!==e.state.selectedGoods.length&&e.setState({selectedGoods:[]})},e}return Object(r.a)(n,[{key:"clickHandler",value:function(e){this.state.selectedGoods.includes(e)?this.setState((function(t){return{selectedGoods:t.selectedGoods.filter((function(t){return t!==e}))}})):this.setState((function(t){return t.selectedGoods.push(e),{selectedGoods:t.selectedGoods}}))}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Selected good: -","".concat(t.join(", ")," "),o.a.createElement("button",{type:"button",onClick:this.clearSelection},"Clear")),h.length,o.a.createElement("ul",null,h.map((function(n){return o.a.createElement("li",{key:n,className:p()({selected:t.includes(n)})},"".concat(n,"  - "),o.a.createElement("button",{type:"button",onClick:function(){return e.clickHandler(n)}},"Add/Remove"))}))))}}]),n}(o.a.Component);s.a.render(o.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.6207550d.chunk.js.map