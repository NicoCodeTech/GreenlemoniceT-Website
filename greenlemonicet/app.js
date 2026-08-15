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
    // === SEHENDE (gold, offene Hand) ===
    {
      name: 'Sigmund Freud',
      text: 'Freud hat das gespürt, was ich das Discidium nenne – nur nannte er es das Unbehagen. Er sah drei Quellen des Leidens, aber er blieb in den Symptomen stecken. Ich gehe weiter.',
      quote: 'Wir haben die Antwort bereits gegeben, indem wir auf die drei Quellen hinwiesen, aus denen unser Leiden kommt: die Übermacht der Natur, die Hinfälligkeit unseres eigenen Körpers und die Unzulänglichkeit der Einrichtungen, welche die Beziehungen der Menschen zueinander in Familie, Staat und Gesellschaft regeln.',
      source: 'Sigmund Freud, Das Unbehagen in der Kultur (1930), Kapitel 3',
      type: 'sehend', x: 15, y: 60
    },
    {
      name: 'Arthur Schopenhauer',
      text: 'Schopenhauer ist dem Discidium am nächsten gekommen, ohne es beim Namen zu nennen. Er sah den blinden Willen – und die Trennung des Menschen von ihm.',
      quote: 'Die Welt ist meine Vorstellung: – dies ist die Wahrheit, welche in Beziehung auf jedes lebende und erkennende Wesen gilt; wiewohl der Mensch allein sie in das reflektirte abstrakte Bewußtseyn bringen kann.',
      source: 'Arthur Schopenhauer, Die Welt als Wille und Vorstellung (1819/1844), Erster Band, Erstes Buch',
      type: 'sehend', x: 20, y: 45
    },
    {
      name: 'Karl Marx',
      text: 'Marx hat die Entfremdung gesehen – aber er dachte, der Kapitalismus sei die Ursache. Er übersah, dass der Kapitalismus nur ein Werkzeug des Risses ist.',
      quote: 'Die Entfremdung des Menschen, überhaupt jedes Verhältnis, in dem der Mensch zu sich selbst steht, ist erst verwirklicht, drückt sich aus …',
      source: 'Karl Marx, Ökonomisch-philosophische Manuskripte (1844), MEW, Ergänzungsband 1, S. 518',
      type: 'sehend', x: 30, y: 35
    },
    {
      name: 'Friedrich Nietzsche',
      text: 'Nietzsche sah, dass die moderne Welt keine Kultur mehr hat – nur Wissen über Kultur. Er erkannte die Ablenkungsmaschine, bevor sie fertig gebaut war.',
      quote: 'Kultur ist vor allem Einheit des künstlerischen Stiles in allen Lebensäußerungen eines Volkes. Vieles Wissen und Gelernthaben ist aber weder ein notwendiges …',
      source: 'Friedrich Nietzsche, Unzeitgemäße Betrachtungen (1873–1876)',
      type: 'sehend', x: 35, y: 50
    },
    {
      name: 'Max Weber',
      text: 'Weber nannte den Käfig das \'stahlharte Gehäuse\'. Er wusste, dass der moderne Mensch seine Freiheit gegen Sicherheit eingetauscht hat – und langsam erstickt.',
      quote: 'Fachmenschen ohne Geist, Genussmenschen ohne Herz: dies Nichts bildet sich ein, eine nie vorher erreichte Stufe des Menschentums erstiegen zu haben.',
      source: 'Max Weber, Die protestantische Ethik und der Geist des Kapitalismus (1904/1905)',
      type: 'sehend', x: 40, y: 65
    },
    {
      name: 'Georg Simmel',
      text: 'Simmel beschrieb das neuro-endokrine Grundrauschen, bevor es messbar war. Er wusste: Die Stadt macht den Menschen krank – nicht, weil sie laut ist, sondern weil sie ihn zwingt, sich selbst zu verlassen.',
      quote: 'Diese Verstandesmäßigkeit, so als ein Präservativ des subjektiven Lebens gegen die Vergewaltigungen der Großstadt erkannt, verzweigt sich in und mit vielfachen …',
      source: 'Georg Simmel, Die Großstädte und das Geistesleben (1903)',
      type: 'sehend', x: 45, y: 40
    },
    {
      name: 'Oswald Spengler',
      text: 'Spengler sah die Maschine, die sich gegen ihren Schöpfer wendet. Er beschrieb das gebaute Reich, bevor es seinen Namen hatte.',
      quote: 'Alles Organische erliegt der um sich greifenden Organisation. Eine künstliche Welt durchsetzt und vergiftet die natürliche. Die Zivilisation ist selbst eine Maschine geworden, die alles maschinenmäßig tut oder tun will.',
      source: 'Oswald Spengler, Der Mensch und die Technik (1931)',
      type: 'sehend', x: 50, y: 55
    },
    {
      name: 'Erich Fromm',
      text: 'Fromm wusste, dass der Konsum den Menschen nicht sättigt, sondern leer macht. Er sah die Ablenkungsmaschine in ihrer perfidesten Form.',
      quote: 'Der moderne Kapitalismus braucht Menschen, die in großer Zahl reibungslos funktionieren, die immer mehr konsumieren wollen, deren Geschmack standardisiert ist und leicht vorausgesehen und beeinflußt werden kann.',
      source: 'Erich Fromm, Die Kunst des Liebens (1956)',
      type: 'sehend', x: 55, y: 30
    },
    {
      name: 'Jean-Paul Sartre',
      text: 'Sartre beschrieb die existenzielle Konsequenz des Discidium: der Mensch ist allein mit seiner Freiheit – und die meisten fliehen in den Käfig.',
      quote: 'Frei sein heißt zum Freisein verurteilt sein.',
      source: 'Jean-Paul Sartre, Der Existentialismus ist ein Humanismus (1946)',
      type: 'sehend', x: 60, y: 45
    },
    {
      name: 'Theodor W. Adorno & Siegfried Kracauer',
      text: 'Sie haben den Riss in ihrem eigenen Leben gespürt – und ihn benannt: \'Der Riß der Welt geht auch durch mich.\' Sie haben den Käfig beschrieben, bevor er sichtbar wurde.',
      quote: 'Der Riß der Welt geht auch durch mich. – Die Masse der Angestellten unterscheidet sich vom Arbeiter-Proletariat darin, dass sie geistig obdachlos ist.',
      source: 'Theodor W. Adorno & Siegfried Kracauer, Briefwechsel 1923–1966; Siegfried Kracauer, Die Angestellten (1930)',
      type: 'sehend', x: 65, y: 60
    },
    // === BEWAHRENDE (silber, geschlossene Faust) ===
    {
      name: 'Thomas Hobbes',
      text: 'Hobbes hat den Käfig theoretisch begründet: Der Mensch ist des Menschen Wolf – und nur der absolute Staat kann ihn zähmen. Er verkaufte die Kontrolle als Lösung.',
      quote: 'Bellum omnium contra omnes – Der Krieg aller gegen alle.',
      source: 'Thomas Hobbes, De Cive (1642)',
      type: 'bewahrend', x: 35, y: 60
    },
    {
      name: 'John Locke',
      text: 'Locke erklärte das Eigentum zum Naturrecht – und schuf den Individualismus, der den Menschen in der Verantwortung für seinen eigenen Misserfolg zurücklässt.',
      quote: 'Obwohl die Erde und alle niederen Geschöpfe allen Menschen gemeinsam gehören, so besitzt dennoch jeder Mensch in seiner eigenen Person ein Eigentum, auf das niemand als er selbst ein Anrecht hat.',
      source: 'John Locke, Zwei Abhandlungen über die Regierung (1689)',
      type: 'bewahrend', x: 40, y: 45
    },
    {
      name: 'Adam Smith',
      text: 'Smith erfand die \'unsichtbare Hand\' – eine Metapher, die bis heute das Herz der Ablenkungsmaschine ist. Er verkleidete den Käfig mit dem Versprechen des Wohlstands.',
      quote: 'Nicht vom Wohlwollen des Metzgers, Brauers oder Bäckers erwarten wir unsere Mahlzeit, sondern von deren Bedachtnahme auf ihr eigenes Interesse. Wir wenden uns nicht an ihre Menschenliebe, sondern an ihre Eigenliebe.',
      source: 'Adam Smith, Der Wohlstand der Nationen (1776)',
      type: 'bewahrend', x: 45, y: 35
    },
    {
      name: 'Immanuel Kant',
      text: 'Kant setzte die Vernunft über alles – und begründete den Rationalitätsglauben, der den Menschen von seinem Fühlen trennt. Er verkleidete den Käfig mit der Idee der Autonomie.',
      quote: 'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, daß sie ein allgemeines Gesetz werde.',
      source: 'Immanuel Kant, Grundlegung zur Metaphysik der Sitten (1785)',
      type: 'bewahrend', x: 50, y: 50
    },
    {
      name: 'Georg Wilhelm Friedrich Hegel',
      text: 'Hegel erfand den Fortschrittsglauben – die Idee, dass die Geschichte sich notwendig auf ein Ziel zubewegt. Er verkleidete den Käfig mit der Verheissung der Zukunft.',
      quote: 'Die Weltgeschichte ist der Fortschritt im Bewußtsein der Freiheit, – ein Fortschritt, den wir in seiner Notwendigkeit zu erkennen haben.',
      source: 'Georg Wilhelm Friedrich Hegel, Vorlesungen über die Philosophie der Geschichte (1837)',
      type: 'bewahrend', x: 55, y: 65
    },
    {
      name: 'René Descartes',
      text: 'Descartes begründete die Trennung von Geist und Körper – und stellte das Denken über das Fühlen. Er verkleidete den Käfig mit der Idee der Klarheit.',
      quote: 'Ich denke, also bin ich.',
      source: 'René Descartes, Discours de la méthode (1637)',
      type: 'bewahrend', x: 60, y: 40
    },
    {
      name: 'Gottfried Wilhelm Leibniz',
      text: 'Leibniz sagte, wir lebten in der besten aller möglichen Welten. Diese Behauptung ist die perfideste Form der Ablenkung: Sie rechtfertigt das Bestehende, noch bevor es hinterfragt werden kann.',
      quote: 'Wir leben in der besten aller möglichen Welten.',
      source: 'Gottfried Wilhelm Leibniz, Essais de Théodicée (1710) – allgemein anerkannte Wiedergabe seiner Kernaussage',
      type: 'bewahrend', x: 65, y: 55
    },
    {
      name: 'Edmund Burke',
      text: 'Burke sah die Gesellschaft als heiligen Vertrag zwischen den Generationen – und brandmarkte jede Veränderung als Bruch mit der Ordnung. Er verkleidete den Käfig mit dem Mantel der Tradition.',
      quote: 'Die Gesellschaft ist eine Vertrag zwischen der Vergangenheit, der Gegenwart und den ungeborenen Menschen.',
      source: 'Edmund Burke, Reflections on the Revolution in France (1790)',
      type: 'bewahrend', x: 70, y: 30
    },
    {
      name: 'Jeremy Bentham',
      text: 'Bentham reduzierte den Menschen auf eine Zahl – eine Einheit in einer gesellschaftlichen Nutzenrechnung. Er verkleidete den Käfig mit der Idee der Effizienz.',
      quote: 'Der einzig und allein gerechte und einzig und allein zu rechtfertigende Endzweck des Staates ist: Das größte Glück der größten Zahl.',
      source: 'Jeremy Bentham, An Introduction to the Principles of Morals and Legislation (1789)',
      type: 'bewahrend', x: 75, y: 45
    },
    {
      name: 'John Stuart Mill',
      text: 'Mill stellte die Freiheit des Individuums in den Mittelpunkt – aber es war die Freiheit innerhalb des Käfigs, nicht die Freiheit, ihn zu verlassen.',
      quote: 'Der einzige Zweck, zu dem die Menschheit, einzeln oder kollektiv, berechtigt ist, in die Handlungsfreiheit eines ihrer Mitglieder einzugreifen, ist der Selbstschutz.',
      source: 'John Stuart Mill, On Liberty (1859)',
      type: 'bewahrend', x: 80, y: 60
    }
  ];

  const skyInner = document.getElementById('skyInner');
  const sternModal = document.getElementById('sternModal');
  const sternModalClose = document.getElementById('sternModalClose');
  const sternName = document.getElementById('sternName');
  const sternText = document.getElementById('sternText');
  const sternQuote = document.getElementById('sternQuote');
  const sternSource = document.getElementById('sternSource');

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
      sternQuote.textContent = star.quote;
      sternSource.textContent = star.source;
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
