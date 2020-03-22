import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, Platform, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { useTranslation, Trans } from "react-i18next";
import CustomListview from '../components/CustomListview'

import { MonoText } from '../components/StyledText';

function getData(t) {
  return [
    {
      key: 1, title: t('title1'),
      description: t('description1'),
      image_url: t('imageUrl1')
    },
    {
      key: 2, title: t('title2'),
      description: t('description2'),
      image_url: t('imageUrl2')
    },
    {
      key: 3, title: t('title3'),
      description: t('description3'),
      image_url: t('imageUrl3')
    },
    {
      key: 4, title: t('title4'),
      description: t('description4'),
      image_url: t('imageUrl5')
    }
  ]
}

export default function HomeScreen() {

  let [faqData, setfaqData] = useState([]);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("calling useEffect", t('title4'))
        const response = await getData(t);
        console.log("got the respone",response)
        //const response = await axios.get(process.env.DEV_URL+"/user/get/"+token)
        setfaqData(response)
        console.log('mount it!',faqData);
      } catch (error) {
        console.error(error);
      }
      console.log('mount it!',faqData);
    }

    fetchData()
  }
    , []);

  const renderFields = () => {
    if (faqData != {}) {
      console.log('returning',faqData);
      
      return (
        <CustomListview
          itemList={faqData}
        />
      )
    }
    return ""
  }


  console.log(faqData)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.buttonMainContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={() => changeLanguage("de")} title={t("DE")} />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => changeLanguage("en")} title={t("EN")} />
          </View>
        </View>

        <View style={styles.getStartedContainer}>
          <Text>
            <Trans>
              {t("Welcome Message")}
            </Trans>
          </Text>
        </View>

        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View>
        {renderFields()}
        </View>
        {/* <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Footer for menus or links</Text>
        
        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View> */}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  // buttonMainContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  buttonMainContainer: {
    width: 200,
    height: 100,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
  }
});
