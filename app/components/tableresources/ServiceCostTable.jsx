const SERVICE_COSTS_COLUMNS = [
    { title: 'Cloud Services', field: 'cloudServices' },
    { title: 'Current Spend', field: 'currentSpend' },
    { title: 'Projected Spend', field: 'projectedSpend' },
    { title: 'Month-to-Date Spend', field: 'monthToDateSpend' },
    { title: '24hr Cost Variance', field: 'costVariance' },
];

const SERVICE_COSTS_DATA = [
    {
        cloudServices: 'AWS EC2',
        currentSpend: 'USD 1,750.00',
        projectedSpend: 'USD 3,500.00',
        monthToDateSpend: 'USD 1,600.00',
        costVariance: '+2%',
    },
    {
        cloudServices: 'GCP BigQuery',
        currentSpend: 'USD 2,000.00',
        projectedSpend: 'USD 4,000.00',
        monthToDateSpend: 'USD 1,800.00',
        costVariance: '-1%',
    },
    // ... more mock data objects like the ones above
];

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const ServiceCostTable = ({ columns, data, onSort, onFilter }) => {
    const renderHeader = () => (
        <StyledView className="flex flex-row items-center">
            {columns.map((column, index) => (
                <StyledTouchableOpacity key={index} onPress={() => onSort(column.field)}>
                    <StyledText className="text-gray-300 px-4 py-2">{column.title}</StyledText>
                </StyledTouchableOpacity>
            ))}
        </StyledView>
    );

    const renderRow = (rowData) => (
        <StyledView className="flex flex-row items-center">
            {columns.map((column, index) => (
                <StyledText key={index} className="text-gray-300 px-4 py-2">
                    {rowData[column.field]}
                </StyledText>
            ))}
        </StyledView>
    );

    return (
        <StyledView>
            {renderHeader()}
            {data.map((rowData, index) => (
                <StyledTouchableOpacity
                    key={index}
                    onPress={() => onFilter && onFilter('cloudServices', rowData.cloudServices)}
                    className="border-t border-gray-700"
                >
                    {renderRow(rowData)}
                </StyledTouchableOpacity>
            ))}
        </StyledView>
    );
};

export default ServiceCostTable;