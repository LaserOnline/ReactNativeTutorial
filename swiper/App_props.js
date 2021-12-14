import React from 'react'
import { Text, View, Image } from 'react-native'

export default function App_props() {
    let pic = {
        uri: 'https://images.unsplash.com/photo-1639425620091-312639de647d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    };
    return (
        <View style = {{
            flex:1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'
        }}>
            <Greeting name ="Mr James"/>
            <Image source = {pic} style = {{width:550,height:600,margin:50}}/>
        </View>
    )
}

function Greeting(props){
    return(
        <View>
            <Text style = {{color: 'red'}} >Hello {props.name}</Text>
        </View>
    );
}