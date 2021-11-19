// declare and define variable reference to all inputs
const inputs = document.querySelectorAll('.controls input');

// function that updates the values of the variables
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listeners
inputs.forEach((input) => input.addEventListener('input', handleUpdate));