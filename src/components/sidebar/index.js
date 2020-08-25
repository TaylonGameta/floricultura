import React from 'react';
import {Container, Header, Main} from './styles';

const hideSidebar = () => {
    document.getElementById("sidebar").style.transform = "translateX(-300px)";
    document.getElementById("sidebar").style.visibility = "hidden";
    document.getElementById("sidebar").style.transition = "0.5s";
}


const Sidebar = () => {
    return (
        <Container id="sidebar">
            <Header>
                <h3>Original Flores</h3>
                <button onClick={()=>hideSidebar()} className="user"><i className="fa fa-times"></i></button>
            </Header>
            <Main>
                <h3>Usuários</h3>
                <button><i className="fa fa-list"></i>Listar</button>
                <button><i className="fa fa-plus"></i>Criar</button>
                <h3>Associados</h3>
                <button onClick={()=>window.location.hash = "associados/"}><i className="fa fa-list"></i>Listar</button>
                <button onClick={()=>window.location.hash = "associados/add"}><i className="fa fa-plus"></i>Criar</button>
            </Main>
        </Container>
    )
}

export default Sidebar;