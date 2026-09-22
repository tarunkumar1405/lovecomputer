
function toggleMenu(){
  const nav=document.querySelector('.nav-links');
  if(!nav)return;
  nav.classList.toggle('mobile-open');
}
document.addEventListener('DOMContentLoaded',function(){
  const year=document.getElementById('year'); if(year)year.textContent=new Date().getFullYear();
  document.querySelectorAll('.nav-drop-btn').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      const menu=btn.nextElementSibling;if(!menu)return;
      const open=menu.classList.contains('open');
      document.querySelectorAll('.nav-dropdown-menu').forEach(m=>m.classList.remove('open'));
      if(!open)menu.classList.add('open');
    });
  });
  document.addEventListener('click',function(){
    document.querySelectorAll('.nav-dropdown-menu').forEach(m=>m.classList.remove('open'));
  });
  const box=document.getElementById('problemSearch');
  if(box)box.addEventListener('input',function(){
    const q=box.value.toLowerCase().trim();
    document.querySelectorAll('.searchable').forEach(function(el){
      el.style.display=el.innerText.toLowerCase().includes(q)?'':'none';
    });
  });
});
