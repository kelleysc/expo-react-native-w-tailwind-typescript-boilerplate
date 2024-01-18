import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import 'nativewind';

const SpecialOfferCTA = () => {
    const [email, setEmail] = useState('');

    return (
        <View className="border backdrop-blur-[7px] bg-slate-800 bg-opacity-50 flex max-w-[375px] flex-col items-center p-6 border-solid border-slate-600 border-opacity-0 rounded-lg">
            <Text className="text-gray-200 text-center text-sm leading-6">
                Embark on Your Cloud Journey
            </Text>
            <Text className="text-white text-center text-2xl font-bold leading-7 mt-6">
                Navigate to success with a special offer – Get started with Cloud Mate today and thrive with your first month on us.
            </Text>
            <TextInput
                placeholder="Enter your email address"
                placeholderTextColor="#9ca3af"
                onChangeText={setEmail}
                value={email}
                className="text-slate-500 text-sm leading-6 mt-4 px-4 py-2 rounded-full bg-slate-800 bg-opacity-50 border border-slate-600 w-full"
            />
            <TouchableOpacity className="mt-2 w-full px-16 py-4 rounded-full bg-cyan-700 justify-center items-center">
                <Text className="text-white text-base font-black leading-6">
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SpecialOfferCTA;
