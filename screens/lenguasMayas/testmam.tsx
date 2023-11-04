import React from 'react';
import { View } from 'react-native';
import ReusableComponent from '../components/testComponent';
import styles from './styles';

const TestAprenderIdiomas = ({route}) => {

  const {lengua_id, id_user, lengua} = route.params;

  
  const contenidoCategoria = {
    frutasVerduras: [
      { nombre: 'Pix', tipo: 'Fruta', traduccion: 'Maíz', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Banaan', tipo: 'Fruta', traduccion: 'Banana', audio: require('../../assets/sound/audio.mp3') },
      { nombre: 'Tzuk', tipo: 'Verdura', traduccion: 'Calabaza', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tomat', tipo: 'Fruta', traduccion: 'Tomate', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Aj', tipo: 'Verdura', traduccion: 'Ajo', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    profesiones: [
      { nombre: 'Ratz´', tipo: 'Profesión', traduccion: 'Doctor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'K´oy', tipo: 'Profesión', traduccion: 'Maestro(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Inhinyero', tipo: 'Profesión', traduccion: 'Ingeniero(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Saqirik', tipo: 'Profesión', traduccion: 'Agricultor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Xtirik', tipo: 'Profesión', traduccion: 'Carpintero(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    saludos: [
      { nombre: 'B´an xchi´m', tipo: 'Saludo', traduccion: 'Buenos días', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri kxolb´a´', tipo: 'Saludo', traduccion: 'Hola, ¿cómo estás?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Saludos', tipo: 'Saludo', traduccion: 'Hola', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'B´an jun kexi´', tipo: 'Saludo', traduccion: '¿Qué tal?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'B´an xk´ab´il', tipo: 'Saludo', traduccion: 'Buenas noches', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    numeros: [
      { nombre: 'Jun', tipo: 'Número', traduccion: 'Uno', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kab´lajuj', tipo: 'Número', traduccion: 'Dos', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Oxlajun', tipo: 'Número', traduccion: 'Tres', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kib', tipo: 'Número', traduccion: 'Cuatro', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Waqsaj', tipo: 'Número', traduccion: 'Cinco', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    familia: [
      { nombre: 'Na', tipo: 'Familiar', traduccion: 'Madre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ati´', tipo: 'Familiar', traduccion: 'Padre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Xukulem', tipo: 'Familiar', traduccion: 'Hermano(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ta´ta', tipo: 'Familiar', traduccion: 'Abuelo(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nohoq', tipo: 'Familiar', traduccion: 'Tío(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    transportes: [
      { nombre: 'Rik´ul', tipo: 'Transporte', traduccion: 'Caminar', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'B´i', tipo: 'Transporte', traduccion: 'Bicicleta', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Vitsij', tipo: 'Transporte', traduccion: 'Automóvil', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Litsij', tipo: 'Transporte', traduccion: 'Autobús', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'K´ulb´al', tipo: 'Transporte', traduccion: 'Avión', audio: require('../../assets/sound/grabacion.mp3') },
    ],
};


  return (
    <View style={styles.container}>
      <ReusableComponent data={contenidoCategoria} lengua_id={lengua_id} id_user={id_user}/>
    </View>
  ); 
};

  
export default TestAprenderIdiomas;


