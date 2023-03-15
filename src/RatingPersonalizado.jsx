import {Rating} from "flowbite-react";
import PropTypes from "prop-types";
import {EstrelasContext} from "./context.js";
import {useContext} from "react";

export function RatingPersonalizado() {
  const context = useContext(EstrelasContext);
  let {estrelas, setEstrelas, maximo} = context;
  // console.log(JSON.stringify(context));
  if (maximo < 1) maximo = 1;
  if (estrelas > maximo) estrelas = maximo;
  // console.log(`render() EstrelasContext: ${estrelas}, Máximo: ${maximo}`);
  return (
    <Rating size="lg">
      {[...Array(maximo)].map((_, index) => (
        <Rating.Star cursor="pointer"
          key={index}
          filled={index < estrelas}
          onClick={() => {
            const valor = index + 1;
            setEstrelas(valor);
          }}
        />))}
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {estrelas} de {maximo}
      </p>
    </Rating>
  );
}

RatingPersonalizado.context = EstrelasContext


RatingPersonalizado.defaultProps = {
  estrelas: 5,
  maximo: 5
}

RatingPersonalizado.propTypes = {
  estrelas: PropTypes.number,
  maximo: PropTypes.number
}
