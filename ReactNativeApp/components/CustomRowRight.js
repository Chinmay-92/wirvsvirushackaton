import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontStyle: "normal",
        color: 'red',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 150,
        width: 150,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    mainContainer: {
        marginTop: 10,
        alignItems: 'center',
        marginLeft: -5
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    }
});

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    );
}

const CustomRow = ({ title, description, image_url }) => (
    <View style={styles.container}>

        <View style={styles.container_text}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            {/* <View style={styles.helpContainer}>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                    <Text style={styles.helpLinkText}>See more!</Text>
                </TouchableOpacity>
            </View> */}
        </View>
        <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_go_shopping.png?alt=media&token=8ca3f6b5-2d2e-4607-b0ed-5333764f3695" }} //image_url }} 
        style={styles.photo} >
        </Image>

    </View>
);

export default CustomRow;