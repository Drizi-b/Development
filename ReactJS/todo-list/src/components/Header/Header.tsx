import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My ToDo</h1>
          <span> Bem-vinda, Adriana!!!</span>
        </div>
        <div>{/* Cards */}</div>
      </div>
    </header>
  );
};
