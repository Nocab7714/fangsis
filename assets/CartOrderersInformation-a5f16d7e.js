import{P as A}from"./PurchaseStepper-9711940c.js";import{F as C}from"./FullPageLoading-b1a40297.js";import{m as F,g as T,_ as P,r as l,o as c,c as m,b as o,w as b,a as e,n as _,D,E as M,F as f,i as N,t as i,d as u,h as y}from"./index-f0322901.js";import{c as w}from"./cartAndWishList-a7ab7a80.js";import{S as E}from"./sweetalert2.all-af1e6bc0.js";import{T as O}from"./Toast-d2f41774.js";import{c as R,l as B,s as z,d as v,E as I,z as $,F as U,a as q,r as W,e as Z}from"./zh_TW-35160f88.js";import"./index-321b1e93.js";R({generateMessage:B({zh_TW:$}),validateOnInput:!0});z("zh_TW");const H=U,X=q;v("required",W);v("email",Z);v("isPhone",s=>/^(09)[0-9]{8}$/.test(s)?!0:"請輸入正確的手機號碼格式");const{VITE_APP_URL:j,VITE_APP_PATH:G}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"peihanwang-hexschool",BASE_URL:"/Fangsis/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Q={data(){return{isLoading:!1,name:"",email:"",tel:"",address:"",message:""}},components:{FullPageLoading:C,VField:H,VForm:X,ErrorMessage:I},methods:{createOrder(){this.isLoading=!0;const s={user:{name:this.name,email:this.email,tel:this.tel,address:this.address},message:this.message};this.$http.post(`${j}/v2/api/${G}/order`,{data:s}).then(t=>{this.isLoading=!1,O.fire({icon:"success",title:"訂單建立成功!"}),localStorage.removeItem("localStorageCouponCodeMessage"),this.getCart(),this.$router.push(`OrderPay/${t.data.orderId}`)}).catch(()=>{this.isLoading=!1,E.fire({title:"訂單建立失敗",text:"請確認您目前的網路連線狀況並再次嘗試",icon:"error",confirmButtonText:"確定",confirmButtonColor:"#5D7067"})})},...F(w,["getCart"])},computed:{...T(w,["carts","total","final_total","delivery","couponCodeMessage"])}},Y={class:"row mt-2 gy-3"},K={class:"col-lg-8"},J={class:"border border-2 border-secondary px-5 py-5"},ee=e("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-5 d-flex"},[e("h2",{class:"fs-4 fw-bold"},"填寫訂購人資訊")],-1),se={class:"mb-4"},oe=e("label",{for:"PurchaserName",class:"form-label"},"姓名 / Name",-1),te={class:"mb-4"},re=e("label",{for:"PurchaserPhoneNumber",class:"form-label"},"手機號碼 / Phone Number",-1),ae={class:"mb-4"},le=e("label",{for:"PurchaserEmail",class:"form-label"},"電子郵件 / Email Address",-1),de={class:"mb-4"},ne=e("label",{for:"PurchaserAddress",class:"form-label"},"收件地址 / Recipient's Address",-1),ie={class:"mb-4"},ce=e("label",{for:"PurchaserOrderRemark",class:"form-label"},"訂單備註 / Order Remark",-1),me={class:"col-lg-4"},ue={class:"border border-2 border-secondary px-5 py-5 d-flex flex-column"},he={class:"mb-6"},_e=e("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3"},[e("h2",{class:"fs-5 fw-bold"},"您的訂單")],-1),pe={class:"table"},be=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"商品名稱"),e("th",{class:"text-end text-nowrap",scope:"col"},"數量")])],-1),fe={class:"fw-lighter",scope:"row"},ve={class:"fw-lighter text-end"},ge={class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-11 d-flex justify-content-between align-items-end"},ye=e("h3",{class:"fs-6 text-nowrap"},"小計",-1),we={class:"fw-bold fs-4 me-1"},Pe={class:"mb-8"},xe=e("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"},[e("h3",{class:"fs-6 fw-bold"},"配送方式")],-1),ke={class:"form-check"},Ve=["checked"],Se=e("label",{class:"form-check-label",for:"DeliveryMethod02"}," 順豐速遞 - 常溫配送 ",-1),Le={class:"form-check"},Ae=["checked"],Ce=e("label",{class:"form-check-label",for:"DeliveryMethod01"}," 7-11 取貨",-1),Fe={class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex justify-content-between align-items-end"},Te=e("h3",{class:"fs-6 text-nowrap fw-bold"},"總計",-1),De={class:"d-flex flex-column"},Me={key:0,class:"fw-bold fs-4 opacity-25 text-decoration-line-through me-1"},Ne={class:"fw-bold fs-4 me-1"},Ee={key:0,class:"fs-6 text-end"},Oe={class:"row mt-5 mb-8 gx-2"},Re={class:"col-6"},Be={class:"col-6"},ze=["disabled"];function Ie(s,t,x,k,r,g){const d=l("VField"),n=l("ErrorMessage"),p=l("router-link"),V=l("VForm"),S=l("FullPageLoading");return c(),m(f,null,[o(V,{onSubmit:g.createOrder},{default:b(({meta:L,errors:h})=>[e("div",Y,[e("div",K,[e("div",J,[ee,e("div",se,[oe,o(d,{class:_(["form-control",{"is-invalid":h.訂購人姓名}]),id:"PurchaserName",type:"text",name:"訂購人姓名",rules:"required",placeholder:"請輸入您的姓名",modelValue:r.name,"onUpdate:modelValue":t[0]||(t[0]=a=>r.name=a)},null,8,["class","modelValue"]),o(n,{class:"invalid-feedback ms-1",name:"訂購人姓名"})]),e("div",te,[re,o(d,{class:_(["form-control",{"is-invalid":h.手機電話號碼}]),id:"PurchaserPhoneNumber",type:"tel",name:"手機電話號碼",rules:"isPhone",placeholder:"請輸入您的手機電話號碼",oninput:"value=value.replace(/[^\\d]/g,'')",modelValue:r.tel,"onUpdate:modelValue":t[1]||(t[1]=a=>r.tel=a)},null,8,["class","modelValue"]),o(n,{class:"invalid-feedback ms-1",name:"手機電話號碼"})]),e("div",ae,[le,o(d,{class:_(["form-control",{"is-invalid":h.email}]),id:"PurchaserEmail",type:"email",name:"email",rules:"required|email",placeholder:"請輸入您的電子郵件地址",modelValue:r.email,"onUpdate:modelValue":t[2]||(t[2]=a=>r.email=a)},null,8,["class","modelValue"]),o(n,{class:"invalid-feedback ms-1",name:"email"})]),e("div",de,[ne,o(d,{class:_(["form-control",{"is-invalid":h.收件地址}]),id:"PurchaserAddress",type:"text",name:"收件地址",rules:"required",placeholder:"請填寫配送位址，在此輸入您方便接受商品配送的地址",modelValue:r.address,"onUpdate:modelValue":t[3]||(t[3]=a=>r.address=a)},null,8,["class","modelValue"]),o(n,{class:"invalid-feedback ms-1",name:"收件地址"})]),e("div",ie,[ce,D(e("textarea",{class:"form-control",id:"PurchaserOrderRemark",name:"PurchaserOrderRemark",cols:"40",rows:"10",maxlength:"300",placeholder:"若您有任何的需要，可以在備註欄位中留下您對訂單的需求",style:{resize:"none"},"onUpdate:modelValue":t[4]||(t[4]=a=>r.message=a)},null,512),[[M,r.message]])])])]),e("div",me,[e("div",ue,[e("div",he,[_e,e("table",pe,[be,e("tbody",null,[(c(!0),m(f,null,N(s.carts,a=>(c(),m("tr",{key:a.id},[e("th",fe,i(a.product.title),1),e("td",ve,i(a.qty),1)]))),128))])])]),e("div",ge,[ye,e("span",we,[u("NT$ "),e("span",null,i(s.total),1)])]),e("div",Pe,[xe,e("div",ke,[e("input",{class:"form-check-input",id:"DeliveryMethod02",type:"radio",name:"DeliveryMethod",checked:s.delivery==="順豐速遞 - 常溫配送",disabled:""},null,8,Ve),Se]),e("div",Le,[e("input",{class:"form-check-input",id:"DeliveryMethod01",type:"radio",name:"DeliveryMethod",checked:s.delivery==="7-11 取貨",disabled:""},null,8,Ae),Ce])]),e("div",Fe,[Te,e("div",De,[s.total!==s.final_total?(c(),m("span",Me,[u("NT$ "),e("span",null,i(s.total),1)])):y("",!0),e("span",Ne,[u("NT$ "),e("span",null,i(s.final_total),1)])])]),s.total!==s.final_total?(c(),m("span",Ee,i(s.couponCodeMessage),1)):y("",!0),e("div",Oe,[e("div",Re,[o(p,{class:"btn btn-outline-secondary w-100 py-2",to:"CartView"},{default:b(()=>[u("回上一步")]),_:1})]),e("div",Be,[e("button",{class:"btn btn-primary w-100 py-2",type:"submit",disabled:s.carts.length===0||!L.valid}," 建立訂單 ",8,ze)])])])])])]),_:1},8,["onSubmit"]),o(S,{isLoading:r.isLoading},null,8,["isLoading"])],64)}const $e=P(Q,[["render",Ie]]),Ue={data(){return{purchaseStepsIsActive:"details"}},components:{PurchaseStepper:A,CartOrderForm:$e}},qe={class:"py-md-13 py-9 background-position-center background-size-corver",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RLJFHdzxV1ZFvcHobhOCdJFG71iTXspxuTuLv3LAuadLgMdzvO3ebfDIxgaswSy6G8SbPxVDbqyApt2wU2it78WeORuUUxdwMwTXV4qzswD20QiHhMvd3AZgGH6OcmLl%2BSP1YQilwzCQZlKgSckbe6LYnCKT2E7vj3iO9qTAsfoXM3FYNRfGl4p3Z11%2BRPSu5PDI5Wjg%2BSnmgeYzn3LLZfqyWN%2BHKVesfnxsDx4s6CkU%2ByX97aX4%2FIZiE89I6SwCw4DvMsNctfvaurRt6YyJKQ3NAB%2BBkmC1pBr0ARDd8C%2BWkxQXNVbaVkvu9PdgirS2CneyZtgonvceaSs5mSNnZA%3D%3D')","background-color":"var(--bs-primary)"}},We={class:"container d-flex flex-column align-items-center"},Ze=e("h2",{class:"fw-bold fs-lg-10 fs-1 mb-3 text-white",style:{"font-family":"var(--bs-NotoSerif-TC)"}}," 訂單明細 ",-1),He={class:"fs-6"},Xe={"aria-label":"breadcrumb"},je={class:"breadcrumb mb-0 text-white text-center"},Ge={class:"breadcrumb-item"},Qe=e("li",{class:"breadcrumb-item active","aria-current":"page"},"訂單明細",-1),Ye={class:"container mt-5 mt-md-7 mb-10"};function Ke(s,t,x,k,r,g){const d=l("routerLink"),n=l("PurchaseStepper"),p=l("CartOrderForm");return c(),m(f,null,[e("div",qe,[e("div",We,[Ze,e("div",He,[e("nav",Xe,[e("ol",je,[e("li",Ge,[o(d,{class:"text-decoration-none text-white",to:"/"},{default:b(()=>[u("首頁")]),_:1})]),Qe])])])])]),e("div",Ye,[o(n,{isActive:r.purchaseStepsIsActive},null,8,["isActive"]),o(p)])],64)}const ds=P(Ue,[["render",Ke]]);export{ds as default};
