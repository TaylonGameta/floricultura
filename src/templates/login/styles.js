import styled from 'styled-components';

export const Header = styled.div`
    padding: 2em 10em;
    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.1);
    >h1{
        color: var(--font);
        display: flex;
        align-items: center;
        font-size: 16px;
        >span{
            i{
                margin-right: 5px;
                font-size: 24px;
            }
        }
    }
`

export const Footer = styled.div`
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--font);
    height: 40px;

    >p{
        margin-top: 15px;
        color: var(--font);
    }

`

export const Main = styled.div`
    display: flex;
    justify-content: center;
    
`

export const FormGroup = styled.div`

    
    margin-top: 130px;
    @media(max-width: 900px) {
        margin-top: 30px;
        width: 90%;
    }
    
    border: 1px solid var(--border);
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    width: 30%;
    justify-content: flex-start;

    h1{
        color: var(--font);
        font-size: 18px;
        margin-bottom: 3em;
        >span{
            i{
                margin-right: 5px;
            }
        }
    }

    h2{
        padding: 0;
        padding: 0.5em 0;
        color: var(--font);
        
    }

    >button{
        margin-top: 20px;
        height: 55px;
        padding: 5px;
        width: 35%;
        background-color: var(--blue);
        color: #fff;
        border-radius: 5px;
        margin-bottom: 50px;

        &:hover{
            box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
            background-color: #434AFF;
            cursor: pointer;
        }
    }
`

export const FormItem = styled.div`
    background-color: white;
    margin-top: 20px;

    >label{
        font-size: 12px;
        color: var(--font);
    }
    input{
        border: 1px solid #CFCFCF;
        border-radius: 5px;
        height: 45px;
        padding: 10px;
        margin-top: 5px;
        width: 100%;

        &:focus{
            border: 1px solid var(--blue);
            transition: 0.2s;
        }
    }

`