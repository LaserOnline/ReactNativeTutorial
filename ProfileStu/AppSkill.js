import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Button, ImageBackground, Alert} from 'react-native';

export default function AppSkill() 
{
    
    const Header = () => 
    {
        return(
            <View style={styles.header}>
                <View style = {styles.BG_W}>
                <Image source = {require('./image/renew.jpg')}/>
                </View>
            </View>
        )
    }

    const Boxes = () => 
    {
        return(

        <View style={styles.boxContainer}>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <ImageBackground source = {require('./image/web/background_web.jpg')} resizeMode="cover" style={styles.image} >
                            <View style={styles.container}>
                                <Text style = {styles.text}>Web</Text>
                                    <View style = {styles.centers}>
                                        <Image source = {require('./image/web/html.png')}/>
                                        <Image source = {require('./image/web/php.png')}/>
                                        <Image source = {require('./image/web/react_js.png')}/>
                                    </View>
                            </View>
                        </ImageBackground>
                
                    </View>
                </View>


                <View style={styles.box}>
                    <View style={styles.inner}>
                    <ImageBackground source = {require('./image/iot/x.jpg')} resizeMode="cover" style={styles.image} >
                            <View style={styles.container}>
                                <Text style = {styles.text}>IOT</Text>
                                    <View style = {styles.centers}>
                                        <Image source = {require('./image/iot/arduino.png')}/>
                                        <Image source = {require('./image/iot/raspberry_pi.png')}/>
                                    </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                    <ImageBackground source = {require('./image/Language/lan.jpg')} resizeMode="cover" style={styles.image} >
                            <View style={styles.container}>
                                <Text style = {styles.text}>Language</Text>
                                    <View style = {styles.centers}>
                                        <Image source = {require('./image/Language/java.png')}/>
                                        <Image source = {require('./image/Language/python.png')}/>
                                        <Image source = {require('./image/Language/c.png')}/>
                                    </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                    <ImageBackground source = {require('./image/App_Mobile/app.jpg')} resizeMode="cover" style={styles.image} >
                            <View style={styles.container}>
                                <Text style = {styles.text}>App Mobile</Text>
                                    <View style = {styles.centers}>
                                        <Image source = {require('./image/App_Mobile/flutter.png')}/>
                                        <Image source = {require('./image/App_Mobile/react_js.png')}/>
                                    </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

    </View>


        )
    }

  return <SafeAreaView style={styles.container}>
            <Header/>
            <Boxes/>
        </SafeAreaView>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
      width: '100%',
      height: '20%',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#f2f3f4',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
      width: '50%',
      height: '46%',
      padding: 5,
    //  backgroundColor: 'green',
  },
  inner: {
      flex: 1,
      backgroundColor: '#c8c8c8',
      alignItems: 'center',
      justifyContent: 'center'
  },
  boxtwo: {
     width: '100%',
     height: '50%',
     padding:5
  },
  in_inner: {
    height: '47%',
    width: '97%',
    margin: 4,
    backgroundColor: '#f2f3f4',
    justifyContent: 'space-between',
  },
  in_in_inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //  backgroundColor: 'pink',
  },
  box4_1_1: {
    width: '47%',
    height: '97%',
    backgroundColor: 'green',
  },
  box4_1_2: {
    width: '47%',
    height: '97%',
    backgroundColor: 'yellow',
  },
  BG_W: {
    height: '90%',
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  text_wallpaper: {
    fontSize: 100,
    lineHeight: 100,
  },
  centers: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

