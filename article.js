document.addEventListener("DOMContentLoaded",function(){
  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();

  const toggle=document.querySelector(".menu-toggle");
  const nav=document.querySelector(".main-nav");
  if(toggle&&nav){
    toggle.addEventListener("click",()=>nav.classList.toggle("show"));
  }

  const form=document.getElementById("blogSearch");
  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      const q=document.getElementById("searchInput").value.trim();
      if(q) window.location.href="blog.html?search="+encodeURIComponent(q);
    });
  }
});

function shareArticle(){
  const data={
    title:document.title,
    text:"10 MySQL Tips Every Developer Should Know",
    url:window.location.href
  };
  if(navigator.share){
    navigator.share(data).catch(()=>{});
  }else if(navigator.clipboard){
    navigator.clipboard.writeText(window.location.href)
      .then(()=>alert("Article link copied!"))
      .catch(()=>alert("Copy this page URL to share the article."));
  }else{
    alert("Copy this page URL to share the article.");
  }
}
