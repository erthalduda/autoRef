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
              href="#/faq"
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
                <FormGroup label="Autor da parte " htmlFor="autorParte">
                  <input
                    type="text"
                    className="form-control"
                    name="autorParte"
                    id="autorParte"
                    aria-describedby="autorHelp"
                    placeholder="Ex: Caio Ribeiro"
                    onChange={(e) =>
                      this.setState({ autorParte: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup label="Titulo " htmlFor="titulo">
                  <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    className="form-control"
                    aria-describedby="tituloHelp"
                    placeholder="Ex: Coraline"
                    onChange={(e) => this.setState({ titulo: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Titulo da parte " htmlFor="tituloParte">
                  <input
                    type="text"
                    name="tituloParte"
                    className="form-control"
                    id="tituloParte"
                    aria-describedby="tituloParteHelp"
                    placeholder="Ex: A historia de um calvo"
                    onChange={(e) =>
                      this.setState({ tituloParte: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup label="Subtitulo " htmlFor="subtitulo">
                  <input
                    type="text"
                    id="subtitulo"
                    name="subtitulo"
                    className="form-control"
                    aria-describedby="subtituloHelp"
                    placeholder="Ex: Uma garota lelé"
                    onChange={(e) =>
                      this.setState({ subtitulo: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup label="Ano de publicação " htmlFor="anoPublicacao">
                  <input
                    type="text"
                    id="anoPublicacao"
                    name="anoPublicacao"
                    className="form-control"
                    aria-describedby="anoHelp"
                    placeholder="Ex: 2003"
                    onChange={(e) =>
                      this.setState({ anoPublicacao: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup label="Cidade " htmlFor="cidade">
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    className="form-control"
                    aria-describedby="cidadeHelp"
                    placeholder="Ex: Londres"
                    onChange={(e) => this.setState({ cidade: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Ano de entrega " htmlFor="anoEntrega">
                  <input
                    type="text"
                    className="form-control"
                    id="anoEntrega"
                    name="anoEntrega"
                    aria-describedby="anoEntregaHelp"
                    placeholder="Ex: 2004"
                    onChange={(e) =>
                      this.setState({ anoEntrega: e.target.value })
                    }
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

                <FormGroup label="Quantidade de paginas " htmlFor="quantiPgs">
                  <input
                    type="text"
                    id="quantiPgs"
                    name="quantiPgs"
                    className="form-control"
                    aria-describedby="quantiPgHelp"
                    placeholder="Ex: 347"
                    onChange={(e) =>
                      this.setState({ quantiPgs: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup label="Edição " htmlFor="edicao">
                  <input
                    type="text"
                    id="edicao"
                    name="edicao"
                    className="form-control"
                    aria-describedby="edicaoHelp"
                    placeholder="Ex: Intrinsica"
                    onChange={(e) => this.setState({ edicao: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Editora " htmlFor="editora">
                  <input
                    type="text"
                    className="form-control"
                    name="editora"
                    id="editora"
                    aria-describedby="editoraHelp"
                    placeholder="Ex: Cia dos livros"
                    onChange={(e) => this.setState({ editora: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Seção " htmlFor="secao">
                  <input
                    type="text"
                    name="secao"
                    className="form-control"
                    id="secao"
                    aria-describedby="emailHelp"
                    placeholder="Ex: Sla"
                    onChange={(e) => this.setState({ secao: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Capitulo " htmlFor="capitulo">
                  <input
                    type="text"
                    name="capitulo"
                    className="form-control"
                    id="capitulo"
                    aria-describedby="capituloHelp"
                    placeholder="Ex: 4"
                    onChange={(e) =>
                      this.setState({ capitulo: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup label="Edição " htmlFor="edicao">
                  <input
                    type="text"
                    name="edicao"
                    className="form-control"
                    id="edicao"
                    aria-describedby="edicaoHelp"
                    placeholder="Ex: Intrinsica"
                    onChange={(e) => this.setState({ edicao: e.target.value })}
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
                          type="text"
                          style={{ marginBottom: "23px" }}
                          onChange={(e) =>
                            this.setState({ autor: e.target.value })
                          }
                          name="autor"
                          className="form-control"
                          id="autor"
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
