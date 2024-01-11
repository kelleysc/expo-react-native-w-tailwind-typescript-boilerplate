import React, { useRef, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FontAwesome5 } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const { width: viewportWidth } = Dimensions.get('window');

const mediaLogos = [
    { title: 'Instagram', iconName: 'instagram', color: '#E1306C' },
    { title: 'Facebook', iconName: 'facebook-f', color: '#3b5998' },
    { title: 'LinkedIn', iconName: 'linkedin-in', color: '#0077B5' },
    // Add any other media you want to include
];

const FeaturedInMediaComponent = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    const renderItem = ({ item }) => (
        <StyledView className="items-center justify-center w-full p-6 bg-darkblue-900 rounded-lg">
            <FontAwesome5 name={item.iconName} size={36} color={item.color} />
            <StyledText className="text-white mt-2">{item.title}</StyledText>
        </StyledView>
    );

    return (
        <StyledView className="flex flex-col items-stretch px-5 my-5 bg-[#0f172a]">
            <StyledView className="mb-4">
                <StyledText className="text-2xl text-white text-center font-bold">Featured In.</StyledText>
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
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 6,
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
