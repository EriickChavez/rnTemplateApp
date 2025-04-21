import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: object;
    textStyle?: object;
    loading?: boolean;
    loadingText?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled,
    style,
    textStyle,
    loading,
    loadingText,
    icon,
    iconPosition,
}) => {

    const disabledColor = disabled ? '#ccc' : '#007AFF';

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                { backgroundColor: disabledColor },
                styles.button,
                style,
            ]}
        >
            {loading ? (
                <Text style={[styles.loadingText, textStyle]}>{loadingText || 'Loading...'}</Text>
            ) : (
                <View style={styles.buttonContent}>
                    {icon && iconPosition === 'left' && icon}
                    <Text style={[styles.text, textStyle]}>{title}</Text>
                    {icon && iconPosition === 'right' && icon}
                </View>
            )}
        </TouchableOpacity>
    );
};


export default Button;
