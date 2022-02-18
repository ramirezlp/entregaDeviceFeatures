import {FlatList} from 'react-native';
import PlaceItem from '../components/PlaceItem/index';
import React from 'react';
import {useSelector} from 'react-redux';

const PlaceListScreen = ({navigation}) => {
  const places = useSelector(state => state.places.places);
  console.warn(places);

  const onSelectDetail = () => {
    navigation.navigate('Detalle');
  };

  const renderItem = ({item}) => (
    <PlaceItem
      title={item.title}
      image={item.image}
      address="123 street, city, country"
      onSelect={onSelectDetail}
    />
  );

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default PlaceListScreen;
