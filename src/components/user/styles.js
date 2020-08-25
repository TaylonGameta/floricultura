import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffff;

    @media(max-width: 900px) {
        padding: 0 1em;
    }

    padding: 0 10em;

`

export const Dots = styled.div`
    padding: 15px;
    >button{
        &:hover{
            cursor: pointer;
        }
        justify-self: flex-end;
        padding: 5px;
        margin: 0;
        background-color: transparent;
        >i{
            font-size: 18px;
            color: var(--font);
            &:hover{
                color: black;
            }
        }
    }
`

export const Item = styled.div`
   
    background-color: #ffff;
    border: 1px solid var(--border);
    border-radius: 5px;
    height: 200px;
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    margin-bottom: 2em;

    &:hover{
        box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.1);
       
    }


`

export const Image = styled.img`
    height: 100%;
    width: 300px;
    border-radius: 5px;
    z-index: 1;
    object-fit: cover;
    
    @media(max-width: 900px) {
        height: 100%;
        width: 100px;
        border-radius: 5px;
        z-index: 1;
        object-fit: cover;
    }

    
`

export const Description = styled.div`
    margin-right: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: var(--font);
    justify-content: space-between;

    >p{
        font-size: 14px;
    }

    >h2{
        font-size: 16px;
    }
`