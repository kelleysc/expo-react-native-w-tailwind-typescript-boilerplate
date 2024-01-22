// HomeScreen.jsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import NavBar from '../components/navbar/NavBarLoggedIn';
import Hero from '../components/Hero';
import ServiceComparisonChart from '../components/ServiceComparisonChart';
import FeaturesSection from '../components/FeaturesSection';
import CoreValuesComponent from '../components/CoreValuesSection';
import ImpactStatisticsComponent from '../components/ImpactStatisticsComponent';
import FeaturedInMediaComponent from '../components/FeaturedInMediaComponent';
import Footer from '../components/Footer';
import CloudOperationsAd from '../components/CloudOperationsAd';
import SpecialOfferCTA from '../components/SpecialOfferCTA';

const StyledSafeArea = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);

const HomeScreen = ({ navigation }) => {
  return (
    <StyledSafeArea className='bg-gray-700'>
      <StyledScrollView className="pt-5">
        <NavBar navigation={navigation} />
        <Hero />
        <ServiceComparisonChart />
        <FeaturesSection />
        <CoreValuesComponent />
        <ImpactStatisticsComponent />
        <FeaturedInMediaComponent />
        <CloudOperationsAd />
        <SpecialOfferCTA />
        <Footer />
        {/* Additional content */}
      </StyledScrollView>
    </StyledSafeArea>
  );
};

export default HomeScreen;
