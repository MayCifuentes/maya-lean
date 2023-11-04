import React from 'react';
import { View } from 'react-native';
import ReusableComponent from '../components/testComponent';
import styles from './styles';

const TestAprenderIdiomas = ({route}) => {

  const {lengua_id, id_user, lengua} = route.params;

  const contenidoCategoria = {
    frutasVerduras: [
      { nombre: 'Ixim', tipo: 'Fruta', traduccion: 'Maíz', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Xik´in', tipo: 'Fruta', traduccion: 'Banana', audio: require('../../assets/sound/audio.mp3') },
      { nombre: 'Jok´ox', tipo: 'Verdura', traduccion: 'Calabaza', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kaq´ik', tipo: 'Fruta', traduccion: 'Tomate', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Aj', tipo: 'Verdura', traduccion: 'Ajo', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    profesiones: [
      { nombre: 'Kaqchikel', tipo: 'Profesión', traduccion: 'Doctor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ruk´ux', tipo: 'Profesión', traduccion: 'Maestro(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri xqab´anal', tipo: 'Profesión', traduccion: 'Ingeniero(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kub´ul', tipo: 'Profesión', traduccion: 'Agricultor(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tijonel', tipo: 'Profesión', traduccion: 'Carpintero(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    saludos: [
      { nombre: 'Quin xin kaq', tipo: 'Saludo', traduccion: 'Buenos días', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri wach k´aslemal', tipo: 'Saludo', traduccion: 'Hola, ¿cómo estás?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ajau', tipo: 'Saludo', traduccion: 'Hola', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kanam', tipo: 'Saludo', traduccion: '¿Qué tal?', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ri q´ele wuj', tipo: 'Saludo', traduccion: 'Buenas noches', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    numeros: [
      { nombre: 'Jun', tipo: 'Número', traduccion: 'Uno', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Kaaw', tipo: 'Número', traduccion: 'Dos', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Oxlajun', tipo: 'Número', traduccion: 'Tres', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Q´aaw', tipo: 'Número', traduccion: 'Cuatro', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Wajxaqib´', tipo: 'Número', traduccion: 'Cinco', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    familia: [
      { nombre: 'Ama', tipo: 'Familiar', traduccion: 'Madre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Atite´', tipo: 'Familiar', traduccion: 'Padre', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nooj', tipo: 'Familiar', traduccion: 'Hermano(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Tata', tipo: 'Familiar', traduccion: 'Abuelo(a)', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Nohoch', tipo: 'Familiar', traduccion: 'Tío(a)', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    transportes: [
      { nombre: 'Kiuk´el', tipo: 'Transporte', traduccion: 'Caminar', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Waqxaqib´ k´ij', tipo: 'Transporte', traduccion: 'Bicicleta', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Ak´abal', tipo: 'Transporte', traduccion: 'Automóvil', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Li k´ol', tipo: 'Transporte', traduccion: 'Autobús', audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'K´olb´al', tipo: 'Transporte', traduccion: 'Avión', audio: require('../../assets/sound/grabacion.mp3') },
    ],
    oraciones: [
      { nombre: 'Me gusta comer Ixim en el desayuno.', tipo: 'oraciones',  traduccion: "Ixim jich'om achi' k'utin.", audio: require('../../assets/sound/grabacion.mp3') },
      { nombre: 'Xik´in es una fruta muy sabrosa.', tipo: 'oraciones', traduccion: "Xik´in k'utin richin ri q'eqchi.", audio: require('../../assets/sound/grabacion.mp3') },
      {
        nombre: 'Preparamos una ensalada con Jok´ox.',
        tipo: 'oraciones',
        traduccion: "Jok´ox ri q'eqchi' k'utin choman ri rik'in.",
        audio: require('../../assets/sound/grabacion.mp3') 
      },
      {
        nombre: 'El Kaq´ik es un ingrediente tradicional en nuestra cocina.',
        tipo: 'oraciones',
        traduccion: "Kaq´ik ri jich'om k'utin ri xinabajul xechirichaj.",
        audio: require('../../assets/sound/grabacion.mp3') 
      },
      {
        nombre: 'El aroma del Aj agrega sabor a nuestras comidas.',
        tipo: 'oraciones',
        traduccion: "Aj ri xinab' k'utin rach'an ri ch'ok ri xinab'.",
        audio: require('../../assets/sound/grabacion.mp3') 
      },
    ]
};

  return (
    <View style={styles.container}>
      <ReusableComponent data={contenidoCategoria} lengua_id={lengua_id} id_user={id_user}/>
    </View>
  ); 
};

  
export default TestAprenderIdiomas;


