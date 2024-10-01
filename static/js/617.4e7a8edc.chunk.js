"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[617],{9514:(e,i,t)=>{t.d(i,{e:()=>o});const r=t.p+"static/media/something-went-wrong.0b7d80f73eb86329daf4.gif";var n=t(579);const o=()=>(0,n.jsx)("div",{style:{width:"100%",backgroundColor:"#fff"},children:(0,n.jsx)("img",{src:r,alt:"error_image",style:{margin:"0 auto"}})})},4664:(e,i,t)=>{t.d(i,{Z:()=>N});var r=t(5475),n=t(3768),o=t(616),s=t(9909),d=t(5330),a=t(972),p=t(1274),x=t(3970),c=t(2972),l=t(4140),h=t(2464),m=t(3370),g=t(3156),u=t(4574);const f=u.AH`
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
`,j=u.AH`
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
`,v=(0,u.Ay)(g.sOK)`
  ${f};
`,y=(0,u.Ay)(g.yeC)`
  ${f};
`,b=u.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,w=u.Ay.img`
  width: 100%;
  height: 144px;
  border-radius: 10px;
  object-fit: cover;

  @media screen and (min-width: 1280px) {
    height: ${e=>"\u0410\u043a\u0446\u0456\u0457"===e.category?"270px":"230px"};
    border-radius: 16px;
  }
`,A=u.Ay.p`
  height: 40px;
  font-size: 10px;
  margin-top: 5px;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    height: 66px;
    font-size: 18px;
    margin-top: 15px;
  }
