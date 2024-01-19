const CLOUD_OPERATIONS_DATA = [
    {
        time: '2022-01-01 12:00:00',
        costPerUnit: 'USD 0.02',
        quantity: 5000,
        totalCost: 'USD 100.00'
    },
    {
        time: '2022-01-01 13:00:00',
        costPerUnit: 'USD 0.03',
        quantity: 3000,
        totalCost: 'USD 90.00'
    },
    {
        time: '2022-01-01 14:00:00',
        costPerUnit: 'USD 0.05',
        quantity: 2000,
        totalCost: 'USD 100.00'
    },
    // ... more mock data objects like the ones above
];

const CLOUD_OPERATIONS_COLUMNS = [
    { title: 'Time', field: 'time' },
    { title: 'Cost per Unit/Operation', field: 'costPerUnit' },
    { title: 'Quantity of Resources', field: 'quantity' },
    { title: 'Total Cost', field: 'totalCost' },
];

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const CloudOperationsCostTable = ({ columns, data, onSort, onFilter }) => {
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
                    onPress={() => onFilter && onFilter('cloudOperations', rowData.cloudOperations)}
                    className="border-t border-gray-700"
                >
                    {renderRow(rowData)}
                </StyledTouchableOpacity>
            ))}
        </StyledView>
    );
};

export default CloudOperationsCostTable;