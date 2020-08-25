import React from 'react';
import Header from '../../components/header';
import AddPartner from '../../components/addPartner';
import Sidebar from '../../components/sidebar';


const Add = (props) => {

    
    return(
        <>
            
            <Sidebar></Sidebar>
            <Header partner></Header>
            <AddPartner></AddPartner>
        </>
    );
}

export default Add;