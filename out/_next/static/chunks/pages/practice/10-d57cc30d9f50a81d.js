(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{4817:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice/10",function(){return a(8402)}])},6796:function(t,e,a){"use strict";var c=a(5893);a(7294),e.Z=t=>{let{pageTitle:e}=t;return(0,c.jsx)("div",{className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg",children:(0,c.jsx)("h1",{className:"py-4 text-center text-3xl font-bold text-white",children:e})})}},4086:function(t,e,a){"use strict";var c=a(5893),i=a(1664),l=a.n(i),r=a(1163);a(7294),e.Z=()=>{let t=(0,r.useRouter)();return(0,c.jsxs)("div",{className:"w-64 bg-gray-800 text-white shadow-lg",children:[(0,c.jsx)("div",{className:"p-4 text-center text-xl font-bold",children:"メニュー"}),(0,c.jsx)("ul",{className:"space-y-2 p-4",children:[{path:"/practice/03",title:"カウントアップ"},{path:"/practice/04",title:"表示／非表示の切り替え"},{path:"/practice/05",title:"入力値を同時表示"},{path:"/practice/06",title:"背景色を変更"},{path:"/practice/07",title:"フィードバックを表示"},{path:"/practice/08",title:"摂氏温度→華氏温度"},{path:"/practice/09",title:"クイズ"},{path:"/practice/10",title:"デジタル時計表示"},{path:"/practice/11",title:"名言のランダム表示"},{path:"/practice/12",title:"信号機（青→黄→赤）"},{path:"/practice/13",title:"タイマー"},{path:"/practice/15",title:"ポケモンAPIアプリ"},{path:"/practice/16",title:"メモアプリ"},{path:"/practice/17",title:"ToDoアプリ"},{path:"/practice/18",title:"日記アプリ"},{path:"/practice/19",title:"ユーザー検索アプリ"}].map((e,a)=>{let i=t.pathname===e.path;return(0,c.jsx)("li",{children:(0,c.jsx)(l(),{href:e.path,className:"block rounded px-4 py-2 ".concat(i?"bg-gray-700 text-white":"hover:bg-gray-700"),children:e.title})},a)})})]})}},8402:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return n}});var c=a(5893),i=a(6796),l=a(4086),r=a(7294);let s=()=>{let[t,e]=(0,r.useState)("");return(0,r.useEffect)(()=>{let t=setInterval(()=>{e(new Date().toLocaleTimeString())},1e3);return()=>{clearInterval(t)}},[]),{currentTime:t}};var n=()=>{let{currentTime:t}=s();return(0,c.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,c.jsx)(i.Z,{pageTitle:"デジタル時計表示"}),(0,c.jsxs)("div",{className:"flex flex-1",children:[(0,c.jsx)(l.Z,{}),(0,c.jsx)("div",{className:"flex-1",children:(0,c.jsx)("div",{className:"mx-auto mt-8 max-w-4xl",children:(0,c.jsx)("div",{className:"flex justify-center",children:(0,c.jsx)("div",{children:(0,c.jsx)("h3",{className:"text-center text-2xl",children:t||"Loading..."})})})})})]})]})}}},function(t){t.O(0,[424,888,774,179],function(){return t(t.s=4817)}),_N_E=t.O()}]);