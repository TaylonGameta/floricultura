import React,{useEffect, useState} from 'react';
import {Container, Item, Image, Description, Dots} from './styles';

import axios from 'axios';

const Partner = () => {

    const [partners, setPartners] = useState({})

    const remove = async (id) => {
        if(window.confirm("Deseja mesmo excluir o Item?")){
            await axios({
                method:"get",
                url: `https://www.originalflores.com.br:8443/api/v1/partners/delete?id=${id}`,
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
                url: "https://www.originalflores.com.br:8443/api/v1/partners/",
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("original-flores-token")}`
                }
            })
            .then(result=>{
                setPartners(result);
                
            })
        } 
        fetchData();

    },[partners])

    var listPartners
    const items = partners.data

    if(items){
        listPartners = items.map((data, i)=>{
            return(
                <Item key={`partner${i}`}>
                    <Image src={`${data.imageUrl}`}></Image>
                    <Description>
                        <h2>{data.name}</h2>
                        <p>{data.email || ''}</p>
                        <p>{data.number || ''}</p>
                        <p>{data.country}</p>
                        <p>{data.state}</p>
                    </Description>
                    <Dots>
                        <button onClick={()=>window.location.hash = `/associados/edit?id=${data.id}`}><i className="fa fa-edit"></i></button>
                        <button onClick={()=>remove(data.id)}><i className="fa fa-trash"></i></button>
                    </Dots>
                </Item>
            )
        })
    }

    return(
        <Container>
            {listPartners}
        </Container>
    )
}

export default Partner;