function toggleMenu(){
  const nav=document.querySelector('.nav-links');
  if(!nav)return;
  nav.classList.toggle('mobile-open');
}
document.addEventListener('DOMContentLoaded',function(){
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
  const input=document.getElementById('problemSearch');
  const results=document.getElementById('searchResults');
  if(input && results){
    const links=[...document.querySelectorAll('.sidebar-box a')];
    input.addEventListener('input',function(){
      const q=input.value.toLowerCase().trim();
      results.innerHTML='';
      if(!q)return;
      links.filter(a=>a.textContent.toLowerCase().includes(q)).forEach(a=>{
        const copy=a.cloneNode(true);
        results.appendChild(copy);
      });
    });
  }
});
