import React, {useState} from 'react';
import {Container, FormGroup, FormItem} from './styles';
import axios from 'axios';

const Add = () => {

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

    
    const sendRequest = async() => {

        if(form.name === '' || form.email === '' || form.phone === '' || form.taxNumber === '' || form.role === ''){
            setError("Campos obrigatórios não preenchidos(email, senha, nome, cnpj, telefone, permissão).")
            console.log(form)
        }
            
        else{
            await axios({
                method: "post",
                url: "https://www.originalflores.com.br:8443/api/v1/accounts/merge",
                headers: {Authorization: `Bearer ${localStorage.getItem("original-flores-token")}`},
                data: {...form}
            })
            .then(result => setError("Adicionado com sucesso."))
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
                    <label>Senha:</label>
                    <input type="password" value={form.password || ''} onChange={e=>setForm({...form, password: e.target.value})}></input>
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

export default Add;