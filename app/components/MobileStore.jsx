import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styled } from 'nativewind';
import VideoHomeScreen from './VideoHomeScreen';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const MobileStore = () => {
    return (
        <StyledView className="flex flex-col items-center justify-center px-5 bg-darkblue-900 rounded-lg my-5">
            <StyledText className="text-white text-center text-3xl font-bold my-5">
                Optimize Your Cloud Operations Anywhere.
            </StyledText>
            <StyledText className="text-gray-200 text-center text-sm my-3">
                A robust cloud management platform at your fingertips. Manage, monitor,
                and secure your cloud infrastructure on the move.
            </StyledText>

            <VideoHomeScreen /> {/* Here is your imported video component */}

            <StyledText className="text-white text-center text-sm my-3">
                Get the CloudMate Management App Now!
            </StyledText>
            <StyledTouchableOpacity className="flex-row items-center justify-center bg-blue-700 px-5 py-3 rounded-full my-2">
                <AntDesign name="googleplay" size={24} color="white" />
                <StyledText className="text-white text-lg ml-2">
                    GET IT ON Google Play
                </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="flex-row items-center justify-center bg-black px-5 py-3 rounded-full">
                <AntDesign name="appstore-o" size={24} color="white" />
                <StyledText className="text-white text-lg ml-2">
                    Download on the App Store
                </StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    );
};

export default MobileStore;
