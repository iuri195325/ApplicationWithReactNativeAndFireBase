import react from 'react'
import { View,Text,TextInput } from 'react-native'
import { Button } from 'react-native'
import { getFirestore,
        collection,
        addDoc,
        doc,
        deleteDoc,
        getDocs,
 } from "firebase/firestore"
import { db } from '../../../firebase'
import { useState } from 'react'
import axios from 'axios'
import { styles } from './sytle'

export const Endereco = ({navigation}) => {
    const userCollectionRef = collection(db, "users");

    const[CEP, setCep]=useState('')
    const[Estado, setEstado]=useState('')
    const[Cidade, setCidade]=useState('')
    const[Complemento, setComplemento]=useState('')
    const[Bairro, setBairro]=useState('')
    const[Rua, setRua]=useState('')
    const[Numero, setNumero]=useState('')
    const[data, setData] =useState('');

    const complete = () => {
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
            setEstado(json.uf)
            setCidade(json.localidade)
            setBairro(json.bairro)
            setComplemento(json.complemento)
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
        async function criarDado() {
            try {
              const user = await addDoc(collection(db, "users"), {
                CEP,
                Estado,
                Cidade,
                Bairro,
                Complemento,
                Rua,
                Numero,
              });
              navigation.navigate('Home');
              
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
    
    return(
        <View style={styles.fundo}>
            <View>
                <Text style={styles.text}>CEP</Text>
                <TextInput
                 placeholder='3881000'
                style={styles.input}
                value={CEP}
                onChangeText={setCep}
                />
                <Button title='Completar'
                onPress={() => complete()}/>
            <Text style={styles.text}>Estado</Text>
            <TextInput
                style={styles.input}
                placeholder='MG..'
                
                onChangeText={setEstado}
                value={data.uf}
            />
            <Text style={styles.text}>Cidade</Text>
            <TextInput
                style={styles.input}
                placeholder='São paulo..'
                value={data.localidade}
                onChangeText={setCidade}
            />
            <Text style={styles.text}>Complemento</Text>
            <TextInput
                value={data.complemento}
                onChangeText={setComplemento}
                style={styles.input}
                placeholder='Posto JR..'
                
            />
            <Text style={styles.text}>Bairro</Text>
            <TextInput
                style={styles.input}
                placeholder='Santa fé..'
                value={data.bairro}
                onChangeText={setBairro}
            />
            <Text style={styles.text}>Rua</Text>
            <TextInput
                style={styles.input}
                placeholder='Ibía..'
                value={Rua}
                onChangeText={setRua}
            />
            <Text style={styles.text}>Numero</Text>
            <TextInput
                style={styles.input}
                placeholder='6..'
                value={Numero}
                onChangeText={setNumero}
            />
            <Button 
            onPress={() => criarDado()}
            
            title='Adicionar'/>
            </View>
            
        </View>
    )
}