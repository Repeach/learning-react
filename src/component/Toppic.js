import React from 'react'
import styled from 'styled-components'


const ToppicHeader = styled.h1`
    margin-top: 2px;
    margin-left: 1em;
    font-size: 40px;
    font-family: 'Times New Roman', Times, serif;

`;

export default function Toppic ({top}) {
    return (
        <div>
            <ToppicHeader>{top}</ToppicHeader>
            
        </div>
    )
}
