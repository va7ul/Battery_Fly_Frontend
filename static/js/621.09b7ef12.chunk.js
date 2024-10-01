"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[621],{9514:(e,i,t)=>{t.d(i,{e:()=>o});const n=t.p+"static/media/something-went-wrong.0b7d80f73eb86329daf4.gif";var r=t(579);const o=()=>(0,r.jsx)("div",{style:{width:"100%",backgroundColor:"#fff"},children:(0,r.jsx)("img",{src:n,alt:"error_image",style:{margin:"0 auto"}})})},9616:(e,i,t)=>{t.d(i,{s:()=>s});var n=t(4574);const r=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`,o=n.Ay.h2`
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  background: ${e=>e.theme.colors.greyBackgroundPaper};
  border-radius: 12px;
  text-align: center;
  padding: 6px;

  @media screen and (min-width: 1280px) {
    height: 42px;
    font-size: 24px;
    font-weight: 500;
  }
`,d=n.Ay.div`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;var a=t(579);const s=e=>{let{information:i}=e;const t=i.split(";");return(0,a.jsxs)(r,{children:[(0,a.jsx)(o,{children:"\u041e\u043f\u0438\u0441"}),(0,a.jsx)(d,{children:t.map((e=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:e}),(0,a.jsx)("br",{})]},e)))})]})}},3247:(e,i,t)=>{t.d(i,{c:()=>x});var n=t(2382),r=(t(4430),t(9078),t(616)),o=t(4574);const d=o.Ay.div`
  width: 310px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 30px;

  .slick-dots {
    bottom: -20px;
  }

  .slick-list {
    cursor: grab;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${e=>e.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    width: 518px;
    height: 390px;

    .slick-prev:before,
    .slick-next:before {
      font-size: 40px;
    }

    .slick-prev {
      left: -45px;
    }
  }
`,a=o.Ay.img`
  width: 320px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    min-width: 518px;
    height: 390px;
    border-radius: 20px;
    margin-bottom: 30px;
  }
`,s=o.Ay.img`
  width: 310px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;

  @media screen and (min-width: 1280px) {
    min-width: 518px;
    height: 390px;
    border-radius: 20px;
  }
`;var p=t(579);const x=e=>{let{name:i,image:t}=e;return t.length>1?(0,p.jsx)(d,{className:"slider-container",children:(0,p.jsx)(n.A,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,children:t.map((e=>(0,p.jsx)("div",{children:(0,p.jsx)(s,{src:e,alt:i})},e)))})}):(0,p.jsx)(a,{src:t[0]||r,alt:i,onError:e=>{e.currentTarget.src=r}})}},6627:(e,i,t)=>{t.r(i),t.d(i,{default:()=>ce});var n=t(5043),r=t(972),o=t(2370);const d=e=>e.print3D.isLoading,a=e=>e.print3D.error,s=e=>e.print3D.result,p=e=>e.print3D.selectedAccuracy,x=e=>e.print3D.selectedPlactic,l=e=>e.print3D.selectedColor;var c=t(8935),h=t(9514),m=t(3768),g=t(5237),u=t(5512),f=t(3247),b=t(3892),j=t(7380),y=(t(6088),t(8609)),w=t(6706),v=t(9909),z=t(442),A=t(5118),k=t(4415),C=t(4918),$=t(3484),S=t(4574);const D=S.Ay.div`
  max-width: 357px;
  padding: 36px 48px;

  @media (min-width: 1280px) {
    max-width: 630px;
    padding: 40px 76px;
  }
`,P=S.Ay.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,N=(0,S.Ay)(b.lV)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,M=(0,S.Ay)(b.D0)`
  width: 261px;
  height: 28px;
  padding: 4px 8px;
  color: ${e=>e.theme.colors.textPrimary};
  border: 1px solid ${e=>e.theme.colors.textPrimary};
  border-radius: 6px;
  background: transparent;
  font-size: 14px;

  &:focus {
    color: ${e=>e.theme.colors.textPrimary};
    outline: none;
    border: 2px solid ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    width: 476px;
    height: 51px;
    border-radius: 8px;
    font-size: 24px;
  }
`,T=(0,S.Ay)(b.D0)`
  width: 261px;
  height: 46px;
  margin-top: 10px;
  padding: 4px 8px;
  color: ${e=>e.theme.colors.textPrimary};
  border: 1px solid ${e=>e.theme.colors.textPrimary};
  border-radius: 6px;
  background: transparent;
  overflow-x: auto;
  font-size: 12px;

  &::placeholder {
    font-size: 10px;
  }
  &:focus {
    color: ${e=>e.theme.colors.textPrimary};
    outline: none;
    border: 2px solid ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    width: 476px;
    height: 117px;
    margin-top: 20px;
    border-radius: 8px;
    font-size: 20px;

    &::placeholder {
      font-size: 16px;
    }
  }
`,_=(0,S.Ay)(b.Kw)`
  color: ${e=>e.theme.colors.error};
  font-size: 8px;
  padding-left: 8px;
  margin-top: 4px;
  align-self: start;

  @media (min-width: 1280px) {
    font-size: 12px;
    padding-left: 10px;
    margin-top: 8px;
  }
`,E=S.DU`
.react-international-phone-input-container {
    margin-top: 10px;
    width: 261px;
    height: 28px;

    @media (min-width: 1280px) {
    margin-top: 20px;
    width: 476px;
    height: 51px;
  }
  }

.react-international-phone-input-container .react-international-phone-input{
  &:focus {
    color: ${e=>e.theme.colors.textPrimary};
    outline: none;
    border: 2px solid ${e=>e.theme.colors.hoverColor};
  }
}

  .react-international-phone-input {
    width: 224px;

    @media (min-width: 1280px) {
    width: 431px;
  }
  }
  
   .react-international-phone-input-container .react-international-phone-country-selector-button{
    width:37px;
    height: 28px;
    background-color: rgba(31, 31, 31, 0.3);

    @media (min-width: 1280px) {
    width: 45px;
    height: 51px;
  }
} 
`,F=S.Ay.div`
  color: ${e=>e.theme.colors.error};
  font-size: 8px;
  padding-left: 8px;
  margin-top: 4px;
  align-self: start;

  @media (min-width: 1280px) {
    font-size: 12px;
    padding-left: 10px;
    margin-top: 8px;
  }
`,R=S.Ay.button`
  max-width: 190px;
  margin-top: 16px;
  padding: 12px 10px;
  border-radius: 6px;
  border: none;
  font-size: 15px;

  background: ${e=>e.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 312px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 24px;
  }
`;var H=t(579);const L=e=>{let{isModal3DPrintOpen:i,handleClose3DPrintModal:t,file:r}=e;const d=(0,g.useMediaQuery)({query:"(min-width: 1280px)"}),{isLoggedIn:a,userData:{firstName:s,tel:h}}=(0,v.As)(),f={name:a?s:"",text:""},S=(0,u.Y)(),[L,O]=(0,n.useState)(!1),[V,q]=(0,n.useState)(a?h:"+380"),U=(0,u.N)(p),Y=(0,u.N)(x),B=(0,u.N)(l),J=(0,w.r)(V),[Q,X]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{a&&q(h),a||q("+380")}),[a,h]),(0,H.jsxs)(H.Fragment,{children:[L?(0,H.jsx)(c.X,{}):(0,H.jsxs)(A.A,{isModalOpen:i,handleCloseModal:t,children:[(0,H.jsx)(z.J,{handleCloseModal:t}),(0,H.jsxs)(D,{children:[(0,H.jsx)(P,{children:"3D \u0414\u0440\u0443\u043a"}),(0,H.jsx)(b.l1,{initialValues:f,validationSchema:y.J,onSubmit:(e,i)=>{const n=new FormData;n.append("userName",e.name.trim()),n.append("tel",V),n.append("text",e.text),n.append("accuracy",null!==U&&void 0!==U?U:""),n.append("plactic",null!==Y&&void 0!==Y?Y:""),n.append("color",null!==B&&void 0!==B?B:""),n.append("file",r[0]),J&&"+380"!==V?(O(!0),S((0,o.E)(n)).then((e=>{O(!1),"fulfilled"===e.meta.requestStatus&&(X(!0),document.body.style.overflow="hidden")})),t()):(0,m.Ay)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",{id:"warning",icon:"\ud83d\udc40",style:{background:`${$.w.colors.secondary}`,color:`${$.w.colors.textPrimary}`}})},children:(0,H.jsxs)(N,{children:[(0,H.jsx)(M,{name:"name",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f","aria-label":"\u0406\u043c'\u044f"}),(0,H.jsx)(_,{name:"name",component:"div"}),(0,H.jsx)(j.LR,{style:{"--react-international-phone-height":d?"51px":"28px","--react-international-phone-background-color":"transparent","--react-international-phone-border-color":`${$.w.colors.textPrimary}`,"--react-international-phone-text-color":`${$.w.colors.textPrimary}`,"--react-international-phone-font-size":d?"24px":"14px","--react-international-phone-border-radius":d?"8px":"6px","--react-international-phone-flag-width":d?"24px":"16px","--react-international-phone-flag-height":d?"24px":"16px"},defaultCountry:"ua",hideDropdown:!0,value:V,onChange:e=>q(e),"aria-label":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),!J&&(0,H.jsx)(F,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"}),(0,H.jsx)(T,{component:"textarea",name:"text",type:"text",placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 (\u0437\u0430 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e\u0441\u0442\u0456)"}),(0,H.jsx)(_,{name:"text",component:"div"}),(0,H.jsx)(R,{type:"submit",children:(0,H.jsx)("div",{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})})]})})]}),(0,H.jsx)(E,{})]}),(0,H.jsxs)(k.E,{isModalAgreeOpen:Q,handleCloseAgreeModal:()=>{X(!1),document.body.style.overflow="unset"},buttonText:"\u0413\u0430\u0440\u0430\u0437\u0434",children:[(0,H.jsx)(C.U,{children:"\u0414\u044f\u043a\u0443\u0454\u043c\u043e \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f."}),(0,H.jsx)(C.U,{children:"\u041e\u0447\u0456\u043a\u0443\u0439\u0442\u0435 \u043d\u0430 \u0434\u0437\u0432\u0456\u043d\u043e\u043a \u0432\u0456\u0434 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430."})]})]})},O=S.Ay.div`
  padding: 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    max-width: 1280px;
  }
`,V=S.Ay.div`
  display: grid;
  gap: 15px;
  margin-bottom: 20px;
`,q=S.Ay.div`
  display: grid;
  gap: 20px;
`,U=S.Ay.div`
  display: flex;
  gap: 60px;
  margin-bottom: 20px;
`,Y=S.Ay.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.hoverColor};

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`,B=S.Ay.button`
  width: 170px;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
  background: ${e=>e.theme.colors.secondary};

  &:hover,
  :focus {
    background: ${e=>e.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    width: 270px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;
  }
`,J=S.Ay.input`
  height: 30px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    height: 42px;
    font-size: inherit;
  }

  ::-webkit-file-upload-button {
    background: ${e=>e.theme.colors.greyBackgroundPaper};
    height: 30px;
    padding: 8px 14px;
    margin-right: 12px;
    border-radius: 5px;
    border: 1px solid;

    @media screen and (min-width: 1280px) {
      height: 42px;
    }

    :is(:hover, :focus) {
      cursor: pointer;
    }
  }
