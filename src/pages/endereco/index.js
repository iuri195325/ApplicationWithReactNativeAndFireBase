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


export const Endereco = ({navigation}) => {
    const userCollectionRef = collection(db, "users");

    const[CEP, setCep]=useState('')
    const[Estado, setEstado]=useState('')
    const[Cidade, setCidade]=useState('')
    const[Complemento, setComplemento]=useState('')
    const[Bairro, setBairro]=useState('')
    const[Rua, setRua]=useState('')
    const[Numero, setNumero]=useState('')
    
    
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
              onToggleSnackBar();
              navigation.navigate('Home');
              
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
    
    return(
        <View>
            <View>
                <Text>CEP</Text>
                <TextInput
                value={CEP}
                onChangeText={setCep}
                />
                <Button title='CPF'/>
            </View>
            <View>
            <Text>Estado</Text>
            <TextInput
                placeholder='MG..'
                value={Estado}
                onChangeText={setEstado}
            />
            <Text>Cidade</Text>
            <TextInput
                placeholder='São paulo..'
                value={Cidade}
                onChangeText={setCidade}
            />
            <Text>Complemento</Text>
            <TextInput
                placeholder='Posto JR..'
                value={Complemento}
                onChangeText={setComplemento}
            />
            <Text>Bairro</Text>
            <TextInput
                placeholder='Santa fé..'
                value={Bairro}
                onChangeText={setBairro}
            />
            <Text>Rua</Text>
            <TextInput
                placeholder='Ibía..'
                value={Rua}
                onChangeText={setRua}
            />
            <Text>Numero</Text>
            <TextInput
                placeholder='6..'
                value={Numero}
                onChangeText={setNumero}
            />
            </View>
            <Button 
            onPress={() => criarDado()}
            
            title='Adicionar'/>
        </View>
    )
}