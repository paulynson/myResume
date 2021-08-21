window.addEventListener('scroll', () => {
  const myTop = document.querySelector('.pushtop');
  myTop.classList.toggle('active', scrollY >= 200);
});
