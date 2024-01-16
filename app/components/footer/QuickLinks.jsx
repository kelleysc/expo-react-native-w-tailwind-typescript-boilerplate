// QuickLinks.jsx
import React from "react";
import { View, Text } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const QuickLinks = () => {
    return (
        <StyledView className="flex max-w-[212px] flex-col items-stretch px-5">
            <StyledView className="bg-blue-800 p-3 rounded-t-lg">
                <StyledText className="text-white text-base font-bold leading-5">Quick Links.</StyledText>
            </StyledView>
            <StyledView className="flex-row justify-between mt-5 bg-gray-700 p-3 rounded-b-lg">
                <StyledView className="flex-1">
                    <StyledText className="text-gray-300 text-sm mt-4">Dashboards</StyledText>
                    <StyledText className="text-gray-300 text-sm mt-4">Contact</StyledText>
                    <StyledText className="text-gray-300 text-sm mt-4">Resources</StyledText>
                </StyledView>
                <StyledView className="flex-1">
                    <StyledText className="text-gray-300 text-sm">Account</StyledText>
                    <StyledText className="text-gray-300 text-sm mt-4">Company</StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};

export default QuickLinks;
