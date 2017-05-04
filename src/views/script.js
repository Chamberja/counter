document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const counter = container.querySelector('.counter');
  const up = container.querySelector('.up');
  const down = container.querySelector('.down');
  let current = 0;

  const render = (current) => {
    counter.innerHTML = current ;
  };

  document.addEventListener('click', (e)=> {
    switch(e.srcElement.classList.value) {
      case 'up':
        render(current = current + 1);
        break;

      case 'down':
        render(current = current - 1);
        break;
    }
  })
});
