import React from 'react';
import Header from '../../components/header';
import Partner from '../../components/partner';
import Sidebar from '../../components/sidebar';

import axios from 'axios';


const Associados = () => {

    return(
        <>
            <Sidebar></Sidebar>
            <Header partner></Header>
            <Partner></Partner>
        </>
    )
    
}

export default Associados;