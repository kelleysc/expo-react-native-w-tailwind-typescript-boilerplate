import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Footer = () => {
    return (
        <StyledView className="flex flex-col items-center p-4 bg-gray-800">
            {/* Logo and Company Name */}
            <StyledView className="flex flex-row items-center mb-4">
                <Icon name="cloud" size={24} color="blue" />
                <StyledText className="text-blue-500 text-lg font-bold ml-2">
                    CloudMate<Text className="text-white">.</Text>
                </StyledText>
            </StyledView>
            {/* Empower your cloud journey */}
            <StyledText className="text-white text-base leading-7 mb-4">
                Empower your cloud journey
            </StyledText>
            {/* Social Media Icons */}
            <StyledView className="flex flex-row justify-around w-full mb-6">
                <StyledTouchableOpacity onPress={() => console.log('LinkedIn pressed')}>
                    <Icon name="linkedin" size={24} color="#0077B5" />
                </StyledTouchableOpacity>
                <StyledTouchableOpacity onPress={() => console.log('Facebook pressed')}>
                    <Icon name="facebook-f" size={24} color="#3b5998" />
                </StyledTouchableOpacity>
                <StyledTouchableOpacity onPress={() => console.log('Twitter pressed')}>
                    <Icon name="twitter" size={24} color="#1DA1F2" />
                </StyledTouchableOpacity>
            </StyledView>
            {/* Quick Links */}
            <StyledView className="flex flex-row justify-around w-full mb-6">
                {/* First Column */}
                <StyledView>
                    <StyledText className="text-slate-400 text-sm">Dashboards</StyledText>
                    <StyledText className="text-slate-400 text-sm mt-2">Contact</StyledText>
                    <StyledText className="text-slate-400 text-sm mt-2">Resources</StyledText>
                </StyledView>
                {/* Second Column */}
                <StyledView>
                    <StyledText className="text-slate-400 text-sm">Account</StyledText>
                    <StyledText className="text-slate-400 text-sm mt-2">Company</StyledText>
                </StyledView>
            </StyledView>
            {/* Stay in the Cloud Loop */}
            <StyledText className="text-white text-lg font-bold mb-4">
                Stay in the Cloud Loop.
            </StyledText>
            {/* CTA with Email Button */}
            <StyledView className="flex flex-col items-center w-full mb-4">
                <StyledText className="text-slate-400 text-sm text-center mb-2">
                    Subscribe to receive updates on our services and insights into cloud strategies.
                </StyledText>
                <StyledView className="flex flex-row items-center border border-gray-700 bg-slate-800 rounded-full px-4 py-2 mb-2">
                    <StyledText className="text-slate-500 text-sm grow">
                        Enter your email address
                    </StyledText>
                    <StyledTouchableOpacity className="bg-blue-600 px-3 py-1 rounded-full">
                        <StyledText className="text-white text-sm">Send</StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
                {/* Terms and Privacy Policy */}
                <StyledView className="flex flex-row w-full justify-around">
                    <StyledText className="text-slate-500 text-sm">
                        Term of Service
                    </StyledText>
                    <StyledText className="text-slate-500 text-sm">
                        Privacy Policy
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};

export default Footer;
