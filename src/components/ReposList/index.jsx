import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({nomeUsuario}) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregado] = useState(0);

  useEffect(() => {
    setEstaCarregado(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
            setEstaCarregado(false);
            setRepos(resJson);
        }, 3000);
      });
  }, [nomeUsuario]);
  return (
    <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ): (
            <ul className={styles.list}>
        {repos.map((repositorio) => (
          <li key={repositorio.id} className={styles.listItem}>
            
            <div className={styles.itemName}>
              <b>Nome:</b>
              {repositorio.name} 
            </div>
            <div className={styles.itemLanguage}>
              <b>Linguagem:</b>
              {repositorio.language} 
            </div>

            <a
              className={styles.itemLink}
              target="_blank"
              href={repositorio.html_url}
            >
              Visitar no Github
            </a>
          </li>
        ))}
      </ul>
        )}
      
    </div>
  );
};

export default ReposList;
