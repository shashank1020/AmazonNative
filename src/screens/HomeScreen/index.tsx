import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg',
          }}
        />
        <View style={styles.rightContiner}>
          <Text style={styles.title}>
            Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
          </Text>
          {/* Rating goes here */}
          <Text style={styles.price}>from $13.969</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    display: 'flex',
  },
  image: {
    height: 150,
    width: 150,
  },
  rightContiner: {
    backgroundColor: '#fff',
  },
  title: {},
  price: {},
});
