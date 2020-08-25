import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffff;
    position: fixed;
    z-index:10;
    height: 100%;
    width: 300px;
    box-shadow: 5px 0px 10px 1px rgb(0, 0, 0, 0.1);
    overflow: hidden;
    visibility: hidden;
    transform: translateX(-300px);
    transition: 0.5s;

`

export const Main = styled.div`
    background-color: #ffff;
    
    >h3{
        border-top: 1px solid var(--border);
        font-weight: 500;
        font-size: 16px;
        padding: 15px 30px;
        color: var(--font);
    }

    >button{
        &:hover{
            background-color: var(--secundary);
            &:hover{
                color: black;
            }
        }

        color: var(--font);
        background-color: transparent;
        padding: 15px 30px;
        width: 100%;
        display: flex;
        >i{
            margin-right: 10px;
            font-size: 16px;
        }
    }
`

export const Header = styled.div`
    background-color: #ffff;
    color: var(--font);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:30px;

    >h3{
        font-size: 14px;
    }

    >button{
        &:hover{
            cursor: pointer;
            
        }
        background-color: transparent;

        >i{
            font-size: 24px;
            color: var(--font);
            &:hover{
                
                color: black;
            }
        }
    }
`