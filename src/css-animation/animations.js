console.log('hi there');

function openNav() {
  console.log("hello")
  let navMobile = document.querySelector('.nav-items--mobile')
  console.log('navMobile:', navMobile)
  navMobile.classList.toggle('showNav')
}