import React, {useState} from "react";
import "./DadosAcademicos.css";
import BarraProgresso from "../BarraProgresso/BarraProgresso";
import getDadosAcademicos from "../../functions/getDadosAcademicos";

/*const [state, setState] = React.useState({
  carga_horaria_opt: "0",
  carga_horaria_obrigat: "0",
  coeficiente: "0",
  carga_horaria_compl: "0",
  carga_horaria_total: "0",
  percent_concluido: "0",
});
*/

const total = { barColor: "#003869" };

const complementares = { barColor: "#6b93d8" };

const obgConcluida = { barColor: "#404E82" };

const optativaConcluida = { barColor: "#5579B9" };

const coeficiente = getCoef();

class DadosAcademicos extends React.Component {
  constructor() {
    super();

    this.state = {
      carga_horaria_opt: "0",
      carga_horaria_obrigat: "0",
      coeficiente: "0",
      carga_horaria_compl: "0",
      carga_horaria_total: "0",
      percent_concluido: "0",
    };
  }

  async componentWillMount() {
    let response = await getDadosAcademicos();
    console.log(response);
    this.setState({
      carga_horaria_opt: response[0].carga_horaria_opt,
      carga_horaria_obrigat: response[0].carga_horaria_obrigat,
      coeficiente: response[0].coeficiente,
      carga_horaria_compl: response[0].carga_horaria_compl,
      carga_horaria_total: response[0].carga_horaria_total,
      percent_concluido: response[0].percent_concluido,
    });
  }

  
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
              completed={this.state.percent_concluido}
            />
          </div>
          <div>Carga obrigatória concluída</div>
          <BarraProgresso
            barColor={obgConcluida.barColor}
            completed={this.state.carga_horaria_obrigat}
          />
          <div>Carga optativa concluída</div>
          <BarraProgresso
            barColor={optativaConcluida.barColor}
            completed={this.state.carga_horaria_opt}
          />
          <div>Horas complementares</div>
          <BarraProgresso
            barColor={complementares.barColor}
            completed={this.state.carga_horaria_compl}
          />
        </div>
      </>
    );
  }
}

// Estão hardcoded. Depende do backend
export function getValueTotal() {
  let value = 80;
  return value;
}

export function getValueComplementares() {
  let value = 100;
  return value;
}

export function getValueObg() {
  let value = 82;
  return value;
}

export function getValueOpt() {
  let value = 90;
  return value;
}

export function getCoef() {
  let value = "XX";
  return value;
}

DadosAcademicos.propTypes = {};

DadosAcademicos.defaultProps = {};

export default DadosAcademicos;
