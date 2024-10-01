"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[478],{9514:(e,r,n)=>{n.d(r,{e:()=>o});const t=n.p+"static/media/something-went-wrong.0b7d80f73eb86329daf4.gif";var i=n(579);const o=()=>(0,i.jsx)("div",{style:{width:"100%",backgroundColor:"#fff"},children:(0,i.jsx)("img",{src:t,alt:"error_image",style:{margin:"0 auto"}})})},4664:(e,r,n)=>{n.d(r,{Z:()=>O});var t=n(5475),i=n(3768),o=n(616),s=n(9909),d=n(5330),a=n(972),p=n(1274),x=n(3970),c=n(2972),l=n(4140),h=n(2464),g=n(3370),m=n(3156),u=n(4574);const f=u.AH`
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
`,y=(0,u.Ay)(m.sOK)`
  ${f};
`,b=(0,u.Ay)(m.yeC)`
  ${f};
`,v=u.Ay.div`
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
`,k=u.Ay.p`
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
`,A=u.Ay.span`
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`,C=u.Ay.span`
  text-decoration-line: line-through;
  font-size: 10px;
  color: ${e=>e.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`,z=u.Ay.button`
  ${j}
`,M=u.Ay.button`
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
`;var N=n(579);const O=e=>{let{product:r,category:n}=e;const m=(0,a.Y)(),{codeOfGood:u,image:f,name:j,price:O,discount:_,sale:G,capacity:P,quantity:q}=r,{isLoggedIn:B}=(0,s.As)(),D=(0,a.N)(g.rM).some((e=>e.codeOfGood===u)),F=(0,a.N)(h.Cp).some((e=>e===u)),E=G?(0,d.g)(_,O):O,H=()=>{m(F?(0,p.C$)(u):(0,p.Pj)(u))};return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(v,{children:[F?(0,N.jsx)(b,{onClick:H}):(0,N.jsx)(N.Fragment,{children:B?(0,N.jsx)(y,{onClick:H}):(0,N.jsx)(y,{onClick:()=>{B||(m((0,l.MY)(!0)),document.body.style.overflow="hidden")}})}),(0,N.jsxs)(t.N_,{to:`../assortment/${u}`,children:[(0,N.jsx)(w,{category:n,loading:"lazy",src:f[0]||o,alt:j,onError:e=>{e.currentTarget.src=`${o}`}}),(0,N.jsx)(k,{children:j})]}),(0,N.jsxs)($,{children:[(0,N.jsxs)(A,{children:[E," \u0433\u0440\u043d"]}),G&&(0,N.jsxs)(C,{children:[O," \u0433\u0440\u043d"]})]}),P?(0,N.jsx)(t.N_,{to:`../assortment/${u}`,children:(0,N.jsx)(z,{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"})}):D?(0,N.jsx)(z,{onClick:()=>{m((0,c.BW)(!0))},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):q>0?(0,N.jsx)(z,{onClick:()=>{m((0,x.B5)({...r,price:G?E:O,capacityKey:"",selectedSealing:!1,selectedHolder:!1,quantityOrdered:1,totalPrice:G?E:O})),i.Ay.success("\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0430!")},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):(0,N.jsx)(M,{disabled:!0,children:"\u041d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})]})})}},4260:(e,r,n)=>{n.d(r,{G:()=>g});var t=n(5512),i=n(1850),o=n(4664),s=n(4574),d=n(1636);const a=s.Ay.ul`
  display: grid;
  gap: 16px 12px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 1280px) {
    gap: 30px 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`,p=s.Ay.li`
  max-width: 250px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${e=>e.theme.colors.greyPrimary};
  padding: 5px 5px 10px;
  border-radius: 12px;
  position: relative;
  z-index: 0;
  transition: ${e=>e.theme.transition.main};

  ${d.yq}
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
`;var x=n(579);const c=()=>{const e=(0,t.N)(i.VW);return(0,x.jsx)(a,{children:e.map((e=>(0,x.jsx)(p,{children:(0,x.jsx)(o.Z,{product:e,category:""})},e.codeOfGood)))})},l=s.Ay.div`
  padding: 20px;
  background: ${d.OL};

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
  }
