import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import AddUser from '../../components/addUser';


const Add = () => {

    return(
        <>
            <Sidebar></Sidebar>
            <Header user></Header>
            <AddUser></AddUser>
        </>
    );
}

export default Add;