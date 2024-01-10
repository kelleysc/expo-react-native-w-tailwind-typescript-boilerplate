import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Hero = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleSubmit = () => {
        console.log('Email submitted:', email);
        // Implement your actual submission logic here
    };

    return (
        <StyledView className="flex flex-col items-center justify-center px-5 bg-gray-800">
            <StatusBar barStyle="light-content" backgroundColor="transparent" />
            <Text className="text-blue-800 text-center font-poppins text-[34px] font-bold leading-[110%] mt-5">
                Your Cloud, Our Expertise - Navigate, Innovate, Thrive
            </Text>
            <Text className="text-gray-200 text-center font-inter text-base mt-7 pb-2">
                Begin your journey with Cloud Mate - the compass for your cloud strategy.
            </Text>
            <StyledView className="w-[80%] justify-center pb-2">
                <StyledTextInput
                    placeholder="Enter your email address"
                    placeholderTextColor="#9ca3af"
                    value={email}
                    onChangeText={handleEmailChange}
                    className="bg-white mt-2 px-4 py-3 rounded-full text-lg w-full"
                />
                <StyledTouchableOpacity
                    onPress={handleSubmit}
                    accessibilityLabel="Try for Free"
                    className="bg-cyan-700 mt-2 px-4 py-3 w-full rounded-full"
                >
                    <Text className="text-white font-bold text-lg text-center">Try for Free</Text>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
};

export default Hero;
