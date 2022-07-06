import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../../asset/Binmas.png';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#F58B00', '#FFFFFF']}
      locations={[0, 0.8]}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{width: 163, height: 205}} source={logo} />

      <Text style={styles.Text}>ABSENSI</Text>
      <Text style={styles.Text}>DIR BINMAS</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Text: {color: '#1E4588', fontSize: 32, fontWeight: '400'},
});
