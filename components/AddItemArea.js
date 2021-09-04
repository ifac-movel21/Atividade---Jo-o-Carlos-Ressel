import React, { useState } from "react";
import styled from "styled-components";

const AddArea = styled.View`
    padding: 10px;
`
const ItemInput = styled.TextInput`
    font-size: 15px;
    color: #FFF;
    height: 50px;
    border: 1px #FFF;
    border-radius: 50px;
`

export default (props) => {

    const [item, setItem] = useState('');

    const handleSubmit = () => {
        if(item.trim() != ''){
            props.onAdd(item.trim())
            setItem('');
        }

    }

    return (
        <AddArea>
            <ItemInput
                placeholder="Digite uma nova tarefa"
                placeholderTextColor="#659658"
                value={item}
                onChangeText={e => setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AddArea>
    )
}