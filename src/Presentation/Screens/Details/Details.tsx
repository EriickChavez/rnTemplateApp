import { RootStackNavigationProp, RootStackRouteProp } from '@/Navigation/types';
import Button from '@/Presentation/Components/Button/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';


const DetailsScreen = () => {
    const navigation = useNavigation<RootStackNavigationProp<'Details'>>();
    const route = useRoute<RootStackRouteProp<'Details'>>();
    const title = route.params.title;

    return (
        <View>
            <Text>DetailsScreen</Text>
            <Text>Title: {title}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};


export default DetailsScreen;
