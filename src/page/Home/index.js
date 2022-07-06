import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import logo from '../../asset/Binmas.png';
import simbol from '../../asset/absen.png';
import ikon from '../../asset/kegiatan.png';
import icon from '../../asset/staff.png';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Home = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#F58B00', '#FFFFFF']}
      locations={[0, 0.8]}
      style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={{width: 163, height: 205, position: 'absolute', top: 54}}
        source={logo}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 350,
          left: 59,
        }}>
        <Image source={icon} style={{height: 75, width: 75}} />
        <TouchableOpacity onPress={() => navigation.navigate('Staff')}>
          <Text style={styles.Text}> Data Anggota</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 500,
          left: 59,
        }}>
        <Image source={simbol} style={{height: 75, width: 75}} />

        <TouchableOpacity onPress={() => navigation.navigate('Menuabsen')}>
          <Text style={styles.Text}> Absen</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default Home;
const styles = StyleSheet.create({
  Text: {
    color: '#000000',
    fontSize: 25,
    fontWeight: '400',
    top: 20,
  },
});
