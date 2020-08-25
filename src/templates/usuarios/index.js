import React from 'react';
import Header from '../../components/header';

import Sidebar from '../../components/sidebar';
import User from '../../components/user';

const Usuarios = () => {
    return(
        <>
            <Sidebar></Sidebar>
            <Header user></Header>
            <User></User>
        </>
    );
}

export default Usuarios;