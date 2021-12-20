import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

export default class extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>

          <View style={styles.slide1}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/img_3.jpg')}
            />
                <Text style={styles.text}>Arduino</Text>
          </View>
          
          <View style={styles.slide2}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/img_e305.jpg')}
            />
                <Text style={styles.text}>Arduino</Text>
          </View>
          
          <View style={styles.slide2}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/IMG_1105.jpg')}
            />
                <Text style={styles.text}>Arduino</Text>
          </View>

          <View style={styles.slide2}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/IMG_02514.png')}
            />
                <Text style={styles.text}>Arduino</Text>
          </View>
          
          <View style={styles.slide2}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/img_e305_2.jpg')}
            />
                <Text style={styles.text}>Arduino</Text>
          </View>

        </Swiper>

        <Swiper
          style={styles.wrapper}
          height={240}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >

          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/img_e305_2.jpg')}
            />
          </View>

          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/IMG_02514.png')}
            />
          </View>

          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./image/IMG_1105.jpg')}
            />
          </View>
   
        </Swiper>
      </View>
    )
  }
}