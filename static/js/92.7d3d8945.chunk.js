"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[92],{9514:(e,t,r)=>{r.d(t,{e:()=>n});const i=r.p+"static/media/something-went-wrong.0b7d80f73eb86329daf4.gif";var o=r(579);const n=()=>(0,o.jsx)("div",{style:{width:"100%",backgroundColor:"#fff"},children:(0,o.jsx)("img",{src:i,alt:"error_image",style:{margin:"0 auto"}})})},4664:(e,t,r)=>{r.d(t,{Z:()=>_});var i=r(5475),o=r(3768),n=r(616),s=r(9909),a=r(5330),d=r(972),p=r(1274),c=r(3970),x=r(2972),h=r(4140),l=r(2464),g=r(3370),m=r(3156),f=r(4574);const y=f.AH`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 20px;
  height: 20px;
  color: ${e=>e.theme.colors.hoverColor};
  transition: ${e=>e.theme.transition.main};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverColor};
    transform: scale(1.3);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`,u=f.AH`
  font-size: 10px;
  height: 25px;
  padding: 6px 18px;
  margin-top: 5px;
  border-radius: 20px;
  background: ${e=>e.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.hoverColor};
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    height: 40px;
    margin-top: 10px;
  }
`,b=(0,f.Ay)(m.sOK)`
  ${y};
`,j=(0,f.Ay)(m.yeC)`
  ${y};
`,w=f.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=f.Ay.img`
  width: 100%;
  height: 144px;
  border-radius: 10px;
  object-fit: cover;

  @media screen and (min-width: 1280px) {
    height: ${e=>"\u0410\u043a\u0446\u0456\u0457"===e.category?"270px":"230px"};
    border-radius: 16px;
  }
`,$=f.Ay.p`
  height: 40px;
  font-size: 10px;
  margin-top: 5px;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    height: 66px;
    font-size: 18px;
    margin-top: 15px;
  }
`,A=f.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;

  @media screen and (min-width: 1280px) {
    height: 70px;
  }
`,C=f.Ay.span`
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`,k=f.Ay.span`
  text-decoration-line: line-through;
  font-size: 10px;
  color: ${e=>e.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`,z=f.Ay.button`
  ${u}
`,F=f.Ay.button`
  font-size: 10px;
  height: 25px;
  padding: 6px 18px;
  margin-top: 5px;
  border-radius: 20px;
  background: rgba(157, 157, 157, 0.3);

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    height: 40px;
    margin-top: 10px;
  }
`;var P=r(579);const _=e=>{let{product:t,category:r}=e;const m=(0,d.Y)(),{codeOfGood:f,image:y,name:u,price:_,discount:N,sale:O,capacity:L,quantity:M}=t,{isLoggedIn:V}=(0,s.As)(),q=(0,d.N)(g.rM).some((e=>e.codeOfGood===f)),G=(0,d.N)(l.Cp).some((e=>e===f)),H=O?(0,a.g)(N,_):_,Y=()=>{m(G?(0,p.C$)(f):(0,p.Pj)(f))};return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(w,{children:[G?(0,P.jsx)(j,{onClick:Y}):(0,P.jsx)(P.Fragment,{children:V?(0,P.jsx)(b,{onClick:Y}):(0,P.jsx)(b,{onClick:()=>{V||(m((0,h.MY)(!0)),document.body.style.overflow="hidden")}})}),(0,P.jsxs)(i.N_,{to:`../assortment/${f}`,children:[(0,P.jsx)(v,{category:r,loading:"lazy",src:y[0]||n,alt:u,onError:e=>{e.currentTarget.src=`${n}`}}),(0,P.jsx)($,{children:u})]}),(0,P.jsxs)(A,{children:[(0,P.jsxs)(C,{children:[H," \u0433\u0440\u043d"]}),O&&(0,P.jsxs)(k,{children:[_," \u0433\u0440\u043d"]})]}),L?(0,P.jsx)(i.N_,{to:`../assortment/${f}`,children:(0,P.jsx)(z,{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"})}):q?(0,P.jsx)(z,{onClick:()=>{m((0,x.BW)(!0))},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):M>0?(0,P.jsx)(z,{onClick:()=>{m((0,c.B5)({...t,price:O?H:_,capacityKey:"",selectedSealing:!1,selectedHolder:!1,quantityOrdered:1,totalPrice:O?H:_})),o.Ay.success("\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0430!")},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):(0,P.jsx)(F,{disabled:!0,children:"\u041d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})]})})}},6052:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var i=r(5043),o=r(972),n=r(4576),s=r(9909),a=r(8935),d=r(9514),p=r(1850);var c=r(4664),x=r(4574),h=r(1636);const l=x.Ay.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 12px;
  justify-content: ${e=>"\u0410\u043a\u0446\u0456\u0457"===e.category?"space-between":"inherit"};

  @media screen and (min-width: 1280px) {
    gap: 20px;
    flex-wrap: nowrap;
    ${e=>{if("\u0410\u043a\u0446\u0456\u0457"===e.category)return`& li:nth-child(4) {${h.R}};`}}
  }
`,g=x.Ay.li`
  max-width: 154px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(rgba(213, 213, 213, 1), rgba(241, 241, 241, 0));
  padding: 5px 5px 10px;
  border-radius: 12px;
  position: relative;
  z-index: 0;
  transition: ${e=>e.theme.transition.main};

  ${h.yq}
  &::after {
    border-radius: 12px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 10px 20px;
    max-width: ${e=>"\u0410\u043a\u0446\u0456\u0457"===e.category?"290px":"250px"};
    border-radius: 20px;

    &::after {
      border-radius: 20px;
    }
  }
