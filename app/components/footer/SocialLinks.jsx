// SocialLinks.jsx
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

const socialMediaIcons = [
    { name: 'linkedin', color: '#0077B5', url: 'https://www.linkedin.com' },
    { name: 'facebook-f', color: '#3b5998', url: 'https://www.facebook.com' },
    { name: 'twitter', color: '#1DA1F2', url: 'https://www.twitter.com' },
    // Add other social media icons here
];

const SocialLinks = () => {
    const openURL = (url) => {
        // Logic to open URL, e.g., using Linking from 'react-native'
    };

    return (
        <StyledView className="flex flex-row justify-center mt-5">
            {socialMediaIcons.map((icon, index) => (
                <StyledTouchableOpacity
                    key={index}
                    className="mx-2"
                    onPress={() => openURL(icon.url)}
                >
                    <FontAwesome5 name={icon.name} size={24} color={icon.color} />
                </StyledTouchableOpacity>
            ))}
        </StyledView>
    );
};

export default SocialLinks;
