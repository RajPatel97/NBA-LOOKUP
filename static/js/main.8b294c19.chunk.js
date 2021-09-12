(this["webpackJsonpnba-lookup"]=this["webpackJsonpnba-lookup"]||[]).push([[0],{41:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),o=(n(41),n(11)),i=n(1),l=function(){return Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"active",href:"#about",children:"NBA LOOKUP"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#home",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#news",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/RajPatel97/NBA-LOOKUP",children:"Code"})}),Object(i.jsx)("li",{className:"soon",children:Object(i.jsx)("a",{href:"https://github.com/RajPatel97/NBA-LOOKUP",children:"Simulations Coming Soon!"})})]})},j=n(69),h=n(76),d=n(73),b=n(71),u=n(72),p=Object(j.a)({root:{minWidth:275,width:900,position:"absolute",left:"50%",top:"25%",transform:"translate(-50%, -50%)",backgroundColor:"rgb(66, 66, 66)",color:"white",borderStyle:"solid",borderColor:"#f7aaaa"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)",color:"white"},title:{fontSize:14,color:"white"},pos:{marginBottom:12}});function O(){var e=p();return Object(i.jsxs)(h.a,{className:e.root,children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)(u.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:Object(i.jsx)("h1",{children:"WELCOME TO NBA LOOKUP"})}),Object(i.jsx)(u.a,{variant:"h5",component:"h2",children:"Look up stats and scores of any team and player in NBA History!"}),Object(i.jsx)(u.a,{className:e.pos,color:"textSecondary",children:Object(i.jsx)("a",{className:"link",href:"https://github.com/RajPatel97/NBA-LOOKUP",children:"Check Out the Code Here"})}),Object(i.jsx)(u.a,{variant:"body2",component:"p",children:"Created By Raj Patel"})]}),Object(i.jsx)(d.a,{})]})}var m=n(6),x=n(75),f=n(74),g=Object(j.a)({root:{minWidth:275,width:900,position:"absolute",left:"50%",top:"45%",transform:"translate(-50%, -50%)",backgroundColor:"rgb(66, 66, 66)",color:"white",borderStyle:"solid",borderColor:"#f7aaaa",padding:"20px",display:"flex",justifyContent:"center"},title:{fontSize:14,color:"white"},pos:{marginBottom:12},btn:{margin:"0 30px",width:250,minWidth:100}}),y=Object(m.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(f.a);function v(e){var t=e.currentButton,n=e.setCurrentButton,a=g();return Object(i.jsxs)(h.a,{className:a.root,children:[console.log(t),Object(i.jsx)(y,{title:Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(u.a,{color:"inherit",children:"Look Up a Current or Retired Player"}),Object(i.jsx)("em",{children:"Click this Box and Enter the Name of the Player in the Search Box. "}),Object(i.jsx)("em",{children:"Displays Stats From All Seasons"})]}),children:Object(i.jsx)(x.a,{className:a.btn,variant:"contained",onClick:function(){n("player")},children:"Player"})}),Object(i.jsx)(y,{title:Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(u.a,{color:"inherit",children:"Look Up a Current Team or Any Previous Team in NBA History "}),Object(i.jsx)("em",{children:"Click this Box and Enter the Name of the team in the Search Box. Enter Name and Year If Searching for a Historical Team"}),Object(i.jsx)("em",{children:"Displays Rosters and Season Statistics as well as Outcomes of the Season"})]}),children:Object(i.jsx)(x.a,{className:a.btn,variant:"contained",color:"primary",onClick:function(){n("team")},children:"Team"})}),Object(i.jsx)(y,{title:Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(u.a,{color:"inherit",children:"Look Up Any Specific Game in NBA History "}),Object(i.jsx)("em",{children:"Click this Box and Enter the date of the Game"}),Object(i.jsx)("em",{children:"Displays the Scores and Statistics of the Game"})]}),children:Object(i.jsx)(x.a,{className:a.btn,variant:"contained",color:"secondary",onClick:function(){n("game")},children:"Game"})})]})}var N=function(e){var t=e.setSearchInput;return Object(i.jsx)("div",{className:"search-wrapper",children:Object(i.jsxs)("form",{className:"form",id:"addItemForm",onSubmit:function(e){e.preventDefault(),t(e.target[0].value)},children:[Object(i.jsx)("input",{type:"text",className:"input",id:"addInput",placeholder:"NBA LOOKUP"}),Object(i.jsx)("button",{className:"btn",children:"Search"})]})})},w=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(null),l=Object(o.a)(s,2),j=l[0],h=l[1],d=e.searchInput;return Object(a.useEffect)((function(){var e="https://www.balldontlie.io/api/v1/players?search=".concat(d);fetch(e).then((function(e){if(!e.ok)throw Error("Could not get the data");return e.json()})).then((function(e){r(e.data[0]),function(e){var t="https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=".concat(e);fetch(t).then((function(e){if(!e.ok)throw Error("Could not get the stats");return e.json()})).then((function(e){h(e.data[0])})).catch((function(e){console.log(e.message)}))}(e.data[0].id)})).catch((function(e){console.log(e.message)}))}),[d]),Object(i.jsxs)("div",{className:"playerDisplay-wrapper",children:[c&&Object(i.jsx)("h1",{className:"name",children:c.first_name+" "+c.last_name}),c&&Object(i.jsx)("h2",{className:"team-name",children:c.team.full_name}),c&&Object(i.jsxs)("p",{children:["Position: ",c.position]}),c&&Object(i.jsxs)("p",{children:["Height: ",c.height_feet+" ft, "+c.height_inches+" in"]}),c&&Object(i.jsxs)("p",{children:["Weight: ",c.weight_pounds," lbs"]}),j&&Object(i.jsxs)("h3",{children:["Stats for the ",j.season," season:"]}),j&&Object(i.jsxs)("p",{children:["PPG: ",j.pts]}),j&&Object(i.jsxs)("p",{children:["AST: ",j.ast]}),j&&Object(i.jsxs)("p",{children:["REB: ",j.reb]}),j&&Object(i.jsxs)("p",{children:["Games Played: ",j.games_played]}),j&&Object(i.jsxs)("p",{children:["Minutes per game: ",j.min]})]})},S=function(e){e.searchInput;return Object(i.jsx)("div",{className:"gameDisplay-wrapper",children:console.log("gameDisplay")})},C=function(e){var t=e.searchInput,n=Object(a.useState)(null),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){fetch("https://www.balldontlie.io/api/v1/teams").then((function(e){if(!e.ok)throw Error("Could now get the data");return e.json()})).then((function(e){s(e.data)})).catch((function(e){console.log(e.message)}))}),[t]),Object(i.jsxs)("div",{className:"teamDisplay-wrapper",children:[console.log(r),r&&r.map((function(e){return Object(i.jsxs)("div",{className:"list-wrapper",children:[Object(i.jsx)("h4",{className:"team-name",children:e.full_name}),Object(i.jsxs)("p",{children:["Conference: ",e.conference]}),Object(i.jsxs)("p",{children:["Division: ",e.division]}),Object(i.jsxs)("p",{children:["Abbreviation: ",e.abbreviation]}),Object(i.jsxs)("p",{children:["City: ",e.city]})]},e.id)}))]})},B=function(e){var t=e.currentButton,n=e.searchInput;return Object(i.jsx)("div",{className:"display-wrapper",children:"player"===t?Object(i.jsx)(w,{searchInput:n}):"team"===t?Object(i.jsx)(C,{searchInput:n}):Object(i.jsx)(S,{searchInput:n})})};var k=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("Kanye"),s=Object(o.a)(r,2),j=s[0],h=s[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(O,{}),Object(i.jsx)(v,{currentButton:n,setCurrentButton:c}),Object(i.jsx)(N,{searchInput:j,setSearchInput:h}),Object(i.jsx)(B,{currentButton:n,searchInput:j})]})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.8b294c19.chunk.js.map