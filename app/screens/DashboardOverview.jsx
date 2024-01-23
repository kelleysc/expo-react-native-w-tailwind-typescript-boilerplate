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
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styled } from 'nativewind';
import NavBarSplash from '../components/navbar/NavBarSplash';
import UniversalTable from '../components/tableresources/UniversalTable'; 
import UsageGraph from '../components/tableresources/UsageGraph';
import CloudMateAccessManagementDashboard from '../components/CloudMateAccessManagementDashboard';

const StyledSafeArea = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);

const mockCloudServiceData = [
    { id: 1, provider: 'AWS', service: 'EC2 Instances', currentSpend: 'USD 1,200.00', projectedSpend: 'USD 2,400.00', mtdSpend: 'USD 1,100.00', costVariation: '+2%' },
    { id: 2, provider: 'Azure', service: 'App Services', currentSpend: 'USD 950.00', projectedSpend: 'USD 1,900.00', mtdSpend: 'USD 920.00', costVariation: '+1.5%' },
    { id: 3, provider: 'GCP', service: 'Compute Engine', currentSpend: 'USD 2,250.00', projectedSpend: 'USD 4,500.00', mtdSpend: 'USD 2,200.00', costVariation: '+2.5%' },
    { id: 4, provider: 'AWS', service: 'RDS Databases', currentSpend: 'USD 1,750.00', projectedSpend: 'USD 3,500.00', mtdSpend: 'USD 1,700.00', costVariation: '+1%' },
    { id: 5, provider: 'Azure', service: 'Virtual Machines', currentSpend: 'USD 3,250.00', projectedSpend: 'USD 6,500.00', mtdSpend: 'USD 3,100.00', costVariation: '+3%' },
    { id: 6, provider: 'GCP', service: 'Cloud Storage', currentSpend: 'USD 800.00', projectedSpend: 'USD 1,600.00', mtdSpend: 'USD 780.00', costVariation: '-1%' },
    { id: 7, provider: 'AWS', service: 'DynamoDB', currentSpend: 'USD 2,000.00', projectedSpend: 'USD 4,000.00', mtdSpend: 'USD 1,950.00', costVariation: '+2.2%' },
    { id: 8, provider: 'Azure', service: 'Blob Storage', currentSpend: 'USD 1,100.00', projectedSpend: 'USD 2,200.00', mtdSpend: 'USD 1,050.00', costVariation: '+0.5%' },
    { id: 9, provider: 'GCP', service: 'Datastore', currentSpend: 'USD 1,500.00', projectedSpend: 'USD 3,000.00', mtdSpend: 'USD 1,450.00', costVariation: '+1.8%' },
    { id: 10, provider: 'AWS', service: 'S3 Storage', currentSpend: 'USD 2,200.00', projectedSpend: 'USD 4,400.00', mtdSpend: 'USD 2,150.00', costVariation: '+3.3%' },
];
  

const cloudServiceColumns = [
    { header: 'Cloud Services', accessor: 'provider' },
    { header: 'Service', accessor: 'service' },
    { header: 'Current Spend', accessor: 'currentSpend' },
    { header: 'Projected Spend', accessor: 'projectedSpend' },
    { header: 'Month-to-Date Spend', accessor: 'mtdSpend' },
    { header: '24h Cost Variation', accessor: 'costVariation' },
  ];
  
const DashboardOverview = ({ navigation }) => {
    return (
        <StyledSafeArea className='bg-[#1E1F25] min-h-full'>
            <NavBarSplash />
            <StyledText className="text-white text-2xl font-bold text-center pt-5">Cloud Overview</StyledText>
            <StyledScrollView className="pt-5">
                <UniversalTable
                    data={mockCloudServiceData}
                    columns={cloudServiceColumns}
                />  
                <UsageGraph />  
                <CloudMateAccessManagementDashboard />
            </StyledScrollView>
          
        </StyledSafeArea>
    );
};

export default DashboardOverview;
