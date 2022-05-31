import react from 'react'
import { View,Text,Button } from 'react-native'

export const Home = ({navigation}) => {
    return(
        <View>
           <Button title='listar' onPress={() => navigation.navigate('Listar')}/>
           <Button title='endereco' onPress={() => navigation.navigate('Endereco')}/> 
        </View>
    )
}