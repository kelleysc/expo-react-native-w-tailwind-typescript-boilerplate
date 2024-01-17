import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Footer = () => {
    return (
        <StyledView className="flex flex-row justify-between items-center p-4 bg-gray-800">
            <StyledView className="flex flex-row items-center">
                {/* Logo */}
                <Icon name="cloud" size={24} color="blue" />
                {/* Company Name */}
                <StyledText className="text-blue-500 text-lg font-bold ml-2">
                    <StyledText className="text-white">CloudMate</StyledText>
                    <StyledText className="text-blue-500">.</StyledText>
                </StyledText>
            </StyledView>
            {/* Empower your cloud journey */}
            <StyledText className="py-2 text-white text-base leading-7 whitespace-nowrap">
                Empower your cloud journey
            </StyledText>
            {/* Social Media Icons */}
            <StyledView className="flex flex-row justify-between w-1/3 items-stretch">
                <StyledTouchableOpacity onPress={() => console.log('Social Media 1 pressed')}>
                    <Icon name="linkedin" size={24} color="#0077B5" />
                </StyledTouchableOpacity>
                <StyledTouchableOpacity onPress={() => console.log('Social Media 2 pressed')}>
                    <Icon name="facebook-f" size={24} color="#3b5998" />
                </StyledTouchableOpacity>
                <StyledTouchableOpacity onPress={() => console.log('Social Media 3 pressed')}>
                    <Icon name="twitter" size={24} color="#1DA1F2" />
                </StyledTouchableOpacity>
            </StyledView>
            {/* Quick Links */}
            <StyledView className="items-stretch flex flex-row justify-between gap-5 mt-7 pr-20">
                <StyledView className="items-stretch flex basis-[0%] flex-col pr-16">
                    <StyledText className="text-slate-400 text-sm leading-6">Dashboards</StyledText>
                    <StyledText className="text-slate-400 text-sm leading-6 mt-4">Contact</StyledText>
                    <StyledText className="text-slate-400 text-sm leading-6 mt-4">Resources</StyledText>
                </StyledView>
                <StyledView className="items-stretch flex basis-[0%] flex-col self-start">
                    <StyledText className="text-slate-400 text-sm leading-6 whitespace-nowrap">Account</StyledText>
                    <StyledText className="text-slate-400 text-sm leading-6 whitespace-nowrap mt-4">Company</StyledText>
                </StyledView>
            </StyledView>
            {/* Stay in the Cloud Loop */}
            <StyledView className="text-white text-center text-base font-bold leading-5 w-full mt-11">
                <StyledText>Stay in the Cloud Loop.</StyledText>
            </StyledView>
            {/* CTA with Email Button */}
            <StyledView className="flex w-full flex-col mt-6 pl-5">
                <StyledText className="text-slate-400 text-sm leading-6 self-stretch">
                    Subscribe to receive updates on our services and insights into cloud strategies.
                </StyledText>
                <StyledView className="items-center border border-[color:var(--Base-Grey-80,#34384C)] bg-slate-800 bg-opacity-50 self-stretch flex justify-between gap-2.5 mt-5 pl-6 pr-2 py-2 rounded-[100px] border-solid">
                    <StyledText className="text-slate-500 text-sm leading-6 grow whitespace-nowrap my-auto">
                        Enter your email address
                    </StyledText>
                    <StyledTouchableOpacity className="text-white text-sm font-black leading-6 whitespace-nowrap justify-center items-stretch bg-cyan-700 self-stretch aspect-[1.7692307692307692] px-4 py-2 rounded-[40px]">
                        <StyledText>Send</StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
                <StyledView className="bg-gray-700 self-stretch shrink-0 h-px mt-10" />
                <StyledView className="items-stretch self-center flex justify-between gap-5 ml-2.5 mt-4">
                    <StyledText className="text-slate-500 text-right text-sm leading-6 flex-1">
                        Term of Service
                    </StyledText>
                    <StyledText className="text-slate-500 text-right text-sm leading-6">
                        Privacy Policy
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};

export default Footer;
