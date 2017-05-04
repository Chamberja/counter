document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const counter = container.querySelector('.counter');
  const up = container.querySelector('.up');
  const down = container.querySelector('.down');

  const getCount = () => {
    return parseInt(counter.innerHTML);
  };

  const countUp = () => {
    let current = getCount();
    let addition = current + 1;
    return addition;
  };

  const countDown = () => {
    let current = getCount();
    let subtraction = current - 1;
    return subtraction;
  };

  up.addEventListener('click', () => {
    counter.innerHTML = countUp();
  })

  down.addEventListener('click', () => {
    counter.innerHTML = countDown();
  })
});
