import React from "react";
import FormGroup from "../components/form-group";
import { useState } from "react";

function MonografiaEletronica() {
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
              <span>REFERÊNCIAS</span>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>BUSCAR REFERÊNCIAS</span>
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

      {/* Aqui é a parte de enviar as referencias, forms da esquerda */}

      <div className="row">
        <div
          className="col-md-4"
          style={{ position: "relative", left: "200px" }}
        >
          <div className="row">
            <div className="mono">
              <fieldset>
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

        {/* Aqui é a parte de enviar as referencias, forms da direita */}

        <div
          className="col-md-4"
          style={{ position: "relative", left: "130px" }}
        >
          <div className="row">
            <div className="mono">
              <fieldset>
                <FormGroup
                  label="Descrição de suporte "
                  htmlFor="descricaoSuporte"
                >
                  <input
                    type="Descrição de suporte*"
                    name="descricaoSuporte"
                    className="form-control"
                    id="descricaoSuporte"
                    aria-describedby="descricaoHelp"
                    placeholder="Ex: Ablubla"
                    onChange={(e) =>
                      this.setState({ descricaoSuporte: e.target.value })
                    }
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
              </fieldset>
            </div>
            <div className="sla">
              <button className="btn btn-success">Salvar</button>
            </div>
          </div>
        </div>

        <div
          className="col-md-4"
          style={{ position: "relative", left: "60px" }}
        >
          <div className="row">
            <div className="mono">
              <fieldset>
                <FormGroup label="Autor " htmlFor="autor">
                  {inputFields.map((input, index) => {
                    return (
                      <div key={index} style={{ marginBottom: "10px" }}>
                        <input
                          type="text"
                          style={{ marginBottom: "24px" }}
                          name="autor"
                          onChange={(e) =>
                            this.setState({ autor: e.target.value })
                          }
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

export default MonografiaEletronica;
