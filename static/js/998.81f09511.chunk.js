"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[998],{8420:(e,t,o)=>{o.d(t,{a:()=>m});var i=o(3235),n=o(9896),r=o(3792),a=o(3832),s=o(972),p=o(1274),d=o(4574),x=o(5475);const l=d.Ay.ul`
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
`,h=(0,d.Ay)(x.k2)`
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
`;var c=o(579);const m=()=>{const e=(0,s.Y)();return(0,c.jsx)("aside",{children:(0,c.jsxs)(l,{children:[(0,c.jsx)("li",{children:(0,c.jsxs)(h,{to:"../profile",children:[(0,c.jsx)(i.A,{}),(0,c.jsx)("span",{children:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)(h,{to:"../orders",children:[(0,c.jsx)(n.A,{}),(0,c.jsx)("span",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)(h,{to:"../favorites",children:[(0,c.jsx)(r.A,{}),(0,c.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u043d\u0435"})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)(h,{to:"../",onClick:()=>{e((0,p.je)())},children:[(0,c.jsx)(a.A,{}),(0,c.jsx)("span",{children:"\u0412\u0438\u0439\u0442\u0438"})]})})]})})}},8998:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ze});var i=o(5043),n=o(5237),r=o(8420),a=o(9650),s=o(3336),p=o(1806),d=o(3460),x=o(8076),l=o(2420),h=o(8877),c=o(9909),m=o(4574);const u=m.Ay.button`
  position: relative;
  width: 104px;
  height: 26px;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    width: 160px;
    height: 36px;
    margin-top: 14px;
    font-size: 16px;
  }

  &::after {
    position: absolute;
    left: 18%;
    bottom: 3px;
    content: '';
    width: 82%;
    height: 1px;
    border-radius: 1px;
    background-color: currentColor;

    @media screen and (min-width: 1280px) {
      height: 2px;
    }
  }

  svg {
    position: relative;
    top: 4px;
    width: 16px;
    height: 16px;
    margin-right: 2px;

    @media screen and (min-width: 1280px) {
      top: 6px;
      width: 24px;
      height: 24px;
    }
  }

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverColor};
  }
`;var g=o(579);const w=e=>{let{handleShowForm:t}=e;const o=(0,n.useMediaQuery)({query:"(min-width:1280px)"}),{userData:{firstName:i,lastName:r,patronymic:m,tel:w,email:f}}=(0,c.As)();function b(e,t){return{userData:e,value:t}}const y=[b("\u0406\u043c\u2019\u044f",i),b("\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",r),b("\u041f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456",m),b("\u041c\u043e\u0431\u0456\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",w),b("Email",f),b("\u041f\u0430\u0440\u043e\u043b\u044c","*********")];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.A,{component:s.A,sx:{backgroundColor:e=>e.palette.background.default,boxShadow:"0"},children:(0,g.jsx)(p.A,{sx:{minWidth:175},"aria-label":"user data table",children:(0,g.jsx)(d.A,{children:y.map((e=>(0,g.jsxs)(x.A,{children:[(0,g.jsx)(l.A,{style:{fontSize:o?"15px":"10px",padding:o?"20px 20px 20px 0":"10px 10px 10px 0",borderBottom:"1px solid rgba(91, 91, 91, 0.5)"},component:"th",scope:"row",children:e.userData}),(0,g.jsx)(l.A,{style:{fontSize:o?"15px":"10px",fontWeight:"600",textAlign:"left",padding:o?"20px":"10px",borderBottom:"1px solid rgba(91, 91, 91, 0.5)"},align:"right",children:e.value})]},e.userData)))})})}),(0,g.jsxs)(u,{type:"button",onClick:t,children:[(0,g.jsx)(h.CPv,{}),"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0456"]})]})};var f=o(5512),b=o(3768),y=o(3892),j=o(7380),v=(o(6088),o(1274)),A=o(899),C=o(7221);const z=A.Ik().shape({firstName:A.Yj().min(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").max(20,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(C.VU,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0435\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"),lastName:A.Yj().min(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").max(30,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(C.VU,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0435\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"),patronymic:A.Yj().min(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").max(30,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(C.VU,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0435\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430")});var k=o(6706),S=o(8043),$=o(8561),P=o(6605),N=o(8329),F=o(7392),M=o(1906),D=o(3559),V=o(3632);const q=A.Ik().shape({password:A.Yj().min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0438\u0439 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").max(20,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u0434\u043e\u0432\u0448\u0438\u0439 20 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0442\u0430\u0440\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim(),newPassword:A.Yj().notOneOf([A.KR("password"),null],"\u0421\u0442\u0430\u0440\u0438\u0439 \u0456 \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u0456 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0456").min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0438\u0439 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").max(20,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u0434\u043e\u0432\u0448\u0438\u0439 20 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim(),newPasswordConfirmation:A.Yj().oneOf([A.KR("newPassword")],"\u041d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043e").required("\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim()});var I=o(7134);const R=m.Ay.div`
  max-width: 350px;

  @media (min-width: 1280px) {
    max-width: 687px;
  }
