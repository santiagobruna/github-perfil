import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setEstaCarregando(true);
    setErro(null); // Reseta o estado de erro ao tentar buscar novos dados

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Usuário "${nomeUsuario}" não foi encontrado.`);
        }
        return res.json();
      })
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(resJson);
        }, 3000);
      })
      .catch((error) => {
        setEstaCarregando(false);
        setErro(error.message);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando && <h1>Carregando...</h1>}
      {erro && <h1 style={{ color: "red" }}>{erro}</h1>}
      {!estaCarregando && !erro && (
        <ul className={styles.list}>
          {repos.map((repositorio) => (
            <li key={repositorio.id} className={styles.listItem}>
              <div className={styles.itemName}>
                <b>Nome:</b> {repositorio.name}
              </div>
              <div className={styles.itemLanguage}>
                <b>Linguagem:</b> {repositorio.language}
              </div>
              <a
                className={styles.itemLink}
                target="_blank"
                href={repositorio.html_url}
                rel="noreferrer"
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
