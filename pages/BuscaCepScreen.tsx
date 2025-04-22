import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


type Endereco = {
 cep: string,
 logradouro: string,
 complemento: string,
 unidade: string,
 bairro: string,
 localidade: string,
 uf: string,
 estado: string,
 regiao: string,
 ibge: string,
 gia: string,
 ddd: string,
 siafi: string
}


export default function App() {
 const [cep, setCEP] = useState('');
 const [endereco, setEndereco] = useState<Endereco>();
 const [buscado, setBuscado] = useState(false);
 async function buscarCep(){
     let r = await fetch('https://viacep.com.br/ws/'+cep+'/json/')
     let dados = await r.json();
     setEndereco(dados);
 }


 function mostrarDados(){
   if(endereco != null){
     let ret : any = [];
     Object.keys(endereco).forEach((k:string) => {
       const key = k as keyof Endereco;
       ret.push(<Text key={key}>{endereco[key]}</Text>);
     });


     return ret;
   }else{
     return <Text>Não há dados!</Text>
   }
 }


 return (
   <View style={styles.container}>
     <Text>Buscar seu CEP!</Text>
     <TextInput style={styles.input} value={cep} onChangeText={setCEP}/>
     <Button title='Buscar' onPress={buscarCep}/>
     {mostrarDados()}
     <StatusBar style="auto" />
   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#899ad5',
   alignItems: 'center',
   justifyContent: 'center',
 },
 input: {
   borderWidth: 1,
   color: '#6074b8',
 },
});