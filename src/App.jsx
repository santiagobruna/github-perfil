import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nome, setNome] = useState('');
  return(
    <>
    <input type="text" onBlur={(e) => setNome(e.target.value)} placeholder="Seu nome de usuário do git" />

    {nome.length > 4 && (
      <>
        <Perfil nomeUsuario={nome}/>
        <ReposList nomeUsuario={nome}/>
      </>
    )}
    {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
      {/* <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtítulo</h2>
      {estaDeDia ? 'Bom dia!' : 'Boa tarde!'} */}
    {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */} 
    </>
    )
    
}

export default App
