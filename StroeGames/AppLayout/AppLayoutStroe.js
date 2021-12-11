import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Button, ImageBackground, Alert} from 'react-native';

export default function AppLayoutStroe() 
{
    
    const Header = () => 
    {
        return(
            <View style={styles.header}>
                <View style = {styles.BG_W}>
                    <Image source = {require('./Image/_G_EpicGameLauncher.png')}/>
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
                        <View style={styles.container}>
                            <ImageBackground source = {require('./Image_background/left_4_dead_2.jpg')} resizeMode="cover" style={styles.image} >
                                <Text>                                                  </Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>


                <View style={styles.box}>
                    <View style={styles.inner}>
                        <View style={styles.container}>
                            <ImageBackground source = {require('./Image_background/eastward.png')} resizeMode="cover" style={styles.image} >
                                <Text>                                                  </Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <View style={styles.container}>
                            <ImageBackground source = {require('./Image_background/djmax_respect_v.jpg')} resizeMode="cover" style={styles.image} >
                                <Text>                                                  </Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <View style={styles.container}>
                            <ImageBackground source = {require('./Image_background/gta_v.jpg')} resizeMode="cover" style={styles.image} >
                                <Text>                                                  </Text>
                            </ImageBackground>
                        </View>
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
      height: '22%',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#000000',
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
    fontSize: 45,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  text_wallpaper: {
    fontSize: 100,
    lineHeight: 100,
  }
});

