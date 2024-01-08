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
        <StyledView className="flex flex-col items-center justify-center pb-3 px-5 bg-gray-600">
            <StatusBar barStyle="light-content" backgroundColor="transparent" />
            <Text className="text-white text-center font-poppins text-[34px] font-bold leading-[110%] mt-5 flex-wrap">
                Your Cloud, Our Expertise - Navigate, Innovate, Thrive
            </Text>
            <Text className="flex-row flex-wrap text-gray-200 text-center font-inter text-base font-normal mt-7 pb-2 ">
                Begin your journey with Cloud Mate - the compass for your cloud strategy.
            </Text>
            <StyledView className="w-[80%] flex-row flex-wrap justify-center pb-2">
            <StyledTextInput
                placeholder="Enter your email address"
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={handleEmailChange}
        className="w-full flex-row flex-center bg-white mt-2  px-4 py-3 rounded-full"
            />
        
                <StyledTouchableOpacity
                    onPress={handleSubmit}
                    accessibilityLabel="Embark Now"
        className="w-full flex-row flex-center bg-cyan-700 mt-2 px-4 py-3 rounded-full"
                >
                    <Text className="flex-row flex-center text-white text-base font-black text-center">Embark Now</Text>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
};

export default Hero;