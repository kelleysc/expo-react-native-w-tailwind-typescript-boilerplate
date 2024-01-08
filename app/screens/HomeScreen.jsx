// HomeScreen.jsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import NavBar from '../components/navbar/NavBarSplash';
import Hero from '../components/Hero';
import ServiceComparisonChart from '../components/ServiceComparisonChart';


const StyledSafeArea = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);

const HomeScreen = ({ navigation }) => {
  return (
    <StyledSafeArea className='bg-gray-100'>
      <StyledScrollView className="pt-5">
        <NavBar navigation={navigation} />
        <Hero />
        <ServiceComparisonChart />
        {/* Additional content */}
      </StyledScrollView>
    </StyledSafeArea>
  );
};

export default HomeScreen;
