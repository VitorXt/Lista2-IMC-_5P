import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { StackTypes } from '../../routes/stack';

const Login = () => {

    const navigation = useNavigation<StackTypes>();

    return (
        <View>
            <Text>Estou no Login</Text>
            <Button title='Ir para Home'
            onPress= {() => { navigation.navigate('Home');}}
            />
        </View>
    );
}

export default Login;