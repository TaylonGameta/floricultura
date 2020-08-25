import styled from 'styled-components';

export const FormGroup = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24em, 1fr));
    column-gap: 10px;
    margin-bottom: 2em;
`

export const FormItem = styled.div`
    background-color: white;
    margin-top: 10px;
    >label{
        font-size: 12px;
    }
    
    input{
        border: 1px solid #CFCFCF;
        border-radius: 5px;
        height: 35px;
        padding: 10px;
        margin-top: 5px;
        width: 100%;

        &:focus{
            border: 1px solid var(--blue);
            transition: 0.2s;
        }
    }

`

export const Container = styled.div`

    >p{
        height: 20px;
        font-size: 14px;
    }
    background-color: #ffff;
    @media(max-width: 900px) {
        padding: 0 1em;
    }

    padding: 0 10em;
    color: var(--font);

    >h3{
        padding: 2em 0;
        font-size: 16px;
        font-weight: normal;
    }

    >h4{
        font-size: 16px;
        font-weight: normal;
    }

    >button{
        margin-top: 20px;
        height: 55px;
        padding: 5px;
        width: 200px;
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

