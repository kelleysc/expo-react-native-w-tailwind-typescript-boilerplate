import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { CloudIcon, LockClosedIcon, DeviceMobileIcon } from 'react-native-heroicons/outline';

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeFeatures = () => {
    return (
        <StyledView className="flex flex-col items-center justify-center px-5 bg-gray-600">
            {/* Feature 1 */}
            <StyledView className="flex flex-row items-center justify-center w-full px-4 py-3 mt-2 bg-white rounded-full">
                <CloudIcon size={30} color="#4F8EF7" />
                <StyledView className="ml-2">
                    <StyledText className="text-base font-bold text-gray-800">
                        Navigate Effortlessly
                    </StyledText>
                    <StyledText className="text-gray-600">
                        Master the cloud landscape with our intuitive management tools.
                    </StyledText>
                </StyledView>
            </StyledView>

            {/* Feature 2 */}
            <StyledView className="flex flex-row items-center justify-center w-full px-4 py-3 mt-2 bg-white rounded-full">
                <LockClosedIcon size={30} color="#4F8EF7" />
                <StyledView className="ml-2">
                    <StyledText className="text-base font-bold text-gray-800">
                        Innovate Constantly
                    </StyledText>
                    <StyledText className="text-gray-600">
                        Leverage our insights to fuel your innovation and stay ahead.
                    </StyledText>
                </StyledView>
            </StyledView>

            {/* Feature 3 */}
            <StyledView className="flex flex-row items-center justify-center w-full px-4 py-3 mt-2 bg-white rounded-full">
                <DeviceMobileIcon size={30} color="#4F8EF7" />
                <StyledView className="ml-2">
                    <StyledText className="text-base font-bold text-gray-800">
                        Thrive Endlessly
                    </StyledText>
                    <StyledText className="text-gray-600">
                        Watch your business grow with our comprehensive cloud solutions.
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};

export default HomeFeatures;
