import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import ResourceUsageTable from './ResourceUsageTable';
import ServiceCostsTable from './ServiceCostsTable';
import CloudOperationsCostTable from './CloudOperationsCostTable';

const StyledView = styled(View);

const MainTable = ({ fetchData }) => {
    const [activeTable, setActiveTable] = useState('resourceUsage');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchData()
            .then(fetchedData => {
                setData(fetchedData);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [fetchData]);

    const handleSort = (field) => {
        const sortedData = [...data].sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
        setData(sortedData);
    };

    const handleFilter = (field, value) => {
        const filteredData = data.filter(item => item[field] === value);
        setData(filteredData);
    };

    return (
        <StyledView className="w-full h-full bg-neutral-800 rounded-xl">
            {/* Header with title, dropdown, and sort/filter buttons */}
            <View className="flex-row items-center justify-between p-4">
                <Text className="text-lg font-bold">{activeTable}</Text>
                <TouchableOpacity onPress={() => handleTableChange('resourceUsage')}>
                    <Text>Resource Usage</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTableChange('serviceCosts')}>
                    <Text>Service Costs</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTableChange('cloudOperationsCosts')}>
                    <Text>Cloud Operations Costs</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSort('vendor')}>
                    <Text>Sort by Vendor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleFilter('vendor', 'AWS')}>
                    <Text>Filter by AWS</Text>
                </TouchableOpacity>
            </View>
            {/* Table */}
            {activeTable === 'resourceUsage' && <ResourceUsageTable columns={RESOURCE_USAGE_COLUMNS} data={data} />}
            {activeTable === 'serviceCosts' && <ServiceCostsTable columns={SERVICE_COSTS_COLUMNS} data={data} />}
            {activeTable === 'cloudOperationsCosts' && <CloudOperationsCostTable columns={CLOUD_OPERATIONS_COLUMNS} data={data} />}
        </StyledView>
    );
};

export default MainTable;