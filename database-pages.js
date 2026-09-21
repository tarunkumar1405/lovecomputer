function toggleMenu(){
  const nav=document.querySelector(".nav-links");
  if(!nav)return;
  const open=nav.style.display==="flex";
  nav.style.display=open?"none":"flex";
  if(!open){
    nav.style.position="absolute";nav.style.top="72px";nav.style.left="0";nav.style.right="0";
    nav.style.background="#fff";nav.style.padding="20px";nav.style.flexDirection="column";
    nav.style.borderBottom="1px solid #e7ebf2";
  }
}
function filterTopics(){
  const input=document.getElementById("topicSearch");
  if(!input)return;
  const q=input.value.toLowerCase().trim();
  document.querySelectorAll(".searchable").forEach(function(card){
    card.style.display=card.innerText.toLowerCase().includes(q)?"":"none";
  });
}
document.addEventListener("DOMContentLoaded",function(){
  const y=document.getElementById("year");
  if(y)y.textContent=new Date().getFullYear();
});
