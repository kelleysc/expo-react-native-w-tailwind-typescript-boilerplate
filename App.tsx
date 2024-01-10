import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { styled } from 'nativewind';
import HomeScreen from './app/screens/HomeScreen';
import DashboardOverview from './app/screens/DashboardOverview';
import CloudServicesManagement from './app/screens/CloudServicesManagement';
import AnalyticsAndReporting from './app/screens/AnalyticsAndReporting';
import AlertsAndNotifications from './app/screens/AlertsAndNotifications';
import CostManagementAndOptimization from './app/screens/CostManagementAndOptimization';
import SecurityAndCompliance from './app/screens/SecurityAndCompliance';
import UserAndAccessManagement from './app/screens/UserAndAccessManagement';
import SettingsAndIntegration from './app/screens/SettingsAndIntegration';
import LoginScreen from './app/screens/LoginScreen';

const Stack = createNativeStackNavigator();
const StyledView = styled(View);

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
    <StyledView className="flex-1 bg-gray-800">
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: 'CloudMate',
                        headerShown: false
                    }}
                />
                <Stack.Screen name="DashboardOverview" component={DashboardOverview} />
                <Stack.Screen name="CloudServicesManagement" component={CloudServicesManagement} />
                <Stack.Screen name="AnalyticsAndReporting" component={AnalyticsAndReporting} />
                <Stack.Screen name="AlertsAndNotifications" component={AlertsAndNotifications} />
                <Stack.Screen name="CostManagementAndOptimization" component={CostManagementAndOptimization} />
                <Stack.Screen name="SecurityAndCompliance" component={SecurityAndCompliance} />
                <Stack.Screen name="UserAndAccessManagement" component={UserAndAccessManagement} />
                <Stack.Screen name="SettingsAndIntegration" component={SettingsAndIntegration} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    </StyledView>
    );
};

export default App;
