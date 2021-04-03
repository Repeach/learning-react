import React from 'react'
import styled from 'styled-components'

const DetailText = styled.h2`
    font-family:'Times New Roman', Times, serif;
    font-size: 20;
    margin-left: 0.3em;
    margin-top: 1.5em;

`;



export default function Detail({name}) {
    return (
        
        <div>
            <DetailText>{name}</DetailText>
            <hr/>
        </div>
    )
}
