import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styled } from 'nativewind';
import NavBar from '../components/navbar/NavBarSplash';
import Hero from '../components/Hero';

const StyledSafeArea = styled(SafeAreaView);
const StyledText = styled(Text);

const HomeScreen = () => {
  return (
    <StyledSafeArea className='flex bg-[#fff] items-center justify-center'>
      <NavBar />
      <Hero />
      <StyledText className='text-red-600 text-4xl text-center p-5'>Expo With TypeScript and Tailwind CSS</StyledText>
      {/* More content here */}
    </StyledSafeArea>
  );
};

export default HomeScreen;

