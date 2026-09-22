
function toggleMenu(){const nav=document.querySelector('.nav-links');if(nav)nav.classList.toggle('mobile-open')}
document.addEventListener('DOMContentLoaded',function(){
 const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
 document.querySelectorAll('.nav-drop-btn').forEach(function(btn){btn.addEventListener('click',function(e){e.stopPropagation();const m=btn.nextElementSibling;if(!m)return;const o=m.classList.contains('open');document.querySelectorAll('.nav-dropdown-menu').forEach(x=>x.classList.remove('open'));if(!o)m.classList.add('open')})});
 document.addEventListener('click',function(){document.querySelectorAll('.nav-dropdown-menu').forEach(x=>x.classList.remove('open'))});
});
