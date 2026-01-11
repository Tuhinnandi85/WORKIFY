const options = document.querySelectorAll('.option');
const button = document.querySelector('.btn-orange');

options.forEach(option => {
  option.addEventListener('click', () => {

    options.forEach(item => item.classList.remove('active'));
    option.classList.add('active');

    button.classList.remove('disabled');
  });
});
