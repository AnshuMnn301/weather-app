import React from 'react';
import {View, FlatList} from 'react-native';
import Country from '../components/Country';
import {fetchCountryDetails} from '../utils';

export default function Details({route}: any) {
  const {country} = route.params;
  const [countryDetails, setCountryDetails] = React.useState(null);
  React.useEffect(() => {
    const fetchAsyncWrapper = async (text: string) => {
      const data = await fetchCountryDetails(text);
      setCountryDetails(data);
    };
    fetchAsyncWrapper(country);
  }, [country]);

  const renderItem = ({item}: any) => (
    <Country
      title={item?.name?.common}
      imageSource={item?.flags?.png}
      latlng={item.capitalInfo?.latlng}
      capital={item.capital[0]}
    />
  );
  return (
    <View style={{paddingVertical: 10, flex: 1}}>
      <FlatList
        data={countryDetails}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
