const phases = [
  {
    no: "01",
    title: "Machbarkeit beweisen",
    time: "Woche 1–2",
    text: "Mit 30–50 Melonen und mehreren Klopfern testen, ob Tonmerkmale zuverlässig mit Reife und Innenqualität zusammenhängen.",
    result: "Go/No-Go anhand messbarer Trennbarkeit"
  },
  {
    no: "02",
    title: "Datensatz aufbauen",
    time: "Woche 3–6",
    text: "Pro Melone mehrere Aufnahmen, Positionen und Geräte erfassen. Danach aufschneiden, fotografieren und Geschmack, Festigkeit sowie Defekte labeln.",
    result: "Mindestens 1.000 sauber beschriftete Klopfereignisse"
  },
  {
    no: "03",
    title: "Modell & App entwickeln",
    time: "Woche 7–10",
    text: "Signalverarbeitung und Baseline-Modell entwickeln, anschließend Aufnahmeführung und Auswertung direkt in eine mobile Web-App integrieren.",
    result: "Testbarer MVP mit Unsicherheitsanzeige"
  },
  {
    no: "04",
    title: "Im Markt validieren",
    time: "Woche 11–12",
    text: "Blindtest im Supermarkt: App-Empfehlung vor dem Kauf dokumentieren und nach dem Öffnen gegen die tatsächliche Qualität prüfen.",
    result: "Praxisgenauigkeit und klare nächste Entscheidung"
  }
];

const pipeline = [
  ["01", "Aufnehmen", "3–5 Klopfer · 2 Sekunden · geführter Rhythmus"],
  ["02", "Erkennen", "Störgeräusche filtern · einzelne Impulse schneiden"],
  ["03", "Verstehen", "Spektrum, Abklingzeit und Resonanzen extrahieren"],
  ["04", "Bewerten", "Modell liefert Klassen plus Konfidenz"],
  ["05", "Erklären", "Klares Ergebnis mit Wiederholungs-Hinweis"]
];

const risks = [
  ["Umgebungslärm", "Hoch", "Signalqualitäts-Check; Aufnahme wiederholen; mehrere Klopfer mitteln"],
  ["Handy & Hülle", "Hoch", "Gerätemodell erfassen; Kalibrierung; robustes Training mit vielen Geräten"],
  ["Sorte & Größe", "Mittel", "Metadaten abfragen; später sortenspezifische Modelle"],
  ["Falsche Labels", "Hoch", "Erst nach dem Öffnen labeln; Fotos und zwei Bewertungen speichern"],
  ["Zu wenig Daten", "Hoch", "Zuerst Baseline und Lernkurve; Daten gezielt statt blind sammeln"]
];

function Wave() {
  return (
    <svg className="wave" viewBox="0 0 720 150" role="img" aria-label="Stilisierter Klopfton">
      <path d="M0 78h82l7-3 8 3 10-4 9 4 12-8 9 8 11-22 10 22 12-62 12 62 12-34 11 34 12-18 12 18 11-9 13 9 12-5 12 5h290" />
    </svg>
  );
}

