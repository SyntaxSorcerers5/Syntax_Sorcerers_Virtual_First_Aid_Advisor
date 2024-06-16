import React, { useState } from 'react';
import { Alert, Button, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Welcome from '../components/welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';


function Login({navigation}): React.JSX.Element {

    function OnUsernameChanged(changedUsername) {
        setUsername(changedUsername)

    }
    function OnPassswordChanged(changedPassword) {
        setPassword(changedPassword)

    }
    const [username, setUsername] = useState()
    const [Password, setPassword] = useState()


    return (
    
        <ScrollView>
            <View style={{ backgroundColor: 'white' }} >
                <Welcome />
                <TextInput
                    style={{
                        backgroundColor: '#FFFFC6',
                        color: '#000',
                        width: 390,
                        height: 50,
                        marginTop: 50,
                        borderRadius: 20,
                        paddingLeft: 10,
                        marginLeft: 20
                    }}

                    onChangeText={OnUsernameChanged}
                    placeholder='Username'
                    placeholderTextColor={'#444'}

                />

                <TextInput style={{
                    backgroundColor: '#FFFFC6',
                    color: '#000',
                    width: 390,
                    height: 50,
                    marginTop: 50,
                    borderRadius: 20,
                    paddingLeft: 10,
                    marginLeft: 20
                }}

                    onChangeText={OnPassswordChanged}
                    placeholder='Password'
                    placeholderTextColor={'#444'}
                />

     <Pressable style={{ marginLeft: 80, marginRight: 80 }} onPress={() => navigation.navigate('Option selection')}>
                    <Text style={{
                        backgroundColor: '#D21E5F',
                        color: 'white',
                        fontSize: 70,
                        alignItems: 'center',
                        borderRadius: 40,
                        paddingLeft: 30,
                        marginTop: 80
                    }}> Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('RegAs')}>
                    <Text style={{
                        backgroundColor: 'white',
                        color: '#8C05D3',
                        fontSize: 30,
                        alignItems: 'center',
                        marginLeft: 50,
                        marginTop: 80
                    }}> New user? Register first</Text>
                </Pressable>

                <View style={{ backgroundColor: 'white', height: 100 }} />
            </View>
        </ScrollView>

    );
}


export default Login;
