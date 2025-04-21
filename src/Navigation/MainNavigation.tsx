import React from 'react';
import { MainStack } from './types';
import HomeScreen from '@/Presentation/Screens/Home/Home';
import DetailsScreen from '@/Presentation/Screens/Details/Details';


interface MainNavigationProps { }

const MainNavigation: React.FC<MainNavigationProps> = ({ }) => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Details" component={DetailsScreen} />
        </MainStack.Navigator>
    );
};


export default MainNavigation;
