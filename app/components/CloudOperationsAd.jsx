import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Google Play icon
import { FontAwesome } from '@expo/vector-icons'; // Apple icon (App Store)
import 'nativewind';

const CloudOperationsAd = () => {
    return (
        <View className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <Text className="text-white text-3xl font-bold leading-8 w-full text-center">
                Optimize Your Cloud Operations Anywhere.
            </Text>
            <Text className="text-gray-200 text-sm leading-6 self-center mt-6 text-center">
                A robust cloud management platform at your fingertips. Manage,
                monitor, and secure your cloud infrastructure on the move.
            </Text>
            <View className="h-40 w-full bg-gray-600 rounded-lg flex items-center justify-center mt-16">
                <Text className="text-white">Image Placeholder</Text>
            </View>
            <Text className="text-white text-sm leading-6 self-center whitespace-nowrap mt-16 text-center">
                Get the CloudMate Management App Now!
            </Text>
            <TouchableOpacity className="flex flex-row justify-between items-center border border-white gap-5 mt-5 px-20 py-4 rounded-full">
                <AntDesign name="google" size={24} color="white" />
                <View className="flex flex-col">
                    <Text className="text-white text-xs">GET IT ON</Text>
                    <Text className="text-white text-base font-medium">Google Play</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between items-center border border-white gap-5 mt-4 px-20 py-4 rounded-full">
                <FontAwesome name="apple" size={24} color="white" />
                <View className="flex flex-col">
                    <Text className="text-white text-xs">Download on the</Text>
                    <Text className="text-white text-base font-medium">App Store</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CloudOperationsAd;
