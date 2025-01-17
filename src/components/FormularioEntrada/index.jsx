import { useState } from "react";
import styles from './FormularioEntrada.module.css';
const FormularioEntrada = ({setNome}) => {
    const [nomeLocal, setNomeLocal] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        setNome(nomeLocal); // Atualiza o valor renderizado com o valor do estado `nome`
    };
    return(
        <>  
            
            <form className={styles.containerForm} onSubmit={handleSubmit}>
                <h2 className={styles.titulo}>Obtenha acesso ao seus repositórios do Github</h2>
                <label htmlFor="userGithub" className={styles.label}>Insira o seu nome de usuário do Github:
                <input id="userGithub" value={nomeLocal} type="text" onChange={(e) => setNomeLocal(e.target.value)} placeholder="Seu nome de usuário" className={styles.input} />  
                </label>
                <button type="submit" className={styles.btn}>Procurar</button>
            </form>
        </>
        
    )
}

export default FormularioEntrada 