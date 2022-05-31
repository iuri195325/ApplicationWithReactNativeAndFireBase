import react from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { styles } from './sytle'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../../firebase";

export const Register = ({navigation}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    async function create(){
        await createUserWithEmailAndPassword(auth, email, password)
        .then(e => {
            console.log("deu certo !!");
            navigation.navigate('Home')
        })
    }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder='Email..'
                    placeholderTextColor='#000'
                />
                <Text style={styles.formLabel}>password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder='password..'
                    placeholderTextColor='#000'
                />
                <TouchableOpacity 
                    onPress={()=>create()}
                    style={styles.buttonEntrar}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}