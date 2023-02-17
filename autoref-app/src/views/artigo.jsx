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
                        <a href="#/faq"
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


                                <FormGroup label='Titulo do artigo ' htmlFor="tituloArtigo">
                                    <input type='text'
                                        name="tituloArtigo"
                                        className="form-control"
                                        id="tituloArtigo"
                                        aria-describedby="tituloArtigoHelp" placeholder="Ex: Uma garota lelé"
                                        onChange={e => this.setState({ tituloArtigo: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Subtitulo do artigo ' htmlFor="subtituloArtigo">
                                    <input type='text'
                                        name="subtituloArtigo"
                                        className="form-control"
                                        id="subtituloArtigo"
                                        aria-describedby="subtituArtigoloHelp" placeholder="Ex: Coraline"
                                        onChange={e => this.setState({ subtituloArtigo: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Titulo periodico ' htmlFor="tituloPeriodico">
                                    <input type='text'
                                        name="tituloPeriodico"
                                        className="form-control"
                                        id="tituloPeriodico"
                                        aria-describedby="tituloPeriodicoHelp" placeholder="Ex: Uma garota lelé"
                                        onChange={e => this.setState({ tituloPeriodico: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Subtitulo periodico ' htmlFor="subtituloPeriodico">
                                    <input type='text'
                                        name="subtituloPeriodico"
                                        className="form-control"
                                        id="subtituloPeriodico"
                                        aria-describedby="subtituloPeriodicoHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ subtituloPeriodico: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Local de Publicação ' htmlFor="localPublicacao">
                                    <input type='text'
                                        name="localPublicacao"
                                        className="form-control"
                                        id="localPublicacao"
                                        aria-describedby="localPublicacaoHelp" placeholder="Ex: Londres"
                                        onChange={e => this.setState({ localPublicacao: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Pagina final ' htmlFor="paginaFinal">
                                    <input type='text'
                                        name="paginaFinal"
                                        className="form-control"
                                        id="paginaFinal"
                                        aria-describedby="paginaFinalHelp" placeholder="Ex: Intrinsica"
                                        onChange={e => this.setState({ paginaFinal: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Data de publicação ' htmlFor="dataPublicacao">
                                    <input type='text'
                                        name="dataPublicacao"
                                        className="form-control"
                                        id="dataPublicacao"
                                        aria-describedby="dataPublicacaoHelp" placeholder="Ex: Cia dos livros"
                                        onChange={e => this.setState({ dataPublicacao: e.target.value })} />

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


                                <FormGroup label='Ano ' htmlFor="ano">
                                    <input type='text'
                                        name="ano"
                                        className="form-control"
                                        id="ano"
                                        aria-describedby="anoHelp" placeholder="Ex: 2004"
                                        onChange={e => this.setState({ ano: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Volume ' htmlFor="volume">
                                    <input type='text'
                                        name="volume"
                                        className="form-control"
                                        id="volume"
                                        aria-describedby="volumeHelp" placeholder="Ex: 347"
                                        onChange={e => this.setState({ volume: e.target.value })} />

                                </FormGroup>


                                <FormGroup label='Edição ' htmlFor="edicao">
                                    <input type='text'
                                        id="edicao"
                                        name="edicao"
                                        className="form-control"
                                        aria-describedby="edicaoHelp" placeholder="Ex: Intrinsica"
                                        onChange={e => this.setState({ edicao: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Número ' htmlFor="numero">
                                    <input type='text'
                                        name="numero"
                                        className="form-control"
                                        id="numero"
                                        aria-describedby="numeroHelp" placeholder="Ex: Cia dos livros"
                                        onChange={e => this.setState({ numero: e.target.value })} />

                                </FormGroup>


                                <FormGroup label='Tomo ' htmlFor="tomo">
                                    <input type='text'
                                        name="tomo"
                                        className="form-control"
                                        id="tomo"
                                        aria-describedby="tomoHelp" placeholder="Ex: 2004"
                                        onChange={e => this.setState({ tomo: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Pagina inicial ' htmlFor="paginaInicial">
                                    <input type='text'
                                        name="paginaInicial"
                                        className="form-control"
                                        id="paginaInicial"
                                        aria-describedby="quantiPgHelp" placeholder="Ex: 347"
                                        onChange={e => this.setState({ paginaInicial: e.target.value })} />

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


                                <FormGroup label='Autor ' htmlFor="autor" >


                                    {inputFields.map((input, index) => {
                                        return (
                                            <div key={index} style={{ marginBottom: '10px' }}>
                                                <input type='text' style={{ marginBottom: '24px' }}

                                                    name="autor"
                                                    onChange={e => this.setState({ autor: e.target.value })}

                                                    className="form-control"
                                                    id="autor"
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
