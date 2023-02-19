import React from "react";

function Faq() {
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
          className="col-md-6"
          style={{ position: "relative", left: "200px" }}
        >
          <h1 className="display-3" style={{ position: "relative" }}>
            FAQ
          </h1>
          <div classname="faq-body" style={{ width: "450px" }}>
            <div>
              <details>
                <summary>Como faço uma citação direta?</summary>
                Basta colocar a parte transcrita entre aspas, e indicar o ano de
                publicação e a página de onde a informação foi retirada. Por
                exemplo: “[...] a própria descrição institucional da ABNT
                menciona sobre o trabalho conjunto com o governo, assim como,
                dentre outras coisas, para a implementação de políticas
                públicas” (NIWA, 2017, p. 71). Caso a citação direta possua mais
                de três linhas, ela é considerada uma citação direta longa,
                como, por exemplo: De acordo com Niwa (2017, p. 74).''
                <div className="letra-sumario">
                  A estandardização, ou normalização, é um fenômeno que procura{" "}
                  <br></br>
                  estabelecer padrões para governos, organizações ou
                  instituições em <br></br>
                  relação a seus processos, serviços ou produtos na busca por
                  novos <br></br>
                  conceitos, aperfeiçoamentos, melhorias ou certificações.{" "}
                  <br></br>
                </div>
              </details>
            </div>

            <div>
              <details>
                <summary>Como faço uma citação indireta?</summary>
                Basta colocar a paráfrase do que foi dito originalmente,
                juntamente ao ano de publicação da fonte. Por exemplo: Para Niwa
                (2017), a descrição institucional da ABNT menciona o trabalho
                conjunto com o governo para a implementação de políticas
                públicas.
              </details>
            </div>

            <div>
              <details>
                <summary>Como faço uma citação de citação?</summary>
                As citações de citações são citações, diretas ou indiretas, de
                um texto em que não se teve acesso ao original. Esse tipo de
                citação segue os padrões de citação direta ou indireta, com a
                utilização da expressão apud. Deve ser feito da seguinte forma:
                De acordo com Ernst<i> et al</i>. (2014, p. 854, apud NIWA,
                2017, p. 64):
                <div className="letra-sumario">
                  [...] a concorrência baseada na tecnologia está se
                  intensificando, e o <br></br>
                  sucesso competitivo depende criticamente do controle sobre os{" "}
                  <br></br>
                  direitos de propriedade intelectual, bem como sobre a
                  capacidade de <br></br>
                  controlar determinados padrões abertos, mas de propriedade de{" "}
                  <br></br>
                  arquitetura e de interface. <br></br>
                </div>
                Nesse exemplo, está sendo citado de forma direta o que Niwa
                escreveu, baseando-se em Ernst et al. Vale ressaltar que, nas
                referências bibliográficas do trabalho, deve-se referenciar
                apenas o texto de onde foi tirada a citação - nesse caso, apenas
                o trabalho de Niwa deveria ser referenciado.
              </details>
            </div>

            <div>
              <details>
                <summary>
                  Quais os elementos necessários para uma referência de um
                  livro?
                </summary>
                A ABNT NBR 6023 (ABNT, 2018), responsável pela normalização de
                referências, define que referências de livros estão incluídas na
                categoria de "Monografia". Portanto, o padrão a ser seguido, bem
                como os elementos necessários, segue o estipulado para
                monografias: “SOBRENOME, Nome. <b>Título</b>. Subtítulo. Edição.
                Local de publicação: Editora, ano.” Pode-se, ainda, adicionar
                elementos complementares, como ISBN, quantidade de páginas, etc.
              </details>
            </div>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{ position: "relative", left: "130px" }}
        >
          <div
            classname="faq-body"
            style={{ width: "450px", marginTop: "85px" }}
          >
            <div>
              <details>
                <summary>
                  Quais os elementos necessários para uma referência de uma
                  monografia?
                </summary>
                A ABNT NBR 6023 (ABNT, 2018) define que os elementos essenciais
                para referenciar uma monografia são: o nome do autor; o título
                da obra; o subtítulo, caso exista; a edição; local de
                publicação; editora e ano de publicação. A formatação deve ser
                feita da seguinte forma: “SOBRENOME, Nome. <b>Título</b>.
                Subtítulo. Edição. Local de publicação: Editora, ano.” Pode-se
                adicionar elementos complementares, como quantidade de páginas,
                ISBN, etc.
              </details>
            </div>

            <div>
              <details>
                <summary>
                  Quais os elementos necessários para uma referência de um
                  artigo?
                </summary>
                A ABNT NBR 6023 (ABNT, 2018) estabelece que os elementos
                essenciais para referenciar um artigo são: o nome do autor; o
                título do artigo ou da matéria; o subtítulo, caso exista; o
                título do periódico; subtítulo, caso exista; local de
                publicação; numeração do ano e/ou volume; número e/ou edição;
                tomo caso exista; páginas inicial e final; e a data ou período
                de publicação, e deve ser feita da seguinte forma: “SOBRENOME,
                Nome. Título: subtítulo. <b>Periódico</b>, Local de publicação,
                numeração do ano e/ou volume, edição ed., tomo, p. página de
                início - página final, data ou período de publicação.”
              </details>
            </div>

            <div>
              <details>
                <summary>
                  Qual a normatização padrão para todas as referências,
                  independentemente do tipo?
                </summary>
                Todas as referências, seguindo a norma da ABNT, devem possuir
                título. O restante dos elementos obrigatórios varia, conforme o
                tipo da referência. Entretanto, uma norma que abrange grande
                parte dos modelos de referências é a de que, caso o trabalho
                referenciado possua até três autores, todos devem ser
                mencionados. Caso contrário, deve-se mencionar apenas o primeiro
                autor, na ordem alfabética, seguido do termo <i>et al</i>.
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
