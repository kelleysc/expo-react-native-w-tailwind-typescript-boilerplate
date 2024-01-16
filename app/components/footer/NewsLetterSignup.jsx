// NewsLetterSignup.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const NewsLetterSignup = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleSubmit = () => {
        console.log('Email submitted:', email);
        // Implement your actual submission logic here
    };

    return (
        <StyledView className="flex max-w-[346px] flex-col items-stretch px-5">
            <StyledView className="text-white text-center text-base font-bold leading-5 w-full">
                <StyledText>Stay in the Cloud Loop.</StyledText>
            </StyledView>
            <StyledView className="flex w-full flex-col items-stretch mt-6 pl-5">
                <StyledView className="text-slate-400 text-sm leading-6">
                    <StyledText>
                        Subscribe to receive updates on our services and insights into cloud strategies.
                    </StyledText>
                </StyledView>
                <StyledView className="flex-row items-center justify-between bg-slate-800 bg-opacity-50 mt-5 pl-6 pr-2 py-2 rounded-full border border-[#34384C]">
                    <StyledTextInput
                        placeholder="Enter your email address"
                        placeholderTextColor="#9ca3af"
                        value={email}
                        onChangeText={handleEmailChange}
                        className="flex-1 text-sm text-slate-500"
                    />
                    <StyledTouchableOpacity
                        onPress={handleSubmit}
                        className="bg-cyan-700 px-4 py-2 rounded-full"
                    >
                        <StyledText className="text-white text-sm font-black">Send</StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};

export default NewsLetterSignup;
