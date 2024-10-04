"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[586],{4586:(e,t,o)=>{o.r(t),o.d(t,{default:()=>pt});var i=o(5043),r=o(5512),n=o(3216),a=o(8903),d=o(3892),l=o(3768),s=o(9909),c=o(5237),p=o(7380),x=(o(6088),o(9564)),u=o(3484),m=o(4574);const h=m.Ay.div`
  max-width: 350px;
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    max-width: 476px;
    margin-bottom: 20px;
  }
`,g=m.Ay.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`,y=m.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    gap: 6px;
  }
`,f=m.Ay.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 10px;

  @media (min-width: 1280px) {
    gap: 4px;
    font-size: 20px;
  }
`,v=m.Ay.span`
  &::after {
    content: '*';
    color: ${e=>e.theme.colors.error};
    padding: 1px;

    @media (min-width: 1280px) {
      padding: 2px;
    }
  }
`,b=(0,m.Ay)(d.D0)`
  max-width: 350px;
  height: 39px;
  padding: 4px 8px;
  border: 1px solid rgba(157, 157, 157, 1);
  border-radius: 8px;
  background: transparent;

  &:focus {
    outline: none;
    border: 1px solid ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 476px;
    height: 51px;
  }
`,w=m.DU`
  .react-international-phone-input-container .react-international-phone-input{
  &:focus {
    outline: none;
    border: 1px solid ${e=>e.theme.colors.hoverColor};
  }
}  
  
  .react-international-phone-input {
    width: 283px;
    
    @media (min-width: 1280px) {
    width: 430px;
  }
  }
   .react-international-phone-input-container .react-international-phone-country-selector-button{
    width:37px;

    @media (min-width: 1280px) {
    width: 46px;
  }
} 
`,j=(0,m.Ay)(d.D0)`
  max-width: 350px;
  height: 72px;
  padding: 8px;
  border: 1px solid rgba(157, 157, 157, 1);
  border-radius: 8px;
  background: transparent;
  overflow-x: auto;

  &::placeholder {
    font-size: 10px;
    color: rgba(99, 99, 99, 0.5);
  }
  &:focus {
    outline: none;
    border: 1px solid ${e=>e.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 476px;
    height: 101px;

    &::placeholder {
      font-size: 20px;
    }
  }
`,A=(0,m.Ay)(d.Kw)`
  color: ${e=>e.theme.colors.error};
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`,z=m.Ay.div`
  color: ${e=>e.theme.colors.error};
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;var S=o(579);const k=e=>{let{formik:t,isValidPhone:o}=e;const n=(0,c.useMediaQuery)({query:"(min-width: 1280px)"}),{isLoggedIn:a,userData:{firstName:d,lastName:l,email:m,tel:k}}=(0,s.As)(),{tel:O}=(0,s.SC)(),C=(0,r.Y)();return(0,i.useEffect)((()=>{a&&(C((0,x.ZP)(k)),t.initialValues.firstName=d,t.initialValues.lastName=l,t.initialValues.email=m),a||(C((0,x.ZP)("+380")),t.initialValues.firstName="",t.initialValues.lastName="",t.initialValues.email="")}),[C,a,k,t.initialValues,d,l,m]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(h,{children:[(0,S.jsx)(g,{children:"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456"}),(0,S.jsxs)(y,{onSubmit:t.handleSubmit,id:"form-order",children:[(0,S.jsxs)(f,{children:[(0,S.jsx)(v,{children:"\u0406\u043c'\u044f"}),(0,S.jsx)(b,{name:"firstName",type:"text"}),(0,S.jsx)(A,{name:"firstName",component:"div"})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(v,{children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),(0,S.jsx)(b,{name:"lastName",type:"text"}),(0,S.jsx)(A,{name:"lastName",component:"div"})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(v,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,S.jsx)(p.LR,{style:{"--react-international-phone-height":n?"51px":"39px","--react-international-phone-background-color":"transparent","--react-international-phone-border-color":`${u.w.colors.textDisabled}`,"--react-international-phone-text-color":`${u.w.colors.textPrimary}`,"--react-international-phone-font-size":n?"20px":"10px","--react-international-phone-border-radius":"8px","--react-international-phone-flag-width":n?"24px":"16px","--react-international-phone-flag-height":n?"24px":"16px"},defaultCountry:"ua",hideDropdown:!0,value:a?k:O,onChange:e=>{"+380"!==e&&C((0,x.ZP)(e))}}),!o&&(0,S.jsx)(z,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(v,{children:"E-\u043f\u043e\u0448\u0442\u0430"}),(0,S.jsx)(b,{name:"email",type:"text",value:t.values.email.toLowerCase()}),(0,S.jsx)(A,{name:"email",component:"div"})]}),(0,S.jsxs)(f,{children:["\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",(0,S.jsx)(j,{component:"textarea",name:"text",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442"}),(0,S.jsx)(A,{name:"text",component:"div"})]})]})]}),(0,S.jsx)(w,{})]})};var O=o(3536),C=o(972),$=o(5437),N=o(5293),q=o(3193),G=o(7776),P=o(1698),H=o(5018),M=o(1088),V=o(2464);const K=m.Ay.p`
  color: ${e=>e.theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`,R=m.Ay.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`,D=m.Ay.button`
  width: 155px;
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  padding: 14px;
  background: ${e=>e.$show?e.theme.colors.secondary:e.theme.colors.greyBackgroundPaper};

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.secondary};
  }

  &:focus {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1280px) {
    width: 233px;
    height: 61px;
    font-size: 20px;
    padding: 18px;
    border-radius: 12px;
  }
`,I=m.Ay.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    gap: 7px;
  }
