import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert,ImageBackground } from 'react-native'


export default function AppEpicGame() 
{
    return (
        <View style = {BG_Wallpaper.BG_W}>
            <View>
                <Image source = {require('./Image/_G_EpicGameLauncher.png')}
                />
            </View>
            
                <View>
                    <Text style = {Style_Front.font_mini}>
                        React Native My Project One
                    </Text>
                        <Button
                            title="Login"
                            color="black"
                            onPress={() => Alert.alert('ยังทำไม่เสร็จโว้ยใจเย็น')}
                        />
                </View>
        </View>
    )
}


const BG_Wallpaper = StyleSheet.create({
    BG_W:{
        backgroundColor:'yellow',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

const Style_Front = StyleSheet.create({
    font_text:{
        fontSize:25,
        fontWeight:'bold',
    },
    font_mini:{
        fontSize:16,
        fontWeight:'bold'
    }
})