`,Y=(0,m.Ay)(y.lV)`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`,O=m.Ay.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 400;

  @media (min-width: 1280px) {
    font-size: 15px;
  }
`,B=m.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,W=(0,m.Ay)(y.D0)`
  width: 160px;
  height: 22px;
  padding: 4px 8px;
  color: ${e=>e.theme.colors.textPrimary};
  border: 1px solid ${e=>e.theme.colors.greyOutput};
  border-radius: 8px;
  background: transparent;

  &:focus {
    color: ${e=>e.theme.colors.textPrimary};
    outline: none;
    border: 1px solid ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 34px;
  }
`,Q=(0,m.Ay)(y.Kw)`
  color: ${e=>e.theme.colors.error};
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`,_=()=>{const e=(0,n.useMediaQuery)({query:"(min-width: 1280px)"}),[t,o]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1),[s,p]=(0,i.useState)(!1),[d,x]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),m=()=>{o((e=>!e))};return(0,g.jsx)("div",{children:(0,g.jsxs)(S.A,{sx:{"&.MuiPaper-root":{maxWidth:"690px"}},expanded:t,onChange:m,children:[(0,g.jsx)(P.A,{expandIcon:(0,g.jsx)(h.CPv,{}),"aria-controls":"panel3-content",id:"panel3-header",sx:{"& .MuiAccordionSummary-content":{fontSize:e?"16px":"12px",fontWeight:"500",padding:e?"0px 24px":"0px 8px"},"& .MuiAccordionSummary-expandIconWrapper":{svg:{width:e?"24px":"16px",height:e?"24px":"16px",fill:e=>e.palette.text.primary},"&.Mui-expanded":{transform:"rotate(0)"}},"&:hover, &:focus":{color:"hoverColor.main",svg:{fill:"hoverColor.main"},transition:"500ms cubic-bezier(0.4, 0, 0.2, 1)"}},children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,g.jsx)(N.A,{sx:{"&.MuiAccordionDetails-root":{padding:e?"16px":"8px"}},children:(0,g.jsx)(R,{children:(0,g.jsx)(y.l1,{initialValues:{password:"",newPassword:"",newPasswordConfirmation:""},validationSchema:q,onSubmit:async(e,t)=>{c(!0);const o=b.Ay.loading("\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f..."),i=await(0,I.ec)({password:e.password.trim(),newPassword:e.newPassword.trim()});c(!1),b.Ay.dismiss(o),i&&(m(),t.resetForm())},children:(0,g.jsxs)(Y,{id:"form-change-password",children:[(0,g.jsxs)(O,{children:["\u0421\u0442\u0430\u0440\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",(0,g.jsxs)(B,{children:[(0,g.jsx)(W,{name:"password",maxLength:"21",type:r?"text":"password"}),(0,g.jsx)(F.A,{sx:{"&.MuiIconButton-root":{position:"absolute",top:e?"4px":"0px",right:"4px",padding:"2px"}},onClick:()=>a((e=>!e)),children:r?(0,g.jsx)(V.A,{sx:{width:e?"20px":"16px",height:e?"20px":"16px"}}):(0,g.jsx)(D.A,{sx:{width:e?"20px":"16px",height:e?"20px":"16px"}})}),(0,g.jsx)(Q,{name:"password",component:"div"})]})]}),(0,g.jsxs)(O,{children:["\u041d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",(0,g.jsxs)(B,{children:[(0,g.jsx)(W,{name:"newPassword",type:s?"text":"password",maxLength:"21"}),(0,g.jsx)(F.A,{sx:{"&.MuiIconButton-root":{position:"absolute",top:e?"4px":"0px",right:"4px",padding:"2px"}},onClick:()=>p((e=>!e)),children:s?(0,g.jsx)(V.A,{sx:{width:e?"20px":"16px",height:e?"20px":"16px"}}):(0,g.jsx)(D.A,{sx:{width:e?"20px":"16px",height:e?"20px":"16px"}})}),(0,g.jsx)(Q,{name:"newPassword",component:"div"})]})]}),(0,g.jsxs)(O,{children:["\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",(0,g.jsxs)(B,{children:[(0,g.jsx)(W,{name:"newPasswordConfirmation",type:d?"text":"password",maxLength:"21"}),(0,g.jsx)(F.A,{sx:{"&.MuiIconButton-root":{position:"absolute",top:e?"4px":"0px",right:"4px",padding:"2px"}},onClick:()=>x((e=>!e)),children:d?(0,g.jsx)(V.A,{sx:{width:e?"20px":"16px",height:e?"20px":"16px"}}):(0,g.jsx)(D.A,{sx:{width:e?"20px":"16px",height:e?"20px":"16px"}})}),(0,g.jsx)(Q,{name:"newPasswordConfirmation",component:"div"})]})]})]})})})}),(0,g.jsxs)($.A,{children:[(0,g.jsx)(M.A,{sx:{"&.MuiButton-root":{textTransform:"none",fontSize:e?"20px":"13px",color:"hoverColor.main"}},type:"submit",form:"form-change-password",disabled:l,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}),(0,g.jsx)(M.A,{type:"button",onClick:m,sx:{"&.MuiButton-root":{textTransform:"none",fontSize:e?"20px":"13px",color:e=>e.palette.text.primary}},children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"})]})]})})};var K=o(3484);const L=m.Ay.div`
  max-width: 350px;
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    max-width: 687px;
    margin-bottom: 30px;
  }
`,U=(0,m.Ay)(y.lV)`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`,E=m.Ay.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 400;

  @media (min-width: 1280px) {
    font-size: 15px;
  }
`,H=m.Ay.div`
  display: flex;
  flex-direction: column;
`,T=(0,m.Ay)(y.D0)`
  width: 190px;
  height: 22px;
  padding: 4px 8px;
  color: ${e=>e.theme.colors.greyOutput};
  border: 1px solid ${e=>e.theme.colors.greyOutput};
  border-radius: 8px;
  background: transparent;

  &:focus {
    color: ${e=>e.theme.colors.textPrimary};
    outline: none;
    border: 1px solid ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 34px;
  }
`,G=m.DU`
.react-international-phone-input-container .react-international-phone-input{
  &:focus {
    color: ${e=>e.theme.colors.textPrimary};
    outline: none;
    border: 1px solid ${e=>e.theme.colors.hoverColor};
  }
}

  .react-international-phone-input {
    width: 153px;


    @media (min-width: 1280px) {
    width: 354px;
  }
  }

   .react-international-phone-input-container .react-international-phone-country-selector-button{
    width:37px;

    @media (min-width: 1280px) {
    width: 46px;
  }
} 
`,X=(0,m.Ay)(y.Kw)`
  color: ${e=>e.theme.colors.error};
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`,J=m.Ay.div`
  color: ${e=>e.theme.colors.error};
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`,Z=m.Ay.div`
  display: flex;
  gap: 36px;
  margin-top: 10px;

  @media (min-width: 1280px) {
    gap: 90px;
  }
`,ee=m.Ay.button`
  max-width: 138px;
  padding: 12px 22px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  background: ${e=>e.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 200px;
    padding: 18px 30px;
    border-radius: 12px;
    border: none;
    font-size: 20px;
  }
`,te=m.Ay.button`
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`,oe=e=>{let{handleShowForm:t}=e;const o=(0,n.useMediaQuery)({query:"(min-width:1280px)"}),{userData:{firstName:r,lastName:a,patronymic:s,tel:p}}=(0,c.As)(),d={firstName:r,lastName:a,patronymic:s},[x,l]=(0,i.useState)(p),h=(0,k.r)(x),m=(0,f.Y)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(L,{children:[(0,g.jsx)(y.l1,{initialValues:d,validationSchema:z,onSubmit:(e,o)=>{const i={firstName:e.firstName.trim(),lastName:e.lastName.trim(),patronymic:e.patronymic.trim(),tel:x};h&&"+380"!==x?m((0,v.G$)(i)).then((e=>{"fulfilled"===e.meta.requestStatus&&t()})):(0,b.Ay)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",{id:"warning",icon:"\ud83d\udc40",style:{background:`${K.w.colors.secondary}`,color:`${K.w.colors.textPrimary}`}})},children:(0,g.jsxs)(U,{children:[(0,g.jsxs)(E,{children:["\u0406\u043c'\u044f",(0,g.jsxs)(H,{children:[(0,g.jsx)(T,{name:"firstName",type:"text"}),(0,g.jsx)(X,{name:"firstName",component:"div"})]})]}),(0,g.jsxs)(E,{children:["\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",(0,g.jsxs)(H,{children:[(0,g.jsx)(T,{name:"lastName",type:"text"}),(0,g.jsx)(X,{name:"lastName",component:"div"})]})]}),(0,g.jsxs)(E,{children:["\u041f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456",(0,g.jsxs)(H,{children:[(0,g.jsx)(T,{name:"patronymic",type:"text"}),(0,g.jsx)(X,{name:"patronymic",component:"div"})]})]}),(0,g.jsxs)(E,{children:["\u041c\u043e\u0431\u0456\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",(0,g.jsxs)(H,{children:[(0,g.jsx)(j.LR,{style:{"--react-international-phone-height":o?"34px":"22px","--react-international-phone-background-color":"transparent","--react-international-phone-border-color":`${K.w.colors.greyOutput}`,"--react-international-phone-text-color":`${K.w.colors.greyOutput}`,"--react-international-phone-font-size":o?"15px":"10px","--react-international-phone-border-radius":"8px","--react-international-phone-flag-width":o?"24px":"16px","--react-international-phone-flag-height":o?"24px":"16px"},defaultCountry:"ua",hideDropdown:!0,value:x,onChange:e=>l(e)}),!h&&(0,g.jsx)(J,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"})]})]}),(0,g.jsxs)(Z,{children:[(0,g.jsx)(ee,{type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0434\u0430\u043d\u0456"}),(0,g.jsx)(te,{type:"button",onClick:t,children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"})]})]})}),(0,g.jsx)(G,{})]}),(0,g.jsx)(_,{})]})};var ie=o(2464),ne=o(5437),re=o(3536),ae=o(1088),se=o(5018),pe=o(8935);const de=m.Ay.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`,xe=m.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 30px;
    margin-bottom: 20px;
  }
`,le={control:e=>({...e,backgroundColor:"rgba(247, 247, 247, 1)",borderRadius:"6px",borderStyle:"none",width:"320px",minHeight:"30px",height:"30px",border:"1px solid rgba(145, 145, 145, 1)","@media only screen and (min-width: 1280px)":{borderRadius:"8px",width:"328px",minHeight:"45px",height:"45px"}}),menu:e=>({...e,backgroundColor:"rgba(247, 247, 247, 1)",fontSize:"10px",borderRadius:"6px",width:"320px",border:"1px solid rgba(145, 145, 145, 1)","@media only screen and (min-width: 1280px)":{fontSize:"15px",borderRadius:"8px",width:"328px"}}),input:e=>({...e,fontSize:"10px",padding:"0px 14px",margin:0,"@media only screen and (min-width: 1280px)":{fontSize:"15px",padding:"0px 10px"}}),option:(e,t)=>{let{isDisabled:o,isFocused:i,isSelected:n}=t;return{...e,backgroundColor:i?"rgb(255, 208, 100)":void 0,color:o?void 0:"rgb(31, 31, 31);",cursor:o?"not-allowed":"default",padding:"2px 8px",":active":{...e[":active"],backgroundColor:o?void 0:"rgb(255, 208, 100)"},"@media only screen and (min-width: 1280px)":{borderRadius:"8px"}}},placeholder:e=>({...e,fontSize:"10px",fontWeight:"600",padding:"0px 14px",margin:0,color:"rgba(165, 165, 165, 1)","@media only screen and (min-width: 1280px)":{fontSize:"15px",padding:"0px 10px"}}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,fontSize:"10px",margin:0,padding:"8px","@media only screen and (min-width: 1280px)":{fontSize:"15px"}}),indicatorsContainer:e=>({...e,div:{padding:"4px"},"@media only screen and (min-width: 1280px)":{div:{padding:"8px"}}})},he=m.Ay.div`
  display: flex;
  gap: 36px;
  margin-top: 10px;

  @media (min-width: 1280px) {
    gap: 90px;
  }
`,ce=m.Ay.button`
  max-width: 138px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  background: ${e=>e.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 200px;
    padding: 18px 14px;
    border-radius: 12px;
    border: none;
    font-size: 20px;
  }
`,me=m.Ay.button`
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`,ue=e=>{let{text:t,handleShowForm:o}=e;const n=(0,f.Y)(),r=(0,f.N)(ae.Di),a=(0,f.N)(ie.bP);let s=(0,f.N)(ae._p);const[p,d]=(0,i.useState)(a.city);let x=(0,f.N)(ae.tg);const[l,h]=(0,i.useState)(a.warehouse),c=(0,i.useRef)(null),m=(0,i.useRef)(null);(0,i.useEffect)((()=>{p&&c.current&&m.current&&(c.current.setValue({value:p,label:p}),l&&m.current.setValue({value:l,label:l}))}),[p,l]);const u=s.map((e=>({value:e,label:e}))),w=(0,i.useMemo)((()=>(0,re.debounce)((e=>n((0,se.Wg)(e))),1e3)),[n]),y=(0,i.useCallback)((e=>{""!==e&&w(e)}),[w]),j=x.map((e=>({value:e,label:e})));return(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(pe.X,{}),(0,g.jsx)(de,{children:t}),(0,g.jsxs)(xe,{children:[(0,g.jsx)(ne.Ay,{ref:c,options:u,onChange:e=>{e&&(d(e.value),""!==e.value&&n((0,se.DI)(e.value)))},onInputChange:y,onFocus:()=>{d(""),h(""),c.current&&m.current&&(c.current.setValue(""),m.current.setValue(""))},placeholder:"\u041c\u0456\u0441\u0442\u043e",styles:le}),(0,g.jsx)(ne.Ay,{ref:m,options:j,onChange:e=>{e&&h(e.value)},onFocus:()=>{h(""),m.current&&m.current.setValue(""),p&&n((0,se.DI)(p))},placeholder:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f/\u043f\u043e\u0448\u0442\u043e\u043c\u0430\u0442",styles:le})]}),(0,g.jsxs)(he,{children:[(0,g.jsx)(ce,{type:"button",onClick:()=>{p&&l?n((0,v.wQ)({delivery:{city:p,warehouse:l}})).then((e=>{"fulfilled"===e.meta.requestStatus&&o()})):(0,b.Ay)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0443 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",{id:"warning",icon:"\ud83d\udc40",style:{background:`${K.w.colors.secondary}`,color:`${K.w.colors.textPrimary}`}})},children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0430\u0434\u0440\u0435\u0441\u0443"}),(0,g.jsx)(me,{type:"button",onClick:o,children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"})]})]})},ge=m.Ay.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`,we=m.Ay.p`
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`,fe=m.Ay.button`
  max-width: 138px;
  padding: 12px 18px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  background: ${e=>e.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 200px;
    padding: 18px 24px;
    border-radius: 12px;
    border: none;
    font-size: 20px;
  }
`,be=m.Ay.button`
  position: relative;
  width: 116px;
  height: 26px;
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    width: 180px;
    height: 36px;
    font-size: 16px;
  }

  &::after {
    position: absolute;
    left: 15%;
    bottom: 3px;
    content: '';
    width: 85%;
    height: 1px;
    border-radius: 1px;
    background-color: currentColor;

    @media screen and (min-width: 1280px) {
      height: 2px;
    }
  }

  svg {
    position: relative;
    top: 4px;
    width: 16px;
    height: 16px;
    margin-right: 2px;

    @media screen and (min-width: 1280px) {
      top: 6px;
      width: 24px;
      height: 24px;
    }
  }

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverColor};
  }
`,ye=()=>{const[e,t]=(0,i.useState)(!1),o=(0,f.N)(ie.bP),n=()=>t((e=>!e)),r=e=>""!==e.city||""!==e.warehouse,a=r(o)?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0430\u0434\u0440\u0435\u0441\u0443":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0430\u0434\u0440\u0435\u0441\u0443";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(ge,{children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),r(o)?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(we,{children:["\u043c. ",o.city,", \u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430: ",o.warehouse,"."]}),!e&&(0,g.jsxs)(be,{type:"button",onClick:n,children:[(0,g.jsx)(h.CPv,{}),"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0430\u0434\u0440\u0435\u0441\u0443"]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(we,{children:"\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043d\u0435\u043c\u0430\u0454 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0438\u0445 \u0430\u0434\u0440\u0435\u0441."}),!e&&(0,g.jsx)(fe,{type:"button",onClick:n,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0430\u0434\u0440\u0435\u0441\u0443"})]}),e&&(0,g.jsx)(ue,{text:a,handleShowForm:n})]})},je=m.Ay.div`
  padding: 20px;
  display: grid;
  row-gap: 20px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    grid-template-columns: 1fr 790px;
    font-size: 15px;
  }
`,ve=m.Ay.div`
  margin-bottom: 30px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 66px;
  }
`,Ae=m.Ay.h2`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`,Ce=()=>{const e=(0,n.useMediaQuery)({query:"(min-width:1280px)"}),[t,o]=(0,i.useState)(!1),a=()=>{o((e=>!e))};return(0,g.jsxs)(je,{children:[e&&(0,g.jsx)(r.a,{}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(ve,{children:[(0,g.jsx)(Ae,{children:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"}),!t&&(0,g.jsx)(w,{handleShowForm:a}),t&&(0,g.jsx)(oe,{handleShowForm:a})]}),(0,g.jsx)(ye,{})]})]})},ze=()=>(0,g.jsx)(Ce,{})}}]);
//# sourceMappingURL=998.81f09511.chunk.js.map