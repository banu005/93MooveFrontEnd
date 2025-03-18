"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97616],{6878:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(14041);function i(t,e){return o.isValidElement(t)&&-1!==e.indexOf(t.type.muiName??t.type?._payload?.value?.muiName)}},73573:(t,e,n)=>{n.d(e,{A:()=>$});var o=n(14041),i=n(54357),r=n(6878),a=n(18526),c=n(90028),s=n(70434),l=n(93086),u=n(68948),d=n(29724),m=n(65537);let g=(t,e)=>t.filter(t=>e.includes(t)),p=(t,e,n)=>{let o=t.keys[0];Array.isArray(e)?e.forEach((e,o)=>{n((e,n)=>{o<=t.keys.length-1&&(0===o?Object.assign(e,n):e[t.up(t.keys[o])]=n)},e)}):e&&"object"==typeof e?(Object.keys(e).length>t.keys.length?t.keys:g(t.keys,Object.keys(e))).forEach(i=>{if(t.keys.includes(i)){let r=e[i];void 0!==r&&n((e,n)=>{o===i?Object.assign(e,n):e[t.up(i)]=n},r)}}):("number"==typeof e||"string"==typeof e)&&n((t,e)=>{Object.assign(t,e)},e)};function h(t){return`--Grid-${t}Spacing`}function v(t){return`--Grid-parent-${t}Spacing`}let f="--Grid-columns",x="--Grid-parent-columns",_=({theme:t,ownerState:e})=>{let n={};return p(t.breakpoints,e.size,(t,e)=>{let o={};"grow"===e&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===e&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof e&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${e} / var(${x}) - (var(${x}) - ${e}) * (var(${v("column")}) / var(${x})))`}),t(n,o)}),n},b=({theme:t,ownerState:e})=>{let n={};return p(t.breakpoints,e.offset,(t,e)=>{let o={};"auto"===e&&(o={marginLeft:"auto"}),"number"==typeof e&&(o={marginLeft:0===e?"0px":`calc(100% * ${e} / var(${x}) + var(${v("column")}) * ${e} / var(${x}))`}),t(n,o)}),n},k=({theme:t,ownerState:e})=>{if(!e.container)return{};let n={[f]:12};return p(t.breakpoints,e.columns,(t,e)=>{let o=e??12;t(n,{[f]:o,"> *":{[x]:o}})}),n},y=({theme:t,ownerState:e})=>{if(!e.container)return{};let n={};return p(t.breakpoints,e.rowSpacing,(e,o)=>{let i="string"==typeof o?o:t.spacing?.(o);e(n,{[h("row")]:i,"> *":{[v("row")]:i}})}),n},w=({theme:t,ownerState:e})=>{if(!e.container)return{};let n={};return p(t.breakpoints,e.columnSpacing,(e,o)=>{let i="string"==typeof o?o:t.spacing?.(o);e(n,{[h("column")]:i,"> *":{[v("column")]:i}})}),n},S=({theme:t,ownerState:e})=>{if(!e.container)return{};let n={};return p(t.breakpoints,e.direction,(t,e)=>{t(n,{flexDirection:e})}),n},A=({ownerState:t})=>({minWidth:0,boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",...t.wrap&&"wrap"!==t.wrap&&{flexWrap:t.wrap},gap:`var(${h("row")}) var(${h("column")})`}}),C=t=>{let e=[];return Object.entries(t).forEach(([t,n])=>{!1!==n&&void 0!==n&&e.push(`grid-${t}-${String(n)}`)}),e},j=(t,e="xs")=>{function n(t){return void 0!==t&&("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t&&t>0)}if(n(t))return[`spacing-${e}-${String(t)}`];if("object"==typeof t&&!Array.isArray(t)){let e=[];return Object.entries(t).forEach(([t,o])=>{n(o)&&e.push(`spacing-${t}-${String(o)}`)}),e}return[]},W=t=>void 0===t?[]:"object"==typeof t?Object.entries(t).map(([t,e])=>`direction-${t}-${e}`):[`direction-xs-${String(t)}`];var z=n(31085);let B=(0,m.A)(),G=(0,s.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>e.root});function N(t){return(0,l.A)({props:t,name:"MuiGrid",defaultTheme:B})}var T=n(33818),I=n(38827),O=n(6061);let $=function(t={}){let{createStyledComponent:e=G,useThemeProps:n=N,useTheme:s=u.A,componentName:l="MuiGrid"}=t,m=(t,e)=>{let{container:n,direction:o,spacing:i,wrap:r,size:s}=t,u={root:["root",n&&"container","wrap"!==r&&`wrap-xs-${String(r)}`,...W(o),...C(s),...n?j(i,e.breakpoints.keys[0]):[]]};return(0,c.A)(u,t=>(0,a.Ay)(l,t),{})};function g(t,e,n=()=>!0){let o={};return null===t||(Array.isArray(t)?t.forEach((t,i)=>{null!==t&&n(t)&&e.keys[i]&&(o[e.keys[i]]=t)}):"object"==typeof t?Object.keys(t).forEach(e=>{let i=t[e];null!=i&&n(i)&&(o[e]=i)}):o[e.keys[0]]=t),o}let p=e(k,w,y,_,S,A,b),h=o.forwardRef(function(t,e){let a=s(),c=n(t),l=(0,d.A)(c),{className:u,children:h,columns:v=12,container:f=!1,component:x="div",direction:_="row",wrap:b="wrap",size:k={},offset:y={},spacing:w=0,rowSpacing:S=w,columnSpacing:A=w,unstable_level:C=0,...j}=l,W=g(k,a.breakpoints,t=>!1!==t),B=g(y,a.breakpoints),G=t.columns??(C?void 0:v),N=t.spacing??(C?void 0:w),T=t.rowSpacing??t.spacing??(C?void 0:S),I=t.columnSpacing??t.spacing??(C?void 0:A),O={...l,level:C,columns:G,container:f,direction:_,wrap:b,spacing:N,rowSpacing:T,columnSpacing:I,size:W,offset:B},$=m(O,a);return(0,z.jsx)(p,{ref:e,as:x,ownerState:O,className:(0,i.A)($.root,u),...j,children:o.Children.map(h,t=>o.isValidElement(t)&&(0,r.A)(t,["Grid"])&&f&&t.props.container?o.cloneElement(t,{unstable_level:t.props?.unstable_level??C+1}):t)})});return h.muiName="Grid",h}({createStyledComponent:(0,T.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(t,e)=>{var{ownerState:n}=t;return[e.root,n.container&&e.container]}}),componentName:"MuiGrid2",useThemeProps:t=>(0,I.b)({props:t,name:"MuiGrid2"}),useTheme:O.A})},319:(t,e,n)=>{n.d(e,{CA:()=>l,T8:()=>a,qF:()=>s,u$:()=>u,wD:()=>c});var o=n(51895),i=n(91025),r=n(33497),a=(0,r.n9)()(function(t){var{breakpoints:e,tokens:{spacing:n,fontSize:r,lineHeight:a}}=t,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{title:(0,i._)((0,o._)({},c?{margin:0}:{marginBottom:n.s}),{margin:0,[e.up("sm")]:(0,o._)({},c?{margin:0}:{marginBottom:n.base})}),centeredTitle:{textAlign:"center",fontSize:r["3xl"],lineHeight:a.m}}}),c=(0,r.n9)()(t=>{var{breakpoints:e,tokens:{spacing:n,fontSize:o,lineHeight:i,opacity:r}}=t;return{text:{display:"flex",justifyContent:"center",textAlign:"center",fontSize:o.m,lineHeight:i.s,marginBottom:n.m,marginTop:n.s,opacity:r[90],[e.up("sm")]:{marginBottom:n.base}}}}),s=(0,r.n9)()(t=>{var{spacing:e,breakpoints:n}=t;return{container:{paddingBottom:e(3),[n.up("lg")]:{paddingBottom:e(4)}}}}),l=(0,r.n9)()(function(t){var{width:e=0,height:n=0,hasError:i=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{image:(0,o._)({objectFit:"cover",width:"100%",height:"100%"},i&&{backgroundColor:"#f3f4f5"}),imageGif:{objectFit:"cover",width:"100%",height:"100%",position:"absolute",top:0,left:0},gifContainer:{objectFit:"cover",position:"relative",width:"100%",paddingBottom:"calc(".concat(n/e*100,"%)")},overlayHero:{"&::before":{display:"block",content:'""',backgroundColor:"#000",opacity:.12,position:"absolute",top:0,width:"100%",height:"100%",zIndex:0}}}}),u=(0,r.n9)()((t,e)=>{var{breakpoints:n,palette:r,tokens:{radius:a}}=t,{cardSpacing:c,cardAspectAsPercent:s}=e;return{root:(0,i._)((0,o._)({backgroundColor:r.border1Color,position:"relative",overflow:"hidden",width:"100%",paddingTop:s,borderRadius:a.m},c&&{[n.up("sm")]:{paddingTop:c.sm&&"calc(".concat(s," + ").concat(c.sm,"px)")},[n.up("md")]:{paddingTop:c.md&&"calc(".concat(s," + ").concat(c.md,"px)")}}),{"& > picture":{display:"flex",position:"absolute",height:"100%",width:"100%",left:0,top:0}})}})},5075:(t,e,n)=>{n.r(e),n.d(e,{CmsBanner:()=>A});var o=n(51895),i=n(91025),r=n(31085),a=n(73573),c=n(89522),s=n(64669),l=n(68359),u=n(73917),d=n(98490),m=n(59358),g=n(33249),p=n(42509),h=n(59790),v=n(56052),f=n(17532),x=n(40657),_=n(83079),b=n(14041),k=n(33497),y=(0,k.n9)()((t,e)=>{var{breakpoints:n,palette:r,tokens:{border:a,font:c,spacing:s,zIndex:l}}=t,{backgroundColor:u,colorTheme:m,width:g,height:p,alignment:h}=e,v={backgroundColor:u||r.grey[400],top:0,position:"absolute",height:"100%",left:"50%",right:"50%",margin:"0 calc(-50% - ".concat(s.m,")"),[n.down("sm")]:{margin:"0 calc(-50% - ".concat(s.base,")")}};return{centerTextAlign:{textAlign:"center"},title:(0,o._)({color:"".concat(m===d.Bl?r.primary.dark:r.common.white),zIndex:l[1],fontWeight:c.weight.bold,lineHeight:c.lineHeight.s,fontSize:c.size.xl,[n.up("xl")]:{fontSize:c.size.xxl}},h===d.sA?{textAlign:"left"}:{},h===d.pH?{textAlign:"right"}:{},h===d.iF?{textAlign:"center"}:{}),titleBottomSpacing:{marginBottom:s.s},subtitle:(0,o._)({color:"".concat(m===d.Bl?r.grey[600]:r.common.white),zIndex:l[1],fontWeight:c.weight.normal,lineHeight:c.lineHeight.l,fontSize:c.size.m,a:{textDecoration:"none",color:r.info.main,"&:hover":{textDecoration:"underline"}}},h===d.sA?{textAlign:"left"}:{},h===d.pH?{textAlign:"right"}:{},h===d.iF?{textAlign:"center"}:{}),container:(0,o._)((0,i._)((0,o._)({},g===d.u_?{borderRadius:a.radius.m}:{}),{overflow:"".concat(g===d.u_?"hidden":"visible"),position:"relative"}),g===d.si?p===d.xX?{padding:"".concat(s.m," 0")}:{padding:"".concat(s["4xl"]," 0 ").concat(s.base," 0"),[n.up("sm")]:{padding:"".concat(s.l," 0")}}:p===d.xX?{padding:s.m,[n.up("sm")]:{padding:s.base}}:{padding:"".concat(s["4xl"]," ").concat(s.m," ").concat(s.m),[n.up("sm")]:{padding:s.l}}),innerContainer:(0,o._)({zIndex:l[1],[n.up("md")]:{maxWidth:"1280px"},flexDirection:"column"},p===d.xX?{flexDirection:"row",alignItems:"center",[n.down("md")]:{flexDirection:"column",alignItems:"flex-start"}}:{},h===d.iF?{justifyContent:"center"}:{},h===d.pH?{justifyContent:"flex-end"}:{},h===d.sA?{justifyContent:"flex-start"}:{}),heroImageRoot:(0,i._)((0,o._)({},v),{overflow:"hidden",animation:"none"}),heroImage:{minHeight:"100%"},textWrapper:(0,o._)({flexDirection:"column",width:"auto",[n.up("md")]:{marginRight:"".concat(s.m)}},p===d.qy?{width:"100%"}:{}),logo:(0,o._)({height:"40px"},p===d.xX?{marginRight:s.m}:{marginBottom:s.m}),cta:(0,o._)({},p===d.qy?{marginTop:s.base}:{}),buttonContainer:{[n.up("md")]:{margin:"auto"},paddingLeft:"0px"},disclaimer:{color:r.common.white,marginBottom:"-".concat(s.m)},price:{fontWeight:c.weight.bold,"&&":{fontSize:c.size.xxl}}}}),w=(0,k.n9)()((t,e)=>{var{breakpoints:n,tokens:{spacing:i}}=t,{alignment:r,width:a,height:c}=e;return{container:{padding:i.l},title:(0,o._)({"& h1":{margin:0}},r===d.sA&&{textAlign:"left"}),innerContainer:(0,o._)({},c===d.xX&&{flexDirection:"row",[n.down("md")]:{flexDirection:a===d.u_?"column":"row"}}),buttonContainer:{margin:"auto",[n.down("md")]:{marginTop:i.base}}}}),S=(0,k.n9)()((t,e)=>{var{breakpoints:n,tokens:{border:o,font:i,spacing:r}}=t,{backgroundColor:a}=e;return{heroImageRoot:{backgroundColor:a||"#0c121c",margin:"0px 0px"},container:{backgroundColor:a||"#0c121c",borderRadius:0,height:"".concat(m.vD,"px"),[n.down("sm")]:{flexDirection:"row",minHeight:"".concat(m.nh,"px")},padding:"0px 0px",marginTop:"0px"},innerContainer:{alignItems:"center",textAlign:"center",justifyContent:"center",position:"absolute",[n.up("sm")]:{flexWrap:"nowrap",flexDirection:"row"}},title:{fontWeight:i.weight.bold,lineHeight:i.lineHeight.s,fontSize:i.size.s},cta:{[n.down("sm")]:{padding:"0 ".concat(r.base),width:"100%",".MuiContainer-maxWidthLg":{marginTop:r.s}},[n.up("sm")]:{".MuiContainer-maxWidthLg":{marginTop:"0"}}},headerCta:{fontWeight:i.weight.bold,lineHeight:i.lineHeight.s,fontSize:i.size.s,boxSizing:o.boxSizing,height:"40px",padding:"".concat(r.s," ").concat(r.base),[n.down("sm")]:{minWidth:"100%"}}}}),A=t=>{var{alignment:e=d.iF,backgroundColor:n=null,backgroundImage:m=_.vB,cmsBgContainerProps:k=_.vB,colorTheme:A=d.BK,ctaElement:C=null,ctaElementData:j,height:W=d.xX,logo:z=_.vB,subtitle:B=null,title:G=null,width:N=d.si,componentProps:T=_.vB,isContentfulLP:I,contentNameSpace:O,tags:$=_.tR}=t,K=(0,x.Yt)({tags:$}),{isDeveloperLanding:H=!1}=(0,v.wC)(),{classes:E,cx:R}=y({backgroundColor:n,colorTheme:A,width:N,height:W,alignment:e}),{classes:L}=w({alignment:e,width:N,height:null!=W?W:d.xX}),{classes:D}=S({backgroundColor:n}),M=H?(0,i._)((0,o._)({},E),{title:R(E.title,L.title),innerContainer:R(E.innerContainer,L.innerContainer),buttonContainer:R(E.buttonContainer,L.buttonContainer),container:R(E.container,L.container)}):E;O===d.x&&(M=(0,i._)((0,o._)({},E),{heroImageRoot:R(E.heroImageRoot,D.heroImageRoot),container:R(E.container,D.container),title:R(E.title,D.title),innerContainer:R(E.innerContainer,D.innerContainer),headerCta:D.headerCta,cta:D.cta}));try{ti=e===d.sA?"flex-start":e===d.pH?"flex-end":"center";var F,X,P,U,q,Y,V,Q,Z,J,tt,te,tn,to,ti,tr=m;if(I&&(tr=N===d.u_&&W===d.qy?(0,l.tW)({image:tr,srcSet:u.y_}):tr),!K)return null;return(0,r.jsx)(h.R,{cmsBgContainerProps:{index:k.index,isFullWidth:N===d.si,uniformModuleSpacing:k.uniformModuleSpacing},className:null==T?void 0:null===(F=T.cmsBanner)||void 0===F?void 0:F.className,children:(0,r.jsxs)(a.A,{container:!0,justifyContent:"center",alignItems:ti,rowSpacing:W===d.xX?0:3,className:R(M.container,null===(X=T.styleOverrides)||void 0===X?void 0:X.container),children:[(0,r.jsx)(g.T,{image:tr,classesProps:{root:R(M.heroImageRoot,null===(P=T.styleOverrides)||void 0===P?void 0:P.heroImageRoot),image:R(M.heroImage,null===(U=T.styleOverrides)||void 0===U?void 0:U.heroImage)},eleTime:"cmsBanner-".concat(null==tr?void 0:tr.id)}),(0,r.jsxs)(a.A,{container:!0,justifyContent:"center",alignItems:ti,className:R(M.innerContainer,null===(q=T.styleOverrides)||void 0===q?void 0:q.innerContainer),children:[(null==z?void 0:z.url)&&(null==z?void 0:z.title)&&(0,r.jsx)("img",{className:R(M.logo,null===(Y=T.styleOverrides)||void 0===Y?void 0:Y.logo),src:z.url,title:z.title,alt:z.description||z.title,loading:"lazy",elementtiming:"cmsBannerLogo-".concat(null==z?void 0:z.id)}),(0,r.jsxs)(a.A,{container:!0,rowSpacing:W===d.xX?0:2,justifyContent:"center",alignItems:ti,className:R(M.textWrapper,null===(V=T.styleOverrides)||void 0===V?void 0:V.textWrapper),children:[G&&(0,r.jsx)(a.A,{children:(0,r.jsx)(p._,{stringToTransform:G,classes:R(M.title,null===(Q=T.styleOverrides)||void 0===Q?void 0:Q.title,{[M.titleBottomSpacing]:!!B}),"data-automation":O===d.x?"header-banner-title":void 0})}),B&&(0,r.jsx)(a.A,{size:{xs:12,sm:N===d.u_&&e===d.sA&&W===d.qy?5:12},children:(0,r.jsx)(p._,{stringToTransform:(0,f.oL)(B),classes:R(M.subtitle,null===(Z=T.styleOverrides)||void 0===Z?void 0:Z.subtitle)})})]}),(null===(J=T.cmsBanner)||void 0===J?void 0:J.price)&&(0,r.jsx)(c.A,{pt:5,children:(0,r.jsx)(s.A,{color:"white",className:M.price,children:null===(tt=T.cmsBanner)||void 0===tt?void 0:tt.price})}),C&&(0,r.jsx)(a.A,{className:R(M.cta,null===(te=T.styleOverrides)||void 0===te?void 0:te.cta),children:b.cloneElement(C,{classesProps:{buttonContainer:M.buttonContainer,headerCta:M.headerCta,root:O===d.x?M.buttonRoot:void 0},themeMode:(0,l.Jo)(A),contentNameSpace:O,size:O===d.x?"medium":null==j?void 0:j.size,dataAutomation:O===d.x?"header-banner-cta":void 0})}),(null===(tn=T.cmsBanner)||void 0===tn?void 0:tn.disclaimer)&&(0,r.jsx)(c.A,{pt:5,px:3,textAlign:"center",className:M.disclaimer,children:(0,r.jsx)(s.A,{variant:"caption",children:null===(to=T.cmsBanner)||void 0===to?void 0:to.disclaimer})})]})]})})}catch(t){return(0,l.Q9)(t,"CmsBanner")}}},59358:(t,e,n)=>{n.d(e,{BG:()=>c,LC:()=>s,TP:()=>l,nh:()=>r,vD:()=>a});var o=n(45182),i=n(74875),r=105,a=60;o.no,i.WK,o.G_,"/".concat(o.G_,"/").concat(i.WK),"/".concat(o.G_,"/").concat(i.WK,"/[term]"),o.on,"/".concat(o.on,"/").concat(i.WK),"/".concat(o.on,"/").concat(i.WK,"/[term]"),o.nr,"/".concat(o.nr,"/").concat(i.WK),"/".concat(o.nr,"/").concat(i.WK,"/[term]");var c=new Set(["/_shutterstock","/_shutterstock/".concat(o.no),"/_shutterstock/image-photo/[title]","/_shutterstock/".concat(i.WK),"/_shutterstock/".concat(i.WK,"/[term]"),"/_shutterstock/".concat(o.G_),"/_shutterstock/".concat(o.G_,"/[slug]"),"/_shutterstock/".concat(o.G_,"/").concat(i.WK),"/_shutterstock/".concat(o.G_,"/").concat(i.WK,"/[term]"),"/_shutterstock/".concat(o.on),"/_shutterstock/".concat(o.on,"/[title]"),"/_shutterstock/".concat(o.on,"/").concat(i.WK),"/_shutterstock/".concat(o.on,"/").concat(i.WK,"/[term]"),"/_shutterstock/".concat(o.nr),"/_shutterstock/".concat(o.nr,"/[title]"),"/_shutterstock/".concat(o.nr,"/").concat(i.WK),"/_shutterstock/".concat(o.nr,"/").concat(i.WK,"/[term]"),"/_shutterstock/".concat(o.G_,"/").concat(o.uH,"/").concat(i.WK),"/_shutterstock/".concat(o.uH,"/").concat(o.G_,"/").concat(i.WK),"/","/".concat(o.no),"/".concat(o.G_),"/".concat(o.on),"/".concat(o.nr)]),s=new Set(["/_shutterstock","/_shutterstock/".concat(o.no),"/_shutterstock/image-photo/[title]","/_shutterstock/image-vector/[title]","/_shutterstock/image-generated/[title]","/_shutterstock/image-illustration/[title]","/_shutterstock/image-3d-object/[title]","/_shutterstock/".concat(i.WK),"/_shutterstock/".concat(i.WK,"/[term]"),"/_shutterstock/".concat(o.G_),"/_shutterstock/".concat(o.G_,"/[slug]"),"/_shutterstock/".concat(o.G_,"/").concat(i.WK),"/_shutterstock/".concat(o.G_,"/").concat(i.WK,"/[term]"),"/_shutterstock/".concat(o.on),"/_shutterstock/".concat(o.on,"/[title]"),"/_shutterstock/".concat(o.on,"/").concat(i.WK),"/_shutterstock/".concat(o.on,"/").concat(i.WK,"/[term]"),"/_shutterstock/".concat(o.nr)]);o.nr,"/_shutterstock/".concat(o.nr,"/").concat(i.WK),"/_shutterstock/".concat(o.nr,"/").concat(i.WK,"/[term]");var l=["cmsbannerPrechurn"]},33249:(t,e,n)=>{n.d(e,{T:()=>v});var o=n(51895),i=n(91025),r=n(31085),a=n(14041),c=n(5073),s=n(68359),l=n(30794),u=n(98490),d=n(319),m=n(83079),g=n(2657),p=n.n(g),h={root:"",image:""},v=t=>{var{image:{type:e,url:n,srcSet:g,title:v,description:f,fit:x,height:_=0,width:b=0}=m.vB,lazyLoadImage:k=!0,contentNamespace:y,classesProps:w=h,fetchPriority:S="auto",overideImageStyle:A=!1,skeletonDataAutomation:C="",eleTime:j="CmsImageSourceTags",isHero:W=!1,showHeroOverlay:z=!1,alt:B}=t,G=g?(0,l.IV)({srcSetSizes:g.default,imageUrl:n}):n,[N,T]=(0,a.useState)(G),[I,O]=(0,a.useState)(!1),{classes:$,cx:K}=(0,d.CA)({width:b,height:_,hasError:I});try{if(!n)return(0,r.jsx)(c.A,(0,o._)({variant:"rectangular",className:w.root},C&&{"data-automation":C}));if((0,l.ix)(e)&&!(0,s.vq)(y))return(0,r.jsx)("div",{className:$.gifContainer,children:(0,r.jsx)("img",{src:n,alt:null!=B?B:f||v,title:""===B?void 0:v,className:$.imageGif,loading:k?"lazy":"eager",width:b,height:_,elementtiming:"cms-image-gif-".concat(j)})});return(0,r.jsxs)("div",{className:w.root,children:[W&&(0,r.jsx)(p(),{children:g&&Object.keys(g).map((t,o)=>(0,a.createElement)("link",{rel:"preload",as:"image",href:(0,l.IV)({srcSetSizes:g[t],imageUrl:n}),imageSrcSet:(0,l.ib)({srcSetSizes:g[t],imageUrl:n,typeOfImage:(0,l.zb)(e)?l.$U:"",fit:x}),media:(0,l.Ym)(t,Object.keys(g)[o-1]),key:t}))}),(0,r.jsxs)("picture",{children:[g&&(0,l.Ud)(e)&&Object.keys(g).map(t=>(0,a.createElement)("source",(0,i._)((0,o._)({type:"image/".concat(l.xd),srcSet:(0,l.ib)({srcSetSizes:g[t],imageUrl:n,typeOfImage:l.xd,fit:x})},"default"===t?{}:{media:(0,l.Ym)(t)}),{key:"webp-".concat(t)}))),g&&Object.keys(g).map(t=>(0,a.createElement)("source",(0,i._)((0,o._)({srcSet:(0,l.ib)({srcSetSizes:g[t],imageUrl:n,typeOfImage:(0,l.zb)(e)?l.$U:"",fit:x})},"default"===t?{}:{media:(0,l.Ym)(t)}),{key:t}))),(0,r.jsx)("img",{fetchpriority:S,loading:k?"lazy":"eager",src:N,alt:null!=B?B:f||v,title:(0,s.vq)(y)||(0,s.HP)(y)||""===B?void 0:v,className:A?w.image:K($.image,w.image),width:g?(0,l.mx)({srcSetSizes:g.default}).width:0,height:g?(0,l.mx)({srcSetSizes:g.default}).height:0,elementtiming:"cms-image-".concat(j),onError:()=>{O(!0),T(u.oA)}})]}),z&&(0,r.jsx)("div",{className:$.overlayHero})]})}catch(t){return(0,s.Q9)(t,"CmsImageSourceTags")}}},42509:(t,e,n)=>{n.d(e,{_:()=>u});var o=n(51895),i=n(91025),r=n(96353),a=n(31085),c=n(17532),s=n(14041),l=(0,n(33497).n9)()(()=>({newline:{whiteSpace:"pre-line"}})),u=(0,s.memo)(t=>{var{stringToTransform:e,classes:n,Component:u,validateHTML:d=!1}=t,m=(0,r._)(t,["stringToTransform","classes","Component","validateHTML"]),{classes:{newline:g},cx:p}=l(),h=(0,i._)((0,o._)({},m),{className:p(n,g),dangerouslySetInnerHTML:{__html:(0,c.oL)(e)}}),v=!1;return(d&&/<h[1-6]/i.test(e)&&(v=!0),!u||v)?(0,a.jsx)("div",(0,o._)({},h)):(0,s.cloneElement)(u,h)})},40657:(t,e,n)=>{n.d(e,{PL:()=>_,Y_:()=>y,Yt:()=>k});var o=n(51895),i=n(91025),r=n(18923),a=n(36908),c=n(5067),s="EXCLUDE",l="loggedIn",u="ACTIVE",d="FLEX",m="LAPSED",g=new Set([l,"LO",d]),p=new Set([l,"LO",d,"FBA",u,m]),h=t=>t.some(t=>/^[A-Z]{2}$/.test(t)&&"LO"!==t),v=t=>t.includes(s),f=(t,e)=>t.includes(e),x=t=>t.filter(t=>g.has(t)).length>1,_=t=>{var e,n,{tags:o,region:i,isLoggedIn:r,subscriptionData:a}=t;if(0===o.length||1===o.length&&"experiment"===o[0])return!0;var c=r&&(null==a?void 0:a.totalNumSubscriptionsAllTime)===0&&(null==a?void 0:a.totalNumSubscriptionsActive)===0,g=r&&(null==a?void 0:null===(e=a.flexSubscriptions)||void 0===e?void 0:e.length)>0,_=r&&(null==a?void 0:null===(n=a.activeSubscriptions)||void 0===n?void 0:n.length)>0,b=r&&(null==a?void 0:a.totalNumSubscriptionsAllTime)>0&&(null==a?void 0:a.totalNumSubscriptionsActive)===0,k={[l]:r,LO:!r,[u]:_,FBA:c,[d]:g,[m]:b};if(x(o)||1===o.length&&o[0]===s)return!1;var y=v(o),w=h(o),S=f(o,i),A=o.find(t=>p.has(t));return!A&&w?y?!S:S:(!!A||!!w)&&((t,e)=>{var n=k[t],o=e?S&&n:n;return y?!o:o})(A,w)},b=()=>{var{region:t="US"}=(0,r.PZ)(),e=(0,a.i9)(),{data:n}=(0,c.Gz)();return{region:t,isLoggedIn:e,subscriptionData:n}},k=t=>{var{tags:e=[]}=t,{region:n,isLoggedIn:o,subscriptionData:i}=b();return _({tags:e,region:n,isLoggedIn:o,subscriptionData:i})},y=t=>{var{items:e=[]}=t,{region:n,isLoggedIn:r,subscriptionData:a,isBrandEnterprise:c}=b();return e.map(t=>{var{tags:e=[]}=t,s=_({tags:e,region:n,isLoggedIn:r,subscriptionData:a,isBrandEnterprise:c});return(0,i._)((0,o._)({},t),{shouldShow:s})})}}}]);
//# sourceMappingURL=CmsBanner.29619f1fd5d22392.js.map