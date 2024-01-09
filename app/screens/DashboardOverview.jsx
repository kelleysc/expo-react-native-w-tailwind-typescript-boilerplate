// DashboardOverview.jsx
/**
 * Dashboard Overview Screen
 * Purpose: Display a summary overview of the user's multi-cloud environment.
 * Features:
 * - High-level metrics (e.g., resource usage, cost summary).
 * - Visual graphs/charts for quick insights.
 * - Quick navigation to detailed reports and cloud services.
 */

import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { styled } from 'nativewind';
import NavBarSplash from '../components/navbar/NavBarSplash';

const StyledSafeArea = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);

const DashboardOverview = ({ navigation }) => {
    return (
        <StyledSafeArea className='bg-gray-100'>
            <NavBarSplash />
            <StyledScrollView className="pt-5">
                <Text>Dashboard Overview Content</Text>
                {/* Additional content */}
            </StyledScrollView>
        </StyledSafeArea>
    );
};

export default DashboardOverview;
