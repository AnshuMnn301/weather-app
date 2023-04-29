import React from 'react';
import {View, Image, Text, Button} from 'react-native';
interface WeatherType {
  weather_icons: Array<string>;
  temperature: string;
  wind_speed: string;
  precip: string;
}
export default function Country(props: any) {
  const [weatherData, setWatherData] = React.useState<WeatherType | null>(null);
  const handleGetWeather = async () => {
    const resp = await fetch(
      `http://api.weatherstack.com/current?access_key=8c483281e15083c4d1a2bb16bccf1736&query=${props.capital}`,
    );
    const data = await resp.json();
    setWatherData(data?.current);
  };
  return (
    <View
      style={{
        backgroundColor: 'silver',
        paddingTop: 10,
        alignItems: 'center',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        marginVertical: 5,
        width: '95%',
        marginLeft: 10,
      }}>
      <Image
        source={{uri: props.imageSource}}
        style={{width: '100%', height: 100, resizeMode: 'contain'}}
      />
      <Text style={{marginVertical: 5, fontWeight: 'bold'}}>{props.title}</Text>
      <Button title="Get Weather Forecast" onPress={handleGetWeather} />
      <View style={{paddingBottom: 10}} />
      {weatherData !== null && (
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightgray',
            width: '100%',
          }}>
          <Image
            source={{uri: weatherData?.weather_icons[0]}}
            style={{width: 50, height: 50}}
          />
          <View style={{marginLeft: 15}}>
            <Text>
              Temprature: {weatherData.temperature} {'\n'}Precipitation:
              {weatherData.precip}
              {'\n'}Wind speed: {weatherData.wind_speed}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
