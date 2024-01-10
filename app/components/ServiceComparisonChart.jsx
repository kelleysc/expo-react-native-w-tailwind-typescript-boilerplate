import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledIcon = styled(MaterialCommunityIcons);

// Define logos using icons
const ec2Logo = "cloud";
const gcpLogo = "google-cloud";
const azureStorageLogo = "database";
const awsNetworkingLogo = "network";
const azureAILogo = "robot";

const services = [
    { name: 'EC2', metric: '0.40%/100%', price: 'USD 0.029/hr', logo: ec2Logo },
    { name: 'GCP - Database', metric: 'Storage 70%/100TB', price: 'USD 0.035/hr', logo: gcpLogo },
    { name: 'Azure - Storage', metric: 'Reads 1500/s', price: 'USD 0.018/hr', logo: azureStorageLogo },
    { name: 'AWS - Networking', metric: 'Data Transfer Models 5/5 Running', price: 'USD 0.12/GB', logo: awsNetworkingLogo },
    { name: 'Azure - AI', metric: 'Machine Learning Models 5/5 Running', price: 'USD 0.10/hr', logo: azureAILogo }
];

const ServiceItem = ({ name, metric, price, logo }) => {
    return (
        <StyledView className="flex-row items-center mb-4">
            <StyledView className="rounded-full bg-blue-900 p-3 mr-4 justify-center items-center">
                <StyledIcon name={logo} size={32} color="#4F8EF7" />
            </StyledView>
            <StyledView className="flex-1 bg-white rounded-lg p-3 shadow-md">
                <StyledText className="text-xl font-bold text-gray-800">{name}</StyledText>
                <StyledText className="text-gray-600">{metric}</StyledText>
            </StyledView>
            <StyledText className="text-green-400">{price}</StyledText>
        </StyledView>
    );
};

const ServiceComparisonChart = () => {
    return (
        <StyledView className="m-4 p-4 bg-gray-800 rounded-lg shadow-lg">
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
