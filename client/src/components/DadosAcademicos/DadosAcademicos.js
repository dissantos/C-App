import React from "react";
import "./DadosAcademicos.css";
import BarraProgresso from "../BarraProgresso/BarraProgresso";

const total = { barColor: "#003869" };

const complementares = { barColor: "#6b93d8" };

const obgConcluida = { barColor: "#404E82" };

const optativaConcluida = { barColor: "#5579B9" };

const coeficiente = getCoef();

class DadosAcademicos extends React.Component {

  render() {
    return (
      <>
        <div className="DadosAcademicos">
          <h4>Dados Acadêmicos</h4>
          <div className="progresso">Coeficiente: {`${coeficiente}`}</div>

          <div className="progresso">
            Progresso Total
            <BarraProgresso
              barColor={total.barColor}
              completed={getValueTotal()}
            />
          </div>
          <div>Carga obrigatória concluída</div>
          <BarraProgresso
            barColor={obgConcluida.barColor}
            completed={getValueObg()}
          />
          <div>Carga optativa concluída</div>
          <BarraProgresso
            barColor={optativaConcluida.barColor}
            completed={getValueOpt()}
          />
          <div>Horas complementares</div>
          <BarraProgresso
            barColor={complementares.barColor}
            completed={getValueComplementares()}
          />
        </div>
      </>
    );
  }
}

// Estão hardcoded. Depende do backend
export function getValueTotal(){
  let value = 86;
  return value;
};

export function getValueComplementares(){
  let value = 100;
  return value;
};

export function getValueObg(){
  let value = 82;
  return value;
};

export function getValueOpt(){
  let value = 90;
  return value;
};

export function getCoef(){
  let value = "XX";
  return value;
}

DadosAcademicos.propTypes = {};

DadosAcademicos.defaultProps = {};

export default DadosAcademicos;
