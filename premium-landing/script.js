// Small JS: mobile menu toggle + reveal animation + year
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger) {
  burger.addEventListener('click', () => {
    if (menu.style.display === 'flex') menu.style.display = 'none';
    else { menu.style.display = 'flex'; menu.style.flexDirection = 'column'; }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal--visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
