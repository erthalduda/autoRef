import React from "react";

import FormGroup from "../components/form-group";
import { useState } from "react";

function TrabalhoAcademico() {

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
            </nav>


            <div className="row">
                <div className="col-md-4" style={{ position: 'relative', left: '200px' }}>


                    <div className="row">

                        <div className="mono">


                            <fieldset>


                                <FormGroup label='Titulo ' htmlFor="titulo">
                                    <input type='text'
                                        id="titulo"
                                        name="titulo"
                                        className="form-control"
                                        aria-describedby="tituloHelp" placeholder="Ex: Coraline"
                                        onChange={e => this.setState({ titulo: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Subtitulo ' htmlFor="subtitulo">
                                    <input type='text'
                                        id="subtitulo"
                                        name="subtitulo"
                                        className="form-control"
                                        aria-describedby="subtituloHelp" placeholder="Ex: Uma garota lelé"
                                        onChange={e => this.setState({ subtitulo: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Ano de deposito ' htmlFor="anoDeposito">
                                    <input type='text'
                                        name="anoDeposito"
                                        className="form-control"
                                        id="anoDeposito"
                                        aria-describedby="anoDepositoHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ anoDeposito: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Tipo de trabalho ' htmlFor="tipoTrabalho">
                                    <input type='text'
                                        name="tipoTrabalho"
                                        className="form-control"
                                        id="tipoTrabalho"
                                        aria-describedby="tipoTrabalhoHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ tipoTrabalho: e.target.value })} F />

                                </FormGroup>

                                <FormGroup label='Grau de formação ' htmlFor="grauFormacao">
                                    <input type='text'
                                        name="grauFormacao"
                                        className="form-control"
                                        id="exampleInputAnol1"
                                        aria-describedby="grauHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ grauFormacaono: e.target.value })} />

                                </FormGroup>




                            </fieldset>




                        </div>
                    </div>
                </div>

                <div className="col-md-4" style={{ position: 'relative', left: '130px' }}>

                    <div className="row">

                        <div className="mono">


                            <fieldset>



                                <FormGroup label='Curso ' htmlFor="curso">
                                    <input type='text'
                                        name="curso"
                                        className="form-control"
                                        id="curso"
                                        aria-describedby="cursoHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ curso: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Vinculação Academica ' htmlFor="vinculacao">
                                    <input type='text'
                                        name="vinculacao"
                                        className="form-control"
                                        id="vinculacao"
                                        aria-describedby="vinculacaoHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ vinculacao: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Ano de defesa ' htmlFor="anoDefesa">
                                    <input type='text'
                                        name="anoDefesa"
                                        className="form-control"
                                        id="anoDefesa"
                                        aria-describedby="anoDefesaHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ anoDefesa: e.target.value })} />

                                </FormGroup>

                                <FormGroup label='Local de defesa ' htmlFor="localDefesa">
                                    <input type='text'
                                        name="localDefesa"
                                        className="form-control"
                                        id="localDefesa"
                                        aria-describedby="localDefesaHelp" placeholder="Ex: 2003"
                                        onChange={e => this.setState({ localDefesa: e.target.value })} />

                                </FormGroup>






                            </fieldset>




                        </div>
                    </div>

                    <div className="sla">

                        <button className="btn btn-success">Salvar</button>
                    </div>

                </div>




                <div className="col-md-4" style={{ position: 'relative', left: '60px' }}>


                    <div className="row">

                        <div className="mono">
                            <fieldset>


                                <FormGroup label='Autor ' htmlFor="exampleInputAutor1" >


                                    {inputFields.map((input, index) => {
                                        return (
                                            <div key={index} style={{ marginBottom: '10px' }}>
                                                <input type='text' style={{ marginBottom: '24px' }}

                                                    name="autor"
                                                    onChange={e => this.setState({ autor: e.target.value })}
                                                    className="form-control"
                                                    id="autor"
                                                    aria-describedby="autorHelp" placeholder="Ex: Neil Gaiman"   />
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



export default TrabalhoAcademico
