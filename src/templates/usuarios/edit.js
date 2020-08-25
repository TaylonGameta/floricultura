import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import EditUser from '../../components/editUser';
import queryString from 'query-string';


const Add = (props) => {

    const param = queryString.parse(props.location.search);
    
    return(
        <>
            <Sidebar></Sidebar>
            <Header partner></Header>
            <EditUser id={param.id}></EditUser>
        </>
    );
}

export default Add;