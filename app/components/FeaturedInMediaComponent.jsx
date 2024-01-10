import React, { useRef, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FontAwesome5 } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const { width: viewportWidth } = Dimensions.get('window');

const mediaLogos = [
    { title: 'Instagram', iconName: 'instagram' },
    { title: 'Facebook', iconName: 'facebook-f' },
    { title: 'LinkedIn', iconName: 'linkedin-in' },
    // Add any other media you want to include
];

const FeaturedInMediaComponent = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    const renderItem = ({ item }) => (
        <StyledView className="items-center justify-center p-4">
            <FontAwesome5 name={item.iconName} size={48} color="#fff" />
            <StyledText className="text-white mt-2">{item.title}</StyledText>
        </StyledView>
    );

    return (
        <StyledView className="flex flex-col items-stretch px-5 bg-darkblue-900">
            <StyledView className="text-white text-center text-3xl font-bold leading-8 self-center w-full mt-5">
                <StyledText>Featured In.</StyledText>
            </StyledView>
            <Carousel
                ref={carouselRef}
                data={mediaLogos}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth * 0.8}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={mediaLogos.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'transparent', paddingTop: 10 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </StyledView>
    );
};

export default FeaturedInMediaComponent;
