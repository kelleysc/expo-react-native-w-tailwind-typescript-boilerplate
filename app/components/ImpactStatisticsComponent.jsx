import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const ImpactStatisticsComponent = () => {
    return (
        <StyledView className="bg-slate-800 bg-opacity-75 px-5 py-8 items-center">
            <StyledText className="text-cyan-500 text-3xl font-bold text-center mb-4 font-poppins">
                Impact Statistics
            </StyledText>
            <StyledText className="text-gray-300 text-center text-sm mb-8 font-poppins">
                Unlock new possibilities with CloudMate, empowering businesses to excel and innovate in the cloud.
            </StyledText>

            {/* Multi-Cloud Stat */}
            <StyledText className="text-amber-500 text-4xl font-medium text-center mb-2 font-poppins">
                92%
            </StyledText>
            <StyledText className="text-gray-300 text-center text-base mb-6 font-poppins">
                of organizations have a multi-cloud strategy to ensure service availability and disaster recovery
            </StyledText>

            {/* Hundreds of Global Partners Stat */}
            <StyledText className="text-blue-600 text-4xl font-medium text-center mb-2 font-poppins">
                By 2025
            </StyledText>
            <StyledText className="text-gray-300 text-center text-base mb-6 font-poppins">
                expected that over 100 zettabytes of data will be stored in the cloud
            </StyledText>

            {/* Thousands of Managed Cloud Resources Stat */}
            <StyledText className="text-green-600 text-4xl font-medium text-center mb-2 font-poppins">
                $309.6 billion
            </StyledText>
            <StyledText className="text-gray-300 text-center text-base font-poppins">
                AI spending by 2026
            </StyledText>

            {/* Add any additional statistics you want to display */}
        </StyledView>
    );
};

export default ImpactStatisticsComponent;
