import React from "react";
import FormGroup from "../components/form-group";
import { useState } from "react";


function Artigo() {


    const [inputFields, setInputFields] = useState([
        { autor: '' }
    ])

    const addFields = () => {
        let newfield = { autor: '' }

        setInputFields([...inputFields, newfield])
    }

    return (

        <>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">

                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">

                        <a href="#/referencias"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">

                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>REFERENCIAS</span>

                        </a>

                        <a href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">

                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>BUSCAR REFERENCIAS</span>

                        </a>
                        <a href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">

                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>COLEÇÕES</span>

                        </a>
                        <a href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">

                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>CONQUISTAS</span>

                        </a>
                        <a href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">

                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>RANKING</span>

                        </a>
                        <a href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">

                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>FAQ</span>

                        </a>
                        <a href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">

                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>EDITAR PERFIL</span>

                        </a>

                    </div>



                </div>
            </nav >


            {/* Aqui é a parte de enviar as referencias, forms da esquerda */}

            <div className="row">
                <div className="col-md-4" style={{ position: 'relative', left: '200px' }}>


                    <div className="row">

                        <div className="mono">
                            <fieldset>


                            <FormGroup label='Titulo do artigo ' htmlFor="exampleInputSubtitulo1">
                                    <input type='Subtitulo*'

                                        onChange={e => this.setState({ subtitulo: e.target.value })}
                                        className="form-control"
                                        id="exampleInputSubtitulo1"
                                        aria-describedby="subtituloHelp" placeholder="Ex: Uma garota lelé" />

                                </FormGroup>

                                <FormGroup label='Subtitulo do artigo ' htmlFor="exampleInputTitutlo1">
                                    <input type='Titulo*'

                                        onChange={e => this.setState({ titulo: e.target.value })}
                                        className="form-control"
                                        id="exampleInputTitulo1"
                                        aria-describedby="tituloHelp" placeholder="Ex: Coraline" />

                                </FormGroup>

                                <FormGroup label='Titulo periodico ' htmlFor="exampleInputSubtitulo1">
                                    <input type='Subtitulo*'

                                        onChange={e => this.setState({ subtitulo: e.target.value })}
                                        className="form-control"
                                        id="exampleInputSubtitulo1"
                                        aria-describedby="subtituloHelp" placeholder="Ex: Uma garota lelé" />

                                </FormGroup>

                                <FormGroup label='Subtitulo periodico ' htmlFor="exampleInputAnol1">
                                    <input type='Ano de publicação*'

                                        onChange={e => this.setState({ ano: e.target.value })}
                                        className="form-control"
                                        id="exampleInputAnol1"
                                        aria-describedby="anoHelp" placeholder="Ex: 2003" />

                                </FormGroup>

                                <FormGroup label='Local de Publicação ' htmlFor="exampleInputCidade1">
                                    <input type='Cidade*'

                                        onChange={e => this.setState({ cidade: e.target.value })}
                                        className="form-control"
                                        id="exampleInputCidade1"
                                        aria-describedby="cidadeHelp" placeholder="Ex: Londres" />

                                </FormGroup>

                                <FormGroup label='Pagina final ' htmlFor="exampleInputEdicao1">
                                    <input type='Edicao*'

                                        onChange={e => this.setState({ email: e.target.value })}
                                        className="form-control"
                                        id="exampleInputEdicao1"
                                        aria-describedby="edicaoHelp" placeholder="Ex: Intrinsica" />

                                </FormGroup>

                                <FormGroup label='Data de publicação ' htmlFor="exampleInputEditora1">
                                    <input type='Editora*'

                                        onChange={e => this.setState({ editora: e.target.value })}
                                        className="form-control"
                                        id="exampleInputEditora1"
                                        aria-describedby="editoraHelp" placeholder="Ex: Cia dos livros" />

                                </FormGroup>


                            </fieldset>
                        </div>
                    </div>
                </div>



                {/* Aqui é a parte de enviar as referencias, forms da direita */}





                <div className="col-md-4" style={{ position: 'relative', left: '130px' }}>


                    <div className="row">

                        <div className="mono">
                            <fieldset>


                                <FormGroup label='Ano ' htmlFor="exampleInputAnoEntrega1">
                                    <input type='Ano de entrega*'

                                        onChange={e => this.setState({ anoeEntrega: e.target.value })}
                                        className="form-control"
                                        id="exampleInputAnoEntrega1"
                                        aria-describedby="anoEntregaHelp" placeholder="Ex: 2004" />

                                </FormGroup>

                                <FormGroup label='Volume ' htmlFor="exampleInputQuantiPg1">
                                    <input type='Quantidade de paginas*'

                                        onChange={e => this.setState({ quantiPg: e.target.value })}
                                        className="form-control"
                                        id="exampleInputQuantiPg1"
                                        aria-describedby="quantiPgHelp" placeholder="Ex: 347" />

                                </FormGroup>


                                <FormGroup label='Edição ' htmlFor="exampleInputEdicao1">
                                    <input type='Edicao*'

                                        onChange={e => this.setState({ email: e.target.value })}
                                        className="form-control"
                                        id="exampleInputEdicao1"
                                        aria-describedby="edicaoHelp" placeholder="Ex: Intrinsica" />

                                </FormGroup>

                                <FormGroup label='Numero ' htmlFor="exampleInputEditora1">
                                    <input type='Editora*'

                                        onChange={e => this.setState({ editora: e.target.value })}
                                        className="form-control"
                                        id="exampleInputEditora1"
                                        aria-describedby="editoraHelp" placeholder="Ex: Cia dos livros" />

                                </FormGroup>


                                <FormGroup label='Tomo ' htmlFor="exampleInputAnoEntrega1">
                                    <input type='Ano de entrega*'

                                        onChange={e => this.setState({ anoeEntrega: e.target.value })}
                                        className="form-control"
                                        id="exampleInputAnoEntrega1"
                                        aria-describedby="anoEntregaHelp" placeholder="Ex: 2004" />

                                </FormGroup>

                                <FormGroup label='Pagina inicial ' htmlFor="exampleInputQuantiPg1">
                                    <input type='Quantidade de paginas*'

                                        onChange={e => this.setState({ quantiPg: e.target.value })}
                                        className="form-control"
                                        id="exampleInputQuantiPg1"
                                        aria-describedby="quantiPgHelp" placeholder="Ex: 347" />

                                </FormGroup>

                            </fieldset>
                        </div>
                    </div>
                    <div className="sla">

                        <button className="btn btn-success">Salvar</button>
                    </div>
                    {/* Aqui é a parte de enviar as referencias, 3 forms */}


                </div>

                <div className="col-md-4" style={{ position: 'relative', left: '60px' }}>


                    <div className="row">

                        <div className="mono">
                            <fieldset>


                                <FormGroup label='Autor ' htmlFor="exampleInputAutor1" >


                                    {inputFields.map((input, index) => {
                                        return (
                                            <div key={index} style={{ marginBottom: '10px' }}>
                                                <input type='Autor*' style={{ marginBottom: '24px' }}


                                                    onChange={e => this.setState({ autor: e.target.value })}

                                                    className="form-control"
                                                    id="exampleInputAutor1"
                                                    aria-describedby="autorHelp" placeholder="Ex: Neil Gaiman"
                                                />
                                            </div>
                                        )
                                    })}


                                </FormGroup>



                            </fieldset>

                        </div>
                        <div className="btn-add">

                            <button className="btn btn-success" onClick={addFields}>Adicionar Autor</button>
                        </div>

                    </div>

                    {/* <button onClick={this.entrar} className="btn btn-success">Adicionar</button> */}

                </div>


            </div>





        </>
    )
}



export default Artigo
