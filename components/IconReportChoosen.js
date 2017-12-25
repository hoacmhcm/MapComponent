import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class IconReportChoosen extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.icon, this.props.selected ? { backgroundColor: '#212121' } : {}]} onPress={this.props.onPress}>
        <Image style={styles.image} source={this.props.imagePath} />
        <Text style={styles.iconName}>{this.props.iconName}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#9E9E9E',
  },
  image: {
    width: 70, height: 70, resizeMode: 'cover'
  },
  iconName: {
    fontSize: 17,
    color: 'white'
  },
})