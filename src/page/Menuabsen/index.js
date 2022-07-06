import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import simbol from '../../asset/absen.png';
import rekap from '../../asset/rekap.png';
import harian from '../../asset/harian.png';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  return (
    <LinearGradient
      colors={['#F58B00', '#FFFFFF']}
      locations={[0, 0.8]}
      style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={{width: 105, height: 106, position: 'absolute', top: 54}}
        source={simbol}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 259,
          left: 59,
        }}>
        <Image source={harian} style={{height: 75, width: 75}} />
        <Text style={styles.Text}> Absen Harian</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 416,
          left: 59,
        }}>
        <Image source={rekap} style={{height: 75, width: 75}} />
        <Text style={styles.Text}>Rekapitulasi Absen</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: '#000000',
    fontSize: 25,
    fontWeight: '400',
    top: 20,
  },
});