`,E=m.Ay.p`
  text-transform: uppercase;
  font-weight: 800;
  color: #ec2028;

  @media screen and (min-width: 1280px) {
    gap: 7px;
  }
`,F=m.Ay.svg`
  width: 12px;
  height: 12px;
  fill: #ec2028;

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`,U=m.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`,Z=m.Ay.div`
  color: ${e=>e.theme.colors.backgroundPaper};
  display: flex;
  align-items: flex-end;
  gap: 5px;
`,L=m.Ay.p`
  color: ${e=>e.theme.colors.textPrimary};
  font-size: 15px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,T=m.Ay.p`
  color: ${e=>e.theme.colors.textPrimary};
  font-size: 15px;

  &::after {
    content: '*';
    color: ${e=>e.theme.colors.error};
    padding: 1px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,Y=m.Ay.a`
  color: ${e=>e.theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,_=m.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`,B={control:e=>({...e,backgroundColor:"rgba(247, 247, 247, 1)",borderRadius:"8px",borderStyle:"none",width:"320px",height:"40px",border:"1px solid rgb(157, 157, 157)","@media only screen and (min-width: 1280px)":{width:"476px",height:"51px"}}),menu:e=>({...e,backgroundColor:"rgba(247, 247, 247, 1)",fontSize:"10px",width:"320px",borderRadius:"8px",border:"1px solid rgb(157, 157, 157)","@media only screen and (min-width: 1280px)":{fontSize:"20px",width:"476px"}}),input:e=>({...e,fontSize:"10px",padding:"0px 8px",margin:0,"@media only screen and (min-width: 1280px)":{fontSize:"20px"}}),option:(e,t)=>{let{isDisabled:o,isFocused:i,isSelected:r}=t;return{...e,backgroundColor:i?"rgb(255, 208, 100)":void 0,color:o?void 0:"rgb(31, 31, 31)",cursor:o?"not-allowed":"default",padding:"2px 8px",":active":{...e[":active"],backgroundColor:o?void 0:"rgb(255, 208, 100)"},"@media only screen and (min-width: 1280px)":{borderRadius:"6px"}}},placeholder:e=>({...e,fontSize:"10px",padding:"0px 8px",margin:0,"@media only screen and (min-width: 1280px)":{fontSize:"20px"}}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,fontSize:"10px",margin:0,padding:"8px","@media only screen and (min-width: 1280px)":{fontSize:"20px"}})};var Q=o(4535),W=o(1603),X=o(8587),J=o(8168),ee=o(8387),te=o(8610),oe=o(7266),ie=o(3064),re=o(8206),ne=o(9662);const ae=(0,ne.A)((0,S.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),de=(0,ne.A)((0,S.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var le=o(1475);const se=(0,Q.Ay)("span",{shouldForwardProp:le.A})({position:"relative",display:"flex"}),ce=(0,Q.Ay)(ae)({transform:"scale(1)"}),pe=(0,Q.Ay)(de)((e=>{let{theme:t,ownerState:o}=e;return(0,J.A)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));const xe=function(e){const{checked:t=!1,classes:o={},fontSize:i}=e,r=(0,J.A)({},e,{checked:t});return(0,S.jsxs)(se,{className:o.root,ownerState:r,children:[(0,S.jsx)(ce,{fontSize:i,className:o.background,ownerState:r}),(0,S.jsx)(pe,{fontSize:i,className:o.dot,ownerState:r})]})};var ue=o(6803),me=o(6593);const he=i.createContext(void 0);var ge=o(2532),ye=o(2372);function fe(e){return(0,ye.Ay)("MuiRadio",e)}const ve=(0,ge.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),be=["checked","checkedIcon","color","icon","name","onChange","size","className"],we=(0,Q.Ay)(ie.A,{shouldForwardProp:e=>(0,le.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"medium"!==o.size&&t[`size${(0,ue.A)(o.size)}`],t[`color${(0,ue.A)(o.color)}`]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,J.A)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,oe.X4)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{[`&.${ve.checked}`]:{color:(t.vars||t).palette[o.color].main}},{[`&.${ve.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}));const je=(0,S.jsx)(xe,{checked:!0}),Ae=(0,S.jsx)(xe,{}),ze=i.forwardRef((function(e,t){var o,r;const n=(0,re.b)({props:e,name:"MuiRadio"}),{checked:a,checkedIcon:d=je,color:l="primary",icon:s=Ae,name:c,onChange:p,size:x="medium",className:u}=n,m=(0,X.A)(n,be),h=(0,J.A)({},n,{color:l,size:x}),g=(e=>{const{classes:t,color:o,size:i}=e,r={root:["root",`color${(0,ue.A)(o)}`,"medium"!==i&&`size${(0,ue.A)(i)}`]};return(0,J.A)({},t,(0,te.A)(r,fe,t))})(h),y=i.useContext(he);let f=a;const v=(0,me.A)(p,y&&y.onChange);let b=c;var w,j;return y&&("undefined"===typeof f&&(w=y.value,f="object"===typeof(j=n.value)&&null!==j?w===j:String(w)===String(j)),"undefined"===typeof b&&(b=y.name)),(0,S.jsx)(we,(0,J.A)({type:"radio",icon:i.cloneElement(s,{fontSize:null!=(o=Ae.props.fontSize)?o:x}),checkedIcon:i.cloneElement(d,{fontSize:null!=(r=je.props.fontSize)?r:x}),ownerState:h,classes:g,name:b,checked:f,onChange:v,ref:t,className:(0,ee.A)(g.root,u)},m))}));var Se=o(9413);function ke(e){return(0,ye.Ay)("MuiRadioGroup",e)}(0,ge.A)("MuiRadioGroup",["root","row","error"]);var Oe=o(5849),Ce=o(5420),$e=o(5879);const Ne=["actions","children","className","defaultValue","name","onChange","value"],qe=i.forwardRef((function(e,t){const{actions:o,children:r,className:n,defaultValue:a,name:d,onChange:l,value:s}=e,c=(0,X.A)(e,Ne),p=i.useRef(null),x=(e=>{const{classes:t,row:o,error:i}=e,r={root:["root",o&&"row",i&&"error"]};return(0,te.A)(r,ke,t)})(e),[u,m]=(0,Ce.A)({controlled:s,default:a,name:"RadioGroup"});i.useImperativeHandle(o,(()=>({focus:()=>{let e=p.current.querySelector("input:not(:disabled):checked");e||(e=p.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const h=(0,Oe.A)(t,p),g=(0,$e.A)(d),y=i.useMemo((()=>({name:g,onChange(e){m(e.target.value),l&&l(e,e.target.value)},value:u})),[g,l,m,u]);return(0,S.jsx)(he.Provider,{value:y,children:(0,S.jsx)(Se.A,(0,J.A)({role:"radiogroup",ref:h,className:(0,ee.A)(x.root,n)},c,{children:r}))})})),Ge=(0,Q.Ay)(qe)({gap:"5px","& .MuiButtonBase-root":{padding:"0px 5px 0px 0px",[W.P.breakpoints.only("desktop")]:{padding:"0px 10px 0px 0px"}},"& .MuiFormControlLabel-root":{margin:0,alignItems:"flex-start",[W.P.breakpoints.only("desktop")]:{alignItems:"baseline"}},"& .MuiTypography-root":{fontSize:"10px",[W.P.breakpoints.only("desktop")]:{fontSize:"20px"}}}),Pe=(0,Q.Ay)(ze)({"& .MuiSvgIcon-root":{width:"16px",height:"16px",[W.P.breakpoints.only("desktop")]:{width:"18px",height:"18px"}}});var He=o(7353);const Me=()=>{const e=(0,C.Y)(),t=(0,c.useMediaQuery)({query:"(max-width:1279px)"}),[o,r]=(0,i.useState)("none"),[n,a]=(0,i.useState)("none"),[d,l]=(0,i.useState)(!1),[s,p]=(0,i.useState)(!1);let u=(0,C.N)(M._p),m=(0,C.N)(M.tg);const h=(0,C.N)(M.kg),g=(0,C.N)(M.Zu),y=(0,C.N)(V.bP),f=(0,i.useRef)(null),v=(0,i.useRef)(null),b=u.map((e=>({value:e,label:e}))),w=(0,i.useMemo)((()=>(0,O.debounce)((t=>e((0,H.Wg)(t))),1e3)),[e]),j=m.map((e=>({value:e,label:e}))),A=(0,i.useCallback)((e=>{""!==e&&w(e)}),[w]);return(0,S.jsxs)("div",{children:[(0,S.jsx)(K,{children:"\u0421\u043f\u043e\u0441\u0456\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,S.jsxs)(R,{children:[(0,S.jsx)(D,{onClick:()=>{y.city&&(e((0,x.ml)(y.city)),e((0,x.mm)(y.warehouse)),f.current&&v.current&&(f.current.setValue({value:y.city,label:y.city}),v.current.setValue({value:y.warehouse,label:y.warehouse}))),a("none"),r("flex"),e((0,x.vp)("\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430")),l(!0),p(!1)},$show:d,children:(0,S.jsxs)(I,{children:[(0,S.jsx)(F,{children:(0,S.jsx)("use",{href:`${He.A}#nova_poshta`})}),(0,S.jsx)(E,{children:"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"})]})}),(0,S.jsx)(D,{onClick:()=>{r("none"),a("flex"),e((0,x.vp)("\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437")),e((0,x.ml)("\u043c. \u041b\u044c\u0432\u0456\u0432")),e((0,x.mm)("\u0432\u0443\u043b. \u0417\u0435\u043b\u0435\u043d\u0430, 109")),p(!0),l(!1)},$show:s,children:"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"})]}),(0,S.jsxs)(_,{style:{display:o},children:[(0,S.jsx)(T,{children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,S.jsx)($.Ay,{ref:f,options:b,onChange:t=>{t&&(e((0,x.ml)(t.value)),""!==t.value&&e((0,H.DI)(t.value)))},onInputChange:A,onFocus:()=>{e((0,x.ml)("")),e((0,x.mm)("")),f.current&&v.current&&(f.current.setValue(""),v.current.setValue(""))},placeholder:"\u041c\u0456\u0441\u0442\u043e",styles:B}),(0,S.jsx)($.Ay,{ref:v,options:j,onChange:t=>{t&&e((0,x.mm)(t.value))},onFocus:()=>{e((0,x.mm)("")),v.current&&v.current.setValue(""),h&&e((0,H.DI)(h))},placeholder:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f/\u043f\u043e\u0448\u0442\u043e\u043c\u0430\u0442",styles:B})]}),(0,S.jsxs)(U,{style:{display:n},children:[(0,S.jsx)(L,{children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u0432\u0438\u0432\u043e\u0437\u0443:"}),(0,S.jsxs)(Z,{children:[t?(0,S.jsx)(G.A,{sx:{fontSize:22,fill:"rgba(244, 170, 0, 1)"}}):(0,S.jsx)(G.A,{sx:{fontSize:30,fill:"rgba(244, 170, 0, 1)"}}),(0,S.jsx)(Y,{href:"https://maps.app.goo.gl/HVQb7UZCPnmQ73356",target:"_blank",rel:"noopener noreferrer nofollow",children:"\u043c. \u041b\u044c\u0432\u0456\u0432, \u0432\u0443\u043b. \u0417\u0435\u043b\u0435\u043d\u0430, 109"})]})]}),(0,S.jsx)(K,{children:"\u0421\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438"}),(0,S.jsx)("div",{children:(0,S.jsx)(q.A,{children:(0,S.jsxs)(Ge,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:g,onChange:t=>{e((0,x.X$)(t.target.value))},children:[(0,S.jsx)(N.A,{value:"\u041a\u0430\u0440\u0442\u043e\u044e \u043f\u043e \u0440\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0430\u0445 \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431",control:(0,S.jsx)(Pe,{sx:{color:P.A[700],"&.Mui-checked":{color:P.A[800]}}}),label:"\u041a\u0430\u0440\u0442\u043e\u044e \u043f\u043e \u0440\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0430\u0445 \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431"}),(0,S.jsx)(N.A,{value:"\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431 \u0430\u0431\u043e \u0424\u041e\u041f",control:(0,S.jsx)(Pe,{sx:{color:P.A[700],"&.Mui-checked":{color:P.A[800]}}}),label:"\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431 \u0430\u0431\u043e \u0424\u041e\u041f"}),(0,S.jsx)(N.A,{value:"\u041d\u0430\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0439 \u043f\u043b\u0430\u0442\u0456\u0436",control:(0,S.jsx)(Pe,{sx:{color:P.A[700],"&.Mui-checked":{color:P.A[800]}}}),label:"\u041d\u0430\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0439 \u043f\u043b\u0430\u0442\u0456\u0436 (\u043f\u0440\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0457 \u0437\u0431\u0456\u0440\u043a\u0438, \u043f\u0435\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430 20%)"})]})})})]})};var Ve=o(466);const Ke=m.Ay.div`
  width: 318px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    width: 526px;
    border: none;
  }
`,Re=m.Ay.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    border: none;
    font-size: 32px;
    text-align: start;
    padding: 0;
    margin-top: 24px;
  }
`,De=m.Ay.div`
  width: 100%;
  margin: 0 auto;
  max-height: 226px;
  overflow: auto;
  padding-right: 2px;

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-height: 440px;
    padding-right: 4px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.textDisabled};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${e=>e.theme.colors.textDisabled};
  }
`,Ie=()=>(0,S.jsxs)(Ke,{children:[(0,S.jsx)(Re,{children:"\u041a\u043e\u0448\u0438\u043a"}),(0,S.jsx)(De,{children:(0,S.jsx)(Ve.R,{})})]});var Ee=o(8935);const Fe=m.Ay.div`
  width: 100%;
  display: grid;
  gap: 4px;
  padding: 5px 8px;
  border-radius: 8px;
  background: rgba(217, 217, 217, 0.38);

  @media screen and (min-width: 1280px) {
    gap: 8px;
    padding: 10px;
  }
`,Ue=m.Ay.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`,Ze=m.Ay.p`
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
`,Le=m.Ay.p`
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
`,Te=m.Ay.div`
  font-size: 12px;
  text-align: right;
  margin-top: 4px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-top: 8px;
  }

  button {
    background: transparent;
    color: ${e=>e.theme.colors.hoverColor};
  }
`,Ye=m.Ay.form`
  font-size: 12px;
  text-align: right;
  margin-top: 15px;
  height: 40px;
  border-radius: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-top: 20px;
    height: 60px;
  }

  input {
    width: 185px;
    height: 100%;
    padding-left: 10px;
    border-radius: 12px 0px 0px 12px;
    border: transparent;
    background: ${e=>e.theme.colors.greyBackgroundPaper};

    ::placeholder {
      color: ${e=>e.theme.colors.textDisabled};
    }

    &:focus {
      outline: none;
      border: 1px solid ${e=>e.theme.colors.secondary};
    }

    @media screen and (min-width: 1280px) {
      width: 288px;
    }
  }

  button {
    width: 135px;
    height: 100%;
    border-radius: 0px 12px 12px 0px;
    background: ${e=>e.theme.colors.secondary};
    border: transparent;

    &:hover,
    :focus {
      background: ${e=>e.theme.colors.hoverColor};
    }

    @media screen and (min-width: 1280px) {
      width: 240px;
    }
  }
`,_e=m.Ay.div`
  font-size: 10px;
  margin-top: 4px;
  margin-left: 4px;
  color: ${e=>e.theme.colors.error};

  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`,Be=()=>{const{discountValue:e,errorPromoCode:t,isLoadingPromoCode:o}=(0,s.SC)(),{prettyTotal:r,prettyDiscount:n,prettyTogether:a}=(0,s.rN)(),[d,l]=(0,i.useState)(!1),c=(0,C.Y)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Fe,{children:[(0,S.jsxs)(Ue,{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430:",(0,S.jsxs)("span",{children:[" ",r," \u0433\u0440\u043d"]})]}),(0,S.jsxs)(Ze,{discount:e,children:["\u0417\u043d\u0438\u0436\u043a\u0430:",(0,S.jsxs)("span",{children:[" - ",n," \u0433\u0440\u043d"]})]}),(0,S.jsxs)(Le,{children:["\u0420\u0430\u0437\u043e\u043c:",(0,S.jsxs)("span",{children:[a," \u0433\u0440\u043d"]})]})]}),e?(0,S.jsx)(_e,{children:"*\u0417\u043d\u0438\u0436\u043a\u0430 \u0437\u0430 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434\u043e\u043c \u043d\u0435 \u043f\u043e\u0448\u0438\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u0430\u043a\u0446\u0456\u0439\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438!"}):d?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Ye,{onSubmit:e=>{e.preventDefault(),c((0,H.MG)(e.currentTarget.promo.value.toString()))},children:[(0,S.jsx)("input",{type:"text",name:"promo",placeholder:"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"}),(0,S.jsx)("button",{type:"submit",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438"})]}),t&&(0,S.jsx)(_e,{children:t})]}):(0,S.jsx)(Te,{children:(0,S.jsx)("button",{type:"button",onClick:()=>{l(!d)},children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"})}),o&&(0,S.jsx)(Ee.X,{})]})};var Qe=o(899),We=o(7221);const Xe=Qe.Ik().shape({firstName:Qe.Yj().min(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").max(20,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(We.VU,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0435\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"),lastName:Qe.Yj().min(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").max(30,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(We.VU,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0435\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"),email:Qe.Yj().email("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(We.Uo,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430")});var Je=o(6706),et=o(3370),tt=o(3970),ot=o(1850),it=o(4576);var rt=o(7689),nt=o(4415),at=o(4918);const dt=m.Ay.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.hoverColor};
  margin-bottom: 16px;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`,lt=m.Ay.div`
  display: grid;
  padding: 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    max-width: 1280px;
  }
`,st=m.Ay.button`
  margin: 15px auto 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  width: 149px;

  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);
  background: ${e=>e.theme.colors.secondary};

  &:hover {
    background: ${e=>e.theme.colors.hoverColor};
  }
  @media screen and (min-width: 1280px) {
    width: 266px;
    height: 61px;
    padding: 15px 8px;
    margin-top: 20px;
    font-size: 20px;
    margin: 15px 0px 0px;
    border-radius: 12px;
  }
`,ct=()=>{const e=(0,r.Y)(),t=(0,n.Zp)(),{isLoggedIn:o,userData:{firstName:c,lastName:p,email:m}}=(0,s.As)(),{text:h,tel:g,orderNum:y,total:f,promoCode:v,promoCodeDiscount:b,discountValue:w,together:j,cartItems:A,city:z,warehouse:O,payment:C,deliveryType:$}=(0,s.SC)(),N=(()=>{const e=(0,r.N)(et.rM),t=(0,r.N)(ot.VW),o=(0,i.useMemo)((()=>null===e||void 0===e?void 0:e.flatMap((e=>({...{...t.filter((t=>{if(null!==e&&void 0!==e&&e.capacityKey){var o,i;const r=null===(o=t.capacity)||void 0===o?void 0:o[e.capacityKey],n=null===(i=e.capacity)||void 0===i?void 0:i[e.capacityKey];return t.codeOfGood===e.codeOfGood&&((null===r||void 0===r?void 0:r.price)!==e.price||t.sale!==e.sale||t.discount!==e.discount||(null===r||void 0===r?void 0:r.holder)!==(null===n||void 0===n?void 0:n.holder))}return t.codeOfGood===e.codeOfGood&&(Number(t.price)!==Number(e.price)||t.sale!==e.sale||t.discount!==e.discount)}))}[0],capacityKey:e.capacityKey,selectedSealing:e.selectedSealing,selectedHolder:e.selectedHolder})))),[e,t]);return(0,i.useMemo)((()=>{if(o){let t=null;return o.map((o=>{let i=null===e||void 0===e?void 0:e.find((e=>e.codeOfGood===o.codeOfGood&&e.capacityKey===o.capacityKey&&e.selectedSealing===o.selectedSealing&&e.selectedHolder===o.selectedHolder));if(!i||"undefined"===typeof i.totalPrice||"undefined"===typeof i.quantityOrdered)return null;const r="string"===typeof o.price?Number(o.price):o.price;if(null!==i&&void 0!==i&&i.capacityKey){var n;const e=null===(n=o.capacity)||void 0===n?void 0:n[i.capacityKey];if(!e)return null;const r=e.holder?2*e.holder:0,a=100;return o.sale&&!i.selectedHolder?(t=Math.round(e.price-e.price*o.discount/100),i.selectedSealing?t+a===(null===i||void 0===i?void 0:i.totalPrice)/(null===i||void 0===i?void 0:i.quantityOrdered)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:t+a}:t===(null===i||void 0===i?void 0:i.totalPrice)/(null===i||void 0===i?void 0:i.quantityOrdered)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:t}):o.sale&&i.selectedHolder?(t=Math.round(e.price-e.price*o.discount/100+r),i.selectedSealing?t+a===(null===i||void 0===i?void 0:i.totalPrice)/(null===i||void 0===i?void 0:i.quantityOrdered)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:t+a}:t===(null===i||void 0===i?void 0:i.totalPrice)/(null===i||void 0===i?void 0:i.quantityOrdered)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:t}):o.sale||i.selectedHolder?!o.sale&&i.selectedHolder?i.selectedSealing?e.price+r+a===(null===i||void 0===i?void 0:i.price)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:e.price+r+a}:e.price+r===(null===i||void 0===i?void 0:i.price)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:e.price+r}:null:e.price===(null===i||void 0===i?void 0:i.price)?null:i.selectedSealing?e.price+a===(null===i||void 0===i?void 0:i.price)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:e.price+a}:e.price===(null===i||void 0===i?void 0:i.price)?null:{codeOfGood:o.codeOfGood,capacityKey:i.capacityKey,selectedSealing:i.selectedSealing,selectedHolder:i.selectedHolder,quantityOrdered:i.quantityOrdered,price:e.price}}return o.sale?(t=Math.round(r-r*o.discount/100),t===i.totalPrice/i.quantityOrdered?null:{codeOfGood:o.codeOfGood,capacityKey:"",selectedSealing:!1,selectedHolder:!1,quantityOrdered:null===i||void 0===i?void 0:i.quantityOrdered,price:t}):o.sale||o.price===(null===i||void 0===i?void 0:i.price)?null:{codeOfGood:o.codeOfGood,capacityKey:"",selectedSealing:!1,selectedHolder:!1,quantityOrdered:null===i||void 0===i?void 0:i.quantityOrdered,price:Number(o.price)}}))}}),[e,o])})(),q=(0,r.N)(M.Di),G=(0,r.N)(et.rM),P=(0,r.N)(ot.VW),V=(0,r.N)(M.ZF),[K,R]=(0,i.useState)([]),[D,I]=(0,i.useState)(!1),E=(0,i.useMemo)((()=>G.map((e=>e.codeOfGood))),[G]),F=(0,Je.r)(g);let U=null;(0,i.useEffect)((()=>{e((0,x.Zx)(!0))}),[e]),(0,i.useEffect)((()=>{e((0,tt.sf)([]))}),[e]),(0,i.useEffect)((()=>{e((0,it.d$)(E))}),[e,E]),(0,i.useEffect)((()=>{V&&R(null===N||void 0===N?void 0:N.filter((e=>null!==e)))}),[V,N]),(0,i.useEffect)((()=>{V&&K&&K.length>0&&(K.forEach((t=>e((0,tt.EK)(t)))),K.forEach((t=>e((0,tt.jW)(t)))))}),[e,V,K]),(0,i.useEffect)((()=>{y&&Z()}),[y]);const Z=()=>{I(!0),document.body.style.overflow="hidden"},L=(0,d.Wx)({initialValues:{firstName:o?c:"",lastName:o?p:"",email:o?m:"",text:h},validationSchema:Xe,onSubmit:t=>{const o={userData:{firstName:t.firstName.trim(),lastName:t.lastName.trim(),tel:g,email:t.email.toLowerCase().trim(),text:t.text},total:f,promoCode:v,promoCodeDiscount:b,discountValue:w,together:j,cartItems:A,deliveryType:$,city:z,warehouse:O,payment:C};e((0,x.f)(o.userData.text)),U=G.some((e=>P.some((t=>t.codeOfGood===e.codeOfGood&&t.quantity<e.quantityOrdered)))),U||G.length!==P.length?(0,l.Ay)("\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0456\u0432 \u0443 \u043a\u043e\u0448\u0438\u043a\u0443.",{id:"warning",icon:"\ud83d\udc40",style:{background:`${u.w.colors.textPrimary}`,color:`${u.w.colors.secondary}`}}):F&&"+380"!==g?z?C?e((0,H.Oc)(o)).then((t=>{"fulfilled"===t.meta.requestStatus&&e((0,tt.Up)())})):(0,l.Ay)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438",{id:"warning",icon:"\ud83d\udc40",style:{background:`${u.w.colors.textPrimary}`,color:`${u.w.colors.secondary}`}}):(0,l.Ay)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u043f\u043e\u0441\u0456\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",{id:"warning",icon:"\ud83d\udc40",style:{background:`${u.w.colors.textPrimary}`,color:`${u.w.colors.secondary}`}}):(0,l.Ay)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",{id:"warning",icon:"\ud83d\udc40",style:{background:`${u.w.colors.textPrimary}`,color:`${u.w.colors.secondary}`}})}});return(0,S.jsxs)(S.Fragment,{children:[q&&(0,S.jsx)(Ee.X,{}),G.length<1&&!y?(0,S.jsx)(rt.G,{closeCart:()=>{t("/assortment")},isOrder:!0}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(lt,{children:[(0,S.jsx)(dt,{children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,S.jsxs)(a.Ay,{container:!0,rowGap:"15px",children:[(0,S.jsxs)(a.Ay,{item:!0,desktop:6,children:[(0,S.jsx)(d.QI,{value:L,children:(0,S.jsx)(k,{formik:L,isValidPhone:F})}),(0,S.jsx)(Me,{})]}),(0,S.jsxs)(a.Ay,{item:!0,desktop:6,children:[(0,S.jsx)(Ie,{}),(0,S.jsx)(Be,{})]})]}),(0,S.jsx)(st,{type:"submit",form:"form-order",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]}),(0,S.jsxs)(nt.E,{isModalAgreeOpen:D,handleCloseAgreeModal:()=>{I(!1),e((0,x.hq)("")),document.body.style.overflow="unset",t("/main")},buttonText:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443",children:[(0,S.jsxs)(at.U,{children:["\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f ",y,"."]}),(0,S.jsx)(at.U,{children:"\u041e\u0447\u0456\u043a\u0443\u0439\u0442\u0435 \u043d\u0430 \u0434\u0437\u0432\u0456\u043d\u043e\u043a \u0432\u0456\u0434 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430."})]})]})]})},pt=()=>(0,S.jsx)(ct,{})},7776:(e,t,o)=>{var i=o(4994);t.A=void 0;var r=i(o(39)),n=o(579);t.A=(0,r.default)((0,n.jsx)("path",{d:"M15 11V5l-3-3-3 3v2H3v14h18V11zm-8 8H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm6 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm6 12h-2v-2h2zm0-4h-2v-2h2z"}),"LocationCity")}}]);
//# sourceMappingURL=586.eb075bbc.chunk.js.map