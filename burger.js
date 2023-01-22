// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.burger-menu');

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.menu-btn')
    const nav = document.querySelector('.burger-menu')
  
    button.addEventListener('click', () => {
      nav.classList.toggle('active')
    })
  
    window.addEventListener('click', e => {
      const target = e.target
      if (!target.closest('.burger-menu') && !target.closest('.menu-btn')) { 
        nav.classList.remove('active') 
      }
    })
  
  })