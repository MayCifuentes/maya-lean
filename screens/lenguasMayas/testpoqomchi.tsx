import React from 'react';
import { View } from 'react-native';
import ReusableComponent from '../components/testComponent';
import styles from './styles';

const TestAprenderIdiomas = ({route}) => {

  const {lengua_id, id_user, lengua} = route.params;

  
  const contenidoCategoria = {
    frutasVerduras: [
      { nombre: "Ch'oy", tipo: 'Fruta', traduccion: 'Maíz', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "X'ix", tipo: 'Fruta', traduccion: 'Banana', audio: require('../../assets/sound/audio.mp3') },
      { nombre: "K'ox", tipo: 'Verdura', traduccion: 'Calabaza', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tomaat', tipo: 'Fruta', traduccion: 'Tomate', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Aj', tipo: 'Verdura', traduccion: 'Ajo', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    profesiones: [
      { nombre: 'Ri', tipo: 'Profesión', traduccion: 'Doctor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Maestro', tipo: 'Profesión', traduccion: 'Maestro(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ingeniero', tipo: 'Profesión', traduccion: 'Ingeniero(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Saqirik', tipo: 'Profesión', traduccion: 'Agricultor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tzunun', tipo: 'Profesión', traduccion: 'Carpintero(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    saludos: [
      { nombre: 'Ri qumaap', tipo: 'Saludo', traduccion: 'Buenos días', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri tzij', tipo: 'Saludo', traduccion: 'Hola, ¿cómo estás?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tzij', tipo: 'Saludo', traduccion: 'Hola', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "Xoq q'enel", tipo: 'Saludo', traduccion: '¿Qué tal?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri qumaap', tipo: 'Saludo', traduccion: 'Buenas noches', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    numeros: [
      { nombre: 'Jun', tipo: 'Número', traduccion: 'Uno', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "Ch'waq", tipo: 'Número', traduccion: 'Dos', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Oxlajun', tipo: 'Número', traduccion: 'Tres', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "Ch'up", tipo: 'Número', traduccion: 'Cuatro', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "Wuqub'al", tipo: 'Número', traduccion: 'Cinco', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    familia: [
      { nombre: 'Na', tipo: 'Familiar', traduccion: 'Madre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tata', tipo: 'Familiar', traduccion: 'Padre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nawal', tipo: 'Familiar', traduccion: 'Hermano(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "K'alb'al", tipo: 'Familiar', traduccion: 'Abuelo(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nohoq', tipo: 'Familiar', traduccion: 'Tío(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    transportes: [
      { nombre: "Ri q'irik", tipo: 'Transporte', traduccion: 'Caminar', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: "Ri ts'uk", tipo: 'Transporte', traduccion: 'Bicicleta', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri qar', tipo: 'Transporte', traduccion: 'Automóvil', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri bus', tipo: 'Transporte', traduccion: 'Autobús', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri avión', tipo: 'Transporte', traduccion: 'Avión', audio: require('../../assets/sound/grabacion.mp3') },
    ],
};

  return (
    <View style={styles.container}>
      <ReusableComponent data={contenidoCategoria} lengua_id={lengua_id} id_user={id_user}/>
    </View>
  ); 
};

  
export default TestAprenderIdiomas;


  

