import styles from "./Header.module.css";

export default function Header({ titulo, subtitulo }) {
  return (
    <header className={styles.header}>
      <p className={styles.brand}>Rick and Morty</p>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.subtitulo}>{subtitulo}</p>
    </header>
  );
}
