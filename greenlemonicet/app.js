// ===== MODAL FÜR ÄNGSTE =====
function openAngstModal(title, text, kapitel) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent = text;
  document.getElementById('modalKapitel').textContent = '→ ' + kapitel;
  document.getElementById('angstModal').classList.add('active');
}

function closeAngstModal() {
  document.getElementById('angstModal').classList.remove('active');
}

document.getElementById('angstModal').addEventListener('click', function(e) {
  if (e.target === this) closeAngstModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeAngstModal();
});

// ===== QUIZ =====
(function() {
  const questions = [
    {
      question: 'Was machst du, wenn du einen freien Tag hast?',
      answers: [
        { text: 'Ich plane ihn genau – ich will nichts dem Zufall überlassen.', points: { progress: 4, rationality: 2 } },
        { text: 'Ich lasse ihn auf mich zukommen – ich mag es, spontan zu sein.', points: { rationality: 3, love: 3 } },
        { text: 'Ich verbringe ihn mit Menschen, die mir wichtig sind.', points: { love: 4, moral: 2 } },
        { text: 'Ich tue etwas, das mich wirklich erfüllt – ob es wichtig ist oder nicht.', points: { justice: 4, individualism: 2 } }
      ]
    },
    {
      question: 'Was machst du, wenn du dich erschöpft fühlst?',
      answers: [
        { text: 'Ich funktioniere trotzdem weiter – irgendwann ist es vorbei.', points: { individualism: 4, progress: 2 } },
        { text: 'Ich ziehe mich zurück und lasse alles liegen.', points: { rationality: 4, love: 2 } },
        { text: 'Ich suche Nähe – bei Menschen, die mir guttun.', points: { love: 4, moral: 2 } },
        { text: 'Ich frage mich, warum ich mich so fühle – und versuche, etwas zu ändern.', points: { justice: 4, rationality: 2 } }
      ]
    },
    {
      question: 'Was machst du in einer schwierigen Situation?',
      answers: [
        { text: 'Ich suche nach einer Lösung – und zwar schnell.', points: { progress: 4, technology: 2 } },
        { text: 'Ich vertraue darauf, dass sich alles irgendwie fügt.', points: { love: 4, rationality: 2 } },
        { text: 'Ich rede mit anderen darüber – und höre auf ihren Rat.', points: { democracy: 3, moral: 3 } },
        { text: 'Ich höre in mich hinein – und entscheide nach Gefühl.', points: { individualism: 4, justice: 2 } }
      ]
    },
    {
      question: 'Was fehlt dir im Alltag am meisten?',
      answers: [
        { text: 'Struktur – dass ich weiss, was als Nächstes kommt.', points: { progress: 4, democracy: 2 } },
        { text: 'Ruhe – dass ich einfach mal sein kann.', points: { rationality: 4, love: 2 } },
        { text: 'Echte Nähe – Menschen, die mich wirklich sehen.', points: { love: 4, moral: 2 } },
        { text: 'Bedeutung – das Gefühl, dass das, was ich tue, zählt.', points: { justice: 4, individualism: 2 } }
      ]
    },
    {
      question: 'Was macht dich wirklich wütend?',
      answers: [
        { text: 'Wenn andere meine Zeit verschwenden.', points: { individualism: 4, progress: 2 } },
        { text: 'Wenn ich mich selbst nicht ernst nehme.', points: { rationality: 4, love: 2 } },
        { text: 'Wenn andere ungerecht behandelt werden.', points: { moral: 4, justice: 2 } },
        { text: 'Wenn ich sehe, dass die Welt sich nicht verändert.', points: { progress: 4, democracy: 2 } }
      ]
    },
    {
      question: 'Was machst du, wenn du dich einsam fühlst?',
      answers: [
        { text: 'Ich lenke mich ab – Arbeit, Serien, Social Media.', points: { technology: 4, individualism: 2 } },
        { text: 'Ich bin einfach damit – es ist, wie es ist.', points: { rationality: 4, love: 2 } },
        { text: 'Ich suche Kontakt – zu Menschen, die mir nahestehen.', points: { love: 4, moral: 2 } },
        { text: 'Ich frage mich, warum ich mich so fühle – und versuche, es zu verstehen.', points: { justice: 4, rationality: 2 } }
      ]
    },
    {
      question: 'Was würdest du tun, wenn du eine Sache in der Welt verändern könntest?',
      answers: [
        { text: 'Ich würde die Menschen dazu bringen, vernünftiger zu handeln.', points: { progress: 4, rationality: 2 } },
        { text: 'Ich würde die Menschen dazu bringen, achtsamer zu sein.', points: { love: 4, moral: 2 } },
        { text: 'Ich würde die Menschen dazu bringen, mehr aufeinander zu achten.', points: { moral: 4, justice: 2 } },
        { text: 'Ich würde die Menschen dazu bringen, zu verstehen, worum es wirklich geht.', points: { rationality: 4, justice: 2 } }
      ]
    },
    {
      question: 'Wie stehst du zu Regeln und Gesetzen?',
      answers: [
        { text: 'Sie geben mir Sicherheit – ich weiss, woran ich bin.', points: { progress: 4, democracy: 2 } },
        { text: 'Sie schränken mich ein – ich möchte selbst entscheiden.', points: { individualism: 4, rationality: 2 } },
        { text: 'Sie sind notwendig – aber sie sollten fair sein.', points: { democracy: 4, moral: 2 } },
        { text: 'Sie sind ein Werkzeug – aber sie sollten nicht alles bestimmen.', points: { justice: 4, rationality: 2 } }
      ]
    },
    {
      question: 'Was ist für dich ein gelungener Tag?',
      answers: [
        { text: 'Wenn ich alles geschafft habe, was ich mir vorgenommen habe.', points: { individualism: 4, progress: 2 } },
        { text: 'Wenn ich mich wohlgefühlt habe – ohne Druck.', points: { love: 4, rationality: 2 } },
        { text: 'Wenn ich mit anderen Menschen verbunden war.', points: { moral: 4, love: 2 } },
        { text: 'Wenn ich das Gefühl hatte, etwas Sinnvolles getan zu haben.', points: { justice: 4, moral: 2 } }
      ]
    },
    {
      question: 'Was tust du, wenn du eine schwierige Entscheidung treffen musst?',
      answers: [
        { text: 'Ich suche nach Fakten – und entscheide rational.', points: { rationality: 4, progress: 2 } },
        { text: 'Ich höre auf mein Bauchgefühl – und entscheide intuitiv.', points: { love: 4, individualism: 2 } },
        { text: 'Ich hole mir Rat – und entscheide im Austausch.', points: { democracy: 4, moral: 2 } },
        { text: 'Ich überlege, was langfristig das Beste wäre – und entscheide entsprechend.', points: { justice: 4, rationality: 2 } }
      ]
    }
  ];

  const results = {
    progress: { title: 'Der Fortschrittsglaube', text: 'Du glaubst, dass die Geschichte auf eine bessere Zukunft zusteuert. Vielleicht denkst du an technologische Durchbrüche, an eine gerechtere Gesellschaft oder an eine moralisch bessere Welt. Aber der Fortschritt ist kein Faktum – er ist ein Glaubenssatz. Er vertröstet auf eine Zukunft, die nie kommt – und verhindert, dass du den Riss in der Gegenwart siehst. Wer an den Fortschritt glaubt, glaubt an eine Geschichte, die nicht bewiesen ist.' },
    individualism: { title: 'Der Individualismus', text: 'Du glaubst, dass jeder seines Glückes Schmied ist. Dass du dein Leben selbst in der Hand hast – und dass du nur genug arbeiten, optimieren, disziplinieren musst. Aber der Mensch ist kein autonomes Wesen. Er ist ein soziales Wesen, das in Abhängigkeiten lebt, die es nicht gewählt hat. Der Individualismus entlastet die Gesellschaft – und gibt dir die Schuld für dein Leid.' },
    rationality: { title: 'Der Rationalitätsglaube', text: 'Du glaubst, dass der Mensch aus Vernunft handelt. Aber das ist ein Glaubenssatz – kein Faktum. Der Mensch handelt aus Trieb, Angst und Gewohnheit – und rationalisiert nur nachträglich, was er getan hat. Die Annahme, dass der Mensch rational sei, ist selbst ein Konstrukt, das die Ablenkungsmaschine stützt.' },
    technology: { title: 'Der Technologieglaube', text: 'Du glaubst, dass Technologie die Probleme der Menschheit lösen wird. Aber die Technologie ist ein Werkzeug – und sie wurde zum Meister. Der Glaube, dass Technologie die Lösung ist, ist selbst ein Produkt der Abstraktion, die den Menschen aus der Einheit mit der Welt riss. Wer an die Technologie glaubt, glaubt an eine Lösung, die das Problem nur in eine andere Form giest.' },
    moral: { title: 'Der Moralismus', text: 'Du glaubst, dass die Menschheit moralisch besser wird. Dass Grausamkeit, Ungerechtigkeit und Ausbeutung im Laufe der Geschichte abnehmen. Aber der Mensch hat nicht weniger Grausamkeit produziert – er hat sie nur unsichtbarer gemacht. Der moralische Fortschritt ist eine Illusion, die den Riss überdeckt.' },
    democracy: { title: 'Der Demokratieglaube', text: 'Du glaubst, dass Demokratie die beste aller Staatsformen ist. Aber die Demokratie ist ein Verfahren – keine Lösung. Sie gibt dir das Gefühl, mitzubestimmen – während die eigentlichen Entscheidungen längst gefallen sind. Wer an die Demokratie glaubt, glaubt an eine Illusion der Partizipation, die den Riss nur überdeckt.' },
    love: { title: 'Der Erlösungsglaube', text: 'Du glaubst, dass die Liebe dich retten wird. Dass der andere Mensch die Leere füllen kann, die du in dir trägst. Aber die Liebe ist die schönste aller Ablenkungen. Sie überbrückt den Riss für einen Moment – aber sie schliesst ihn nicht. Wer an die Liebe als Erlösung glaubt, glaubt an eine Illusion, die das Discidium nur bestätigt.' },
    justice: { title: 'Der Erfüllungsglaube', text: 'Du glaubst, dass die Lösung in der Veränderung der äusseren Umstände liegt. Dass du nur die richtigen Rahmenbedingungen schaffen musst – dann wird alles gut. Aber die äusseren Umstände sind nur eine Manifestation des Risses, nicht seine Ursache. Wer nur die Umstände verändert, behandelt ein Symptom – nicht die Krankheit.' }
  };

  let currentQuestion = 0;
  let scores = { progress: 0, individualism: 0, rationality: 0, technology: 0, moral: 0, democracy: 0, love: 0, justice: 0 };
  const quizApp = document.getElementById('quiz-app');

  function renderQuestion() {
    const q = questions[currentQuestion];
    const progressPercent = (currentQuestion / questions.length) * 100;
    let html = `
      <div class="progress-bar"><div class="progress-fill" style="width: ${progressPercent}%"></div></div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-answers">
    `;
    q.answers.forEach((answer, index) => {
      html += `<button class="quiz-answer" data-index="${index}">${answer.text}</button>`;
    });
    html += `</div>`;
    quizApp.innerHTML = html;

    document.querySelectorAll('.quiz-answer').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-index'));
        const answer = q.answers[idx];
        for (const [key, value] of Object.entries(answer.points)) {
          scores[key] += value;
        }
        this.classList.add('selected');
        this.disabled = true;
        setTimeout(() => {
          currentQuestion++;
          if (currentQuestion < questions.length) renderQuestion();
          else renderResult();
        }, 300);
      });
    });
  }

  function renderResult() {
    let maxScore = 0;
    let dominant = null;
    for (const [key, value] of Object.entries(scores)) {
      if (value > maxScore) { maxScore = value; dominant = key; }
    }
    const result = results[dominant];
    let html = `
      <div class="quiz-result">
        <h3>${result.title}</h3>
        <div class="result-text"><p style="color:#B0B0B0; font-family:'Source Serif 4', serif; font-size:1.2rem;">${result.text}</p></div>
        <div class="score-overview"><h4 style="font-family:'Inter Tight', sans-serif; color:#FFFFFF; margin-bottom:1rem;">Punkteübersicht</h4>
    `;
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    sortedScores.forEach(([key, value]) => {
      const labelMap = { progress: 'Fortschrittsglaube', individualism: 'Individualismus', rationality: 'Rationalitätsglaube', technology: 'Technologieglaube', moral: 'Moralismus', democracy: 'Demokratieglaube', love: 'Erlösungsglaube', justice: 'Erfüllungsglaube' };
      const maxPossible = 20;
      const widthPercent = Math.min((value / maxPossible) * 100, 100);
      html += `
        <div class="score-item">
          <span class="score-label">${labelMap[key]}</span>
          <div class="score-bar-bg"><div class="score-bar-fill" style="width: ${widthPercent}%"></div></div>
          <span class="score-value">${value}</span>
        </div>
      `;
    });
    html += `</div>
      <div class="quiz-buttons">
        <button class="btn-secondary" id="restartQuiz">Quiz wiederholen</button>
      </div>
      <p style="font-size:0.9rem; color:#777; margin-top:1.5rem;">💡 Mache einen Screenshot, um dein Ergebnis zu speichern. Diese Website speichert keine Daten.</p>
    </div>`;
    quizApp.innerHTML = html;

    document.getElementById('restartQuiz').addEventListener('click', () => {
      currentQuestion = 0;
      scores = { progress: 0, individualism: 0, rationality: 0, technology: 0, moral: 0, democracy: 0, love: 0, justice: 0 };
      renderQuestion();
    });
  }

  renderQuestion();
})();

