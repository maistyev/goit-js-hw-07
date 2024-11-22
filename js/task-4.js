const form = document.querySelector('form');
const data = {};

form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    event.target.elements.email.value &&
    event.target.elements.password.value
  ) {
    data.email = event.target.elements.email.value.trim();
    data.password = event.target.elements.password.value.trim();

    event.target.reset();
  } else {
    alert('All form fields must be filled in');
  }
  if (data) {
    console.log(data);
  }
});
