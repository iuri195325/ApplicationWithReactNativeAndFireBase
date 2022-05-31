import { StyleSheet, Text, View } from 'react-native';
export const styles = StyleSheet.create({

    container: {
        width:"100%",
        height:"100%",
        bottom: 0,
        backgroundColor:"#7575ff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
    form: {
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color:"#FFF",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: 'bold'

    },
    input: {
        width:"90%",
        borderRadius: 50,
        backgroundColor:"#FFF",
        height: 40,
        margin: 12,
        paddingLeft: 10,
         
    },
    buttonEntrar: {
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FFF",
        paddingTop: 14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },

  });