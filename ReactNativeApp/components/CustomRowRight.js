import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        alignItems:'center',
    },
    title: {
        fontSize: 22,
        textAlign: "left",
        fontStyle: 'normal',
        color: 'red',
        marginBottom:10,
    },
    container_text: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 12,
        justifyContent: 'center',
        marginTop:5,
        
    },
    description: {
        fontSize: 15,
        fontStyle: 'italic',
        marginBottom:15,
    },
    photo: {
        
        flexDirection: 'column',
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

const CustomRow = ({ title, description, image_url, sub_url }) => (
    <View style={styles.container}>

        <View style={styles.container_text}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {image_url !== "" ?
                    <Image source={{ uri: image_url }} style={styles.photo} />
                    : <View />}
                {description !== "" ?
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    : <View />}
                {sub_url ? <View style={styles.helpContainer}>
                    <TouchableOpacity onPress={openLink(sub_url)} style={styles.helpLink}>
                        <Text style={styles.helpLinkText}>
                            {sub_url}
                        </Text>
                    </TouchableOpacity>
                </View>
                    : <View />}
            </View>
            {/* <View style={styles.helpContainer}>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                    <Text style={styles.helpLinkText}>See more!</Text>
                </TouchableOpacity>
            </View> */}
        </View>

    </View>
);

function openLink(url) {
    WebBrowser.openBrowserAsync(url);
}

export default CustomRow;