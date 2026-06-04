(function() {
  const pages = [
    "Es gibt eine Stunde, meist zwischen drei und vier Uhr morgens, in der die Maschinen schweigen. Die Bildschirme sind dunkel, die Benachrichtigungen verstummt, die Arbeit ruht, der Konsum schläft. In dieser Stunde spürst du etwas, das du nicht benennen kannst. Es ist ein Riss, der durch dein Leben geht, so fein, dass du ihn am Tag nicht siehst, und so tief, dass du ihn in der Stille spürst. Dieses Buch handelt von diesem Riss. Es wird dich nicht trösten. Aber es wird dich nicht allein lassen mit dem, was du spürst.",
    "Drei Motoren treiben das gebaute Reich an: die Angst, die den Menschen hineintrieb; der Komfort, der ihn darin hielt; die Macht, die alle anderen hineinzwang. Die Angst ist der Urgrund. Der Komfort ist die Falle. Die Macht ist die dunkle Logik, die jede Alternative auslöscht. Wer diese Motoren versteht, versteht, warum das Gefängnis der Zivilisation keine sichtbaren Mauern hat.",
    "Der Imperativ des Glücks sagt dir nicht nur, dass du glücklich sein sollst – er sagt dir auch, warum du es nicht bist. Die Antwort ist immer dieselbe: Du selbst. Du hast nicht genug an dich geglaubt, nicht hart genug an dir gearbeitet. Die Tyrannei der Positivität ist die sanfteste aller Herrschaften. Sie spricht nicht im Befehlston, sondern im Ton der freundlichen Empfehlung. Sie sagt nicht: »Du musst« – sie sagt: »Du kannst.« Und sie bestraft dich mit dem schlechten Gewissen, wenn du nicht kannst."
  ];

  let currentPage = 0;
  const readerText = document.getElementById('readerText');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageIndicator = document.getElementById('pageIndicator');

  function updateReader() {
    if (readerText) readerText.textContent = pages[currentPage];
    if (pageIndicator) pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentPage = (currentPage - 1 + pages.length) % pages.length;
      updateReader();
    });
    nextBtn.addEventListener('click', () => {
      currentPage = (currentPage + 1) % pages.length;
      updateReader();
    });
  }

  updateReader();

  const scrollIndicator = document.getElementById('scroll-indicator');
  window.addEventListener('scroll', () => {
    if (!scrollIndicator) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = 0;
    if (docHeight > 0) scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
    if (!scrollIndicator.querySelector('.progress-fill')) {
      const fill = document.createElement('div');
      fill.classList.add('progress-fill');
      scrollIndicator.appendChild(fill);
    }
    const fill = scrollIndicator.querySelector('.progress-fill');
    if (fill) fill.style.height = scrollPercent + '%';
  });

  const grassPath = document.getElementById('grassPath');
  if (grassPath) {
    window.addEventListener('load', () => {
      setTimeout(() => { grassPath.style.strokeDashoffset = '0'; }, 300);
    });
  }

  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
})();