function toggleMenu(){
 const n=document.querySelector(".nav-links");if(!n)return;
 n.style.display=n.style.display==="flex"?"none":"flex";
 if(n.style.display==="flex"){n.style.position="absolute";n.style.top="72px";n.style.left="0";n.style.right="0";n.style.background="#fff";n.style.padding="20px";n.style.flexDirection="column";n.style.borderBottom="1px solid #e7ebf2"}
}
document.addEventListener("DOMContentLoaded",()=>{const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear()});
function demoSubmit(e){
 e.preventDefault();
 const s=document.getElementById("success");s.style.display="block";
 e.target.reset();
}
