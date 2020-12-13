/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  Linking,
  TouchableOpacity
} from 'react-native';



const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.imageContainer}>
          <View>
            <Text style={styles.name}>
              Sadaqat Ali
            </Text>
            <Text style={styles.title}>
              Web Developer
            </Text>
            <Text style={styles.mail}>
              sali.bscs17seecs@seecs.edu.pk
            </Text>
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                //uri: 'https://reactnative.dev/img/tiny_logo.png',
                uri: 'https://i.ibb.co/3sf9qv1/IMG-20190507-143957-2.jpg',
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.summaryText}>
            Summary:
          </Text>
          <Text>
            I am computer science student at NUST Islamabad. I am a professional web developer and cross plateform mobile applications developer
          </Text>
        </View>
        <View>
              <Text style={styles.socialLinksText}>
                Social Links
              </Text>
              <View style={styles.socialBtnsWrapper}>
                <TouchableOpacity
                  style={styles.githubBtn}
                  onPress={() => Linking.openURL('https://github.com/aliseyalvi')}
                >
                    <Text style={styles.githubBtnText}>
                      Github
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.linkedinbBtn}
                  onPress={() => Linking.openURL('https://www.linkedin.com/in/sadaqatalinust/')}
                >
                    <Text style={styles.linkedinbBtnText}>
                      linkedin
                    </Text>
                </TouchableOpacity>
              </View>

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainWrapper:{
    padding:8
  },
  imageContainer:{
    flexDirection:'row',
    justifyContent:'space-between',

  },
  name:{
    fontSize:24,
    marginVertical:4,
  },
  title:{
    fontSize:20,
    marginVertical:4,
  },
  mail:{
    marginVertical:4,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius:50,
  },
  summaryText:{
    fontSize:20,
    marginVertical:4,
  },
  socialLinksText:{
    fontSize:20,
    marginVertical:4,
  },
  socialBtnsWrapper:{
    flexDirection:'row',

  },
  githubBtn:{
    backgroundColor:'#6cc644',
    padding:8,
    borderRadius:4,
  },
  githubBtnText:{
    color:'white'
  },
  linkedinbBtn:{
    backgroundColor:'#0e76a8',
    padding:8,
    borderRadius:4,
    marginLeft:8,
  },
  linkedinbBtnText:{
    color:'white'
  }

});

export default App;
