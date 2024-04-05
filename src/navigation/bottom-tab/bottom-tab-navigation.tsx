import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screen/homescreen/homescreen.component';
import ProfileScreen from '../../screen/profilescreen/profilescreen.component';
import {makeStyles} from '@rneui/themed';
import {Theme} from '@rneui/base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookingScreen from '../../screen/bookingscreen/bookingscreen.component';
import CalendarScreen from '../../screen/calendarscreen/calendarscreen.component';
import InboxScreen from '../../screen/inboxscreen/inboxscreen.component';

type TabScreenProps = {
  name: string;
  Component: any;
  icon: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  barStyle: {
    backgroundColor: theme.colors.background,
  },
  activeColor: {
    color: theme.colors.primary,
  },
  activeIndicatorStyle: {
    backgroundColor: 'transparent',
  },
  inactiveColor: {
    color: theme.colors.grey3,
  },
}));

const Tab = createMaterialBottomTabNavigator();

const tabScreens: TabScreenProps[] = [
  {name: 'Home', Component: HomeScreen, icon: 'home'},
  {name: 'Bookings', Component: BookingScreen, icon: 'post-outline'},
  {name: 'Calendar', Component: CalendarScreen, icon: 'calendar-month'},
  {name: 'Inbox', Component: InboxScreen, icon: 'message-text-outline'},
  {name: 'Profile', Component: ProfileScreen, icon: 'account'},
];

const BottomTabNavigation = () => {
  const styles = useStyles();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={styles.activeColor.color}
      activeIndicatorStyle={styles.activeIndicatorStyle}
      inactiveColor={styles.inactiveColor.color}
      barStyle={styles.barStyle}>
      {tabScreens.map(({name, Component, icon}: TabScreenProps) => (
        <Tab.Screen
          key={name}
          name={name}
          component={Component}
          options={{
            tabBarLabel: name,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name={icon} color={color} size={24} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
