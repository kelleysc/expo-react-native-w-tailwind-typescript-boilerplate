import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const videoSource = require('../../assets/videos/HomeScreenCloudMate.mp4');


const MobileStore = () => {
    return (
        <StyledView className="flex flex-col items-center justify-center px-5 bg-darkblue-900 rounded-lg my-5">
            <StyledText className="text-white text-center text-3xl font-bold my-5">
                Optimize Your Cloud Operations Anywhere.
            </StyledText>
            <StyledText className="text-gray-400 text-center text-sm my-3">
                A robust cloud management platform at your fingertips. Manage, monitor,
                and secure your cloud infrastructure on the move.
            </StyledText>
            <View style={{ borderRadius: 20, overflow: 'hidden', width: '100%', height: 200, marginVertical: 10 }}>
                <Video
                    source={videoSource}
                    resizeMode="contain"
                    style={{ width: '100%', height: '100%' }}
                    shouldPlay
                    isLooping
                    isMuted
                />
            </View>
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
