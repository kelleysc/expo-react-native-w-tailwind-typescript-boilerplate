import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Button,
} from 'react-native';
import NavBar from '../components/navbar/NavBarSplash';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = async () => {
    console.log('login user')
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1E1E1E]">
        <NavBar navigation={navigation} />
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        >
            <View className="flex-1 bg-[#1E1E1E] items-center justify-center p-4">
            <View className="flex-1 w-full max-w-md bg-[#1E1E1E] items-center justify-center p-4">
                <Text className="text-2xl mb-5 text-white">Login</Text>
                <View className="w-full mb-4">
                    <Text className="text-lg text-white mb-1">Email</Text>
                    <TextInput
                        className="text-white h-10 w-full bg-[#2F2F2F] border border-transparent rounded px-2.5"
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View className="w-full mb-2">
                    <Text className="text-lg text-white mb-1">Password</Text>
                    <TextInput
                        className="text-white h-10 w-full bg-[#2F2F2F] border border-transparent rounded px-2.5"
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
                <View className="w-full">
                <Text className="text-lg text-white mb-2">{errorMessage}</Text>
                </View>
                <TouchableOpacity 
                    className="bg-[#1B87EA] p-2.5 rounded w-full items-center"
                    onPress={login}>
                <Text className="text-white">Login</Text>
                </TouchableOpacity>
                <Button
                    title='Forgot Password?'
                    onPress={() => navigation.navigate('ForgotPassword')}
                />
            </View>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}