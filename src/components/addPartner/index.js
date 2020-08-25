import React, {useState, useEffect} from 'react';
import {Container, FormGroup, FormItem} from './styles';
import axios from 'axios';

const Add = () => {

    const [form, setForm] = useState({
        email: '',
        phone: '',
        mobilePhone: null,
        taxNumber: null,
        reginalTaxNumber: null,
        name: '',
        companyName: '',
        street: null,
        number: null,
        district: null,
        complement: null,
        city: null,
        state: null,
        country: null,
        postalCode: null,
        managerName: null,
        imageUrl: null,
        bankName: null,
        bankAccount: null,
        bankBranch: null,
        prices: [],
        regionId: '1973c829-0f58-4846-815a-57d116b0cf81',
        createdBy: 'Taylon'

    })

    const [error, setError] = useState('')

    const sendRequest = async() => {

        if(form.name === '' || form.email === '' || form.phone === '' || form.companyName === ''){
            setError("Campos obrigatórios não preenchidos(email, nome, razão social, telefone).")
            console.log(form)
        }
            
        else{
            await axios({
                method: "post",
                url: "https://www.originalflores.com.br:8443/api/v1/partners/merge",
                headers: {Authorization: `Bearer ${localStorage.getItem("original-flores-token")}`},
                data: {...form}
            })
            .then(result => setError("Criado com sucesso."))
            .catch(error => console.log(error))
        }
    }

    return(
        <Container>
            <h3>Add Associado</h3>
            <h4>Banco</h4>
            <FormGroup>
                <FormItem>
                    <label>CNPJ:</label>
                    <input value={form.taxNumber || ''} onChange={e=>setForm({...form, taxNumber: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Número da conta:</label>
                    <input value={form.bankNumber || ''} onChange={e=>setForm({...form, bankNumber: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Marca do banco:</label>
                    <input value={form.bankBranch || ''} onChange={e=>setForm({...form, bankBranch: e.target.value})}></input>
                </FormItem>
            </FormGroup>
            <h4>Endereço</h4>
            <FormGroup>
                <FormItem>
                    <label>Cidade:</label>
                    <input value={form.city || ''} onChange={e=>setForm({...form, city: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>País:</label>
                    <input value={form.country || ''} onChange={e=>setForm({...form, country: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Complemento:</label>
                    <input value={form.complement || ''} onChange={e=>setForm({...form, complement: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Distrito:</label>
                    <input value={form.district || ''} onChange={e=>setForm({...form, district: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Estado:</label>
                    <input value={form.state || ''} onChange={e=>setForm({...form, state: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Rua:</label>
                    <input value={form.street || ''} onChange={e=>setForm({...form, street: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>CEP:</label>
                    <input value={form.postalCode || ''} onChange={e=>setForm({...form, postalCode: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Número:</label>
                    <input value={form.number || ''} onChange={e=>setForm({...form, number: e.target.value})}></input>
                </FormItem>
            </FormGroup>
            <h4>Informações do Associado</h4>
            <FormGroup>
                <FormItem>
                    <label>Nome:</label>
                    <input value={form.name || ''} onChange={e=>setForm({...form, name: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Razão Social:</label>
                    <input value={form.companyName || ''} onChange={e=>setForm({...form, companyName: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Telefone:</label>
                    <input value={form.phone || ''} onChange={e=>setForm({...form, phone: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Email:</label>
                    <input value={form.email || ''} onChange={e=>setForm({...form, email: e.target.value})}></input>
                </FormItem>
                <FormItem>
                    <label>Url:</label>
                    <input value={form.imageUrl || ''} onChange={e=>setForm({...form, imageUrl: e.target.value})}></input>
                </FormItem>
                
            </FormGroup>
            <p>{error || ''}</p>
            <button onClick={()=>sendRequest()}>Cadastrar</button>
            
            
        </Container>
    )
}

export default Add;