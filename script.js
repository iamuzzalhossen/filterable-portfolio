document.addEventListener('DOMContentLoaded', () => {
  filterSelection('all');

  const buttons = document.querySelectorAll('#button-container .btn');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const activeBtn = document.querySelector('.btn.active');

      if(activeBtn !== null) {
        activeBtn.classList.remove('active');
      }
      this.classList.add('active');

      const category = this.getAttribute('data-category');

      filterSelection(category);
    });
  });
});

function filterSelection(category) {
  const cards = document.querySelectorAll('#box-container .card');

  cards.forEach(card => {
    card.classList.remove('show');

    if (category === 'all') {
      card.classList.add('show');
    }
    else if (card.classList.contains(category)) {
      card.classList.add('show');
    }
  });
}