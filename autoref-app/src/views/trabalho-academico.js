import React from "react";

import FormGroup from "../components/form-group";
import { useState } from "react";

function TrabalhoAcademico() {
  const [inputFields, setInputFields] = useState([{ autor: "" }]);

  const addFields = () => {
    let newfield = { autor: "" };

    setInputFields([...inputFields, newfield]);
  };

  return (
    <>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a
              href="#/referencias"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>REFERENCIAS</span>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>BUSCAR REFERENCIAS</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>COLEÇÕES</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>CONQUISTAS</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>RANKING</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>FAQ</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>EDITAR PERFIL</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="row">
        <div
          className="col-md-4"
          style={{ position: "relative", left: "200px" }}
        >
          <div className="row">
            <div className="mono">
              <fieldset>
                <FormGroup label="Titulo " htmlFor="exampleInputTitutlo1">
                  <input
                    type="Titulo*"
                    onChange={(e) => this.setState({ titulo: e.target.value })}
                    className="form-control"
                    id="exampleInputTitulo1"
                    aria-describedby="tituloHelp"
                    placeholder="Ex: Coraline"
                  />
                </FormGroup>

                <FormGroup label="Subtitulo " htmlFor="exampleInputSubtitulo1">
                  <input
                    type="Subtitulo*"
                    onChange={(e) =>
                      this.setState({ subtitulo: e.target.value })
                    }
                    className="form-control"
                    id="exampleInputSubtitulo1"
                    aria-describedby="subtituloHelp"
                    placeholder="Ex: Uma garota lelé"
                  />
                </FormGroup>

                <FormGroup label="Ano de deposito " htmlFor="exampleInputAnol1">
                  <input
                    type="Ano de publicação*"
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    className="form-control"
                    id="exampleInputAnol1"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                  />
                </FormGroup>

                <FormGroup
                  label="Tipo de trabalho "
                  htmlFor="exampleInputAnol1"
                >
                  <input
                    type="Ano de publicação*"
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    className="form-control"
                    id="exampleInputAnol1"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                  />
                </FormGroup>

                <FormGroup
                  label="Grau de formação "
                  htmlFor="exampleInputAnol1"
                >
                  <input
                    type="Ano de publicação*"
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    className="form-control"
                    id="exampleInputAnol1"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                  />
                </FormGroup>
              </fieldset>
            </div>
          </div>
        </div>

        <div
          className="col-md-4"
          style={{ position: "relative", left: "130px" }}
        >
          <div className="row">
            <div className="mono">
              <fieldset>
                <FormGroup label="Curso " htmlFor="exampleInputAnol1">
                  <input
                    type="Ano de publicação*"
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    className="form-control"
                    id="exampleInputAnol1"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                  />
                </FormGroup>

                <FormGroup
                  label="Vinculação Academica "
                  htmlFor="exampleInputAnol1"
                >
                  <input
                    type="Ano de publicação*"
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    className="form-control"
                    id="exampleInputAnol1"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                  />
                </FormGroup>

                <FormGroup label="Ano de defesa " htmlFor="exampleInputAnol1">
                  <input
                    type="Ano de publicação*"
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    className="form-control"
                    id="exampleInputAnol1"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                  />
                </FormGroup>

                <FormGroup label="Local de defesa " htmlFor="exampleInputAnol1">
                  <input
                    type="Ano de publicação*"
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    className="form-control"
                    id="exampleInputAnol1"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                  />
                </FormGroup>
              </fieldset>
            </div>
          </div>

          <div className="sla">
            <button className="btn btn-success">Salvar</button>
          </div>
        </div>

        <div
          className="col-md-4"
          style={{ position: "relative", left: "60px" }}
        >
          <div className="row">
            <div className="mono">
              <fieldset>
                <FormGroup label="Autor " htmlFor="exampleInputAutor1">
                  {inputFields.map((input, index) => {
                    return (
                      <div key={index} style={{ marginBottom: "10px" }}>
                        <input
                          type="Autor*"
                          style={{ marginBottom: "24px" }}
                          onChange={(e) =>
                            this.setState({ autor: e.target.value })
                          }
                          className="form-control"
                          id="exampleInputAutor1"
                          aria-describedby="autorHelp"
                          placeholder="Ex: Neil Gaiman"
                        />
                      </div>
                    );
                  })}
                </FormGroup>
              </fieldset>
            </div>
            <div className="btn-add">
              <button className="btn btn-success" onClick={addFields}>
                Adicionar Autor
              </button>
            </div>
          </div>

          {/* <button onClick={this.entrar} className="btn btn-success">Adicionar</button> */}
        </div>
      </div>
    </>
  );
}

export default TrabalhoAcademico;
