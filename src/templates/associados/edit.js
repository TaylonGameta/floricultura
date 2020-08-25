import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import EditPartner from '../../components/editPartner';
import queryString from 'query-string';


const Add = (props) => {

    const param = queryString.parse(props.location.search);
    
    return(
        <>
            <Sidebar></Sidebar>
            <Header partner></Header>
            <EditPartner id={param.id}></EditPartner>
        </>
    );
}

export default Add;