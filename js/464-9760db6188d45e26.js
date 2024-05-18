"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{1464:function(e,t,r){r.r(t),r.d(t,{PricingSection:function(){return PricingSection}});var s=r(7437),n=r(2265),a=r(7279);let i=[{id:"basic",name:"Starter Package",description:"Essential tools, perfect for new and small-scale farmers.",features:["Market Information","Plant Disease Diagnosis (up to 5 plants per month)","Production Guides and Best Practices (up to 5 guides per month)","Market Prices and Trends"],limitations:[],stripePriceId:"",prices:{monthly:"0",yearly:"0"},stripeIds:{monthly:void 0,yearly:void 0}},{id:"standard",name:"Growth Package",description:"Advanced solutions for expanding farms and agri-businesses.",features:["Community Network","Exclusive Access","Plant Disease Diagnosis (Unlimited)","Unlimited Production Guides and Best Practices","Access to the Marketplace","Logistics Booking","Input Suppliers and Financial Services","Weather and Climate Advisory"],limitations:[],stripePriceId:"",prices:{monthly:"50",yearly:"600"},stripeIds:{monthly:void 0,yearly:void 0}},{id:"premium",name:"Professional Package",description:"Comprehensive services for large-scale agricultural enterprises.",features:["Enterprise Financing","Unlimited Financial Tools","Strategic Planning","Bespoke Consultation","Continuous Updates","Account Management","Priority Assistance"],limitations:[],stripePriceId:"",prices:{monthly:"2000",yearly:"24000"},stripeIds:{monthly:void 0,yearly:void 0}}];var l=r(345),o=r(3089);let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...n})});d.displayName="Card";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...n})});c.displayName="CardHeader";let m=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("h3",{ref:t,className:(0,l.cn)("font-semibold leading-none tracking-tight",r),...n})});m.displayName="CardTitle";let x=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...n})});x.displayName="CardDescription";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...n})});u.displayName="CardContent";let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...n})});f.displayName="CardFooter";var g=r(8792);let p=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(g.fC,{className:(0,l.cn)("peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r),...n,ref:t,children:(0,s.jsx)(g.bU,{className:(0,l.cn)("pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});function PricingSection(){let[e,t]=n.useState(!1);return(0,s.jsx)("section",{id:"pricing-section","aria-label":"pricing section",className:"w-full",children:(0,s.jsxs)("div",{className:"container grid max-w-6xl gap-4 md:gap-8",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-6 text-center",children:[(0,s.jsx)("h2",{className:"font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",children:(0,s.jsxs)(a.ZP,{children:["Priced"," ",(0,s.jsx)("span",{className:"bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent",children:"Just Right!"})]})}),(0,s.jsx)("h3",{className:"max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8",children:(0,s.jsx)(a.ZP,{children:"Here are our pricing plans"})})]}),(0,s.jsxs)("div",{className:"my-4 flex items-center justify-center gap-4 text-lg",children:[(0,s.jsx)("span",{children:"Monthly"}),(0,s.jsx)(p,{checked:e,onCheckedChange:()=>t(e=>!e),role:"switch","aria-label":"switch-year"}),(0,s.jsx)("span",{children:"Annual"})]}),(0,s.jsx)("div",{className:"grid gap-4 md:grid-cols-3 lg:gap-6",children:i.map(t=>(0,s.jsxs)(d,{className:(0,l.cn)("flex flex-col transition-all duration-1000 ease-out hover:opacity-80 md:hover:-translate-y-3","Standard"===t.name&&"border-green-600/60 bg-gradient-to-r from-green-600/10 to-yellow-400/10"),children:[(0,s.jsxs)(c,{className:"overflow-hidden rounded-t-lg bg-gradient-to-r from-green-600/10 to-yellow-400/10",children:[(0,s.jsx)(m,{className:"font-urbanist text-2xl tracking-wide",children:(0,s.jsx)(a.ZP,{children:t.name})}),(0,s.jsx)(x,{className:"text-sm",children:(0,s.jsx)(a.ZP,{children:t.description})}),(0,s.jsxs)("div",{className:"flex flex-col gap-4 py-2",children:[(0,s.jsxs)("div",{className:"flex gap-2 text-4xl font-semibold md:gap-1 md:text-2xl lg:gap-2 lg:text-4xl",children:[(0,s.jsx)("span",{className:"flex items-center justify-center text-3xl font-normal md:text-2xl lg:text-3xl",children:"ZMW"}),(0,s.jsx)("span",{children:e?Number(t.prices.yearly)/12||0:t.prices.monthly}),(0,s.jsx)("span",{className:"flex items-end text-lg font-semibold md:items-center md:text-base lg:items-end lg:text-lg",children:"/ month"})]}),e&&parseFloat(t.prices.monthly)>0&&(0,s.jsx)("p",{className:"text-xs font-bold text-muted-foreground",children:(0,s.jsxs)(a.ZP,{children:["You will be charged"," ",(0,s.jsxs)("span",{className:"text-foreground",children:["ZMW",t.prices.yearly]})," ","once a year, starting today"]})})]})]}),(0,s.jsxs)(u,{className:"flex flex-1 flex-col justify-between text-sm lg:text-base",children:[(0,s.jsxs)("div",{className:"grid gap-3 py-8",children:[(0,s.jsx)("ul",{className:"flex flex-col gap-3",children:t.features.map(e=>(0,s.jsxs)("li",{className:"flex items-center gap-2",children:[(0,s.jsx)(e=>(0,s.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("path",{d:"M20 6 9 17l-5-5"})}),{className:"size-4"}),(0,s.jsx)(a.ZP,{children:e})]},e))}),(0,s.jsx)("ul",{className:"flex flex-col gap-2",children:t.limitations.map(e=>(0,s.jsxs)("li",{className:"flex items-center gap-3 text-muted-foreground",children:[(0,s.jsx)(e=>(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M18 6 6 18"}),(0,s.jsx)("path",{d:"m6 6 12 12"})]}),{className:"size-4"}),(0,s.jsx)(a.ZP,{children:e})]},e))})]}),(0,s.jsx)(o.z,{variant:"outline",className:"h-10 w-full border bg-gradient-to-br from-green-600/20 to-yellow-400/20 font-bold tracking-wide",children:"Purchase"})]})]},t.name))})]})})}p.displayName=g.fC.displayName},3089:function(e,t,r){r.d(t,{z:function(){return d}});var s=r(7437),n=r(2265),a=r(7256),i=r(9213),l=r(345);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",navbarIcon:"m-0 p-1 transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground",user:"flex items-center justify-center"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"size-9 rounded-full text-sm"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:d=!1,...c}=e,m=d?a.g7:"button";return(0,s.jsx)(m,{className:(0,l.cn)(o({variant:n,size:i,className:r})),ref:t,...c})});d.displayName="Button"},345:function(e,t,r){r.d(t,{cn:function(){return cn}});var s=r(7042),n=r(4769);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.W)(t))}}}]);