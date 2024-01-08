import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Hero = (props) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleSubmit = () => {
        console.log('Email submitted:', email);
        // TODO: Implement your actual submission logic here (e.g., send email, navigate to a new screen)
    };

    return (
        <StyledView className="min-h-screen flex flex-col items-center justify-center px-5 bg-gray-900">
            <StatusBar barStyle="light-content" backgroundColor="transparent" />
            <Text className="text-white text-center font-poppins text-[34px] font-bold leading-[110%] mt-10 flex-wrap">
                Your Cloud, Our Expertise - Navigate, Innovate, Thrive
            </Text>
            <Text className="w-full text-gray-200 text-center font-inter text-base font-normal mt-7 flex-wrap">
                Begin your journey with Cloud Mate - the compass for your cloud strategy.
            </Text>
            <StyledTextInput
                placeholder="Enter your email address"
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={handleEmailChange}
                className="w-full flex-auto flex-wrap text-white mt-12 px-4 py-3 rounded-full border border-gray-700 bg-gray-800 bg-opacity-50"
            />
            <StyledView className="flex flex-wrap justify-center">
                <StyledTouchableOpacity
                    onPress={handleSubmit}
                    accessibilityLabel="Embark Now"
                    className="w-full bg-cyan-700 mt-2 px-4 py-3 rounded-full"
                >
                    <Text className="text-white text-base font-black text-center">Embark Now</Text>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
};

export default Hero;