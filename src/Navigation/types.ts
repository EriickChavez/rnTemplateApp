import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define los parámetros posibles para cada pantalla
export type RootStackParamList = {
    Home: undefined;
    Details: {
        title: string;
    };
};

// Tipos para useNavigation hook
export type RootStackNavigationProp<T extends keyof RootStackParamList> =
    NativeStackNavigationProp<RootStackParamList, T>;

// Tipos para useRoute hook
export type RootStackRouteProp<T extends keyof RootStackParamList> =
    RouteProp<RootStackParamList, T>;

export const MainStack = createNativeStackNavigator<RootStackParamList>();
