function toggleClassName() {
  let sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}
sidebar.addEventListener('click', () => {
  toggleClassName();
  console.log('you clicked it')
})