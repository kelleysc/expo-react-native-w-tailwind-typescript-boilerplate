import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // Asynchronously load fonts
    async function loadFonts() {
        await Font.loadAsync({
            'Poppins': require('./app/assets/fonts/Poppins-Regular.ttf'),
            // 'Poppins-Medium': require('./app/assets/fonts/Poppins-Medium.ttf'),
            // 'Poppins-Bold': require('./app/assets/fonts/Poppins-Bold.ttf'),
            // 'Poppins-Italic': require('./app/assets/fonts/Poppins-Italic.ttf'),
        });
    }

    // Load fonts when the component mounts
    useEffect(() => {
        loadFonts().then(() => setFontsLoaded(true));
    }, []);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: 'CloudMate',
                        headerShown: true
                    }}
                />
                {/* Add other screens here */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
