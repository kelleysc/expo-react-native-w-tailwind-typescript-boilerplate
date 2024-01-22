// components/UniversalTable.jsx

import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const styledScrollView = styled(ScrollView);

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableRow {
  id: number;
  [key: string]: any;
}

interface UniversalTableProps {
  data: TableRow[];
  columns: TableColumn[];
}

const UniversalTable: React.FC<UniversalTableProps> = ({ data, columns }) => {
  return (
    <StyledView className='p-2'>
        <StyledView className='bg-[#34384C] px-4 py-8 rounded-lg'>
            <ScrollView horizontal={true}>
                <StyledView>
                    <StyledView style={{ flexDirection: 'row' }}>
                    {columns.map((column, index) => (
                        <StyledText 
                        className='color-white'
                        key={index} style={{ width: 100, margin: 5 }}
                        >
                        {column.header}
                        </StyledText>
                    ))}
                    </StyledView>
                    {data.map((item) => (
                        <StyledView key={item.id} style={{ flexDirection: 'row' }}>
                        {columns.map((column) => (
                            <StyledText 
                            className='color-white'
                            style={{ width: 100, margin: 5 }}
                            >
                            {item[column.accessor]}
                        </StyledText>
                        ))}
                    </StyledView>
                    ))}
                </StyledView>
            </ScrollView>
        </StyledView>
    </StyledView>
  );
};


export default UniversalTable;
