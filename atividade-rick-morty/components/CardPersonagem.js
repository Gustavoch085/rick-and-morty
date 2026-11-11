import styles from "./CardPersonagem.module.css";

export default function CardPersonagem({
  nome,
  status,
  especie,
  origem,
  imagem,
}) {
  const statusClass =
    status.toLowerCase().includes("viv")
      ? styles.vivo
      : status.toLowerCase().includes("mort")
        ? styles.morto
        : styles.desconhecido;

  return (
    <article className={styles.card}>
      <div className={styles.imagemWrap}>
        <img
          className={styles.imagem}
          src={imagem}
          alt={`Retrato de ${nome}`}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.nome}>{nome}</h2>
        <p className={`${styles.status} ${statusClass}`}>
          <span className={styles.ponto} aria-hidden="true" />
          {status}
        </p>
        <p className={styles.detalhe}>
          <span>Espécie</span>
          {especie}
        </p>
        <p className={styles.detalhe}>
          <span>Origem</span>
          {origem}
        </p>
      </div>
    </article>
  );
}
