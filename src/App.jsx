import './App.css';
import {RatingPersonalizado} from "./RatingPersonalizado.jsx";
import {useState} from "react";
import {EstrelasContext} from "./context.js";

const MAXIMO_ESTRELAS = 5;

export default function App() {
  const [maximo, setMaximo] = useState(MAXIMO_ESTRELAS);
  const [estrelas, setEstrelas] = useState(MAXIMO_ESTRELAS);

  return (
    <EstrelasContext.Provider value={{estrelas, setEstrelas, maximo}}>
      <main className="flex flex-col items-center justify-center gap-10">
        {/*<form action="#"
              className="w-[100px]"
              onSubmit={e => {
                e.preventDefault();
              }}>
          <Label htmlFor="estrelas">Estrelas</Label>
          <TextInput type="number"
                     id="estrelas"
                     value={estrelas}
                     onChange={({target: {value}}) => {
                       let valor = parseInt(value);
                       if (isNaN(valor) || valor < 0) valor = 0;
                       if (valor > maximo) valor = maximo;
                       setEstrelas(valor);
                     }}
          />
          <Label htmlFor="maximo">Máximo</Label>
          <TextInput type="number"
                     id="maximo"
                     value={maximo}
                     onChange={({target: {value}}) => {
                       let valor = parseInt(value);
                       if (isNaN(valor) || valor < 0) valor = 0;
                       if (estrelas > valor) setEstrelas(valor);
                       setMaximo(valor);
                     }}/>
        </form>*/}
        <RatingPersonalizado/>
      </main>
    </EstrelasContext.Provider>
  );
}
