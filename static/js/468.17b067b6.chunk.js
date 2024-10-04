"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[468],{9514:(e,i,n)=>{n.d(i,{e:()=>r});const t=n.p+"static/media/something-went-wrong.0b7d80f73eb86329daf4.gif";var s=n(579);const r=()=>(0,s.jsx)("div",{style:{width:"100%",backgroundColor:"#fff"},children:(0,s.jsx)("img",{src:t,alt:"error_image",style:{margin:"0 auto"}})})},8420:(e,i,n)=>{n.d(i,{a:()=>m});var t=n(3235),s=n(9896),r=n(3792),d=n(3832),o=n(972),p=n(1274),a=n(4574),x=n(5475);const l=a.Ay.ul`
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
`,c=(0,a.Ay)(x.k2)`
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
`;var h=n(579);const m=()=>{const e=(0,o.Y)();return(0,h.jsx)("aside",{children:(0,h.jsxs)(l,{children:[(0,h.jsx)("li",{children:(0,h.jsxs)(c,{to:"../profile",children:[(0,h.jsx)(t.A,{}),(0,h.jsx)("span",{children:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(c,{to:"../orders",children:[(0,h.jsx)(s.A,{}),(0,h.jsx)("span",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(c,{to:"../favorites",children:[(0,h.jsx)(r.A,{}),(0,h.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u043d\u0435"})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(c,{to:"../",onClick:()=>{e((0,p.je)())},children:[(0,h.jsx)(d.A,{}),(0,h.jsx)("span",{children:"\u0412\u0438\u0439\u0442\u0438"})]})})]})})}},644:(e,i,n)=>{n.r(i),n.d(i,{default:()=>X});var t=n(5043),s=n(8935),r=n(972),d=n(2464),o=n(1274),p=n(5237),a=n(8420),x=n(7980);var l=n(9605),c=n(616),h=n(7838),m=n(1338),g=n(4574),f=n(5475);const j=(0,g.Ay)(f.N_)`
  grid-row: 1/4;
  margin-right: 6px;

  @media screen and (min-width: 1280px) {
    margin-right: 10px;
  }
`,u=g.Ay.img`
  width: 54px;
  height: 54px;

  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
  }
`,w=(0,g.Ay)(f.N_)`
  grid-row: 1/3;
  height: 36px;
  overflow: hidden;
  color: ${e=>e.theme.colors.hoverColor};

  @media screen and (min-width: 1280px) {
    height: 54px;
  }
`,y=g.Ay.div`
  grid-column: 2/6;
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 5px;
  font-size: 8px;

  @media screen and (min-width: 1280px) {
    font-size: 11px;
    gap: 10px;
  }
`,v=g.Ay.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(99, 99, 99);

  svg {
    width: 12px;
    height: 12px;

    @media screen and (min-width: 1280px) {
      width: 19px;
      height: 19px;
    }
  }
`,b=g.Ay.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media screen and (min-width: 1280px) {
    gap: 5px;
  }

  svg {
    color: ${e=>e.theme.colors.success};
    width: 12px;
    height: 12px;

    @media screen and (min-width: 1280px) {
      width: 16px;
      height: 16px;
    }
  }
`;var A=n(579);const z=e=>{let{el:i}=e;const{codeOfGood:n,name:t,image:s,price:r,quantityOrdered:d,totalPrice:o,capacityKey:p,selectedSealing:a,selectedHolder:x}=i;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j,{to:`../assortment/${n}`,children:(0,A.jsx)(u,{loading:"lazy",src:s[0]||c,alt:t,onError:e=>{e.currentTarget.src=`${c}`}})}),(0,A.jsx)(w,{to:`../assortment/${n}`,children:t}),(0,A.jsxs)("p",{children:[r," \u0433\u0440\u043d"]}),(0,A.jsxs)("p",{children:[d," \u0448\u0442"]}),(0,A.jsxs)("p",{children:[o," \u0433\u0440\u043d"]}),p&&(0,A.jsxs)(y,{children:[(0,A.jsxs)(v,{children:[(0,A.jsx)(h.A,{}),(0,A.jsxs)("p",{children:[p,"Ah"]})]}),a&&(0,A.jsxs)(b,{children:[(0,A.jsx)(m.A,{}),(0,A.jsx)("p",{children:"\u0413\u0435\u0440\u043c\u0435\u0442\u0438\u0437\u0430\u0446\u0456\u044f"})]}),x&&(0,A.jsxs)(b,{children:[(0,A.jsx)(m.A,{}),(0,A.jsx)("p",{children:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0445\u043e\u043b\u0434\u0435\u0440\u0438"})]})]})]})},$=g.Ay.p`
  font-weight: 700;
  color: ${e=>{switch(e.type){case"\u041d\u043e\u0432\u0435":return e.theme.colors.warning;case"\u0412 \u0440\u043e\u0431\u043e\u0442\u0456":return e.theme.colors.hoverColor;case"\u0421\u043a\u0430\u0441\u043e\u0432\u0430\u043d\u043e":return e.theme.colors.error;case"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e":return e.theme.colors.success;default:return}}};
