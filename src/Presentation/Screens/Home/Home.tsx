import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/Navigation/types';
import Button from '@/Presentation/Components/Button/Button';



const HomeScreen = ({ }) => {
    const navigation = useNavigation<RootStackNavigationProp<'Home'>>();

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details', {
                title: 'Soy Un Param',
            })} />
        </View>
    );
};


export default HomeScreen;
