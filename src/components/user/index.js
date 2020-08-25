import React,{useEffect, useState} from 'react';
import {Container, Item, Image, Description, Dots} from './styles';

import axios from 'axios';

const User = () => {

    const [users, setUsers] = useState({})

    const remove = async (id) => {
        if(window.confirm("Deseja mesmo excluir o Item?")){
            await axios({
                method:"get",
                url: `https://www.originalflores.com.br:8443/api/v1/accounts/delete?id=${id}`,
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("original-flores-token")}`
                },
                id
            })
            .then(result=>{
                
            })   
            .catch(error=>console.log(error))  
        }
    }

    useEffect(()=>{
        async function fetchData(){
            await axios({
                method:"get",
                url: "https://www.originalflores.com.br:8443/api/v1/accounts/",
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("original-flores-token")}`
                }
            })
            .then(result=>{
                setUsers(result);
                
            })
        } 
        fetchData();

    },[users])

    var listUsers
    const items = users.data

    if(items){
        listUsers = items.map((data, i)=>{
            return(
                <Item key={`partner${i}`}>
                    <Image src={`https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_960_720.png`}></Image>
                    <Description>
                        <h2>{data.name}</h2>
                        <p>{data.email || ''}</p>
                        <p>{data.role || ''}</p>
                        <p>{data.number}</p>
                    </Description>
                    <Dots>
                        <button onClick={()=>window.location.hash = `/usuarios/edit?id=${data.id}`}><i className="fa fa-edit"></i></button>
                        <button onClick={()=>remove(data.id)}><i className="fa fa-trash"></i></button>
                    </Dots>
                </Item>
            )
        })
    }

    return(
        <Container>
            {listUsers}
        </Container>
    )
}

export default User;