import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'native-base'

import FlowPage from './FlowPage'
import HomePage from './HomePage'

import Styles from './Styles'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Flow" component={FlowPage} options={{
            title: 'General Flow',
            headerStyle: {
              backgroundColor: '#800000',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Icon
                type="FontAwesome"
                name='pencil'
                style={{color: '#FFF', marginRight: 15}}
              />
            ),
            headerLeft: () => (
              <Icon
                type="FontAwesome"
                name='bars'
                style={{color: '#FFF' , marginLeft: 15}}
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;