import React from 'react';
import {Button, TextInput, View} from 'react-native';

export default function Home({navigation}: any) {
  const [text, OnChangeText] = React.useState('');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}>
      <TextInput
        placeholder="Enter country name"
        style={{
          width: '60%',
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          marginRight: 10,
          fontSize: 20,
        }}
        value={text}
        onChangeText={OnChangeText}
      />
      <Button
        title="Search"
        disabled={text === ''}
        onPress={() =>
          navigation.navigate('Details', {
            country: text,
          })
        }
      />
    </View>
  );
}
