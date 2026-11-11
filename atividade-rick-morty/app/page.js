import Header from "../components/Header";
import CardPersonagem from "../components/CardPersonagem";
import { personagens } from "../data/personagens";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header
        titulo="Catálogo de Personagens"
        subtitulo="Conheça Rick, Morty, Summer e outros moradores do multiverso."
      />

      <main className={styles.main}>
        <section className={styles.grade} aria-label="Lista de personagens">
          {personagens.map((personagem) => (
            <CardPersonagem
              key={personagem.id}
              nome={personagem.nome}
              status={personagem.status}
              especie={personagem.especie}
              origem={personagem.origem}
              imagem={personagem.imagem}
            />
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        Catálogo Rick and Morty
      </footer>
    </div>
  );
}
