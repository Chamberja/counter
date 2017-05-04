document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const counter = container.querySelector('.counter');
  const up = container.querySelector('.up');
  const down = container.querySelector('.down');
  let current = 0;

  const countUp = () => {
    current = current + 1;
    return current;
  };

  const countDown = () => {
    current = current - 1;
    return current;
  };

  up.addEventListener('click', () => {
    counter.innerHTML = countUp();
  })

  down.addEventListener('click', () => {
    counter.innerHTML = countDown();
  })
});
