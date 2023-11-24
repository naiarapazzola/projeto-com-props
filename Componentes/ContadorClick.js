import { useState } from "react";

const ContadorClick = () => {

    const [contador, setContador] = useState(0);

    const contar = () => {
        setContador (contador + 1);
    }

    return (
        <>
            <h2 className="contador"> Nosso contador atual é: {contador}</h2>
            <button className="botao" onClick={contar}>Clique para somar!</button>
        </>
    );
}

export default ContadorClick;