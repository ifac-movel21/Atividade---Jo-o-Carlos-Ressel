import React from 'react';
import styled from 'styled-components/native';
import {onDelete} from '../App.js'

const ListaItemSwipe = styled.TouchableHighlight`
    background-color: red;
    width: 100%;
    height: 50px;
    justify-content: center;

`
const ListaItemIcon = styled.View`
    background-color: #FFF;
    width: 20px;
    height: 20px;
    margin-left: 15px;
`


export default (props) =>{
    return(
        <ListaItemSwipe onPress = {props.onDelete} underlaycolor = "ff3333">
        <ListaItemIcon />
        </ListaItemSwipe>

    )
}
