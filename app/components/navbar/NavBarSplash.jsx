import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const NavBarSplash = () => {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);

    const navigateToScreen = (screenName) => {
        setMenuVisible(false);
        navigation.navigate(screenName);
    };

    return (
        <StyledView className="flex-row justify-between items-center px-4 py-2 bg-gray-900">
            <StyledTouchableOpacity onPress={() => navigateToScreen('Home')}>
                <MaterialCommunityIcons name="cloud" size={47} color="white" />
            </StyledTouchableOpacity>

            <StyledTouchableOpacity onPress={() => setMenuVisible(true)}>
                <MaterialCommunityIcons name="menu" size={24} color="white" />
            </StyledTouchableOpacity>

            {/* Modal for navigation menu */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={menuVisible}
                onRequestClose={() => setMenuVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                    <StyledView className="flex-1 justify-center items-center">
                        <StyledView className="mx-10 p-5 bg-white rounded-lg">
                            {/* List of navigation items */}
                            <NavigationItem icon="login" title="Login" onPress={() => navigateToScreen('LoginScreen')} />
                            <NavigationItem icon="account-plus-outline" title="Sign Up" onPress={() => navigateToScreen('SignUpScreen')} />
                            <NavigationItem icon="information-outline" title="About Us" onPress={() => navigateToScreen('AboutUsScreen')} />
                            <NavigationItem icon="help-circle-outline" title="Help & Support" onPress={() => navigateToScreen('HelpSupportScreen')} />
                            <StyledTouchableOpacity onPress={() => setMenuVisible(false)} className="flex-row items-center mt-5">
                                <MaterialCommunityIcons name="arrow-left" size={24} color="#2E6EA6" />
                                <StyledText className="ml-2 text-lg text-blue-600">Back</StyledText>
                            </StyledTouchableOpacity>
                        </StyledView>
                    </StyledView>
                </TouchableWithoutFeedback>
            </Modal>
        </StyledView>
    );
};

const NavigationItem = ({ icon, title, onPress }) => (
    <StyledTouchableOpacity onPress={onPress} className="flex-row items-center mb-2">
        <MaterialCommunityIcons name={icon} size={24} color="black" />
        <StyledText className="ml-2 text-lg">{title}</StyledText>
    </StyledTouchableOpacity>
);

export default NavBarSplash;
