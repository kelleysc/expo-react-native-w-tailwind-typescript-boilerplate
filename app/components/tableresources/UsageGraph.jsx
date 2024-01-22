import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons'; // AWS icon from FontAwesome
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Arrow up icon from FontAwesome

const StyledView = styled(View);
const StyledText = styled(Text);

const UsageGraph = () => {
  return (
    <StyledView className="flex w-96 flex-col justify-center items-stretch mx-auto mt-10 mb-5">
      <StyledView className="bg-neutral-800 px-4 py-5 rounded-xl mb-4">
        <StyledText className="text-slate-500 text-sm mb-2">
          Top Cost Driver (This Month)
        </StyledText>
        
        {/* AWS Logo and Graph Details */}
        <StyledView className="flex flex-row items-center mb-4">
          <FontAwesomeIcon icon={faAws} size={24} color="#ff9900" />
          <StyledText className="text-white text-2xl font-bold ml-2">
            $3,240.00
          </StyledText>
        </StyledView>

        <StyledText className="text-white text-lg">
          EC2 Instances
        </StyledText>
        <StyledText className="text-slate-400 mb-4">
          Amazon AWS
        </StyledText>

        {/* Percentage Change Indicator */}
        <StyledView className="flex flex-row items-center justify-between mb-4">
          <StyledView className="flex flex-row items-center">
            <FontAwesomeIcon icon={faArrowUp} size={20} color="#22c55e" />
            <StyledText className="text-green-500 ml-1">
              15.75%
            </StyledText>
          </StyledView>
          {/* Placeholder for the graph line component */}
          {/* This should be replaced with your actual line graph component */}
          
        </StyledView>

        {/* Additional sections or components can go here */}
      </StyledView>
    </StyledView>
  );
};

export default UsageGraph;
