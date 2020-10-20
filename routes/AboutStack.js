import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/About';
import Header from '../shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } headerTitle='About Reviewz720'/>,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#333',
            height: 80,
        }
    }
});

export default AboutStack;