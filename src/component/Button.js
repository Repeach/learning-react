import React from 'react'
import styled from 'styled-components'


const ButtonShow = styled.button`
    border-radius: 5px;
    background-color: white;
    margin-right: 0.5em; 
    margin-top: 1.5rem;
    font-family: 'Times New Roman', Times, serif;
`;

const AlignButton = styled.div`
    text-align: right;
    margin-right: 1.5em;
`;

export const Button = () => {
    return (
        <div >
            <AlignButton>
            <ButtonShow> TH </ButtonShow>
            <ButtonShow> EN </ButtonShow>
            </AlignButton>
     
        </div>

    )
}
