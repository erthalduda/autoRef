import React from "react";
import FormGroup from "../components/form-group";
import { useState } from "react";

function ParteMonografia() {
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
                <FormGroup
                  label="Autor da parte "
                  htmlFor="exampleInputAutorParte"
                >
                  <input
                    type="Autor da parte*"
                    onChange={(e) => this.setState({ autor: e.target.value })}
                    className="form-control"
                    id="exampleInputAutorParte"
                    aria-describedby="autorHelp"
                    placeholder="Ex: Caio Ribeiro"
                  />
                </FormGroup>

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

                <FormGroup
                  label="Titulo da parte "
                  htmlFor="exampleInputTitutloParte"
                >
                  <input
                    type="TituloParte*"
                    onChange={(e) => this.setState({ titulo: e.target.value })}
                    className="form-control"
                    id="exampleInputTitutloParte"
                    aria-describedby="tituloParteHelp"
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

                <FormGroup
                  label="Ano de publicação "
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

                <FormGroup label="Cidade " htmlFor="exampleInputCidade1">
                  <input
                    type="Cidade*"
                    onChange={(e) => this.setState({ cidade: e.target.value })}
                    className="form-control"
                    id="exampleInputCidade1"
                    aria-describedby="cidadeHelp"
                    placeholder="Ex: Londres"
                  />
                </FormGroup>

                <FormGroup
                  label="Ano de entrega "
                  htmlFor="exampleInputAnoEntrega1"
                >
                  <input
                    type="Ano de entrega*"
                    onChange={(e) =>
                      this.setState({ anoeEntrega: e.target.value })
                    }
                    className="form-control"
                    id="exampleInputAnoEntrega1"
                    aria-describedby="anoEntregaHelp"
                    placeholder="Ex: 2004"
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
                <FormGroup label="Volume " htmlFor="exampleInputVolume1">
                  <input
                    type="Volume*"
                    onChange={(e) => this.setState({ volume: e.target.value })}
                    className="form-control"
                    id="exampleInputVolume1"
                    aria-describedby="emailHelp"
                    placeholder="Ex: 3"
                  />
                </FormGroup>

                <FormGroup
                  label="Quantidade de paginas "
                  htmlFor="exampleInputQuantPg"
                >
                  <input
                    type="Ano de entrega*"
                    onChange={(e) => this.setState({ quantPg: e.target.value })}
                    className="form-control"
                    id="exampleInputQuantPg"
                    aria-describedby="anoEntregaHelp"
                    placeholder="Ex: 165"
                  />
                </FormGroup>

                <FormGroup label="Editora " htmlFor="exampleInputEditora1">
                  <input
                    type="Editora*"
                    onChange={(e) => this.setState({ editora: e.target.value })}
                    className="form-control"
                    id="exampleInputEditora1"
                    aria-describedby="editoraHelp"
                    placeholder="Ex: Cia dos livros"
                  />
                </FormGroup>

                <FormGroup label="Seção " htmlFor="exampleInputSecao1">
                  <input
                    type="Secao*"
                    onChange={(e) => this.setState({ secao: e.target.value })}
                    className="form-control"
                    id="exampleInputSecao1"
                    aria-describedby="emailHelp"
                    placeholder="Ex: Sla"
                  />
                </FormGroup>

                <FormGroup label="Capitulo " htmlFor="exampleInputCapitulo1">
                  <input
                    type="Capitulo*"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    className="form-control"
                    id="exampleInputCapitulo1"
                    aria-describedby="capituloHelp"
                    placeholder="Ex: 4"
                  />
                </FormGroup>

                <FormGroup label="Edição " htmlFor="exampleInputEdicao1">
                  <input
                    type="Edicao*"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    className="form-control"
                    id="exampleInputEdicao1"
                    aria-describedby="edicaoHelp"
                    placeholder="Ex: Intrinsica"
                  />
                </FormGroup>
              </fieldset>
            </div>
          </div>
          <div className="sla">
            <button className="btn btn-success">Salvar</button>
          </div>
          {/* Aqui é a parte de enviar as referencias, 3 forms */}
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
                          style={{ marginBottom: "23px" }}
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
          </div>

          {/* <button onClick={this.entrar} className="btn btn-success">Adicionar</button> */}

          <div className="btn-add">
            <button className="btn btn-success" onClick={addFields}>
              Adicionar Autor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParteMonografia;
