import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App(){
  return (
    <main className="app-shell">
      <section className="hero">
        <div className="badge">⚽ UNIVERSO FUTBOLÍSTICO</div>
        <h1>Tu universo.<br/><span>Tu historia.</span></h1>
        <p>Construí las reglas, creá los clubes y dejá que el fútbol escriba su propia historia.</p>
        <div className="actions">
          <button className="primary">Crear nuevo universo</button>
          <button className="secondary">Cargar universo</button>
        </div>
      </section>
      <section className="features">
        <article><b>🎲</b><h2>Azar</h2><p>Resultados generados partido a partido.</p></article>
        <article><b>🏆</b><h2>Historia</h2><p>Temporadas, campeones, ascensos y palmarés.</p></article>
        <article><b>🌎</b><h2>Universos</h2><p>Regiones, divisiones y competiciones configurables.</p></article>
      </section>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);