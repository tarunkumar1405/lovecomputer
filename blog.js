function filterPosts(){
  const q=(document.getElementById("blogSearch")?.value||"").toLowerCase().trim();
  document.querySelectorAll(".searchable-post").forEach(card=>{
    card.style.display=(!q || card.textContent.toLowerCase().includes(q))?"":"none";
  });
}
function filterCategory(cat,btn){
  document.querySelectorAll(".category").forEach(b=>b.classList.remove("active"));
  if(btn) btn.classList.add("active");
  document.querySelectorAll(".searchable-post").forEach(card=>{
    const cats=(card.dataset.category||"").toLowerCase().split(/\s+/);
    card.style.display=(cat==="all" || cats.includes(cat))?"":"none";
  });
}
function toggleMenu(){
  document.querySelector(".nav-links")?.classList.toggle("show");
}
function showMessage(){alert("More articles will be added soon.")}
document.addEventListener("DOMContentLoaded",()=>{
  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();
});
