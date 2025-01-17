import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou")
        return () => {
            console.log("O componente finalizou")
        }
    }, []);
    useEffect(() => {
        console.log("o estado nome mudou")
    }, [nome]);
    useEffect(() => {
        console.log("materia A mudou para" + materiaA);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        
        if(media >= 7){
            return(
                <p>Parabéns! {nome} foi aprovado!</p>
            )
        }else {
            return (
                <p>Sinto muito! { nome } não atingiu a média, portanto está reprovado!</p>
            )
        }
    }
    return (
        <form>
            <input type="text" placeholder="Insira o seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;