import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import FormularioEntrada from "./components/FormularioEntrada";

function App() {
  const [nome, setNome] = useState('');

  return(
    <>
    <FormularioEntrada setNome={setNome}/>
    {nome.length > 4 && (
      <>
        <Perfil nomeUsuario={nome}/>
        <ReposList nomeUsuario={nome}/>
      </>
    )}
    </>
    )
    
}

export default App
