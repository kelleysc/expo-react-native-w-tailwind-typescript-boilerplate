import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavBarCombined = ({ isLoggedIn }) => {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);

    const navigateToScreen = (screenName) => {
        setMenuVisible(false);
        navigation.navigate(screenName);
    };

    return (
        <View className="flex-row justify-between items-center px-4 py-2 bg-gray-900">
            <TouchableOpacity onPress={() => navigateToScreen('Home')}>
                <MaterialIcon name="cloud" size={47} color="white" />
            </TouchableOpacity>

            {isLoggedIn ? (
                // Render for Logged In Users
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => {/* Navigate to Settings */ }}>
                        <Ionicons name="settings-outline" size={24} color="white" className="mx-2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {/* Navigate to Notifications */ }}>
                        <Ionicons name="notifications-outline" size={24} color="white" className="mx-2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {/* Navigate to User Profile */ }}>
                        <FontAwesomeIcon name="user-circle" size={24} color="white" className="mx-2" />
                    </TouchableOpacity>
                </View>
            ) : (
                // Render for Logged Out Users
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    <FontAwesomeIcon name="bars" size={24} color="white" />
                </TouchableOpacity>
            )}

            {/* Modal for navigation menu */}
            {!isLoggedIn && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={menuVisible}
                    onRequestClose={() => setMenuVisible(false)}
                >
                    <View className="mt-20 mx-10 p-5 bg-white rounded-lg">
                        <Text onPress={() => navigateToScreen('DashboardOverview')} className="text-lg mb-2">Dashboard Overview</Text>
                        {/* Add other navigation items */}
                        <Text onPress={() => setMenuVisible(false)} className="text-lg text-red-500 mt-5">Close Menu</Text>
                    </View>
                </Modal>
            )}
        </View>
    );
};

export default NavBarCombined;
