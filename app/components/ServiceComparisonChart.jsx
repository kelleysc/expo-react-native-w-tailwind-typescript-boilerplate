import React from 'react';
import { View, Text, Image } from 'react-native';
import { styled } from 'nativewind';

// Mock imports for the logos - replace these with actual paths or URLs
const ec2Logo = require('../assets/images/CloudMateLogo.svg');
const gcpLogo = require('../assets/images/CloudMateLogo.svg');
const azureStorageLogo = require('../assets/images/CloudMateLogo.svg');
const awsNetworkingLogo = require('../assets/images/CloudMateLogo.svg');
const azureAILogo = require('../assets/images/CloudMateLogo.svg');

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const services = [
    { name: 'EC2', metric: '0.40%/100%', price: 'USD 0.029/hr', logo: ec2Logo },
    { name: 'GCP - Database', metric: 'Storage 70%/100TB', price: 'USD 0.035/hr', logo: gcpLogo },
    { name: 'Azure - Storage', metric: 'Reads 1500/s', price: 'USD 0.018/hr', logo: azureStorageLogo },
    { name: 'AWS - Networking', metric: 'Data Transfer Models 5/5 Running', price: 'USD 0.12/GB', logo: awsNetworkingLogo },
    { name: 'Azure - AI', metric: 'Machine Learning Models 5/5 Running', price: 'USD 0.10/hr', logo: azureAILogo }
];

const ServiceItem = ({ name, metric, price, logo }) => {
    return (
        <StyledView className="flex-row items-center bg-basedark-transparent p-3 rounded-lg mb-3">
            <StyledImage source={logo} style={{ width: 24, height: 24, marginRight: 8 }} />
            <StyledView className="flex-1">
                <StyledText className="text-white font-bold">{name}</StyledText>
                <StyledText className="text-accent">{metric}</StyledText>
            </StyledView>
            <StyledText className="text-green-400">{price}</StyledText>
        </StyledView>
    );
};

const ServiceComparisonChart = () => {
    return (
        <StyledView className="m-4 p-4 bg-darkblue-900 rounded-lg shadow-lg bg-gray-600">
            {services.map((service, index) => (
                <ServiceItem
                    key={index}
                    name={service.name}
                    metric={service.metric}
                    price={service.price}
                    logo={service.logo}
                />
            ))}
        </StyledView>
    );
};

export default ServiceComparisonChart;
