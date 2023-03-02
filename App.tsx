/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
import {SIZES} from './src/constant/sizes.js';
interface product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Product = ({product}: {product: product}): JSX.Element => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>
            {product.title.split(' ').slice(0, 2).join(' ')}
          </Text>
        </View>
        <View style={styles.wrapperContainer}>
          <View style={styles.prizeContainer}>
            <Text style={styles.heading}>${product.price}</Text>
            <Text style={styles.paragrapgh}>${product.price}</Text>
          </View>
          <View style={styles.favContainer}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/707/707680.png',
              }}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
function App(): JSX.Element {
  const [data, setData] = useState<product[]>([]);
  const [text, onChangeText] = React.useState('Useless Text');
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          padding: width * 0.05,
          height: height / 6,
          backgroundColor: '#fff',
        }}>
        <View>
          <Text style={styles.heading}>Lets Find</Text>
          <Text style={styles.largeHeading}>Favourite Plant</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <View style={styles.searchBtn}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/707/707680.png',
              }}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={data}
        renderItem={({item}) => <Product product={item} />}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.productContent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
    height: height,
  },
  item: {
    backgroundColor: '#fff',
    marginVertical: 12,
    marginHorizontal: 10,
    height: height / 3.3,
    width: width / 2.2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontSize: 32,
  },
  image: {
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 5,
  },
  productContent: {
    paddingBottom: 120,
    backgroundColor: '#F2FAEF',
  },
  heading: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
  },
  paragrapgh: {
    fontSize: 14,
    fontWeight: '300',
  },
  prizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  wrapperContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#B6DD9E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  largeHeading: {
    fontSize: 30,
    fontWeight: '700',
  },
  input: {
    height: 50,
    width: width * 0.8,
    backgroundColor: '#F1F1F3',
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  searchBtn: {
    height: 50,
    width: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: -10,
    backgroundColor: '#88CF67',
  },
});

export default App;