`,k=g.Ay.div`
  grid-column: 1/6;
`,C=g.Ay.div`
  grid-column: 1/6;
  background: rgba(225, 225, 225, 0.7);
  padding: 5px 10px;
`,N=g.Ay.ul`
  border-bottom: 1px solid ${e=>e.theme.colors.textDisabled};

  li {
    display: grid;
    grid-template-columns: 60px 100px repeat(3, 1fr);
    padding-top: 5px;
    padding-bottom: 5px;

    @media screen and (min-width: 1280px) {
      grid-template-columns: 100px 250px repeat(3, 1fr);
      padding-top: 15px;
      padding-bottom: 15px;
    }

    :not(:last-child) {
      border-bottom: 1px solid rgba(157, 157, 157, 0.3);
    }
  }
`,_=g.Ay.div`
  width: 100%;
  display: grid;
  gap: 4px;
  padding: 5px 8px;
  border-radius: 8px;

  @media screen and (min-width: 1280px) {
    gap: 8px;
    padding: 10px;
  }
`,O=g.Ay.div`
  text-align: unset;
`,E=g.Ay.span`
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,F=g.Ay.span`
  font-weight: 600;
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,D=g.Ay.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-top: 20px;
  }
`,P=g.Ay.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  span {
    color: ${e=>e.discount?e.theme.colors.success:"inherit"};
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,S=g.Ay.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    text-align: end;
    border: none;
    font-size: 24px;
  }
`;var Y=n(9514);const q=e=>{let{el:i}=e;const{numberOfOrder:n,status:s,date:p,together:a}=i,c=(0,r.N)(d.L),h=(0,r.N)(d.zm),m=(e=>`${e.slice(8,10)}.${e.slice(5,7)}.${e.slice(0,4)}`)(p),g=((e,i)=>e.find((e=>{let{numberOfOrder:n}=e;return n===i})))(c,n),f=!a||(0,l.E)(a),j=!g||(0,l.E)(g.total),u=!g||(0,l.E)(g.discountValue),w=(0,r.Y)(),[y,v]=(0,t.useState)(!1),b=async e=>{y||(c.length<1||!g)&&w((0,o.f1)(n)),v(!y)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("p",{children:["\u2116",n]}),(0,A.jsx)($,{type:s,children:s}),(0,A.jsx)("p",{children:m}),(0,A.jsxs)("p",{children:[f," \u0433\u0440\u043d"]}),y?(0,A.jsx)(x.oSv,{onClick:b}):(0,A.jsx)(x.fwg,{onClick:b}),y&&(h?(0,A.jsx)(k,{children:(0,A.jsx)(Y.e,{})}):(0,A.jsxs)(C,{children:[(0,A.jsx)(N,{children:null===g||void 0===g?void 0:g.cartItems.map((e=>(0,A.jsx)("li",{children:(0,A.jsx)(z,{el:e})},e._id)))}),(0,A.jsxs)(_,{children:[(0,A.jsxs)(O,{children:[(0,A.jsx)(E,{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430: "}),(0,A.jsx)(F,{children:null===g||void 0===g?void 0:g.deliveryType})]}),(0,A.jsxs)(O,{children:[(0,A.jsx)(E,{children:"\u0410\u0434\u0440\u0435\u0441\u0430: "}),(0,A.jsxs)(F,{children:[null===g||void 0===g?void 0:g.city,", ",null===g||void 0===g?void 0:g.warehouse]})]}),(0,A.jsxs)(O,{children:[(0,A.jsx)(E,{children:"\u0421\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438: "}),(0,A.jsx)(F,{children:null===g||void 0===g?void 0:g.payment})]}),(0,A.jsxs)(D,{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430:",(0,A.jsxs)("span",{children:[" ",j," \u0433\u0440\u043d"]})]}),(0,A.jsxs)(P,{discount:null===g||void 0===g?void 0:g.discountValue,children:["\u0417\u043d\u0438\u0436\u043a\u0430:",(0,A.jsxs)("span",{children:[" - ",u," \u0433\u0440\u043d"]})]}),(0,A.jsxs)(S,{children:["\u0420\u0430\u0437\u043e\u043c:",(0,A.jsxs)("span",{children:[f," \u0433\u0440\u043d"]})]})]})]}))]})};var T=n(8028);const V=g.Ay.div`
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
`,B=g.Ay.p`
  padding-top: 30vh;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    padding-top: 28vh;
    font-size: 36px;
    margin-bottom: 15px;
  }
