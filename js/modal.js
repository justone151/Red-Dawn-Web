document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const modal    = document.getElementById('modal');

  if (!openBtn || !closeBtn || !modal) return;

  openBtn.onclick = () => modal.classList.remove('hide');
  closeBtn.onclick = () => modal.classList.add('hide');
  modal.querySelector('.modal__overlay').onclick = () => modal.classList.add('hide');

  modal.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
});