`,Q=S.Ay.p`
  margin-top: 5px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;var X=t(9616);const I=S.Ay.div`
  display: grid;
  gap: 10px;
`,K=S.Ay.ul`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,W=S.Ay.li`
  list-style: outside;
  margin-left: 16px;
`,G=S.Ay.p`
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
`,Z=()=>{const{description:e}=(0,r.N)(s),i=e.split(";");return(0,H.jsxs)(I,{children:[(0,H.jsx)(G,{children:"\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u0456 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456:"}),(0,H.jsx)(K,{children:i.map((e=>(0,H.jsx)(W,{children:e},e)))})]})};var ee=t(5437);const ie={control:e=>({...e,backgroundColor:"rgba(225, 225, 225, 1)",borderRadius:"6px",borderStyle:"none",width:"132px",maxHeight:"30px",minHeight:"25px",border:"1px solid rgb(31, 31, 31)",":hover":{borderColor:"currentColor",boxShadow:"none"},"@media only screen and (min-width: 1280px)":{width:"220px",minHeight:"42px",borderRadius:"12px"}}),menu:e=>({...e,backgroundColor:"rgba(225, 225, 225, 1)",fontSize:"10px",width:"132px",border:"1px solid rgb(31, 31, 31)","@media only screen and (min-width: 1280px)":{fontSize:"20px",width:"220px",borderRadius:"12px"}}),option:(e,i)=>{let{isDisabled:t,isFocused:n,isSelected:r}=i;return{...e,backgroundColor:n?"rgb(255, 208, 100)":void 0,color:t?void 0:"rgb(31, 31, 31);",cursor:t?"not-allowed":"default",padding:"2px 8px",":active":{...e[":active"],backgroundColor:t?void 0:"rgb(255, 208, 100)"},"@media only screen and (min-width: 1280px)":{borderRadius:"6px"}}},placeholder:e=>({...e,fontSize:"10px",padding:"0px 8px",margin:0,"@media only screen and (min-width: 1280px)":{fontSize:"20px"}}),indicatorsContainer:e=>({...e,height:"30px",width:"38px","@media only screen and (min-width: 1280px)":{height:"42px",width:"40px"}}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,fontSize:"10px",margin:0,padding:"8px","@media only screen and (min-width: 1280px)":{fontSize:"20px"}})},te=e=>{let{data:i,placeholder:t,action:n}=e;const o=(0,r.Y)(),d=i.map((e=>({value:e,label:e})));return(0,H.jsx)(ee.Ay,{options:d,onChange:e=>{if(e){const i=e.value;o(n(i))}},placeholder:t,isSearchable:!1,styles:ie})},ne=S.Ay.div`
  display: grid;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`,re=S.Ay.p`
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
`;var oe=t(8532);const de=()=>{const{accuracy:e,plactic:i,color:t}=(0,r.N)(s);return(0,H.jsxs)(ne,{children:[(0,H.jsx)(re,{children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0434\u0440\u0443\u043a\u0443:"}),(0,H.jsx)(te,{data:e,placeholder:"\u0422\u043e\u0447\u043d\u0456\u0441\u0442\u044c",action:oe.c_}),(0,H.jsx)(te,{data:i,placeholder:"\u0422\u0438\u043f \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0443",action:oe.H5}),(0,H.jsx)(te,{data:t,placeholder:"\u041a\u043e\u043b\u0456\u0440",action:oe.wW})]})},ae=S.Ay.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`,se=S.Ay.div`
  display: grid;
  gap: 25px;

  @media screen and (min-width: 1280px) {
    gap: 45px;
  }
`,pe=S.Ay.table`
  border-collapse: collapse;
  text-align: center;
  font-size: 10px;

  caption {
    font-size: 12px;
    text-align: left;
    margin-bottom: 5px;
  }

  th {
    font-weight: 600;
  }

  th,
  td {
    border: 1px solid black;
    padding: 7px 0px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;

    caption {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`,xe=()=>{const{table1:e,table2:i}=(0,r.N)(s),t=[e,i];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(ae,{children:"\u0426\u0456\u043d\u0438 \u043d\u0430 \u0434\u0440\u0443\u043a"}),(0,H.jsx)(se,{children:t.map((e=>e&&(0,H.jsxs)(pe,{children:[(0,H.jsx)("caption",{children:e.nameTable}),(0,H.jsxs)("thead",{children:[(0,H.jsxs)("tr",{children:[(0,H.jsx)("th",{rowSpan:2,children:"\u0422\u043e\u0447\u043d\u0456\u0441\u0442\u044c"}),(0,H.jsx)("th",{rowSpan:2,children:"\u0426\u0456\u043d\u0430 \u0437\u0430 \u0433\u0440\u0430\u043c"}),(0,H.jsx)("th",{colSpan:3,children:"\u0426\u0456\u043d\u0430 \u0437\u0430 \u0433\u0440\u0430\u043c, \u043f\u0440\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0432\u0456\u0434"})]}),(0,H.jsxs)("tr",{children:[(0,H.jsx)("th",{children:"50 \u0433\u0440\u0430\u043c"}),(0,H.jsx)("th",{children:"100 \u0433\u0440\u0430\u043c"}),(0,H.jsx)("th",{children:"250 \u0433\u0440\u0430\u043c"})]})]}),(0,H.jsxs)("tbody",{children:[(0,H.jsxs)("tr",{children:[(0,H.jsx)("td",{children:"100 \u043c\u0456\u043a\u0440\u043e\u043d"}),(0,H.jsxs)("td",{children:[e[100][1]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[100][50]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[100][100]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[100][250]," \u0433\u0440\u043d"]})]}),(0,H.jsxs)("tr",{children:[(0,H.jsx)("td",{children:"200 \u043c\u0456\u043a\u0440\u043e\u043d"}),(0,H.jsxs)("td",{children:[e[200][1]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[200][50]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[200][100]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[200][250]," \u0433\u0440\u043d"]})]}),(0,H.jsxs)("tr",{children:[(0,H.jsx)("td",{children:"300 \u043c\u0456\u043a\u0440\u043e\u043d"}),(0,H.jsxs)("td",{children:[e[300][1]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[300][50]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[300][100]," \u0433\u0440\u043d"]}),(0,H.jsxs)("td",{children:[e[300][250]," \u0433\u0440\u043d"]})]})]})]},e.nameTable)))})]})},le=()=>{const e=(0,g.useMediaQuery)({query:"(min-width:1280px)"}),[i,t]=(0,n.useState)(!1),[r,o]=(0,n.useState)([]),d=()=>b&&j&&y?0===r.length?(m.Ay.remove(),m.Ay.error("\u041f\u0440\u0438\u043a\u0440\u0456\u043f\u0456\u0442\u044c \u0444\u0430\u0439\u043b \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0443!")):(t(!0),void(document.body.style.overflow="hidden")):(m.Ay.remove(),m.Ay.error("\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0434\u0440\u0443\u043a\u0443!")),{name:a,image:c,information:h}=(0,u.N)(s),b=(0,u.N)(p),j=(0,u.N)(x),y=(0,u.N)(l),w=e=>{const i=Array.from(e.target.files||[]),t=["stl","3mf","step","svg","obj","amf","usd","abc","ply","zip","7z","rar"],n=i.filter((e=>{var i;const n=null===(i=e.name.split(".").pop())||void 0===i?void 0:i.toLowerCase();return n&&t.includes(n)}));n.length!==i.length?m.Ay.error("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0444\u0430\u0439\u043b\u0438 \u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u043c\u0438 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f\u043c\u0438!"):o(n)};return(0,H.jsxs)(O,{children:[e?(0,H.jsxs)(U,{children:[(0,H.jsx)(f.c,{name:a,image:c}),(0,H.jsxs)(q,{children:[(0,H.jsx)(Y,{children:a}),(0,H.jsx)(Z,{}),(0,H.jsx)(de,{}),(0,H.jsxs)("form",{children:[(0,H.jsx)(J,{id:"file",name:"file",type:"file",accept:".stl, .3mf, .step, .svg, .obj, .amf, .usd*, .abc, .ply, .rar, .7z, .zip",multiple:!0,onChange:w}),(0,H.jsx)(Q,{children:"*\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0444\u0430\u0439\u043b\u0456\u0432: .stl, .3mf, .step, .svg, .obj, .amf, .usd*, .abc, .ply, .rar, .7z, .zip"})]}),(0,H.jsx)(B,{onClick:d,children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438 \u0434\u0440\u0443\u043a"})]})]}):(0,H.jsxs)(V,{children:[(0,H.jsx)(Y,{children:a}),(0,H.jsx)(f.c,{name:a,image:c}),(0,H.jsx)(Z,{}),(0,H.jsx)(de,{}),(0,H.jsx)("form",{children:(0,H.jsx)(J,{id:"file",name:"file",type:"file",accept:".stl, .3mf, .step, .svg, .obj, .amf, .usd*, .abc, .ply, .rar, .7z, .zip",onChange:w})}),(0,H.jsx)(B,{onClick:d,children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438 \u0434\u0440\u0443\u043a"})]}),h&&(0,H.jsx)(X.s,{information:h}),(0,H.jsx)(xe,{}),(0,H.jsx)(L,{isModal3DPrintOpen:i,handleClose3DPrintModal:()=>{t(!1),document.body.style.overflow="unset"},file:r})]})},ce=()=>{const e=(0,r.Y)(),i=(0,r.N)(d),t=(0,r.N)(a);return(0,n.useEffect)((()=>{e((0,o.V)())}),[e]),(0,H.jsxs)(H.Fragment,{children:[i&&(0,H.jsx)(c.X,{}),!i&&t?(0,H.jsx)(h.e,{}):(0,H.jsx)(le,{})]})}}}]);
//# sourceMappingURL=621.09b7ef12.chunk.js.map