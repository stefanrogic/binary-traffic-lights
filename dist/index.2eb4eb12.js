const e=["red","green"],t=async function(e){try{const n=await Promise.race([fetch(e),(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]),r=await n.json();if(!n.ok)throw new Error(`${n.message} (${n.status})`);return r}catch(e){throw e}var t},n={decimalNum:0,binaryNum:"00000000"},r=async function(){try{const e=await t("https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new");n.decimalNum=e}catch(e){throw e}};var o=new class{elements=document.querySelectorAll(".tlight");repeat(e,t){return setInterval(e,1e3*t)}yellow(){this.elements.forEach((e=>e.classList.add("yellow")))}clear(){this.elements.forEach((e=>{e.classList.remove("yellow","red","green")}))}renderColors(t){this.clear();const n=t.split("");this.elements.forEach(((t,r)=>n.find(((e,t)=>t===r))?.includes(String(e.indexOf("red")))?t.classList.add(e[0]):t.classList.add(e[1])))}};const a=async function(){try{o.yellow(),await r(),function(){const e=Number(n.decimalNum).toString(2),t=8-e.length;n.binaryNum=`${"0".repeat(t)}${e}`,window.location.hash=`${n.binaryNum}`}(),o.renderColors(n.binaryNum)}catch(e){console.log(e)}};o.repeat(a,1);
//# sourceMappingURL=index.2eb4eb12.js.map