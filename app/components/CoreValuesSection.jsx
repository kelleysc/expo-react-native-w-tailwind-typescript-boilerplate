import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { CloudIcon, ShieldCheckIcon, UsersIcon } from 'react-native-heroicons/outline';

const StyledView = styled(View);
const StyledText = styled(Text);

function CoreValuesComponent() {
    return (
        <StyledView className="flex-1 bg-gray-800 px-5 py-8">
            <StyledText className="text-cyan-500 text-3xl font-bold text-center mb-8 font-poppins">
                Core Values
            </StyledText>
            <StyledText className="text-gray-300 text-center text-sm mb-10 font-poppins">
                At CloudMate, our ethos is shaped by our commitment to innovation,
                security, and community in the cloud computing space.
            </StyledText>

            {/* Simplicity */}
            <StyledView className="flex flex-col items-center bg-slate-700 rounded-xl p-5 mb-4">
                <CloudIcon size={48} color="#4F8EF7" className="mb-4" />
                <StyledText className="text-xl text-white font-bold mb-2 font-poppins">
                    Simplicity
                </StyledText>
                <StyledText className="text-center text-slate-300 font-poppins">
                    Removing barriers to cloud management, we offer intuitive solutions
                    that empower you to navigate and optimize your cloud infrastructure
                    with ease.
                </StyledText>
            </StyledView>

            {/* Security */}
            <StyledView className="flex flex-col items-center bg-slate-700 rounded-xl p-5 mb-4">
                <ShieldCheckIcon size={48} color="#10B981" className="mb-4" />
                <StyledText className="text-xl text-white font-bold mb-2 font-poppins">
                    Security
                </StyledText>
                <StyledText className="text-center text-slate-300 font-poppins">
                    Building trust through advanced security measures, we ensure that
                    your cloud environment is protected against evolving threats.
                </StyledText>
            </StyledView>

            {/* Collaboration */}
            <StyledView className="flex flex-col items-center bg-slate-700 rounded-xl p-5">
                <UsersIcon size={48} color="#8B5CF6" className="mb-4" />
                <StyledText className="text-xl text-white font-bold mb-2 font-poppins">
                    Collaboration
                </StyledText>
                <StyledText className="text-center text-slate-300 font-poppins">
                    We champion collaboration, providing tools that enable our community
                    to share knowledge and drive collective cloud innovation.
                </StyledText>
            </StyledView>

        </StyledView>
    );
}

export default CoreValuesComponent;
