import React, {useState, useEffect} from 'react';
import {Container, FormGroup, FormItem} from './styles';
import axios from 'axios';

const Edit = (props) => {

    const [form, setForm] = useState({
        active: true,
        role: '',
        name: '',
        password: '',
        taxNumber: '',
        phone: '',
        email: ''

    });

    const [error, setError] = useState('');

    useEffect(()=>{
        const  fetchData = async () => {
            await axios({
                method: "get",
                url: `https://www.originalflores.com.br:8443/api/v1/accounts/?id=${props.id}`,
                headers: {Authorization: `Bearer ${localStorage.getItem("original-flores-token")}`},
            })
            .then(result => {
                setForm({
                    ...form,
                    email: result.data[0].email,
                    name: result.data[0].name,
                    phone: result.data[0].phone,
                    taxNumber: result.data[0].taxNumber,
                    role: result.data[0].role
                })
            })
            .catch(error=>console.log(error))
        }

        fetchData();
    },[])

    const sendRequest = async() => {

        if(form.name === '' || form.email === '' || form.phone === '' || form.taxNumber === '' || form.role === ''){
            setError("Campos obrigatórios não preenchidos(email, nome, cnpj, telefone, permissão).")
            console.log(form)
        }
            
        else{
            await axios({
                method: "post",
                url: "https://www.originalflores.com.br:8443/api/v1/accounts/merge",
                headers: {Authorization: `Bearer ${localStorage.getItem("original-flores-token")}`},
                data: {...form, id: props.id}
            })
            .then(result => setError("Alterado com sucesso."))
            .catch(error => console.log(error))
        }
    }

    return(
        <Container>
            <h3>Editar Usuário</h3>
            <h4>Informações</h4>
            <FormGroup>
                <FormItem>
                    <label>Email:</label>
                    <input value={form.email || ''} onChange={e=>setForm({...form, email: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Nome:</label>
                    <input value={form.name || ''} onChange={e=>setForm({...form, name: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Telefone:</label>
                    <input value={form.phone || ''} onChange={e=>setForm({...form, phone: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>CNPJ:</label>
                    <input value={form.taxNumber || ''} onChange={e=>setForm({...form, taxNumber: e.target.value})}></input>
                </FormItem>
            </FormGroup>
            <h4>Regras</h4>
            <FormGroup>
                <FormItem>
                    <label>Permissões:</label>
                    <input value={form.role || ''} onChange={e=>setForm({...form, role: e.target.value})}></input>
                </FormItem>
            </FormGroup>
            
            <p>{error || ''}</p>
            <button onClick={()=>sendRequest()}>Editar</button>
        </Container>
    )
}

export default Edit;