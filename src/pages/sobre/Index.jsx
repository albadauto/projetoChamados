import React from 'react'
import Header from '../../components/Header/Index';
import './sobre.css';

const Sobre = () => {
    return (
        <div>
            <Header />
            <br /><br />
            <br />
            <div className="main">
                <div className="title">
                    <h1>Sobre</h1>
                </div>

                <div className="text-one">
                    <label htmlFor="">
                        Versão 1.0.0
                    </label><br />
                    <label htmlFor="">
                        Desenvolvido by: José Adauto (albadev)
                    </label><br />
                    <label htmlFor="">
                        Todos os direitos reservados
                    </label><br />
                    <label htmlFor="">
                        Qualquer cópia ou distribuição sem a 
                        autorização do autor é crime!
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Sobre;