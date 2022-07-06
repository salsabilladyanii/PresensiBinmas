import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/core';
import back from '../../asset/back.png';

const Item = ({nama, jabatan}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{jabatan}</Text>
    <Text style={styles.title}>{nama}</Text>
  </View>
);

const Staff = ({navigation}) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isFocused) {
      console.log('masuk isfocuses');
      getdata();
    } else {
      console.log('gagal masuk isfocuses');
    }
  }, []);
  const getdata = async () => {
    try {
      const simpan = await firestore().collection('Users').get();
      const alldata = simpan.docs.map(doc =>
        Object.assign({id: doc.id}, doc.data()),
      );
      setData(alldata);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  // blaatest
  const cek = () => {
    console.log(data);
  };
  const renderItem = ({item}) => (
    <Item nama={item.nama} jabatan={item.jabatan} />
  );
  // const ContentThatGoesAboveTheFlatList=(

  // 	)
  return (
    <LinearGradient
      colors={['#F58B00', '#FFFFFF']}
      locations={[0, 0.8]}
      style={{flex: 1, alignItems: 'center'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={back} style={{height: 75, width: 75}} />
          </TouchableOpacity>
          <Text style={styles.Text}> DATA ANGGOTA</Text>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            style={{marginTop: -150}}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Staff;
const styles = StyleSheet.create({
  Text: {
    color: '#000000',
    fontSize: 25,
    fontWeight: '400',
    top: 50,
    left: 100,
  },
  item: {
    height: 65,
    width: 225,
    marginVertical: 10,
    marginHorizontal: 100,
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 25,
    left: 30,
    color: 'black',
  },
});