`;var m=r(579);const f=e=>{let{category:t}=e;const r=(0,o.N)(p.VW),i=(e=>({"\u0410\u043a\u0446\u0456\u0457":"sale","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438":"battery","\u0413\u043e\u0442\u043e\u0432\u0456 \u0431\u0430\u0442\u0430\u0440\u0435\u0457":"assembly","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f FPV-\u0434\u0440\u043e\u043d\u0456\u0432":"fpv","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0440\u0430\u043d\u043f\u043e\u0440\u0442\u0443":"transport","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0456\u0433\u0440\u0430\u0448\u043e\u043a":"toys","\u041f\u0440\u0438\u043b\u0430\u0434\u0438":"devices","\u0420\u043e\u0437\u0445\u0456\u0434\u043d\u0456 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438":"materials"}[e]))(t),n=((e,t)=>e.filter((e=>{let{category:r,sale:i}=e;return"sale"===t?!0===i:r===t})))(r,i),s="sale"===i?n.slice(-4):n.slice(0,4);return(0,m.jsx)(l,{category:t,children:s.map((e=>(0,m.jsx)(g,{category:t,children:(0,m.jsx)(c.Z,{category:t,product:e})},e.codeOfGood)))})};var y=r(7353);const u=e=>"\u0410\u043a\u0446\u0456\u0457"===e.category?e.theme.colors.hoverColor:"inherit",b=x.Ay.section`
  padding-bottom: 20px;
  padding-top: ${e=>"\u0410\u043a\u0446\u0456\u0457"===e.category?"20px":"inherit"};
  background: ${h.OL};

  @media screen and (min-width: 1280px) {
    padding-bottom: 50px;
    padding-top: ${e=>"\u0410\u043a\u0446\u0456\u0457"===e.category?"50px":"inherit"};
  }
`,j=x.Ay.div`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
  }
`,w=x.Ay.a`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${u};
  display: inline-flex;
  gap: 15px;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverColor};
    transform: scale(1.05);

    svg {
      fill: ${e=>e.theme.colors.hoverColor};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 40px;
  }

  h2 {
    font-size: inherit;
    font-weight: 600;
  }

  svg {
    fill: ${u};
    width: 30px;
    height: 19px;
    transition: ${e=>e.theme.transition.main};

    @media screen and (min-width: 1280px) {
      width: 60px;
      height: 48px;
    }
  }
`,v=e=>{let{category:t}=e;const r=(e=>({"\u0410\u043a\u0446\u0456\u0457":"sales","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438":"batteries","\u0413\u043e\u0442\u043e\u0432\u0456 \u0431\u0430\u0442\u0430\u0440\u0435\u0457":"assembly","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f FPV-\u0434\u0440\u043e\u043d\u0456\u0432":"batteries-for-fpv","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0440\u0430\u043d\u043f\u043e\u0440\u0442\u0443":"batteries-for-transport","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0456\u0433\u0440\u0430\u0448\u043e\u043a":"batteries-for-toys","\u041f\u0440\u0438\u043b\u0430\u0434\u0438":"devices","\u0420\u043e\u0437\u0445\u0456\u0434\u043d\u0456 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438":"materials","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 18650":"batteries-18650","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 21700":"batteries-21700","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 32650":"batteries-32650","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 Li-Po":"batteries-li-po","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 LiFePo4":"batteries-lifepo4"}[e]))(t);return(0,m.jsx)(b,{category:t,children:(0,m.jsxs)(j,{children:[(0,m.jsxs)(w,{href:r,category:t,children:[(0,m.jsx)("h2",{children:t}),(0,m.jsx)("svg",{children:(0,m.jsx)("use",{href:`${y.A}#icon-arrow-right`})})]}),(0,m.jsx)(f,{category:t})]})})},$=x.Ay.h1`
  ${h.R}
`,A=["\u0410\u043a\u0446\u0456\u0457","\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438","\u0413\u043e\u0442\u043e\u0432\u0456 \u0431\u0430\u0442\u0430\u0440\u0435\u0457","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f FPV-\u0434\u0440\u043e\u043d\u0456\u0432","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0440\u0430\u043d\u043f\u043e\u0440\u0442\u0443","\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0456\u0433\u0440\u0430\u0448\u043e\u043a","\u041f\u0440\u0438\u043b\u0430\u0434\u0438","\u0420\u043e\u0437\u0445\u0456\u0434\u043d\u0456 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438"],C=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)($,{children:"\u0410\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442"}),A.map((e=>(0,m.jsx)(v,{category:e},e)))]}),k=()=>{const e=(0,o.Y)(),{isLoading:t,error:r}=(0,s.pn)();return(0,i.useEffect)((()=>{e((0,n.bA)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[t&&(0,m.jsx)(a.X,{}),!t&&r?(0,m.jsx)(d.e,{}):(0,m.jsx)(C,{})]})}},5330:(e,t,r)=>{r.d(t,{g:()=>i});const i=(e,t)=>{if("string"===typeof t){const[r,i]=t.split("-").map(Number);return`${Math.round(r-r*e/100)} - ${Math.round(i-i*e/100)}`}return Math.round(t-t*e/100)}}}]);
//# sourceMappingURL=92.7d3d8945.chunk.js.map