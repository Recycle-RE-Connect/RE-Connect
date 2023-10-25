const sidebar = document.querySelector('.nav')
const menus = document.querySelectorAll('.menu-btn')
const toggleBtn = document.querySelector('.nav-icon')
const dimLayer = document.querySelector('.dim-layer')

menus.forEach(menu=> {
  menu.addEventListener('click',() => {
    menu.parentElement.classList.toggle('active')
  })
})
toggleBtn.addEventListener('click',()=>{
  sidebar.classList.toggle('active')
  dimLayer.classList.toggle('active')
  toggleBtn.classList.toggle('active')
})
dimLayer.addEventListener('click',() => {
  sidebar.classList.toggle('active')
  dimLayer.classList.toggle('active')
})