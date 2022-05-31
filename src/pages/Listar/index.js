import react from 'react'
import { View,Text } from 'react-native'
import { db } from '../../../firebase'
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDocs,
  } from "firebase/firestore";
import { useState,useEffect } from 'react';
import { Divider } from 'react-native-paper';
import { styles } from './sytles';

export const Listar = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      }, []);
        return(
            <View style={styles.fundo}>
                {users.map((user) => {
                    return(
                        <div>
                        <View style={styles.fundo2}>
                            <Text style={styles.text}>Endereços</Text>
                            <Text style={styles.text}>CEP: {user.Bairro}</Text>
                            <Text style={styles.text}>Estado: {user.Estado}</Text>
                            <Text style={styles.text}>Cidade: {user.Cidade}</Text>
                            <Text style={styles.text}>Complemento: {user.Complemento}</Text>
                            <Text style={styles.text}>Bairro: {user.Bairro}</Text>
                            <Text style={styles.text}>Rua: {user.Rua}</Text>
                            <Text style={styles.text}>Numero: {user.Numero}</Text>
                        </View>    
                      </div>
                    )
                   
                })}
              
            </View>
   );    
}