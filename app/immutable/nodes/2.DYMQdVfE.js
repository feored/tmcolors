import{c as wt,a as w,e as It,t as S}from"../chunks/disclose-version.D3AYHp50.js";import{f as _t,N as Ct,ad as y,ac as x,P as Rt,V as d,w as o,a3 as rt,s as a,c as i,a as r}from"../chunks/runtime.D7el5r4C.js";import{s as it}from"../chunks/render.C9mzKRzl.js";import{e as nt,r as St,a as Et,i as st}from"../chunks/attributes.CafjwoZJ.js";import{V as Nt,a as ct,f as zt,h as At,I as lt}from"../chunks/viewer.fCX2jPt_.js";import{l as Mt,s as Pt,p as b}from"../chunks/props.Detkwk-2.js";import{b as Tt}from"../chunks/this.sunntfbD.js";import{I as Dt,s as Gt,d as Vt}from"../chunks/Icon.DcOMoDMS.js";import{R as Wt}from"../chunks/rotate-cw.I6-GuCtW.js";import"../chunks/gradient.DSkRHh2k.js";function Bt(e,t){const c=Mt(t,["children","$$slots","$$events","$$legacy"]);Dt(e,Pt({name:"rotate-ccw"},()=>c,{iconNode:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]],children:(m,p)=>{var _=wt(),u=_t(_);Gt(u,Vt(t),{}),w(m,_)},$$slots:{default:!0}}))}var qt=(e,t,c)=>t(o(c)),Lt=S('<button class="tm-icon" style="width:4rem;"> </button>'),Ot=(e,t)=>t.icons=!1,Ut=(e,t,c)=>t(o(c)),Xt=S('<button style="width:4rem;"> </button>'),jt=(e,t)=>t.diacritics=!1,Ft=(e,t)=>t("$w"),Ht=(e,t)=>t("$n"),Jt=(e,t)=>t("$m"),Kt=(e,t)=>{d(t,b(zt(o(t))))},Qt=(e,t,c)=>t("$"+At(o(c)).slice(1)),Yt=(e,t)=>t("$g"),Zt=(e,t)=>t("$i"),ta=(e,t)=>t("$o"),aa=(e,t)=>t("$s"),oa=(e,t)=>t("$t"),ea=(e,t)=>t("$z"),ra=(e,t)=>t("$$"),ia=(e,t)=>t.diacritics=!0,na=(e,t)=>t.icons=!0,sa=(e,t)=>t(),ca=(e,t)=>t(),la=(e,t)=>t(),_a=(e,t)=>navigator.clipboard.writeText(o(t)),ua=(e,t)=>t(),da=S('<section><dialog><header>Add Icon</header> <main class="overflow-y" style="height:20rem;"><div class="flex wrap" style="gap:1rem;"></div></main> <footer><button>Close</button></footer></dialog> <dialog><header>Add Diacritics</header> <main class="overflow-y" style="height:20rem;"><div class="flex wrap" style="gap:1rem;"></div></main> <footer><button>Close</button></footer></dialog> <details open><summary>Width Modifiers</summary> <button><span class="roboto wide">Wide</span></button> <button><span class="robot narrow">Narrow</span></button> <button class="default">Reset</button></details> <details open><summary>Color Modifiers</summary> <input type="color" class="inline block"> <button>Insert Color</button> <button class="default">Reset Color</button></details> <details open><summary>Style Modifiers</summary> <button><i>Italic</i></button> <button><b>Bold</b></button> <button style="text-shadow: 1px 1px 2px black;">Drop Shadow</button> <button>UPPERCASE</button> <button class="default">Reset All Styles</button></details> <details><summary>Characters</summary> <div><button>Insert $</button> <button>Insert Diacritic</button> <button>Insert Icon</button></div></details> <article style="margin:0px;"><span class="flex align-center"><button><!></button> <button><!></button> <button>Clear</button> <button>Copy to clipboard</button></span> <textarea class="svelte-q9cu0r"></textarea> <br> <!></article></section>');function va(e,t){Ct(t,!0);const c="$t Example: $t$i Italic $o Bold $f00 Red $w Wide $z Reset $0d0 [tmformat] ";let s=y(c),m=y(null),p=y("#ffffff"),_=y(b([c])),u=y(0),E=[];for(let n=768;n<=879;(n+=1)-1)E.push(String.fromCodePoint(n));b(E[0]),b(lt[0]);let f=b({icons:!1,diacritics:!1});function l(n){o(m)&&(d(s,o(s).substring(0,o(m).selectionStart)+n+o(s).substring(o(m).selectionStart)),N())}function ut(){d(s,""),N()}function B(){return o(u)!=0}function q(){return o(u)!=o(_).length-1}function N(){o(u)!=o(_).length-1&&d(_,b(o(_).slice(0,o(u)+1))),o(_).push(o(s)),d(u,o(_).length-1)}function dt(){B()&&(rt(u,-1),d(s,b(o(_)[o(u)])))}function vt(){q()&&(rt(u),d(s,b(o(_)[o(u)])))}var z=da(),I=i(z),A=a(i(I),2),L=i(A);nt(L,21,()=>lt,st,(n,$)=>{var v=Lt();v.__click=[qt,l,$];var W=i(v);r(v),x(()=>it(W,o($))),w(n,v)}),r(L),r(A);var O=a(A,2),bt=i(O);bt.__click=[Ot,f],r(O),r(I);var C=a(I,2),M=a(i(C),2),U=i(M);nt(U,21,()=>E,st,(n,$)=>{var v=Xt();v.__click=[Ut,l,$];var W=i(v);r(v),x(()=>it(W,o($))),w(n,v)}),r(U),r(M);var X=a(M,2),mt=i(X);mt.__click=[jt,f],r(X),r(C);var P=a(C,2),j=a(i(P),2);j.__click=[Ft,l];var F=a(j,2);F.__click=[Ht,l];var ft=a(F,2);ft.__click=[Jt,l],r(P);var T=a(P,2),R=a(i(T),2);St(R),R.__input=[Kt,p];var H=a(R,2);H.__click=[Qt,l,p];var pt=a(H,2);pt.__click=[Yt,l],r(T);var D=a(T,2),J=a(i(D),2);J.__click=[Zt,l];var K=a(J,2);K.__click=[ta,l];var Q=a(K,2);Q.__click=[aa,l];var Y=a(Q,2);Y.__click=[oa,l];var kt=a(Y,2);kt.__click=[ea,l],r(D);var G=a(D,2),Z=a(i(G),2),tt=i(Z);tt.__click=[ra,l];var at=a(tt,2);at.__click=[ia,f];var ht=a(at,2);ht.__click=[na,f],r(Z),r(G);var ot=a(G,2),V=i(ot),k=i(V);x(()=>k.disabled=!B()),k.__click=[sa,dt];var gt=i(k);Bt(gt,{}),r(k);var h=a(k,2);x(()=>h.disabled=!q()),h.__click=[ca,vt];var $t=i(h);Wt($t,{}),r(h);var et=a(h,2);et.__click=[la,ut];var yt=a(et,2);yt.__click=[_a,s],r(V);var g=a(V,2);Tt(g,n=>d(m,n),()=>o(m)),Et(g),g.__input=[ua,N];var xt=a(g,4);Nt(xt,{get tm_text(){return o(s)}}),r(ot),r(z),x(()=>{I.open=f.icons,C.open=f.diacritics}),ct(R,()=>o(p),n=>d(p,n)),ct(g,()=>o(s),n=>d(s,n)),w(e,z),Rt()}It(["click","input"]);var ba=S('<menu><li class="selected"><a href="#">Editor</a></li> <li><a href="./gradient">Gradient</a></li> <li><a href="./randomize">Randomize</a></li> <li><a href="./guide">Guide</a></li></menu> <section><!></section>',1);function Ia(e){var t=ba(),c=a(_t(t),2),s=i(c);va(s,{}),r(c),w(e,t)}export{Ia as component};
