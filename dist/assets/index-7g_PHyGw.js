import{_ as c,e as d,f as n,h as s,t as r}from"./index-qZkaeYTl.js";const l={data(){return{imageSrc:"/img/exmaple.png",title:"Card Title",description:"This is a description of the card content.",isHovering:!1,mouseX:0,mouseY:0}},methods:{handleMouseMove(e){this.mouseX=e.pageX-e.target.offsetLeft-e.target.offsetWidth/2,this.mouseY=e.pageY-e.target.offsetTop-e.target.offsetHeight/2,this.isHovering=!0},handleMouseLeave(){this.isHovering=!1}}},f={"wh-full":"",flex:"","justify-center":"","pt-12":""},u={class:"card-content"},h=["src"],g={class:"card-title"},m={class:"card-description"};function p(e,t,_,M,a,o){return d(),n("div",f,[s("div",{class:"card",onMousemove:t[0]||(t[0]=(...i)=>o.handleMouseMove&&o.handleMouseMove(...i)),onMouseleave:t[1]||(t[1]=(...i)=>o.handleMouseLeave&&o.handleMouseLeave(...i))},[s("div",u,[s("img",{src:a.imageSrc,alt:"Card Image",class:"card-image"},null,8,h),s("h2",g,r(a.title),1),s("p",m,r(a.description),1)])],32)])}const x=c(l,[["render",p]]);export{x as default};