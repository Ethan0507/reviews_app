import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, headerTitle }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />

            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{ headerTitle }</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 1,
        color: '#fff'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})