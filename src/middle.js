import React from 'react';
import styled from 'styled-components';

const Video = styled.iframe`
width: 800px;
height: 600px;
`

const Image = styled.img`
width: 800px;
height: 600px;
`

export default function Middlez(props) {


    return(
        <div>
             {props.picture.includes('youtube') ? <Video src={props.picture}/> : <Image src={props.picture} /> }
            <p>{props.description}</p>
        </div>
    )
}