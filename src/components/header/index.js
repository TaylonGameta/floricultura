import React from 'react';
import {Container, Tabs} from './styles';

const showSidebar = () => {
    document.getElementById("sidebar").style.transform = "translateX(0px)";
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("sidebar").style.transition = "0.5s";
}

const Header = (props) => {
    return (
        <>
        <Container>
            <button onClick={()=>showSidebar()}><i className="fa fa-bars"></i></button><h1>Original Flores</h1>
            <button className="user"><i className="fa fa-user"></i></button>
        </Container>
        <Tabs>
            <button onClick={()=>window.location.hash = "associados/"} className={props.partner && "selected"}>Associados</button>
            <button onClick={()=>window.location.hash = "usuarios/"} className={props.user && "selected"}>Usuários</button>
        </Tabs>
        </>
    )
}

export default Header;