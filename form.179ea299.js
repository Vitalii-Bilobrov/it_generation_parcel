const e=document.querySelector(".js-form");!function(){let t=localStorage.getItem("Hello, User");t&&(t=JSON.parse(t),Object.entries(t).forEach((([t,o])=>{e.elements[t].value=o})))}(),e.addEventListener("input",(function(e){let t=localStorage.getItem("Hello, User");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("Hello, User",JSON.stringify(t))})),e.addEventListener("submit",(function(t){t.preventDefault();const o=new FormData(e),r={};o.forEach(((e,t)=>{r[t]=e})),console.log(r),t.target.reset(),localStorage.removeItem("Hello, User")}));
//# sourceMappingURL=form.179ea299.js.map
