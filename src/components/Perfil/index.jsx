import styles from './Perfil.module.css';
const Perfil = (props) => {
    const {nomeUsuario} = props;
    return (
        <header className={styles.header}>
            <img src={`https://github.com/${nomeUsuario}.png`} className={styles.avatar} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;