import { useState, useEffect } from "react";
import styles from "./App.module.css";


const IconSun = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
const IconMoon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
const IconSearch = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconBook = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const IconScale = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>;
const IconGlobe = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconInfo = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.dark : styles.light}`}>
      
      {/* --- BARRA DE NAVEGAÇÃO --- */}
      <nav className={styles.topbar}>
        <div className={styles.navContent}>
          <a href="#inicio" className={styles.logo}>DH.</a>
          
          <div className={styles.navLinks}>
            <a href="#definicao">Definição</a>
            <a href="#principios">Princípios</a>
            <a href="#declaracao">Declaração</a>
            <a href="#curiosidades">Contato</a>
          </div>

          <div className={styles.actions}>
           
          </div>
        </div>
      </nav>

      {/* --- HEADER HERO --- */}
      <header className={styles.hero} id="inicio">
        <div className={styles.heroContent}>
          <h1>Direitos Humanos</h1>
          <p>Dignidade. Liberdade. Igualdade.</p>
          <a href="#definicao" className={styles.ctaButton}>Começar Leitura</a>
        </div>
      </header>

      <div className={styles.container}>
        
        {/* --- GRID DE MENU --- */}
        <main className={styles.interactiveGrid}>
          <a href="#definicao" className={styles.menuCard}>
            <div className={styles}></div>
            <h2>Definição</h2>
            <p>O conceito fundamental e sua universalidade.</p>
          </a>

          <a href="#principios" className={styles.menuCard}>
            <div className={styles}></div>
            <h2>Princípios</h2>
            <p>As gerações de direitos e pilares essenciais.</p>
          </a>

          <a href="#declaracao" className={styles.menuCard}>
             <div className={styles}></div>
            <h2>A Declaração</h2>
            <p>A história da DUDH de 1948 e seus artigos.</p>
          </a>

          <a href="#curiosidades" className={styles.menuCard}>
             <div className={styles}></div>
            <h2>Curiosidades</h2>
            <p>Fatos marcantes e canais de contato.</p>
          </a>
        </main>

        {/* --- CONTEÚDO --- */}
        <div className={styles.contentSections}>

          <section className={styles.contentSection} id="definicao">
            <div className={styles.sectionHeader}>
              <h2>O que são Direitos Humanos?</h2>
              <div className={styles}></div>
            </div>
            <p>Os Direitos Humanos são normas universais que reconhecem e protegem a dignidade de todos os seres humanos, independentemente de raça, sexo, nacionalidade, etnia, religião, ou qualquer outra condição.

Eles regem como as pessoas vivem em sociedade e definem as obrigações do Estado em relação a elas.
            </p>
            <section className={styles}>
              "Todos os seres humanos nascem livres e iguais em dignidade e em direitos."
            </section>
          </section>

          <section className={styles.contentSection} id="principios">
            <div className={styles.sectionHeader}>
              <h2>Princípios e Gerações</h2>
              <div className={styles}></div>
            </div>
            <div className={styles.generationsGrid}>
              <div className={styles.generationCard}>
                <h3>1ª Geração</h3>
                <p><strong>Liberdade</strong></p>
                <span>Direitos Civis e Políticos (voto, expressão, vida).</span>
              </div>
              <div className={styles.generationCard}>
                <h3>2ª Geração</h3>
                <p><strong>Igualdade</strong></p>
                <span>Direitos Sociais, Econômicos e Culturais (saúde, educação).</span>
              </div>
              <div className={styles.generationCard}>
                <h3>3ª Geração</h3>
                <p><strong>Fraternidade</strong></p>
                <span>Direitos Coletivos e Difusos (meio ambiente, paz).</span>
              </div>
            </div>
          </section>

          <section className={styles.contentSection} id="declaracao">
            <div className={styles.sectionHeader}>
              <h2>Declaração Universal (DUDH)</h2>
              <div className={styles}></div>
            </div>
            <p>
              Adotada pela ONU em 10 de dezembro de 1948, em resposta à barbárie da Segunda Guerra Mundial, 
              a DUDH foi a primeira expressão global de direitos a que todos os seres humanos têm inerentemente direito.
            </p>
            <ul className={styles.featureList}>
              <li>Composta por <strong>30 artigos</strong> essenciais.</li>
              <li>Traduzida para mais de <strong>500 idiomas</strong>.</li>
              <li>Inspira as constituições de muitas democracias recentes.</li>
            </ul>
          </section>

        

        </div>

        <footer className={styles.footer}>
          <p>© 2025 Direitos Humanos Instituto FORJA .</p>
          
        </footer>

      </div>
    </div>
  );
}