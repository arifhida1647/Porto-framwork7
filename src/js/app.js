// Dom7
var $ = Dom7;

// Demo
if (document.location.href.includes('safe-areas')) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--f7-safe-area-top', '44px');
    html.style.setProperty('--f7-safe-area-bottom', '34px');
  }
}
if (document.location.href.includes('example-preview')) {
  $('.view-main').attr('data-browser-history', 'true');
  $('.view-main').attr('data-browser-history-root', '/kitchen-sink/core/');
  $('.view-main').attr('data-preload-previous-page', 'false');
  $('.view-main').attr('data-ios-swipe-back', 'false');
  document.documentElement.classList.add('example-preview');
}

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
if (document.location.search.indexOf('mode=') >= 0) {
  const mode = document.location.search.split('mode=')[1].split('&')[0];
  if (mode === 'dark') document.documentElement.classList.add('dark');
}



// Fungsi untuk menampilkan kartu-kartu tertentu
function toggleCards(cardIds) {
  cardIds.forEach((cardId) => {
    const card = document.getElementById(cardId);

    if (card.style.display === 'block' || card.style.display === '') {
      card.style.display = 'none';
      const button = document.querySelector(`[data-card-id="${cardId}"]`);
      if (button) {
        button.classList.add('button-fill');
      }
    } else {
      card.style.display = 'block';
      const button = document.querySelector(`[data-card-id="${cardId}"]`);
      if (button) {

        button.classList.remove('button-fill');
      }
    }
  });
}
// Fungsi untuk menutup panel
function closePanel() {
  var app = new Framework7();
  app.panel.close();
}

// Tambahkan event listener untuk tombol yang akan menutup panel
document.addEventListener('DOMContentLoaded', function () {
  var panelButton = document.querySelector('.panel-open');
  panelButton.addEventListener('click', closePanel);
});


// Init App
var app = new Framework7({
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});
