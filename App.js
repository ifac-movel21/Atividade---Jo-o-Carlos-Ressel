import React, { useState } from "react";
import styled from "styled-components";
import lista from "./components/lista";
import img from "./bg.jpg";

//Styleds
const Page = styled.View`
  background-color: #000000;
  flex: 1;s
`

const HeaderText = styled.Text`
  padding-top: 10%;
  padding-bottom: 20px;
  font-size: 35px;
  font-weight: bold;
  color:#659658;
  align-self: center;
`

const Btn = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #659658;
  color: #FFF;
  height: 50px;
  width: 150px;
  border-radius:10px;
  align-self: center;
  align-self: center;
`
const BtnLista = styled.TouchableOpacity`
  margin: 20px 0;
  color: #FFF;
  height: 50px;
  align-self: center;
  align-self: center;
  
`

const TextBtn = styled.Text`
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`
const TextLista = styled.Text`
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #659658;
  text-decoration: underline;
`
const Input = styled.TextInput`
  justify-content: center;
  width: 350px;
  height: 40px;
  border: 1px;
  border-style: solid;
  border-color: #FFF;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  padding: 10px;
  font-size: 18px;
  align-self: center;
  color: #659658;
`

const AreaRelatorio = styled.View`
  margin: 10px 10px;
  background-color: #bbffb9;
  padding: 20px;
  justify-content: center;
  align-items: center;

`
const RelatorioTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const RelatorioItem = styled.Text`
  font-size: 18px;
  margin: 0 0 30px;
`
const Scroll = styled.ScrollView`
  flex: 1;
`
const ItemLista = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
`
const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
  color:#FFF;
`
const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border: 5px solid #FFF;
  border-radius: 10px;
  background-color: #659658;
`
const Divisor = styled.View`
  margin: 15px 30px;
  padding: 1px 1px 1px 1px;
  background-color: #659658;
`

export default () => {
  //Variaveis
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [faltas, setFaltas] = useState('');
  const [aulas, setAulas] = useState('');
  const [pct, setPct] = useState('');
  const [resultado, setResultado] = useState('');
  const [ok, setOk] = useState(false);
  const [okLista, setOkLista] = useState(false);

  let n1 = parseFloat(nota1);
  let n2 = parseFloat(nota2);
  let falt = parseInt(faltas);
  let aul = parseInt(aulas);

  //Calculos
  const media = (n1 + n2) / 2

  const calc = () => {
    setOk(!ok)
    setPct(((aul - falt) / aul) * 100)
    //verificação

    if (media > 6 && pct < 25) {
      setResultado("Aprovado")
    } else {
      setResultado("Reprovado")
    }
  }
  const showlista = () =>{
    setOkLista(!okLista)
  }

  //Pagina
  return (
    <Page>
      <Scroll>
          <HeaderText>Sistema Universitário</HeaderText>
          <Input
            placeholder="Nome completo"
            placeholderTextColor="#659658"
            value={nome}
            onChangeText={nm => setNome(nm)}
          />
          <Input
            placeholder="Curso"
            placeholderTextColor="#659658"
            value={curso}
            onChangeText={cs => setCurso(cs)}
          />
          <Divisor/>
          <Input
            placeholder="Disciplina"
            placeholderTextColor="#659658"
            value={disciplina}
            onChangeText={dc => setDisciplina(dc)}
          />
          <Input
            placeholder="Nota 1"
            placeholderTextColor="#659658"
            keyboardType = "numeric"
            value={nota1}
            onChangeText={n1 => setNota1(n1)}
          />
          <Input
            placeholder="Nota 2"
            placeholderTextColor="#659658"
            keyboardType = "numeric"
            value={nota2}
            onChangeText={n2 => setNota2(n2)}
          />
          <Input
            placeholder="Quant. Aulas"
            placeholderTextColor="#659658"
            keyboardType = "numeric"
            value={aulas}
            onChangeText={al => setAulas(al)}
          />
          <Input
            placeholder="Quant. Faltas"
            placeholderTextColor="#659658"
            value={faltas}
            keyboardType = "numeric"
            onChangeText={ft => setFaltas(ft)}
          />

          <Btn>
            <TextBtn onPress={calc}>Relatório</TextBtn>
          </Btn>


          {ok && 
          <AreaRelatorio>
            <RelatorioTitle>Relatório Semestral</RelatorioTitle>
            <RelatorioItem>Aluno(a): {nome}</RelatorioItem>
            <RelatorioItem>Curso: {curso}</RelatorioItem>
            <RelatorioItem>Disciplina: {disciplina}</RelatorioItem>
            <RelatorioItem>Média: {media}</RelatorioItem>
            <RelatorioItem>Situação: {resultado}</RelatorioItem>
          </AreaRelatorio>
          }
          <BtnLista>
            <TextLista onPress={showlista}>Visualizar atividades</TextLista>
          </BtnLista>
          {okLista && lista.map((item, index)=>{
              return(
                <ItemLista key = {index} onPress ={()=>{}} underlayColor="FFF" activeOpacity={0.5}>
                 <>
                  <ItemText>{item.task}</ItemText>
                  <ItemCheck></ItemCheck>
                </>
                </ItemLista>
              )
            })
          }
      </Scroll>

    </Page>

  )
}
