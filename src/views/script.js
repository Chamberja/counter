document.addEventListener('DOMContentLoaded', () => {
  let current = 0;

  const render = (current) => {
    document.querySelector('.counter').innerHTML = current ;
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
