
// Mock data for Resource Usage Table
const RESOURCE_USAGE_DATA = [
    {
        type: 'AWS EC2 - m5.large',
        currentUtilization: 'CPU: 80%, Memory: 15GB',
        averageUtilization: 'CPU: 60%, Memory: 12GB',
        cost: 'USD 245.75',
        efficiencyScore: '-5%'
    },
    {
        type: 'GCP Compute Engine - n1-standard-1',
        currentUtilization: 'CPU: 70%, Memory: 10GB',
        averageUtilization: 'CPU: 50%, Memory: 8GB',
        cost: 'USD 200.50',
        efficiencyScore: '+10%'
    },
    {
        type: 'Azure VM - D2s v3',
        currentUtilization: 'CPU: 65%, Memory: 12GB',
        averageUtilization: 'CPU: 55%, Memory: 10GB',
        cost: 'USD 220.30',
        efficiencyScore: '+2%'
    },
    {
        type: 'AWS RDS - db.m5.large',
        currentUtilization: 'CPU: 75%, Memory: 16GB',
        averageUtilization: 'CPU: 65%, Memory: 14GB',
        cost: 'USD 300.00',
        efficiencyScore: '-8%'
    },
    // ... more mock data objects like the ones above
];

// Columns definition
const RESOURCE_USAGE_COLUMNS = [
    { title: 'Resource Type', field: 'type' },
    { title: 'Current Utilization', field: 'currentUtilization' },
    { title: 'Average Utilization', field: 'averageUtilization' },
    { title: 'Cost', field: 'cost' },
    { title: '24hr Efficiency Score', field: 'efficiencyScore' },
];

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const ResourceUsageTable = ({ columns, data, onSort, onFilter }) => {
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
                    onPress={() => onFilter && onFilter('vendor', rowData.vendor)}
                    className="border-t border-gray-700"
                >
                    {renderRow(rowData)}
                </StyledTouchableOpacity>
            ))}
        </StyledView>
    );
};

export default ResourceUsageTable;