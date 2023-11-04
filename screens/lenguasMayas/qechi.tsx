import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LenguaComponent from '../components/lenguaComponent';

const AprenderIdiomas = ({route}) => {
  const [responseData, setResponseData] = useState(null);
  const { id, testRoute } = route.params;
  const idUser = id;
  const lengua_id = 1;
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
      { nombre: 'Xk´ox', tipo: 'Fruta', traduccion: 'Maíz', audio: require('../../assets/sound/xkok.mp3') },
      { nombre: 'Xikin', tipo: 'Fruta', traduccion: 'Banana', audio: require('../../assets/sound/xikin.mp3') },
      { nombre: "K'ox", tipo: 'Verdura', traduccion: 'Calabaza', audio: require('../../assets/sound/kox.mp3') },
      { nombre: 'Tumàat', tipo: 'Fruta', traduccion: 'Tomate', audio: require('../../assets/sound/tumaat.mp3') },
      { nombre: 'Ajuw', tipo: 'Verdura', traduccion: 'Ajo', audio: require('../../assets/sound/ajuw.mp3') },
    ],
    profesiones: [
      { nombre: 'Aj b’anonel', tipo: 'Profesión', traduccion: 'Doctor(a)', audio: require('../../assets/sound/ajbanonel.mp3') },
      { nombre: 'Aj k’utunel', tipo: 'Profesión', traduccion: 'Maestro(a)', audio: require('../../assets/sound/ajkutunel.mp3') },
      { nombre: 'Tatinamit', tipo: 'Profesión', traduccion: 'Ingeniero(a)', audio: require('../../assets/sound/tatinamit.mp3') },
      { nombre: 'Aj k’alom', tipo: 'Profesión', traduccion: 'Agricultor(a)', audio: require('../../assets/sound/ajkalom.mp3') },
      { nombre: "Aj peech’", tipo: 'Profesión', traduccion: 'Carpintero(a)', audio: require('../../assets/sound/ajpeech.mp3') },
    ],
    saludos: [
      { nombre: 'Banuu', tipo: 'Saludo', traduccion: 'Buenos días', audio: require('../../assets/sound/banu.mp3') },
      { nombre: 'Chan ru wankat ', tipo: 'Saludo', traduccion: 'Hola, ¿cómo estás?', audio: require('../../assets/sound/chanru.mp3') },
      { nombre: 'Chowa', tipo: 'Saludo', traduccion: 'Hola', audio: require('../../assets/sound/chowa.mp3') },
      { nombre: 'Chan ru wankat', tipo: 'Saludo', traduccion: '¿Qué tal?', audio: require('../../assets/sound/chanru.mp3') },
      { nombre: 'Banuu', tipo: 'Saludo', traduccion: 'Buenas noches', audio: require('../../assets/sound/banu.mp3') },
    ],
    numeros: [
      { nombre: 'Jun', tipo: 'Número', traduccion: 'Uno', audio: require('../../assets/sound/jun.mp3') },
      { nombre: 'Wiib', tipo: 'Número', traduccion: 'Dos', audio: require('../../assets/sound/wiib.mp3') },
      { nombre: 'Oxim', tipo: 'Número', traduccion: 'Tres', audio: require('../../assets/sound/oxim.mp3') },
      { nombre: 'Kahib', tipo: 'Número', traduccion: 'Cuatro', audio: require('../../assets/sound/kahib.mp3') },
      { nombre: 'oob', tipo: 'Número', traduccion: 'Cinco', audio: require('../../assets/sound/oob.mp3') },
    ],
    familia: [
      { nombre: 'Nabej', tipo: 'Familiar', traduccion: 'Madre', audio: require('../../assets/sound/nabej.mp3') },
      { nombre: 'Yuwabej', tipo: 'Familiar', traduccion: 'Padre', audio: require('../../assets/sound/yuwabej.mp3') },
      { nombre: 'Nawal', tipo: 'Familiar', traduccion: 'Hermano(a)', audio: require('../../assets/sound/nawal.mp3') },
      { nombre: 'Melbej', tipo: 'Familiar', traduccion: 'Abuelo(a)', audio: require('../../assets/sound/Melbej.mp3') },
      { nombre: 'Ikanbej', tipo: 'Familiar', traduccion: 'Tío(a)', audio: require('../../assets/sound/ikanbej.mp3') },
    ],
    transportes: [
      { nombre: "K'ol", tipo: 'Transporte', traduccion: 'Caminar', audio: require('../../assets/sound/kol.mp3') },
      { nombre: 'Xink´aaj', tipo: 'Transporte', traduccion: 'Bicicleta', audio: require('../../assets/sound/xinkaaj.mp3') },
      { nombre: 'Bixab', tipo: 'Transporte', traduccion: 'Automóvil', audio: require('../../assets/sound/bixab.mp3') },
      { nombre: 'Poychi', tipo: 'Transporte', traduccion: 'Autobús', audio: require('../../assets/sound/poychi.mp3') },
      { nombre: 'sosol', tipo: 'Transporte', traduccion: 'Avión', audio: require('../../assets/sound/sosol.mp3') },
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