document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const counter = container.querySelector('.counter');
  const up = container.querySelector('.up');
  const down = container.querySelector('.down');
  let current = 0;

  const render = (current) => {
    counter.innerHTML = current ;
  };

  up.addEventListener('click', () => {
    current = current + 1;
    render(current);
  })

  down.addEventListener('click', () => {
    current = current - 1;
    render(current);
  })
});
