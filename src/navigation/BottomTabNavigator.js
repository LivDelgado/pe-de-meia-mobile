import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import FinancesDashboard from '../screens/FinancesDashboard';
import Accounts from '../screens/Accounts';
import GameProgressDashboard from '../screens/GameProgressDashboard';
import Tutorial from '../screens/Tutorial';
import CustomIcons from '../components/CustomIcons';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'finances-dashboard';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME} 
    >
      <BottomTab.Screen
        name="finances-dashboard"
        component={FinancesDashboard}
        options={{
          tabBarLabel:() => {return null},
          tabBarIcon: ({ focused }) => 
            <CustomIcons 
              name="iconFinancesDashboard" 
              size={32}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault }
            />
        }}
      />
      <BottomTab.Screen
        name="accounts"
        component={Accounts}
        options={{
          tabBarLabel:() => {return null},
          tabBarIcon: ({ focused }) => 
            <CustomIcons 
              name="iconAccounts"
              size={32}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault }
            />,
        }}
      />
      <BottomTab.Screen
        name="game-progress"
        component={GameProgressDashboard}
        options={{
          tabBarLabel:() => {return null},
          tabBarIcon: ({ focused }) => 
            <CustomIcons 
              name="iconGameProgressDashboard"
              size={32}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault }
            />,
        }}
      />
      <BottomTab.Screen
        name="tutorial"
        component={Tutorial}
        options={{
          tabBarLabel:() => {return null},
          tabBarIcon: ({ focused }) => 
            <CustomIcons
              name="iconTutorial"
              size={32}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault }
            />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'finances-dashboard':
      return 'DASHBOARD';
    case 'accounts':
      return 'CONTAS';
    case 'game-progress':
      return 'PROGRESSO';
    case 'tutorial':
      return 'TUTORIAL';
  }
}
