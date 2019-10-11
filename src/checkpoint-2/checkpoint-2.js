function toggleMenu(x) {
  x.classList.toggle("change")
  document.querySelector(".side-nav-mobile").classList.toggle("open");
}

function openForm() {
  document.querySelector('.form-popup').style.display = 'block';
}

function closeForm() {
  document.querySelector('.form-popup').style.display = 'none';
}