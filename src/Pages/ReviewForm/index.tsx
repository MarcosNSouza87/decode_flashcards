import React from 'react';
import * as DS from 'react-native';
import {Header} from '../../components/Header';
import {styles as S} from './styles';
import {useForm, Controller} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ICard} from '../../@types/card';
import {UploadContext} from '../../context/uploadContext';

export default function ReviewForm({navigation}: any) {
  const {control, handleSubmit} = useForm<ICard>({
    defaultValues: {
      front: '',
      back: '',
    },
  });
  const {upload, setUpload} = React.useContext(UploadContext);

  const onSubmit = async (data: ICard) => {
    const payload = {
      ...data,
      id: new Date().getTime().toString(),
    };
    const list = await AsyncStorage.getItem('@list');
    const newList = list ? JSON.parse(list) : [];
    newList.push(payload);
    await AsyncStorage.setItem('@list', JSON.stringify(newList));
    navigation.navigate('ReviewListCard');
    if (!upload) {
      setUpload(true);
    }
  };

  return (
    <DS.View style={S.container}>
      <Header title={'Novo \n Cartão'} isBackButton />
      <DS.Text style={S.title}>
        Expanda sua lista adicionando novas palavras para fixar.
      </DS.Text>
      <DS.View style={S.cards}>
        <Controller
          control={control}
          name="front"
          render={({field: {onChange, value}}) => (
            <DS.TextInput
              onChangeText={onChange}
              value={value}
              style={S.input}
              placeholder="Frente do Cartao..."
            />
          )}
        />
        <Controller
          control={control}
          name="back"
          render={({field: {onChange, value}}) => (
            <DS.TextInput
              style={S.input}
              placeholder="Verso do Cartao..."
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </DS.View>
      <DS.View style={S.buttons}>
        <DS.TouchableOpacity style={S.button} onPress={handleSubmit(onSubmit)}>
          <DS.Text style={S.buttonText}>Salvar</DS.Text>
        </DS.TouchableOpacity>
      </DS.View>
    </DS.View>
  );
}
