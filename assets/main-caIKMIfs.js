import{g as p,s as m,u as y,p as S}from"./showToast-B1ooQwmv.js";p();const q=(u,r,d)=>{let o=p();const a=document.querySelector(`#card${r}`);let t=a.querySelector(".productQuantity").innerText,c=a.querySelector(".productPrice").innerText;c=c.replace("$","");let l=o.find(n=>n.id===r);if(l&&t>1){t=Number(l.quantity)+Number(t),c=Number(c*t);let n={id:r,quantity:t,price:c};n=o.map(i=>i.id===r?n:i),localStorage.setItem("cartProductLS",JSON.stringify(n)),m("add",r)}if(l)return!1;c=Number(c*t),t=Number(t),o.push({id:r,quantity:t,price:c}),localStorage.setItem("cartProductLS",JSON.stringify(o)),y(o),m("add",r)},g=(u,r,d)=>{const a=document.querySelector(`#card${r}`).querySelector(".productQuantity");let t=parseInt(a.getAttribute("data-quantity"))||1;return u.target.className==="cartIncrement"&&(t<d?t+=1:t===d&&(t=d)),u.target.className==="cartDecrement"&&t>1&&(t-=1),a.innerText=t,a.setAttribute("data-quantity",t.toString()),t},C=document.querySelector("#productContainer"),f=document.querySelector("#productTemplate"),N=u=>{if(!u)return!1;u.forEach(r=>{const{brand:d,category:o,description:a,id:t,image:c,name:l,price:n,stock:i}=r,e=document.importNode(f.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${t}`),e.querySelector(".productImage").src=c,e.querySelector(".productImage").alt=c,e.querySelector(".productStock").textContent=i,e.querySelector(".productDescription").textContent=a,e.querySelector(".productName").textContent=l,e.querySelector(".category").textContent=o,e.querySelector(".productPrice").textContent=`$${n}`,e.querySelector(".productActualPrice").textContent=`$${n*2}`,e.querySelector(".stockElement").addEventListener("click",s=>{g(s,t,i)}),e.querySelector(".add-to-cart-button").addEventListener("click",s=>{q(s,t)}),C.append(e)})};N(S);
