import react from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import { styles } from './sytle'
import { useState } from 'react'
import { auth } from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
export const Login = ({navigation}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    async function logar(){
        await signInWithEmailAndPassword(auth, email, password)
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
                    placeholder='Eamil..'
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
                     onPress={()=>logar()}
                    style={styles.buttonEntrar}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}