`,G=(0,g.Ay)(f.N_)`
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
`,H=()=>(0,A.jsxs)(V,{children:[(0,A.jsx)(B,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439"}),(0,A.jsx)("p",{children:"\u0429\u043e\u0431 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c \u0442\u0430 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0443 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u043d\u0438\u0445, \u0437\u0434\u0456\u0439\u0441\u043d\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u043f\u0435\u0440\u0448\u0443 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 ."}),(0,A.jsx)(G,{to:"/assortment",children:"\u0414\u043e \u0430\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0443"}),(0,A.jsx)(T.A,{})]}),I=g.Ay.div`
  padding: 20px;
  display: grid;
  row-gap: 20px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    grid-template-columns: 1fr 790px;
    font-size: 15px;
  }
`,K=g.Ay.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`,L=g.Ay.ul`
  font-size: 10px;
  font-weight: 400;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`,M=g.Ay.li`
  font-size: 10px;
  font-weight: 400;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  display: grid;
  grid-template-columns: repeat(4, 1fr) 15px;
  row-gap: 10px;

  :first-child {
    font-weight: 600;
  }

  p:not(:first-child) {
    text-align: center;
  }

  p + svg {
    width: 15px;
    height: 15px;
    transition: ${e=>e.theme.transition.main};

    &:hover,
    :focus {
      cursor: pointer;
      transform: scale(1.1);
      fill: ${e=>e.theme.colors.hoverColor};
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 15px;
    padding: 20px 0px;
    grid-template-columns: repeat(4, 1fr) 20px;
    row-gap: 20px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,Q=()=>{const e=(0,r.N)(d.gr),i=(0,r.N)(d.jm),n=(0,p.useMediaQuery)({query:"(min-width:1280px)"});return(0,A.jsxs)(I,{children:[n&&(0,A.jsx)(a.a,{}),i?(0,A.jsx)(Y.e,{}):e.length?(0,A.jsxs)("div",{children:[(0,A.jsx)(K,{children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,A.jsxs)(L,{children:[(0,A.jsxs)(M,{children:[(0,A.jsx)("p",{children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,A.jsx)("p",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,A.jsx)("p",{children:"\u0414\u0430\u0442\u0430"}),(0,A.jsx)("p",{children:"\u0421\u0443\u043c\u0430"})]}),e.map((e=>(0,A.jsx)(M,{children:(0,A.jsx)(q,{el:e})},e.numberOfOrder)))]})]}):(0,A.jsx)(H,{})]})},X=()=>{const e=(0,r.Y)(),i=(0,r.N)(d.Di),n=(0,r.N)(d.zF);return(0,t.useEffect)((()=>{e((0,o.mr)())}),[e]),(0,A.jsxs)(A.Fragment,{children:[(i||n)&&(0,A.jsx)(s.X,{}),!i&&(0,A.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=468.17b067b6.chunk.js.map