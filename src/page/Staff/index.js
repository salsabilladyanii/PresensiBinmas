import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/core';

const Item = ({nama,jabatan}) => (
  <View style={styles.item}>
		<Text style={styles.title}>{jabatan}</Text>
    <Text style={styles.title}>{nama}</Text>		
  </View>
);

const Staff = () => {
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
  const renderItem = ({item}) => <Item nama={item.nama} jabatan={item.jabatan} />;
  // const ContentThatGoesAboveTheFlatList=(

  // 	)
  return (
    <LinearGradient
      colors={['#F58B00', '#FFFFFF']}
      locations={[0, 0.8]}
      style={{flex: 1, alignItems: 'center'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={styles.Text}>ANGGOTA</Text>
          <Text style={styles.Text}>DIR BINMAS</Text>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
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
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