// ===== STERNENHIMMEL =====
(function() {
  const starsData = [
    // === SEHENDE (gold, chaotisch) ===
    {
      name: 'Sigmund Freud',
      text: 'Freud hat das gespürt, was ich das Discidium nenne – nur nannte er es das Unbehagen. Er sah, dass der Mensch unter drei Dingen leidet: der Natur, die ihn überwältigt; dem Körper, der ihn im Stich lässt; und der Gesellschaft, die er selbst geschaffen hat, um sich zu schützen – und die ihn nun erdrückt. Die Kultur, die uns schützen sollte, ist der Käfig geworden. Freud hat den Riss gespürt, aber er blieb in den Symptomen stecken. Ich gehe weiter.',
      quote: '„Die individuelle Freiheit ist kein Kulturgut. Sie war am größten vor jeder Kultur, allerdings damals meist ohne Wert, weil das Individuum kaum imstande war, sie zu verteidigen.“',
      source: 'Sigmund Freud, Das Unbehagen in der Kultur (1930), Kapitel III',
      type: 'sehend', x: 12, y: 65,
      portrait: 'sigmund.png'
    },
    {
      name: 'Arthur Schopenhauer',
      text: 'Schopenhauer ist dem Discidium am nächsten gekommen, ohne es beim Namen zu nennen. Er hat den blinden Willen gesehen, der in allem Lebendigen pulsiert, niemals stillsteht und niemals satt wird. Und er hat gesehen, dass der Mensch sich von diesem Willen getrennt hat – er lebt nicht mehr in ihm, er betrachtet ihn von aussen. Das ist der Moment, in dem der Riss entsteht: als das Bewusstsein aus dem Strom des Willens heraustritt und beginnt, ihn zu beobachten, zu benennen, zu fürchten.',
      quote: '„Die Welt ist meine Vorstellung: – dies ist die Wahrheit, welche in Beziehung auf jedes lebende und erkennende Wesen gilt; wiewohl der Mensch allein sie in das reflektirte abstrakte Bewußtseyn bringen kann.“',
      source: 'Arthur Schopenhauer, Die Welt als Wille und Vorstellung (1819/1844)',
      type: 'sehend', x: 18, y: 35,
      portrait: 'arthur.png'
    },
    {
      name: 'Karl Marx',
      text: 'Marx erkannte, dass der moderne Mensch nicht nur ökonomisch, sondern existenziell von sich selbst getrennt ist. Der Arbeiter, so Marx, wird vom Produkt seiner Arbeit, von der Tätigkeit selbst, von seinem Wesen als schöpferisches Gattungswesen und von seinen Mitmenschen entfremdet. Diese vierfache Entfremdung ist die konkrete Erfahrung des Risses im Alltag der Arbeit. Marx hat die Ablenkungsmaschine in ihrer ökonomischen Gestalt erkannt – aber er hielt den Kapitalismus für ihre Ursache, nicht für ihr Symptom.',
      quote: '„Die Entfremdung des Arbeiters in seinem Gegenstand drückt sich nach den nationalökonomischen Gesetzen so aus: je mehr der Arbeiter produziert, desto weniger hat er zu konsumieren; je mehr Wert er schafft, desto wertloser wird er selbst.“',
      source: 'Karl Marx, Ökonomisch-philosophische Manuskripte (1844)',
      type: 'sehend', x: 25, y: 80,
      portrait: 'karl.png'
    },
    {
      name: 'Friedrich Nietzsche',
      text: 'Nietzsche sah, dass die moderne Welt keine lebendige Kultur mehr besitzt – sondern nur noch ein ungeordnetes Wissen über vergangene Kulturen. Der moderne Mensch, so Nietzsche, ist ein Wissenssammler, der die Fähigkeit verloren hat, aus einem inneren Lebensgefühl heraus zu schaffen. Die Ablenkungsmaschine ist für Nietzsche die Bildung als reine Anhäufung von Wissen, die den Menschen von seiner Instinktgrundlage trennt und ihn zu einem „Wanderer durch viele Zeitalter“ macht, der nirgends zu Hause ist.',
      quote: '„Die Bildung ist im Grunde nicht viel mehr als das Wissen um die Kultur, eine Anhäufung von Kenntnissen, die nicht mehr aus einem inneren Lebensgefühl herausquillt.“',
      source: 'Friedrich Nietzsche, Unzeitgemäße Betrachtungen (1873–1876)',
      type: 'sehend', x: 30, y: 18,
      portrait: 'friedrich.png'
    },
    {
      name: 'Max Weber',
      text: 'Weber hat den Käfig gesehen, bevor er ihn benennen konnte. Er nannte ihn das „stahlharte Gehäuse“ – eine Welt der Bürokratie, der Zweckrationalität, der entzauberten Ordnung. Er wusste, dass der moderne Mensch seine Freiheit gegen Sicherheit eingetauscht hat, und dass diese Sicherheit ihn langsam erstickt. Er war derjenige, der die Ablenkungsmaschine als Maschine erkannte – als ein System, das sich selbst am Laufen hält und dabei die Menschen zermahlt, die es geschaffen haben.',
      quote: '„Fachmenschen ohne Geist, Genussmenschen ohne Herz: dies Nichts bildet sich ein, eine nie vorher erreichte Stufe des Menschentums erstiegen zu haben.“',
      source: 'Max Weber, Die protestantische Ethik und der Geist des Kapitalismus (1904/1905)',
      type: 'sehend', x: 38, y: 55,
      portrait: 'max.png'
    },
    {
      name: 'Georg Simmel',
      text: 'Simmel beobachtete, wie der Mensch in der Großstadt seine emotionale Empfindsamkeit gegen die Reizüberflutung abschottet. Er wird zum Verstandesmenschen, der mit kühler Rationalität auf seine Umwelt reagiert – nicht weil er es will, sondern weil er sonst von der Masse der Eindrücke zermalmt würde. Diese Verstandesmäßigkeit ist eine Schutzreaktion des Subjekts gegen die Überwältigung der modernen Lebenswelt.',
      quote: '„Diese Verstandesmäßigkeit, so als ein Präservativ des subjektiven Lebens gegen die Vergewaltigungen der Großstadt erkannt, verzweigt sich in und mit vielfachen Formen.“',
      source: 'Georg Simmel, Die Großstädte und das Geistesleben (1903)',
      type: 'sehend', x: 45, y: 42,
      portrait: 'georg_simmel.png'
    },
    {
      name: 'Oswald Spengler',
      text: 'Spengler hat die Maschine gesehen – nicht als Werkzeug, sondern als ein Wesen, das sich gegen seinen Schöpfer wendet. Er wusste, dass die Zivilisation keine organische Entwicklung mehr ist, sondern ein Mechanismus, der alles Lebendige zermahlt. Was er sah, war der Käfig. Was er nicht sah, war der Riss, der ihn erst möglich gemacht hat.',
      quote: '„Alles Organische erliegt der um sich greifenden Organisation. Eine künstliche Welt durchsetzt und vergiftet die natürliche. Die Zivilisation ist selbst eine Maschine geworden, die alles maschinenmäßig tut oder tun will.“',
      source: 'Oswald Spengler, Der Mensch und die Technik (1931)',
      type: 'sehend', x: 50, y: 25,
      portrait: 'oswald.png'
    },
    {
      name: 'Erich Fromm',
      text: 'Fromm wusste, dass der moderne Konsum den Menschen nicht sättigt, sondern leer macht. Er sah, dass der Kapitalismus Menschen braucht, die immer mehr konsumieren wollen – Menschen, die ihre Leere mit Dingen füllen, die sie nie satt machen. Er hat die Ablenkungsmaschine in ihrer perfidesten Form gesehen: als eine Maschine, die den Menschen zur Ware macht.',
      quote: '„Der moderne Kapitalismus braucht Menschen, die in großer Zahl reibungslos funktionieren, die immer mehr konsumieren wollen, deren Geschmack standardisiert ist und leicht vorausgesehen und beeinflußt werden kann.“',
      source: 'Erich Fromm, Die Kunst des Liebens (1956)',
      type: 'sehend', x: 55, y: 70,
      portrait: 'erich.png'
    },
    {
      name: 'Jean-Paul Sartre',
      text: 'Sartre erkannte, dass der moderne Mensch in eine radikale Freiheit geworfen ist, die er nicht gewählt hat und die ihn zugleich mit der vollen Verantwortung für sein Leben belastet. Diese Freiheit ist keine Erlösung, sondern eine existenzielle Last, die den Menschen in eine tiefe Verlassenheit stürzt: Er ist allein ohne Gott, ohne vorgegebenen Sinn, ohne Leitfaden. Genau diese Verlassenheit ist die existenzielle Erfahrung des Risses im Alltag des modernen Menschen.',
      quote: '„Der Mensch ist nichts anderes als das, was er aus sich macht. Das ist das erste Prinzip des Existentialismus.“',
      source: 'Jean-Paul Sartre, Der Existentialismus ist ein Humanismus (1946)',
      type: 'sehend', x: 60, y: 38,
      portrait: 'jean-paul.png'
    },
    {
      name: 'Theodor W. Adorno & Siegfried Kracauer',
      text: 'Adorno und Kracauer haben den Riss in ihrem eigenen Leben gespürt – und sie haben ihn benannt. Sie wussten, dass die moderne Welt eine total verwaltete Welt ist, ein Freiluftgefängnis, in dem kein richtiges Leben mehr möglich ist. Kracauer hat gesehen, dass der moderne Angestellte geistig obdachlos ist – er hat eine Wohnung, aber keine Heimat.',
      quote: '„Der Riß der Welt geht auch durch mich.“<br><br>„Die Masse der Angestellten unterscheidet sich vom Arbeiter-Proletariat darin, dass sie geistig obdachlos ist.“',
      source: 'Theodor W. Adorno & Siegfried Kracauer, Briefwechsel 1923–1966; Siegfried Kracauer, Die Angestellten (1930)',
      type: 'sehend', x: 68, y: 62,
      portrait: 'theodor.png'
    },
    // === NEUE SEHENDE (gold) ===
    {
      name: 'Rabindranath Tagore',
      text: 'Tagore erkannte, dass die moderne Zivilisation den Menschen in getrennte Sphären zerlegt – in Arbeit, Freizeit, Konsum, Glauben – und ihn so von der Einheit seines Lebens trennt. Diese Einheit, diese verlorene Mitte, ist der Zustand, in dem Denken, Fühlen und Handeln noch aus einem gemeinsamen Ursprung fliessen: der Ur-Natur, in der der Mensch nicht Beobachter, sondern Teil des Lebens war. Tagore sah, dass diese Einheit im Westen zerstört war, aber er übersah, dass auch Asien längst vom Discidium durchdrungen war – die koloniale Moderne hatte den Riss auch in seine eigene Welt getragen. Seine Kritik bleibt daher an der Oberfläche, weil sie den Feind im Westen sucht, statt den Riss in der Struktur der Moderne selbst zu erkennen.',
      quote: '„Die moderne Zivilisation ist eine Zivilisation der Zersplitterung. Sie hat den Menschen in Stücke gerissen – in Arbeit, in Freizeit, in Konsum – und ihn so von seiner eigenen Mitte entfernt.“',
      source: 'Rabindranath Tagore, The Philosophy of Rabindranath Tagore (1921)',
      type: 'sehend', x: 22, y: 12,
      portrait: 'rabindranath.png'
    },
    {
      name: 'Muhammad Iqbal',
      text: 'Iqbal sah die westliche Moderne als eine Zivilisation, die den Menschen auf seine materielle Existenz reduziert und ihn von seiner spirituellen Tiefe trennt. Er kritisierte nicht den Westen als Kultur, sondern den Materialismus und die Gier, die er als Folge der rationalistischen Moderne diagnostizierte. Seine Diagnose der geistigen Leere ist eine existenzielle Kritik des Risses.',
      quote: '„Die Zivilisation des Westens hat den Menschen in die Irre geführt, indem sie ihn auf seine materielle Existenz reduziert und ihn von seinen moralischen und spirituellen Wurzeln getrennt hat.“',
      source: 'Muhammad Iqbal, The Evaluation of Two Conflicting Civilizations',
      type: 'sehend', x: 42, y: 8,
      portrait: 'muhammad_iqbal.png'
    },
    {
      name: 'Okakura Tenshin',
      text: 'Okakura sah die Einheit Asiens als Gegenentwurf zur zersplitternden, individualistischen Logik des Westens. Er kritisierte die Moderne nicht als fremde Macht, sondern als eine Denkweise, die das Ganze auflöst und den Menschen in isolierte Einzelteile zerlegt. Seine berühmte Aussage, dass Asien eins sei, ist keine politische Parole, sondern eine philosophische Haltung gegen die Fragmentierung der Existenz – eine Kritik, die dem Discidium nahesteht.',
      quote: '„Asien ist eins. Der Himalaya teilt, aber er trennt nicht. Zwei große Strömungen der Zivilisation haben sich über den Kontinent ausgebreitet.“',
      source: 'Okakura Tenshin, The Ideals of the East (1904)',
      type: 'sehend', x: 62, y: 15,
      portrait: 'okakura.png'
    },
    {
      name: 'Frantz Fanon',
      text: 'Fanon beschrieb die Erfahrung der kolonisierten Menschen als einen Zustand der absoluten Entfremdung. Die „Zone des Nichtseins“ ist der Ort, an dem der kolonisierte Mensch weder in seiner eigenen Kultur noch in der fremden Kultur eine Heimat findet – ein Zustand der Sprachlosigkeit und Identitätslosigkeit. Dieser Zustand, so Fanon, ist die Wurzel der Gewalt und des Aufbruchs zugleich: Aus dem absoluten Nichts kann ein neuer Anfang entstehen. Die Zone des Nichtseins ist die radikalste Erfahrung des Risses.',
      quote: '„Es gibt eine Zone des Nichtseins, eine außerordentlich sterile und dürre Region, einen völlig kahlen Abhang, aus dem ein echter Aufbruch entstehen kann.“',
      source: 'Frantz Fanon, Schwarze Haut, weiße Masken (1952)',
      type: 'sehend', x: 72, y: 38,
      portrait: 'frantz.png'
    },
    {
      name: 'Edward Said',
      text: 'Der palästinensisch-amerikanische Literaturtheoretiker prägte mit seiner Kritik des Orientalismus ein ganzes Feld. Er zeigte, wie der Westen den Orient nicht nur politisch, sondern auch intellektuell beherrscht und ihn als das „Andere“ konstruiert – eine radikale Analyse der Abstraktion und Entfremdung, die dem Discidium nahekommt. Said kritisierte nicht den Westen als solchen, sondern die Art und Weise, wie Wissen zur Macht wird und der „Orient“ als Projektionsfläche dient – eine konkrete, differenzierte Kritik, die nicht in pauschale Feindbilder verfällt.',
      quote: '„Der Orient war fast immer ein europäischer Gegenstand, eine europäische Erfindung – eine Ansammlung von Phantasmen, Klischees und Bildern.“',
      source: 'Edward Said, Orientalismus (1978)',
      type: 'sehend', x: 80, y: 25,
      portrait: 'edward.png'
    },
    // === BEWAHRENDE (silber, chaotisch) ===
    {
      name: 'Thomas Hobbes',
      text: 'Hobbes beschrieb den Naturzustand des Menschen als einen Krieg aller gegen alle – eine radikale Diagnose, die tatsächlich auf etwas Echtes verweist: den Verlust der Einbettung, die Angst, die aus der Vereinzelung entsteht. Was er nicht erkannte, war, dass dieses „bellum omnium contra omnes“ nicht der Urzustand des Menschen ist, sondern eine Folge des Discidium – des Bruchs, der den Menschen aus der Gemeinschaft riss. Hobbes sah die Symptome des Risses, aber er hielt sie für die Natur des Menschen, nicht für die Wunde, die erst geheilt werden müsste.',
      quote: '„Ich zeige zuerst, dass der Zustand der Menschen ohne bürgerliche Gesellschaft, den man den Naturzustand nennen darf, nichts anderes ist als ein Krieg aller gegen alle; und in diesem Krieg hat jeder ein Recht auf alles.“',
      source: 'Thomas Hobbes, De Cive (1642), Vorrede',
      type: 'bewahrend', x: 32, y: 58,
      portrait: 'thomas.png'
    },
    {
      name: 'John Locke',
      text: 'Locke hat das Eigentum zum Naturrecht erklärt und damit den Individualismus begründet, der den Menschen in der Verantwortung für seinen eigenen Erfolg oder Misserfolg zurücklässt. Er hat den Menschen als autonomes Wesen gesehen – und übersehen, dass der Mensch ein soziales Wesen ist, das in Abhängigkeiten lebt, die es nicht gewählt hat.',
      quote: '„Obwohl die Erde und alle niederen Geschöpfe allen Menschen gemeinsam gehören, so besitzt dennoch jeder Mensch in seiner eigenen Person ein Eigentum, auf das niemand als er selbst ein Anrecht hat.“',
      source: 'John Locke, Zwei Abhandlungen über die Regierung (1689)',
      type: 'bewahrend', x: 38, y: 48,
      portrait: 'john_locke.png'
    },
    {
      name: 'Adam Smith',
      text: 'Smith beobachtete, dass der Mensch in der Marktwirtschaft nicht aus moralischer Absicht handelt, sondern aus Eigeninteresse – und dass dieses Eigeninteresse dennoch den Wohlstand der Gesellschaft fördert. Diese Einsicht ist nicht falsch. Sie beschreibt aber nur die Funktionslogik des Käfigs, nicht seine Entstehung. Smith hat ein zentrales Prinzip der Ablenkungsmaschine beschrieben – die Idee, dass individueller Egoismus zum Gemeinwohl führt –, ohne zu fragen, ob dieses Gemeinwohl nicht nur ein Nebeneffekt ist, der den eigentlichen Riss verdeckt.',
      quote: '„Nicht vom Wohlwollen des Metzgers, Brauers oder Bäckers erwarten wir unsere Mahlzeit, sondern von deren Bedachtnahme auf ihr eigenes Interesse. Wir wenden uns nicht an ihre Menschenliebe, sondern an ihre Eigenliebe.“',
      source: 'Adam Smith, Der Wohlstand der Nationen (1776)',
      type: 'bewahrend', x: 45, y: 32,
      portrait: 'adam.png'
    },
    {
      name: 'Immanuel Kant',
      text: 'Kant hat die Vernunft zum Mass aller Dinge gemacht und damit den Rationalitätsglauben begründet, der den Menschen von seinem Fühlen und seiner Triebnatur trennt. Er hat den Menschen als Vernunftwesen gesehen – und übersehen, dass der Mensch aus Trieb, Angst und Gewohnheit handelt, nicht aus Vernunft.',
      quote: '„Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, daß sie ein allgemeines Gesetz werde.“',
      source: 'Immanuel Kant, Grundlegung zur Metaphysik der Sitten (1785)',
      type: 'bewahrend', x: 52, y: 52,
      portrait: 'immanuel.png'
    },
    {
      name: 'Georg Wilhelm Friedrich Hegel',
      text: 'Hegel hat den Fortschrittsglauben erfunden – die Idee, dass die Geschichte sich notwendig auf ein Ziel zubewegt. Er hat den Menschen von der Verantwortung entlastet, den Sinn in der Gegenwart zu suchen, indem er ihn in die Zukunft verschoben hat.',
      quote: '„Die Weltgeschichte ist der Fortschritt im Bewußtsein der Freiheit, – ein Fortschritt, den wir in seiner Notwendigkeit zu erkennen haben.“',
      source: 'Georg Wilhelm Friedrich Hegel, Vorlesungen über die Philosophie der Geschichte (1837)',
      type: 'bewahrend', x: 58, y: 68,
      portrait: 'georg_hegel.png'
    },
    {
      name: 'René Descartes',
      text: 'Descartes’ berühmter Satz „Ich denke, also bin ich“ begründete den modernen Rationalismus – die Vorstellung, dass das Denken das sicherste Fundament der Erkenntnis sei. Doch genau diese Überbetonung des Denkens auf Kosten des Fühlens und der leiblichen Erfahrung ist eine intellektuelle Grundlage für das Discidium. Descartes trennte Geist und Körper scharf voneinander – eine Spaltung, die den Menschen von seiner eigenen leiblichen Existenz entfremdet und den Riss zwischen Bewusstsein und Leben vertieft. Descartes hat nicht den Riss gesehen – er hat ein Denkwerkzeug geschaffen, das den Riss unsichtbar machte, indem es ihn als klare Trennung definierte.',
      quote: '„Ich denke, also bin ich.“',
      source: 'René Descartes, Discours de la méthode (1637)',
      type: 'bewahrend', x: 62, y: 28,
      portrait: 'rene.png'
    },
    {
      name: 'Gottfried Wilhelm Leibniz',
      text: 'Leibniz’ These, dass wir in der besten aller möglichen Welten leben, ist die perfideste Form der Rechtfertigung des Bestehenden. Sie erklärt jedes Übel zu einem notwendigen Teil eines vollkommenen Ganzen – und entzieht damit jeder Kritik am Käfig den Boden. Leibniz hat nicht den Riss geleugnet, er hat ihn theologisch überdeckt: Alles Leid ist Teil eines göttlichen Plans, alles Unrecht hat seinen Sinn. Wer diese Welt für die beste aller möglichen hält, muss nicht fragen, warum sie so schmerzt.',
      quote: '„Diese Welt ist die beste aller möglichen Welten.“',
      source: 'Gottfried Wilhelm Leibniz, Essais de Théodicée (1710)',
      type: 'bewahrend', x: 68, y: 48,
      portrait: 'gottfried.png'
    },
    {
      name: 'Edmund Burke',
      text: 'Burke sah die Gesellschaft nicht als einen beliebig kündbaren Vertrag, sondern als eine heilige Partnerschaft zwischen den Lebenden, den Toten und den Ungeborenen. Diese konservative Vision ist mehr als nur Traditionsbewahrung – sie ist ein Versuch, den Riss durch Kontinuität zu überdecken. Burke wusste, dass jede radikale Veränderung den Schmerz der Trennung sichtbar machen würde. Also verkleidete er den Käfig als ewige Ordnung – nicht aus Bosheit, sondern aus der Angst vor dem, was jenseits der Mauern liegen könnte. Seine Weisheit ist die des Bewahrers, der den Riss fürchtet und ihn deshalb mit der Autorität der Vergangenheit zudeckt.',
      quote: '„Die Gesellschaft ist ein Vertrag – aber nicht ein gewöhnlicher Vertrag über Waren, der nach Belieben der Parteien aufgelöst werden kann. Sie ist eine Partnerschaft in aller Wissenschaft, in aller Kunst, in aller Tugend.“',
      source: 'Edmund Burke, Reflections on the Revolution in France (1790)',
      type: 'bewahrend', x: 72, y: 20,
      portrait: 'edmund.png'
    },
    {
      name: 'Jeremy Bentham',
      text: 'Bentham hat den Menschen auf eine Zahl reduziert – auf eine Einheit in einer gesellschaftlichen Nutzenrechnung. Sein Utilitarismus ist die perfekte intellektuelle Grundlage für die Ablenkungsmaschine: Sie behandelt den Menschen als berechenbare Grösse, nicht als lebendiges Wesen.',
      quote: '„Der einzig und allein gerechte und einzig und allein zu rechtfertigende Endzweck des Staates ist: Das größte Glück der größten Zahl.“',
      source: 'Jeremy Bentham, An Introduction to the Principles of Morals and Legislation (1789)',
      type: 'bewahrend', x: 78, y: 42,
      portrait: 'jeremy.png'
    },
    {
      name: 'John Stuart Mill',
      text: 'Mill formulierte das Schadensprinzip: Die Freiheit des Einzelnen darf nur dann eingeschränkt werden, wenn sie anderen schadet. Dieses Prinzip ist nicht falsch – es ist die intellektuelle Grundlage für eine Freiheit, die sich im Rahmen des Bestehenden bewegt. Mill hat die Freiheit des Individuums in den Mittelpunkt gestellt, aber er hat nicht gefragt, ob diese Freiheit innerhalb des Käfigs überhaupt möglich ist. Er hat den Käfig mit dem Versprechen der Selbstverwirklichung verkleidet – und den Menschen in der Verantwortung für seinen eigenen Erfolg zurückgelassen.',
      quote: '„Der einzige Zweck, zu dem die Menschheit, einzeln oder kollektiv, berechtigt ist, in die Handlungsfreiheit eines ihrer Mitglieder einzugreifen, ist der Selbstschutz.“',
      source: 'John Stuart Mill, On Liberty (1859)',
      type: 'bewahrend', x: 85, y: 58,
      portrait: 'john_stuart_mill.png'
    },
    // === NEUE BEWAHRENDE (silber) ===
    {
      name: 'Han Feizi',
      text: 'Der chinesische Legalist vertrat die Ansicht, der Mensch sei von Natur aus selbstsüchtig und müsse durch strenge Gesetze gebändigt werden. Er baute den Käfig, indem er die Kontrolle als notwendige Ordnung rechtfertigte – eine der frühesten Rechtfertigungen des gebauten Reichs.',
      quote: '„Die menschliche Natur ist selbstsüchtig. Wenn es keine Grenzen gibt, werden die Menschen unweigerlich in einen Kampf verfallen.“',
      source: 'Han Feizi, Han Feizi',
      type: 'bewahrend', x: 35, y: 78,
      portrait: 'han_feizi.png'
    },
    {
      name: 'Al-Ghazālī',
      text: 'Al-Ghazālī war kein einfacher Gegner der Philosophie – er war ihr schärfster Kritiker aus dem Inneren des islamischen Denkens. Seine *Inkohärenz der Philosophen* (1095) ist kein pauschaler Angriff auf die Vernunft, sondern eine Auseinandersetzung mit den Grenzen des rationalen Denkens. Er argumentierte, dass die Philosophie die entscheidenden Fragen nicht beantworten könne – und dass der Glaube eine eigene, höhere Form der Erkenntnis sei. Diese Position ist nicht dumm oder reaktionär, aber sie ist ein Bewahrungsversuch: Al-Ghazālī hat den Riss nicht gesehen – er hat ihn durch die Autorität der Offenbarung überdeckt. Seine Kritik an der Philosophie ist eine Kritik an der Abstraktion, aber sie mündet nicht in die Erkenntnis des Risses, sondern in die Rückkehr in den Käfig der Orthodoxie.',
      quote: '„Die Philosophen behaupten, die Welt sei ewig – doch sie können es nicht beweisen. Sie behaupten, Gott könne das Partikulare nicht erkennen – doch sie irren. Wer die Philosophie über den Glauben stellt, verliert das Wesentliche.“',
      source: 'Al-Ghazālī, Die Inkohärenz der Philosophen (1095)',
      type: 'bewahrend', x: 48, y: 80,
      portrait: 'al_ghazali.png'
    },
    {
      name: 'Watsuji Tetsurō',
      text: 'Der japanische Philosoph kritisierte den westlichen Individualismus, weil er den Menschen aus seiner Gemeinschaft reißt. In seiner Ablehnung der westlichen Moderne verteidigte er eine kollektivistische Ordnung – eine Antwort auf den Riss, die ihn nicht überwindet, sondern durch Gemeinschaft ersetzt.',
      quote: '„Was ist der Mensch? Er ist weder ein bloßes Individuum noch eine bloße Gesellschaft. Er ist die Dialektik von Individuum und Gesellschaft.“',
      source: 'Watsuji Tetsurō, Ethik als Wissenschaft vom Menschen (1934)',
      type: 'bewahrend', x: 65, y: 80,
      portrait: 'watsuji.png'
    },
    {
      name: 'Xunzi',
      text: 'Der chinesische Philosoph vertrat die These, dass die menschliche Natur böse sei und jede Güte durch bewusste Anstrengung erst erworben werden müsse – die theoretische Grundlage strenger gesellschaftlicher Kontrolle und eine frühe Rechtfertigung des Käfigs.',
      quote: '„Die menschliche Natur ist böse; alles Gute im Menschen wird durch bewusste Anstrengung erworben.“',
      source: 'Xunzi, Xunzi',
      type: 'bewahrend', x: 82, y: 78,
      portrait: 'xunzi.png'
    },
    {
      name: 'Liang Shuming',
      text: 'Liang Shuming war kein einfacher Verteidiger der chinesischen Kultur gegen den Westen. Er entwickelte eine differenzierte Theorie der drei Lebenshaltungen – die westliche (nach aussen gerichtet, kämpferisch), die chinesische (nach innen gerichtet, harmonisch) und die indische (weltabgewandt, spirituell). Seine Kritik an der eindimensionalen Modernisierung ist keine romantische Verklärung des Ostens, sondern eine Analyse der kulturellen Verkümmerung durch die Moderne. Aber Liang blieb in der Beschreibung der Symptome stecken – er sah die Zerstörung der Tradition, nicht den Riss, der sie erst möglich machte. Seine Antwort auf die Moderne war die Rückkehr zur Ordnung – nicht die Erkenntnis des Bruchs.',
      quote: '„Die westliche Kultur ist eine Kultur des Kampfes, der chinesische Weg ist der der Harmonie. Aber die Harmonie, die wir suchen, ist kein Zustand, den wir einfach bewahren können – sie muss neu errungen werden.“',
      source: 'Liang Shuming, Die Kultur des Ostens und des Westens und ihre Philosophie (1921)',
      type: 'bewahrend', x: 90, y: 30,
      portrait: 'liang_shuming.png'
    }
  ];

  const skyInner = document.getElementById('skyInner');
  const sternModal = document.getElementById('sternModal');
  const sternModalClose = document.getElementById('sternModalClose');
  const sternName = document.getElementById('sternName');
  const sternText = document.getElementById('sternText');
  const sternQuote = document.getElementById('sternQuote');
  const sternSource = document.getElementById('sternSource');
  const sternPortrait = document.getElementById('sternPortrait');

  starsData.forEach(star => {
    const btn = document.createElement('button');
    btn.className = `star ${star.type}`;
    btn.style.left = `${star.x}%`;
    btn.style.top = `${star.y}%`;
    btn.setAttribute('aria-label', star.name);
    btn.innerHTML = '<i class="fas fa-star"></i>';
    btn.addEventListener('click', () => {
      sternName.textContent = star.name;
      sternText.textContent = star.text;
      sternQuote.innerHTML = star.quote;   // <-- innerHTML, damit <br> funktioniert
      sternSource.textContent = star.source;
      sternPortrait.src = star.portrait;
      sternPortrait.alt = `Porträt von ${star.name}`;
      sternModal.classList.add('active');
    });
    skyInner.appendChild(btn);
  });

  sternModalClose.addEventListener('click', () => {
    sternModal.classList.remove('active');
  });
  sternModal.addEventListener('click', (e) => {
    if (e.target === sternModal) sternModal.classList.remove('active');
  });
})();
