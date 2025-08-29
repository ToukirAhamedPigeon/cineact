import { useLocalSearchParams } from 'expo-router'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Details=()=>{
    const {id} = useLocalSearchParams();
  return(
    <View>
        <Text>Movie Details: {id}</Text>
    </View>
  )
}  
export default Details; 
const styles = StyleSheet.create({});
