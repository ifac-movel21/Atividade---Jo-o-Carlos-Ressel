import React from 'react';
import styled from 'styled-components/native';


const ItemLista = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
`
const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
  color:#659658;
`
const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border: 5px solid ${props=>props.done ? 'green': 'red'};
  border-radius: 50px;
  background: #000;
`

export default (props) => {
    

    
    
    return (
        <ItemLista onPress={props.onPress } activeOpacity={0.7}>
            <>
                <ItemText>{props.data.task}</ItemText>
                <ItemCheck done = {props.data.done}></ItemCheck>
            </>
        </ItemLista>
    )

}