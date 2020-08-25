import styled from 'styled-components';

export const Tabs = styled.div`

    @media(max-width: 900px) {
        padding: 0 1em;
    }

    padding: 0 10em;
    
    background-color: #ffff;

    & .selected{
        border-bottom: 2px solid var(--blue);
    }

    >button{
        background-color: transparent;
        color: var(--font);
        margin-right: 20px;
        padding: 15px 0;
        font-weight: bold;
        font-size: 12px;

        &:hover{
            cursor: pointer;
            color: black;
        }
    }
    border-bottom: 1px solid var(--border);
`

export const Container = styled.div`
    height: 120px;
    
    display: flex;
    align-items: center;

    @media(max-width: 900px) {
        padding: 0 0.7em;
    }

    padding: 0 9.5em;
    

    >h1{
        font-size: 14px;
        color: var(--font);
        margin-left: 10px;
        margin-right: auto;
        &:hover{
            cursor: pointer;
            color: black;
        }
    }

    >button{
        border-radius: 50%;
        padding: 10px;
        &:hover{
            cursor: pointer;
            background-color: var(--secundary);
        }
        background-color: transparent;
    
        & .user{
            justify-self: flex-end;
        }
        >i{
            font-size: 24px;
            color: var(--font);
            &:hover{
                color: black;
            }
        }
    }
`