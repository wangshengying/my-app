(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(93),u=n.n(r),c=(n(100),n(6)),o=n(7),i=n(9),s=n(8),h=n(10),p=(a.Component,n(45)),m=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"\u6b63\u5728\u8fdb\u884c"),l.a.createElement("ul",null,this.props.todo.map((function(t,n){return l.a.createElement("li",{key:n},t,"----",l.a.createElement("button",{onClick:function(){e.props.delTodo(n)}},"\u5220\u9664"))}))))}}]),t}(a.Component),d=n(94),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).handleInput=function(t){13===t.keyCode&&e.props.addTodo(t.target.value)},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,parseInt(t.target.value)))},e.state={n1:0,n2:0},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("input",{name:"n1",onChange:this.handleChange,value:this.state.n1,onKeyDown:function(t){return e.handleInput(t)},type:"text"}),"+",l.a.createElement("input",{name:"n2",onChange:this.handleChange,value:this.state.n2,onKeyDown:function(t){return e.handleInput(t)},type:"text"}),l.a.createElement("p",null,this.state.n1+this.state.n2),l.a.createElement("button",null,"\u67e5\u8be2"))}}]),t}(a.Component),b=(a.Component,n(101),n(119),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.apiopen.top/musicRankingsDetails?type=1").then((function(e){return e.json()})).then((function(t){e.setState({data:t.result}),console.log(t)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u8bf7\u6c42\u63a5\u53e3"),l.a.createElement("ul",null,this.state.data.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h2",null,e.album_title),l.a.createElement("p",null,e.author))}))))}}]),t}(a.Component));u.a.render(l.a.createElement(b,null),document.getElementById("root"));l.a.createElement("div",{id:"box"},"hello",l.a.createElement("h1",{id:"h"},"react"))},95:function(e,t,n){e.exports=n(256)}},[[95,1,2]]]);
//# sourceMappingURL=main.ec399ed0.chunk.js.map