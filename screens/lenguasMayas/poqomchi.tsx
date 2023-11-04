import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LenguaComponent from '../components/lenguaComponent';

const AprenderIdiomas = ({route}) => {
  const [responseData, setResponseData] = useState(null);
  const { id, testRoute } = route.params;
  const idUser = id;
  const lengua_id = 4;
  const lengua = testRoute;
  // Verifica si responseData es un array antes de usar map
  const categorias = [
    { id: 'frutasVerduras', nombre: 'Frutas y Verduras' },
    { id: 'profesiones', nombre: 'Profesiones' },
    { id: 'saludos', nombre: 'Saludos' },
    { id: 'numeros', nombre: 'Números' },
    { id: 'familia', nombre: 'Familia' },
    { id: 'transportes', nombre: 'Transportes' },
  ];
  
  
  const contenidoCategoria = {
    frutasVerduras: [
      { nombre: "Ch'oy", tipo: 'Fruta', traduccion: 'Maíz', audio: require('../../assets/sound/choy.mp3') },
      { nombre: "X'ix", tipo: 'Fruta', traduccion: 'Banana', audio: require('../../assets/sound/xix.mp3') },
      { nombre: "K'ox", tipo: 'Verdura', traduccion: 'Calabaza', audio: require('../../assets/sound/kox.mp3') },
      { nombre: 'Tomaat', tipo: 'Fruta', traduccion: 'Tomate', audio: require('../../assets/sound/tomaat.mp3') },
      { nombre: 'kaqxe', tipo: 'Verdura', traduccion: 'Rabano', audio: require('../../assets/sound/kaqxe.mp3') },
    ],
    profesiones: [
      { nombre: 'Ri', tipo: 'Profesión', traduccion: 'Doctor(a)', audio: require('../../assets/sound/ri.mp3') },
      { nombre: 'Maestro', tipo: 'Profesión', traduccion: 'Maestro(a)', audio: require('../../assets/sound/maestro.mp3') },
      { nombre: 'Ingeniero', tipo: 'Profesión', traduccion: 'Ingeniero(a)', audio: require('../../assets/sound/ingeniero.mp3') },
      { nombre: 'Saqirik', tipo: 'Profesión', traduccion: 'Agricultor(a)', audio: require('../../assets/sound/saqirik.mp3') },
      { nombre: 'Tzunun', tipo: 'Profesión', traduccion: 'Carpintero(a)', audio: require('../../assets/sound/tzunun.mp3') },
    ],
    saludos: [
      { nombre: 'Ri qumaap', tipo: 'Saludo', traduccion: 'Buenos días', audio: require('../../assets/sound/riqumaap.mp3') },
      { nombre: 'Ri tzij', tipo: 'Saludo', traduccion: 'Hola, ¿cómo estás?', audio: require('../../assets/sound/ritzij.mp3') },
      { nombre: 'Tzij', tipo: 'Saludo', traduccion: 'Hola', audio: require('../../assets/sound/tzij.mp3') },
      { nombre: "Xoq q'enel", tipo: 'Saludo', traduccion: '¿Qué tal?', audio: require('../../assets/sound/xoqenel.mp3') },
      { nombre: 'Ri qumaap', tipo: 'Saludo', traduccion: 'Buenas noches', audio: require('../../assets/sound/riqumaan.mp3') },
    ],
    numeros: [
      { nombre: 'Jun', tipo: 'Número', traduccion: 'Uno', audio: require('../../assets/sound/jun.mp3') },
      { nombre: "Chi'waq", tipo: 'Número', traduccion: 'Dos', audio: require('../../assets/sound/chiwaq.mp3') },
      { nombre: 'Oxlajun', tipo: 'Número', traduccion: 'Tres', audio: require('../../assets/sound/oxlajun.mp3') },
      { nombre: "Ch'up", tipo: 'Número', traduccion: 'Cuatro', audio: require('../../assets/sound/chup.mp3') },
      { nombre: "Wuqub'al", tipo: 'Número', traduccion: 'Cinco', audio: require('../../assets/sound/wuqubal.mp3') },
    ],
    familia: [
      { nombre: 'Na', tipo: 'Familiar', traduccion: 'Madre', audio: require('../../assets/sound/na.mp3') },
      { nombre: 'Tata', tipo: 'Familiar', traduccion: 'Padre', audio: require('../../assets/sound/tata.mp3') },
      { nombre: 'Nawali', tipo: 'Familiar', traduccion: 'Hermano(a)', audio: require('../../assets/sound/.mp3') },
      { nombre: "K'alb'al", tipo: 'Familiar', traduccion: 'Abuelo(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nohoq', tipo: 'Familiar', traduccion: 'Tío(a)', audio: require('../../assets/sound/kalbal.mp3') },
    ],
    transportes: [
      { nombre: "Ri q'irik", tipo: 'Transporte', traduccion: 'Caminar', audio: require('../../assets/sound/riqirik.mp3') },
      { nombre: "Ri ts'uk", tipo: 'Transporte', traduccion: 'Bicicleta', audio: require('../../assets/sound/ritsuk.mp3') },
      { nombre: 'Ri qar', tipo: 'Transporte', traduccion: 'Automóvil', audio: require('../../assets/sound/riqar.mp3') },
      { nombre: 'Ri bus', tipo: 'Transporte', traduccion: 'Autobús', audio: require('../../assets/sound/ribus.mp3') },
      { nombre: 'Ri avi', tipo: 'Transporte', traduccion: 'Avión', audio: require('../../assets/sound/riavi.mp3') },
    ],
};

  return (
    <View style={styles.container}>
      <LenguaComponent data={contenidoCategoria} category={categorias} idUser={id} lengua={lengua} lengua_id={lengua_id}/>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AprenderIdiomas;