`,$=u.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;

  @media screen and (min-width: 1280px) {
    height: 70px;
  }
`,C=u.Ay.span`
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`,z=u.Ay.span`
  text-decoration-line: line-through;
  font-size: 10px;
  color: ${e=>e.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`,k=u.Ay.button`
  ${j}
`,H=u.Ay.button`
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
`;var M=t(579);const N=e=>{let{product:i,category:t}=e;const g=(0,a.Y)(),{codeOfGood:u,image:f,name:j,price:N,discount:O,sale:_,capacity:L,quantity:q}=i,{isLoggedIn:B}=(0,s.As)(),F=(0,a.N)(m.rM).some((e=>e.codeOfGood===u)),P=(0,a.N)(h.Cp).some((e=>e===u)),Y=_?(0,d.g)(O,N):N,G=()=>{g(P?(0,p.C$)(u):(0,p.Pj)(u))};return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(b,{children:[P?(0,M.jsx)(y,{onClick:G}):(0,M.jsx)(M.Fragment,{children:B?(0,M.jsx)(v,{onClick:G}):(0,M.jsx)(v,{onClick:()=>{B||(g((0,l.MY)(!0)),document.body.style.overflow="hidden")}})}),(0,M.jsxs)(r.N_,{to:`../assortment/${u}`,children:[(0,M.jsx)(w,{category:t,loading:"lazy",src:f[0]||o,alt:j,onError:e=>{e.currentTarget.src=`${o}`}}),(0,M.jsx)(A,{children:j})]}),(0,M.jsxs)($,{children:[(0,M.jsxs)(C,{children:[Y," \u0433\u0440\u043d"]}),_&&(0,M.jsxs)(z,{children:[N," \u0433\u0440\u043d"]})]}),L?(0,M.jsx)(r.N_,{to:`../assortment/${u}`,children:(0,M.jsx)(k,{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"})}):F?(0,M.jsx)(k,{onClick:()=>{g((0,c.BW)(!0))},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):q>0?(0,M.jsx)(k,{onClick:()=>{g((0,x.B5)({...i,price:_?Y:N,capacityKey:"",selectedSealing:!1,selectedHolder:!1,quantityOrdered:1,totalPrice:_?Y:N})),n.Ay.success("\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0430!")},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):(0,M.jsx)(H,{disabled:!0,children:"\u041d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})]})})}},8420:(e,i,t)=>{t.d(i,{a:()=>m});var r=t(3235),n=t(9896),o=t(3792),s=t(3832),d=t(972),a=t(1274),p=t(4574),x=t(5475);const c=p.Ay.ul`
  display: grid;
  width: fit-content;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }

  li:last-child {
    a > span {
      &::after {
        display: none;
      }
    }
  }
`,l=(0,p.Ay)(x.k2)`
  display: flex;
  gap: 5px;
  align-items: center;
  transition: ${e=>e.theme.transition.main};

  svg {
    width: 20px;
    height: 20px;

    @media screen and (min-width: 1280px) {
      width: 24px;
      height: 24px;
    }
  }

  span {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      background: ${e=>e.theme.colors.textPrimary};
      width: 68px;
      height: 1px;
      left: 0px;
      bottom: -6px;
      transition: ${e=>e.theme.transition.main};

      @media screen and (min-width: 1280px) {
        width: 96px;
        bottom: -9px;
      }
    }
  }

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverColor};

    span {
      &::after {
        background: ${e=>e.theme.colors.hoverColor};
      }
    }
  }

  &.active {
    color: ${e=>e.theme.colors.hoverColor};

    span {
      &::after {
        background: ${e=>e.theme.colors.hoverColor};
      }
    }
  }
`;var h=t(579);const m=()=>{const e=(0,d.Y)();return(0,h.jsx)("aside",{children:(0,h.jsxs)(c,{children:[(0,h.jsx)("li",{children:(0,h.jsxs)(l,{to:"../profile",children:[(0,h.jsx)(r.A,{}),(0,h.jsx)("span",{children:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(l,{to:"../orders",children:[(0,h.jsx)(n.A,{}),(0,h.jsx)("span",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(l,{to:"../favorites",children:[(0,h.jsx)(o.A,{}),(0,h.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u043d\u0435"})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(l,{to:"../",onClick:()=>{e((0,a.je)())},children:[(0,h.jsx)(s.A,{}),(0,h.jsx)("span",{children:"\u0412\u0438\u0439\u0442\u0438"})]})})]})})}},9659:(e,i,t)=>{t.r(i),t.d(i,{default:()=>M});var r=t(5043),n=t(9909),o=t(972),s=t(2464),d=t(4576),a=t(8935),p=t(9514),x=t(5237),c=t(1850),l=t(8420),h=t(4664),m=t(4574),g=t(1636);const u=m.Ay.ul`
  display: grid;
  gap: 16px 12px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 1280px) {
    gap: 30px 20px;
    grid-template-columns: repeat(3, 1fr);
  }
`,f=m.Ay.li`
  max-width: 250px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(rgba(213, 213, 213, 1), rgba(241, 241, 241, 0));
  padding: 5px 5px 10px;
  border-radius: 12px;
  position: relative;
  z-index: 0;
  transition: ${e=>e.theme.transition.main};
  cursor: pointer;

  ${g.yq}
  &::after {
    border-radius: 12px;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 10px 20px;
    border-radius: 20px;

    &::after {
      border-radius: 20px;
    }
  }
`;var j=t(579);const v=e=>{let{favorites:i}=e;return(0,j.jsx)(u,{children:null===i||void 0===i?void 0:i.map((e=>(0,j.jsx)(f,{children:(0,j.jsx)(h.Z,{product:e,category:""})},e.codeOfGood)))})},y=m.Ay.div`
  padding: 20px;
  display: grid;
  row-gap: 20px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    grid-template-columns: 1fr 790px;
    font-size: 15px;
  }
`,b=m.Ay.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;var w=t(3792),A=t(5475);const $=m.Ay.div`
  height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    fill: ${e=>e.theme.colors.greyBackgroundPaper};
    opacity: 0.5;
  }

  p {
    position: relative;
    z-index: 1;
    text-align: center;
  }
`,C=m.Ay.p`
  padding-top: 30vh;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    padding-top: 28vh;
    font-size: 36px;
    margin-bottom: 15px;
  }
`,z=(0,m.Ay)(A.N_)`
  position: relative;
  z-index: 1;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  padding: 8px 6px;
  margin-top: 15px;
  background: ${e=>e.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    padding: 14px 10px;
    border-radius: 12px;
    margin-top: 25px;
  }

  :hover,
  :focus {
    background: ${e=>e.theme.colors.hoverColor};
  }
`,k=()=>(0,j.jsxs)($,{children:[(0,j.jsx)(C,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u0440\u0430\u043d\u0438\u0445 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439"}),(0,j.jsxs)("p",{children:["\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u0438, \u044f\u043a\u0456 \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u043b\u0438\u0441\u044f \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u043e\u0431\u0440\u0430\u043d\u0438\u0445, ",(0,j.jsx)("br",{})," \u0449\u043e\u0431 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0457\u0445 \u043f\u0456\u0437\u043d\u0456\u0448\u0435."]}),(0,j.jsx)(z,{to:"/assortment",children:"\u0414\u043e \u0430\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0443"}),(0,j.jsx)(w.A,{})]}),H=()=>{const e=(0,x.useMediaQuery)({query:"(min-width:1280px)"}),i=(0,o.N)(c.VW);return(0,j.jsxs)(y,{children:[e&&(0,j.jsx)(l.a,{}),null!==i&&void 0!==i&&i.length?(0,j.jsxs)("div",{children:[(0,j.jsx)(b,{children:"\u041e\u0431\u0440\u0430\u043d\u0435"}),(0,j.jsx)(v,{favorites:i})]}):(0,j.jsx)(k,{})]})},M=()=>{const e=(0,o.Y)(),{isLoading:i,error:t}=(0,n.pn)(),x=(0,o.N)(s.Cp);return(0,r.useEffect)((()=>{e((0,d.d$)(x))}),[e,x]),(0,j.jsxs)(j.Fragment,{children:[i&&(0,j.jsx)(a.X,{}),!i&&t?(0,j.jsx)(p.e,{}):(0,j.jsx)(H,{})]})}},5330:(e,i,t)=>{t.d(i,{g:()=>r});const r=(e,i)=>{if("string"===typeof i){const[t,r]=i.split("-").map(Number);return`${Math.round(t-t*e/100)} - ${Math.round(r-r*e/100)}`}return Math.round(i-i*e/100)}},3792:(e,i,t)=>{var r=t(4994);i.A=void 0;var n=r(t(39)),o=t(579);i.A=(0,n.default)((0,o.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorderOutlined")},9896:(e,i,t)=>{var r=t(4994);i.A=void 0;var n=r(t(39)),o=t(579);i.A=(0,n.default)((0,o.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"}),"HistoryOutlined")},3832:(e,i,t)=>{var r=t(4994);i.A=void 0;var n=r(t(39)),o=t(579);i.A=(0,n.default)((0,o.jsx)("path",{d:"m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5z"}),"LogoutOutlined")}}]);
//# sourceMappingURL=617.4e7a8edc.chunk.js.map