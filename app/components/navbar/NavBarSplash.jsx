import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled(View);

const NavBar = () => {
    return (
        <StyledView className="w-full flex-row justify-between items-center px-5 py-3 bg-gray-900">
            <MaterialIcon name="cloud" size={47} color="white" />
            <FontAwesomeIcon name="bars" size={24} color="white" />
        </StyledView>
    );
};

export default NavBar;
