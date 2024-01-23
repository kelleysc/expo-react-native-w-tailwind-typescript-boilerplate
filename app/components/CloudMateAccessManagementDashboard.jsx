import React from "react";
import { View, Text } from "react-native";
import { styled } from "nativewind";
import { FontAwesome5 } from "@expo/vector-icons"; // Using Expo icons for FontAwesome
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CircularProgress from "./CircularProgress";


const StyledView = styled(View);
const StyledText = styled(Text);

const CloudMateAccessManagementDashboard = () => {
  return (

        <StyledView className="flex max-w-[480px] w-full flex-col justify-center items-stretch mx-auto rounded-xl">
          {/* Container for Key Management and Security Utilization section */}
          <StyledView className="bg-neutral-800 flex w-full flex-col pl-6 pr-3 py-7 rounded-sm">
            {/* Key Management Title */}
            <StyledText className="text-white text-lg font-bold leading-5 mb-2">
              Key Management
            </StyledText>
        {/* Security Utilization Title */}
        <StyledText className="text-white text-3xl font-medium leading-10 mt-4">
          Security Utilization
        </StyledText>


         {/* Key Management: Total Keys and Rotation Status */}
         <StyledView className="flex flex-row justify-between items-center mt-6">
         {/* Total Keys */}
         <StyledView className="flex flex-row items-center">
           {/* Replace with actual icon */}
           <MaterialCommunityIcons name="key" size={24} color="#4ade80" />
           <StyledText className="text-slate-400 text-sm ml-2">
             Total Keys: 145
           </StyledText>
         </StyledView>

         {/* Rotation Status */}
         <StyledView>
           <StyledText className="text-white text-lg">
             Rotation Status: 78%
           </StyledText>
         </StyledView>
       </StyledView>

        {/* Divider */}
        <StyledView className="bg-gray-700 my-4 h-px" />

        {/* Active Keys and Security Flags */}
        <StyledView className="flex flex-row justify-between items-center">
          {/* Active Keys */}
          <StyledView className="flex flex-row items-center">
            {/* Replace with actual icon */}
            <MaterialCommunityIcons name="key-change" size={24} color="#4ade80" />
            <StyledText className="text-white text-lg ml-2">
              Active Keys: 95
            </StyledText>
          </StyledView>

          {/* Security Flags */}
          <StyledView>
            <StyledText className="text-white text-lg">
              Security Flags: 3
            </StyledText>
          </StyledView>
        </StyledView>

        {/* Placeholder for Divider */}
        <StyledView className="bg-gray-700 h-px mt-2 self-stretch" />
        {/* IAM Overview */}
        <StyledView className="flex justify-between mt-7">
          <StyledText className="text-white text-lg font-bold">
            IAM Overview
          </StyledText>
          <StyledText className="text-slate-400 text-sm">Users: 57</StyledText>
        </StyledView>
        {/* Placeholder for IAM Overview Graph */}
        <StyledView className="mt-6 px-3">
        
        <CircularProgress size={200} strokeWidth={20} percentage={23.1} />
      </StyledView>
        {/* ... Rest of your sections go here ... */}
        
        {/* Groups, Roles, and Policies Section */}
        <StyledView className="flex flex-row justify-between mt-6 px-3">
          {/* Groups */}
          <StyledView className="flex items-center">
            {/* Replace with appropriate icon */}
            <FontAwesome5 name="users" size={20} color="white" />
            <StyledText className="text-white ml-2">Groups: 15</StyledText>
            {/* Percentage Increase */}
            <StyledText className="text-green-400 ml-2">2.36%</StyledText>
          </StyledView>

          {/* Roles */}
          <StyledView className="flex items-center">
            {/* Replace with appropriate icon */}
            <FontAwesome5 name="user-tag" size={20} color="white" />
            <StyledText className="text-white ml-2">Roles: 34</StyledText>
            {/* Percentage Increase */}
            <StyledText className="text-green-400 ml-2">1.80%</StyledText>
          </StyledView>

          {/* Policies */}
          <StyledView className="flex items-center">
            {/* Replace with appropriate icon */}
            <FontAwesome5 name="book" size={20} color="white" />
            <StyledText className="text-white ml-2">Policies: 120</StyledText>
            {/* Percentage Increase */}
            <StyledText className="text-green-400 ml-2">1.64%</StyledText>
          </StyledView>
        </StyledView>
        {/* Trusted Advisor & CloudTrail Section */}
        <StyledView className="mt-6 px-3">
          <StyledView className="flex justify-between">
            <StyledText className="text-white text-lg font-bold">
              Trusted Advisor & CloudTrail
            </StyledText>
            {/* Replace with appropriate icon */}
            <FontAwesome5 name="shield-alt" size={20} color="white" />
          </StyledView>
          <StyledView className="flex justify-between mt-3">
            <StyledText className="text-white text-lg">
              Unauthorized Access Attempts:
            </StyledText>
            <StyledText className="text-white text-lg">14</StyledText>
          </StyledView>
        </StyledView>
        {/* Security Checks and Alerts Section */}
        <StyledView className="mt-6 px-3">
          {/* Security Checks */}
          <StyledText className="text-slate-500 text-base font-bold">
            Pass:
          </StyledText>
          <StyledView className="flex items-center justify-between bg-slate-800 bg-opacity-50 mt-5 px-7 py-4 rounded-full">
            <StyledText className="text-white">250 Checks</StyledText>
            {/* Replace with appropriate icon */}
            <FontAwesome5 name="check-circle" size={20} color="white" />
          </StyledView>

          {/* Alerts */}
          <StyledText className="text-slate-500 text-base font-bold mt-5">
            Alerts:
          </StyledText>
          <StyledView className="flex items-center justify-between bg-slate-800 bg-opacity-50 mt-4 px-7 py-4 rounded-full">
            <StyledText className="text-white">
              5 Critical, 12 Warning
            </StyledText>
            {/* Replace with appropriate icon */}
            <FontAwesome5
              name="exclamation-triangle"
              size={20}
              color="yellow"
            />
          </StyledView>
        </StyledView>
        {/* Review Logs Button */}
        <StyledView className="bg-blue-500 mt-6 px-16 py-4 rounded-full self-stretch justify-center items-center">
          <StyledText className="text-white text-base font-bold">
            Review Logs
          </StyledText>
        </StyledView>
        
      </StyledView>
    </StyledView>
  );
};

export default CloudMateAccessManagementDashboard;
