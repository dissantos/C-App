import React from "react";
import "./DadosAcademicos.css";
import BarraProgresso from "../BarraProgresso/BarraProgresso";
import getDadosAcademicos from "../../functions/getDadosAcademicos";

const CARGAOPTATIVA = 450 / 100;
const CARGAOBRIGATORIA = 4380 / 100;
const CARGACOMPLEMENTAR = 450 / 10;

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

  async componentDidMount() {
    const matricula = JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
      .matricula;

    let response = await getDadosAcademicos(matricula);
    console.log("Teste");
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
          <div className="progresso">Coeficiente: {`${this.state.coeficiente}`}</div>

          <div className="progresso">
            Progresso Total
            <BarraProgresso
              barColor={total.barColor}
              completed={getValueTotal(this.state)}
            />
          </div>
          <div>Carga obrigatória concluída</div>
          <BarraProgresso
            barColor={obgConcluida.barColor}
            completed={getValueObg(this.state)}
          />
          <div>Carga optativa concluída</div>
          <BarraProgresso
            barColor={optativaConcluida.barColor}
            completed={getValueOpt(this.state)}
          />
          <div>Horas complementares</div>
          <BarraProgresso
            barColor={complementares.barColor}
            completed={getValueComplementares(this.state)}
          />
        </div>
      </>
    );
  }
}

// Estão hardcoded. Depende do backend
export function getValueTotal(state) {
  let value = parseFloat(state.percent_concluido);
  return value;
}

export function getValueComplementares(state) {
  let value = Math.round(
    parseFloat(state.carga_horaria_obrigat) / CARGACOMPLEMENTAR
  );
  return value;
}

export function getValueObg(state) {
  let value = Math.round(
    parseFloat(state.carga_horaria_obrigat) / CARGAOBRIGATORIA
  );
  return value;
}

export function getValueOpt(state) {
  let value = Math.round(parseFloat(state.carga_horaria_opt) / CARGAOPTATIVA);
  return value;
}

export function getCoef() {
  let value = "XX";
  return value;
}

DadosAcademicos.propTypes = {};

DadosAcademicos.defaultProps = {};

export default DadosAcademicos;