`,h=s.Ay.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 40px;
  }
`,g=e=>{let{category:r}=e;return(0,x.jsx)("section",{children:(0,x.jsxs)(l,{category:r,children:[(0,x.jsx)(h,{children:r}),(0,x.jsx)(c,{})]})})}},9329:(e,r,n)=>{n.d(r,{d:()=>m});var t=n(5043),i=n(3052),o=n(7353),s=n(6104),d=n(4574),a=n(5475),p=n(1636);const x=d.Ay.nav`
  padding: 30px 110px 0px;
`,c=d.Ay.ul`
  height: 74px;
  display: flex;
  place-items: center;
  place-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${e=>e.theme.colors.gradientSubNavGrey};

  li:not(:nth-last-child(-n + 2)) {
    position: relative;
    display: flex;

    &:after {
      content: '';
      position: absolute;
      background: ${e=>e.theme.colors.greyBackgroundPaper};
      width: 1px;
      height: 50px;
      right: -1px;
      top: 12px;
    }
  }

  li:last-child {
    font-size: 16px;
    width: 88.2px;

    background: ${e=>e.theme.colors.hoverColor};
    border-radius: 0px 20px 20px 0px;
  }

  li:first-child {
    border-radius: 20px 0px 0px 20px;
  }
`,l=(0,d.Ay)(a.k2)`
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 28px 6px;
  border-radius: inherit;
  &.active {
    background: ${e=>e.theme.colors.secondary};
    box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`,h=d.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    transform: ${p.l};
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${e=>e.theme.colors.textPrimary};
    transition: ${e=>e.theme.transition.main};
  }

  &:hover svg {
    transform: rotate(270deg) scale(1.4);
  }
`;var g=n(579);const m=()=>{const[e,r]=(0,t.useState)(null),n=Boolean(e),d=()=>{r(null)};return(0,g.jsxs)("section",{children:[(0,g.jsx)(x,{children:(0,g.jsxs)(c,{children:[(0,g.jsx)("li",{children:(0,g.jsxs)(l,{to:"../batteries",children:[(0,g.jsx)("span",{children:"\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438"}),(0,g.jsx)(h,{type:"button",handleOpen:e,onClick:e=>{e.preventDefault(),r(e.currentTarget)},"aria-owns":n?"desktop-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,children:(0,g.jsx)("svg",{children:(0,g.jsx)("use",{href:`${o.A}#arrow-left`})})})]})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../assembly",children:(0,g.jsx)("span",{children:"\u0413\u043e\u0442\u043e\u0432\u0456 \u0431\u0430\u0442\u0430\u0440\u0435\u0457"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../batteries-for-fpv",children:(0,g.jsx)("span",{children:"\u0414\u043b\u044f FPV-\u0434\u0440\u043e\u043d\u0456\u0432"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../batteries-for-transport",children:(0,g.jsx)("span",{children:"\u0414\u043b\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0440\u0430\u043d\u043f\u043e\u0440\u0442\u0443"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../batteries-for-toys",children:(0,g.jsx)("span",{children:"\u0414\u043b\u044f \u0456\u0433\u0440\u0430\u0448\u043e\u043a"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../devices",children:(0,g.jsx)("span",{children:"\u041f\u0440\u0438\u043b\u0430\u0434\u0438"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../materials",children:(0,g.jsx)("span",{children:"\u0420\u043e\u0437\u0445\u0456\u0434\u043d\u0456 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../3D-print",children:(0,g.jsx)("span",{children:"3D \u0434\u0440\u0443\u043a"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(l,{to:"../sales",children:(0,g.jsx)("span",{children:"\u0410\u043a\u0446\u0456\u0457"})})})]})}),(0,g.jsx)(i.A,{id:"desktop-sub-menu",anchorEl:e,open:n,onClose:d,onClick:d,"aria-expanded":n?"true":void 0,sx:{"& .MuiMenu-paper":{bgcolor:"background.default",width:"185px",pl:"20px",pr:"20px",borderRadius:"18px"}},children:(0,g.jsx)(s.o,{handleClick:n=>{r(n?e:null)}})})]})}},5377:(e,r,n)=>{n.r(r),n.d(r,{default:()=>h});var t=n(5043),i=n(5237),o=n(972),s=n(4576),d=n(9909),a=n(8935),p=n(9514),x=n(9329),c=n(4260),l=n(579);const h=()=>{const e=(0,o.Y)(),{isLoading:r,error:n}=(0,d.pn)(),h=(0,i.useMediaQuery)({query:"(min-width:1280px)"});return(0,t.useEffect)((()=>{e((0,s.$Q)())}),[e]),(0,l.jsxs)(l.Fragment,{children:[!r&&!n&&h&&(0,l.jsx)(x.d,{}),r&&(0,l.jsx)(a.X,{}),!r&&n?(0,l.jsx)(p.e,{}):(0,l.jsx)(c.G,{category:"\u0413\u043e\u0442\u043e\u0432\u0456 \u0431\u0430\u0442\u0430\u0440\u0435\u0457"})]})}},5330:(e,r,n)=>{n.d(r,{g:()=>t});const t=(e,r)=>{if("string"===typeof r){const[n,t]=r.split("-").map(Number);return`${Math.round(n-n*e/100)} - ${Math.round(t-t*e/100)}`}return Math.round(r-r*e/100)}}}]);
//# sourceMappingURL=478.1e9e8f05.chunk.js.map