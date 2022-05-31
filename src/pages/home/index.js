import react from 'react'
import { View,Text,Button } from 'react-native'

export const Home = ({navigation}) => {
    return(
        <View>
           <Button title='Login' onPress={() => navigation.navigate('Login')}/>
           <Button title='listar' onPress={() => navigation.navigate('Listar')}/>
           <Button title='register' onPress={() => navigation.navigate('Register')}/>
           <Button title='endereco' onPress={() => navigation.navigate('Endereco')}/> 
        </View>
    )
}