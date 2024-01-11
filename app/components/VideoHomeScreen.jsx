import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import { styled } from 'nativewind';

const StyledVideo = styled(Video);

const VideoHomeScreen = () => {
    return (
        <View className="flex-1 items-center justify-center bg-darkblue-900">
            <StyledVideo
                source={require('../assets/videos/HomeScreenCloudMate.mp4')}
                className="h-40 w-full"
                resizeMode="contain"
                controls
            />
        </View>
    );
};

export default VideoHomeScreen;
