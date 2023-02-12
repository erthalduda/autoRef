import React from "react";

class Referencias extends React.Component {



    prepareMonografia = () => {

        this.props.history.push('/opcoes_mono')


    }

    preparePeriodico = () => {

        this.props.history.push('/periodico')


    }

    prepareTrabalho = () => {

        this.props.history.push('/trabalho')


    }

    prepareWebsite = () => {

        this.props.history.push('/website')


    }
    prepareArtigo = () => {

        this.props.history.push('/artigo')


    }
    render() {


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

                </nav>

                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="jumbotron">
                            <h1 className="display-3">CADASTRAR REFERÊNCIA</h1>
                            <p className="lead">Escolha o tipo:</p>
                            <div className="button1">
                            <button onClick={this.prepareMonografia} className="btn btn-success">Monografia</button>
                            <button onClick={this.preparePeriodico} className="btn btn-success">Periódica</button>
                            <button onClick={this.prepareTrabalho} className="btn btn-success">Trabalho Acadêmico</button>
                            <button onClick={this.prepareWebsite} className="btn btn-success">Website</button>
                            <button onClick={this.prepareArtigo} className="btn btn-success">Artigo</button>
                            </div>

                        </div>
                    </div>

                </div>


            </>
        )

    }
}

export default Referencias;