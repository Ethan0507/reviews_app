import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from "../styles/Global";
import Card from "../shared/Card";
import ReviewForm from './ReviewForm';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Iron-Man', rating: 4, body: 'Dummy Dummy Dummy Dummy Dummy', key: 1},
        {title: 'Iron-Man 2', rating: 5, body: 'Dummy Dummy Dummy Dummy Dummy', key: 2},
        {title: 'BatMan', rating: 3, body: 'Dummy Dummy Dummy Dummy Dummy', key: 3},
        {title: 'Spider-Man', rating: 2, body: 'Dummy Dummy Dummy Dummy Dummy', key: 4},
    ]);

    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currReviews) => {
            return [review, ...currReviews];
        });
        setModalOpen(false);
    }

    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    // };

    return (

        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />


            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginBottom: 0,
        marginTop: 10
    },
    modalContent: {
        flex: 1,

    }
})