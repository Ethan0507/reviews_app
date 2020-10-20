import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } headerTitle='Reviewz720'/>,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#333',
            height: 80,
        }
    }
});

export default HomeStack;