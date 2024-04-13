import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {

    const navigation = useNavigation();
    const {user} = useAuth();

  return (
    <View>
      <Text>{user}</Text>
      <Button title="click me" onPress={() => {navigation.navigate('Chat')}}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})