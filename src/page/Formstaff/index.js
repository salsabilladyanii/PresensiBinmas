import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Formstaff = () => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState(null);
  const [nama, setNama] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [nip, setNip] = useState('');
  const [pangkat, setPangkat] = useState('');
  const submit = async () => {
    firestore()
      .collection('Users')
      .doc(nama)
      .set({
        nama: nama,
        jabatan: jabatan,
        nip: nip,
        pangkat: pangkat,
      })
      .then(() => {
        Alert.alert('Angoota Berhasil Ditambahkan');
        navigation.navigate('Staff');
      });
  };
  return (
    <LinearGradient
      colors={['#F58B00', '#FFFFFF']}
      locations={[0, 0.8]}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          width: 375,
          height: 35,
          position: 'absolute',
          top: 54,
          color: '#000000',
          fontSize: 25,
          fontWeight: '400',
          alignItems: 'center',
          left: 75,
        }}>
        FORMULIR ANGGOTA
      </Text>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>NAMA</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNama}
              value={nama}
              placeholder="Masukkan nama"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>JABATAN</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setJabatan}
              value={jabatan}
              placeholder="Masukkan jabatan"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>NRP / NIP</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNip}
              value={nip}
              placeholder="Masukkan NRP / NIP"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>PANGKAT</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPangkat}
              value={pangkat}
              placeholder="Masukkan pangkat"
            />
          </View>
        </View>

        <View>
          <Button title="TAMBAH" color="#1E4588" onPress={submit} />
        </View>
      </View>
    </LinearGradient>
  );
};
export default Formstaff;
const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    height: 40,
    width: 200,
  },
});
