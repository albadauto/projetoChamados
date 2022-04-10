import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Index';
import './home.css';
const Home = () => {
    const history = useHistory();
    if (!sessionStorage.getItem("session")) return history.redirect("/");
    var rows = [];

    for (let i = 0; i <= 3; i++) {
        rows.push(i);
    }

    return (
        <div>
            <div className="filter"></div>
            <Header />
            
            <table className='content-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Instituição</th>
                    </tr>
                </thead>

                {rows.map((x, i) => {
                    return (
                        <tr className='content'>
                            <td>{x + i}</td>
                            <td>Acalmar a mente</td>
                            <td>Agora</td>
                            <td>Sla</td>
                        </tr>
                    )
                })}

            </table>


        </div>
    );
}

export default Home;