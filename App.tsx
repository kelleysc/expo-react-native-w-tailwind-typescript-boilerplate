import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    SplashScreen.preventAutoHideAsync(); // Prevent auto-hiding splash screen

    // Asynchronously load fonts
    async function loadFonts() {
        await Font.loadAsync({
            'Poppins': require('./app/assets/fonts/Poppins-Regular.ttf'),
            // Additional fonts can be loaded here
        });
    }

    // Load fonts when the component mounts
    useEffect(() => {
        loadFonts().then(() => {
            setFontsLoaded(true);
            SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
        });
    }, []);

    if (!fontsLoaded) {
        return null; // Return null while fonts are loading
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
