import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const NavBarLoggedIn = ({ pageTitle }) => {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);

    const navigateToScreen = (screenName) => {
        setMenuVisible(false);
        navigation.navigate(screenName);
    };

    return (
        <StyledView className="flex-row justify-between items-center px-4 py-2 bg-gray-900">
            <StyledView className="flex-row items-center">
                <StyledTouchableOpacity onPress={() => navigateToScreen('Home')}>
                    <MaterialCommunityIcons name="cloud" size={47} color="white" />
                </StyledTouchableOpacity>
                <StyledText className="text-white mx-3">{pageTitle}</StyledText>
            </StyledView>

            <StyledTouchableOpacity onPress={() => setMenuVisible(true)}>
                <MaterialCommunityIcons name="menu" size={24} color="white" />
            </StyledTouchableOpacity>

            {/* Modal for navigation menu */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={menuVisible}
                onRequestClose={() => setMenuVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                    <StyledView className="flex-1 justify-center items-center">
                        <StyledView className="mx-10 p-5 bg-white rounded-lg">
                            {/* List of navigation items */}
                            <NavigationItem icon="view-dashboard-outline" title="Dashboard Overview" onPress={() => navigateToScreen('DashboardOverview')} />
                            <NavigationItem icon="cloud-outline" title="Cloud Services Management" onPress={() => navigateToScreen('CloudServicesManagement')} />
                            <NavigationItem icon="chart-bar" title="Analytics and Reporting" onPress={() => navigateToScreen('AnalyticsAndReporting')} />
                            <NavigationItem icon="bell-outline" title="Alerts and Notifications" onPress={() => navigateToScreen('AlertsAndNotifications')} />
                            <NavigationItem icon="currency-usd" title="Cost Management and Optimization" onPress={() => navigateToScreen('CostManagementAndOptimization')} />
                            <NavigationItem icon="shield-outline" title="Security and Compliance" onPress={() => navigateToScreen('SecurityAndCompliance')} />
                            <NavigationItem icon="account-check-outline" title="User and Access Management" onPress={() => navigateToScreen('UserAndAccessManagement')} />
                            <NavigationItem icon="cog-outline" title="Settings and Integration" onPress={() => navigateToScreen('SettingsAndIntegration')} />
                            <StyledTouchableOpacity onPress={() => setMenuVisible(false)} className="flex-row items-center mt-5">
                                <MaterialCommunityIcons name="arrow-left" size={24} color="#2E6EA6" />
                                <StyledText className="ml-2 text-lg text-blue-600">Back</StyledText>
                            </StyledTouchableOpacity>

                        </StyledView>
                    </StyledView>
                </TouchableWithoutFeedback>
            </Modal>
        </StyledView>
    );
};

const NavigationItem = ({ icon, title, onPress }) => (
    <StyledTouchableOpacity onPress={onPress} className="flex-row items-center mb-2">
        <MaterialCommunityIcons name={icon} size={24} color="black" />
        <StyledText className="ml-2 text-lg">{title}</StyledText>
    </StyledTouchableOpacity>
);

export default NavBarLoggedIn;
