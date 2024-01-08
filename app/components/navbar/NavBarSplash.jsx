// NavBarSplash.jsx
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled(View);

const NavBarSplash = () => {
    const navigation = useNavigation();

    return (
        <StyledView className="flex-row justify-between space-x-2 items-center px-4 py-2 bg-gray-900">
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <MaterialIcon name="cloud" size={47} color="white" />
            </TouchableOpacity>
            <FontAwesomeIcon name="bars" size={24} color="white" />
        </StyledView>
    );
};

export default NavBarSplash;