export default function Page() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Zum Anfang">
          <span className="brandMark">M</span>
          <span>Melonen-Klanglabor</span>
        </a>
        <div className="navLinks">
          <a href="#system">System</a>
          <a href="#fahrplan">Fahrplan</a>
          <a href="#entscheidung">MVP-Ziel</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Technischer Projektplan · Version 1.0</p>
          <h1>Hörbar reif.<br /><em>Messbar gut.</em></h1>
          <p className="lede">
            Eine App, die den Klopfton einer Wassermelone aufnimmt, analysiert und
            in eine verständliche Kaufempfehlung übersetzt.
          </p>
          <div className="heroActions">
            <a className="button" href="#fahrplan">Zum Fahrplan <span>↘</span></a>
            <span className="micro">MVP in ca. 12 Wochen</span>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="melon">
            <span className="seed s1" /><span className="seed s2" /><span className="seed s3" />
            <span className="seed s4" /><span className="seed s5" />
          </div>
          <Wave />
          <span className="soundLabel">Klopf · klopf</span>
        </div>
      </header>

      <section className="thesis">
        <p className="sectionNo">00 / Die Kernthese</p>
        <blockquote>
          Der Klang enthält Hinweise auf <em>Festigkeit, Hohlräume und Wassergehalt</em> –
          aber nur ein sauber gelabelter Datensatz zeigt, ob sie für eine verlässliche
          Kaufentscheidung reichen.
        </blockquote>
        <div className="proofGrid">
          <div><strong>Physik</strong><span>Resonanz & Dämpfung</span></div>
          <div><strong>Daten</strong><span>Klang + Wahrheit nach Anschnitt</span></div>
          <div><strong>Modell</strong><span>Merkmale → Qualitätsklasse</span></div>
          <div><strong>UX</strong><span>Führen, prüfen, verständlich erklären</span></div>
        </div>
      </section>

      <section className="system section" id="system">
        <div className="sectionHead">
          <div><p className="sectionNo">01 / So funktioniert das System</p><h2>Vom Impuls zur<br />Entscheidung.</h2></div>
          <p>Die erste Version verarbeitet Ton lokal oder über eine kleine API. Rohaufnahmen werden nur mit Einwilligung für die Modellverbesserung gespeichert.</p>
        </div>
        <div className="pipeline">
          {pipeline.map(([n, title, text], i) => (
            <div className="pipeCard" key={title}>
              <span className="pipeNo">{n}</span>
              <div className="pipeIcon">{["●))", "≋", "⌁", "◇", "✓"][i]}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              {i < pipeline.length - 1 && <span className="arrow">→</span>}
            </div>
          ))}
        </div>
        <div className="techStack">
          <div><span>Mobile</span><strong>PWA zuerst</strong><small>Web Audio API · MediaRecorder · später native App</small></div>
          <div><span>Signal</span><strong>DSP-Pipeline</strong><small>Bandpass · Peak Detection · Mel-Spektrogramm</small></div>
          <div><span>Modell</span><strong>Baseline vor Deep Learning</strong><small>Random Forest / XGBoost · später Audio-CNN</small></div>
          <div><span>Backend</span><strong>Python API</strong><small>FastAPI · PostgreSQL · Objektspeicher</small></div>
        </div>
      </section>

      <section className="data section">
        <div className="sectionHead narrow">
          <div><p className="sectionNo">02 / Der wichtigste Teil</p><h2>Die Wahrheit<br />liegt innen.</h2></div>
          <p>Ein Ton ohne Ergebnis nach dem Aufschneiden ist fast wertlos. Jede Aufnahme braucht eine belastbare Zielvariable.</p>
        </div>
        <div className="dataFlow">
          <div className="dataStep"><b>1</b><span>Melone identifizieren</span><small>Sorte, Gewicht, Umfang, Herkunft</small></div>
          <div className="connector">···</div>
          <div className="dataStep"><b>2</b><span>Standardisiert klopfen</span><small>3 Positionen × 5 Impulse × mehrere Handys</small></div>
          <div className="connector">···</div>
          <div className="dataStep accent"><b>3</b><span>Aufschneiden & labeln</span><small>Reife, Saftigkeit, Festigkeit, Schäden, Geschmack</small></div>
          <div className="connector">···</div>
          <div className="dataStep"><b>4</b><span>Modell trainieren</span><small>Split nach Melone – niemals nach Einzelaufnahme</small></div>
        </div>
        <aside className="rule">
          <span>Goldene Regel</span>
          <p>Alle Aufnahmen derselben Melone bleiben im selben Trainings-, Validierungs- oder Test-Set. Sonst wirkt das Modell besser, als es wirklich ist.</p>
        </aside>
      </section>

      <section className="roadmap section" id="fahrplan">
        <div className="sectionHead">
          <div><p className="sectionNo">03 / Umsetzungsfahrplan</p><h2>Zwölf Wochen.<br />Vier Beweise.</h2></div>
          <p>Jede Phase endet mit einer überprüfbaren Entscheidung. So investieren wir erst dann weiter, wenn die zentrale Annahme hält.</p>
        </div>
        <div className="phaseList">
          {phases.map((phase) => (
            <article className="phase" key={phase.no}>
              <div className="phaseNo">{phase.no}</div>
              <div><p className="time">{phase.time}</p><h3>{phase.title}</h3></div>
              <p>{phase.text}</p>
              <div className="deliverable"><span>Ergebnis</span>{phase.result}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="model section">
        <div className="sectionHead narrow">
          <div><p className="sectionNo">04 / Modellstrategie</p><h2>Erst verstehen.<br />Dann skalieren.</h2></div>
          <p>Die eigentliche Innovation ist nicht das komplizierteste Modell, sondern die reproduzierbare Verbindung zwischen Schall und echter Qualität.</p>
        </div>
        <div className="modelGrid">
          <article><span className="tag">Baseline</span><h3>Erklärbare Merkmale</h3><p>Grundfrequenz, spektraler Schwerpunkt, Energieverlauf, Abklingzeit und Peak-Verhältnisse.</p><strong>Ziel: belastbarer Referenzwert</strong></article>
          <article className="featured"><span className="tag">Stufe 2</span><h3>Audio-Klassifikator</h3><p>Kleines CNN auf Mel-Spektrogrammen, sobald Menge und Vielfalt der Daten ausreichen.</p><strong>Ziel: robust über Geräte hinweg</strong></article>
          <article><span className="tag">Produkt</span><h3>Konfidenz statt Orakel</h3><p>„Gut“, „eher unreif“, „auffällig“ – plus Sicherheit und Bitte um Wiederholung bei schlechtem Signal.</p><strong>Ziel: ehrliche Empfehlung</strong></article>
        </div>
        <div className="metricStrip">
          <span>Leitmetriken</span>
          <b>Macro-F1</b><i>+</i><b>Fehlkauf-Quote</b><i>+</i><b>Kalibrierung</b><i>+</i><b>Abbruchrate</b>
        </div>
      </section>

      <section className="risks section">
        <div className="sectionHead">
          <div><p className="sectionNo">05 / Risiken aktiv gestalten</p><h2>Was schiefgehen<br />kann – und darf.</h2></div>
          <p>Das größte Risiko ist nicht Code, sondern ein Signal, das außerhalb des Labors zu variabel ist. Deshalb testen wir früh im echten Einkaufskontext.</p>
        </div>
        <div className="riskTable">
          <div className="riskRow header"><span>Risiko</span><span>Einfluss</span><span>Gegenmaßnahme</span></div>
          {risks.map(([risk, impact, action]) => (
            <div className="riskRow" key={risk}><strong>{risk}</strong><span className={`impact ${impact === "Hoch" ? "high" : ""}`}>{impact}</span><p>{action}</p></div>
          ))}
        </div>
      </section>

      <section className="decision section" id="entscheidung">
        <div className="decisionInner">
          <p className="sectionNo">06 / Definition of Done</p>
          <h2>Wann ist der MVP<br /><em>wirklich gut?</em></h2>
          <div className="criteria">
            <div><strong>≥ 80 %</strong><span>der Aufnahmen bestehen den automatischen Qualitätscheck</span></div>
            <div><strong>≥ 70 %</strong><span>Macro-F1 auf zuvor ungesehenen Melonen und Handys</span></div>
            <div><strong>&lt; 15 Sek.</strong><span>vom Start der Aufnahme bis zur verständlichen Empfehlung</span></div>
            <div><strong>− 30 %</strong><span>weniger Fehlkäufe gegenüber einer Kontrollgruppe ohne App</span></div>
          </div>
          <div className="verdict">
            <span>Nächster konkreter Schritt</span>
            <p>Einen zweitägigen Datensprint mit 30 Melonen, drei Smartphones und einem festen Bewertungsbogen durchführen.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brandMark">M</span><span>Melonen-Klanglabor</span></div>
        <p>Technischer Plan · Smartphone-Audio · Machine Learning · 2026</p>
        <a href="#top">Nach oben ↑</a>
      </footer>
    </main>
  );
}
