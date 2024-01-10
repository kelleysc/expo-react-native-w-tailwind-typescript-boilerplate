import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const FeatureItem = ({ icon, title, description }) => {
    return (
        <StyledView className="flex-row items-center my-4">
            <StyledView className="rounded-full bg-blue-900 p-3 mr-4 justify-center items-center">
                <MaterialCommunityIcons name={icon} size={32} color="#4F8EF7" />
            </StyledView>
            <StyledView className="flex-1">
                <StyledText className="text-white text-lg font-bold">{title}</StyledText>
                <StyledText className="text-gray-300">{description}</StyledText>
            </StyledView>
        </StyledView>
    );
};

const FeaturesSection = () => {
    return (
        <StyledView className="m-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <StyledText className="text-blue-800 text-3xl font-bold mb-4 text-center">
                Chart Your Cloud Course - Key Features to Navigate, Innovate, and Thrive
            </StyledText>
            <StyledText className="text-gray-200 text-lg text-center mb-6">
                Discover essential tools that simplify cloud management, spark innovation, and elevate your business operations.
            </StyledText>
            
            <FeatureItem
                icon="navigation"
                title="Navigate Effortlessly:"
                description="Master the cloud landscape with our intuitive management tools."
            />
            <FeatureItem
                icon="lightbulb-on-outline"
                title="Innovate Constantly:"
                description="Leverage our insights to fuel your innovation and stay ahead."
            />
            <FeatureItem
                icon="chart-bubble"
                title="Thrive Endlessly:"
                description="Watch your business grow with our comprehensive cloud solutions."
            />
            
            <StyledTouchableOpacity className="flex-row items-center bg-blue-900 p-3 rounded-lg mt-4 justify-center">
                <StyledText className="text-gray-200 flex-grow">
                    Get real-time analytics on your cloud's performance
                </StyledText>
                <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
            </StyledTouchableOpacity>
        </StyledView>
    );
};

export default FeaturesSection;
