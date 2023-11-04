import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LenguaComponent from '../components/lenguaComponent';

const AprenderIdiomas = ({route}) => {
  const [responseData, setResponseData] = useState(null);
  const { id, testRoute } = route.params;
  const idUser = id;
  const lengua_id = 3;
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
      { nombre: 'Pix', tipo: 'Fruta', traduccion: 'Maíz', audio: require('../../assets/sound/pix.mp3') },
      { nombre: 'Banaan', tipo: 'Fruta', traduccion: 'Banana', audio: require('../../assets/sound/banaan.mp3') },
      { nombre: 'Tzuk', tipo: 'Verdura', traduccion: 'Calabaza', audio: require('../../assets/sound/tzuk.mp3') },
      { nombre: 'Tomat', tipo: 'Fruta', traduccion: 'Tomate', audio: require('../../assets/sound/tomat.mp3') },
      { nombre: 'Aji', tipo: 'Verdura', traduccion: 'Ajo', audio: require('../../assets/sound/aji.mp3') },
    ],
    profesiones: [
      { nombre: 'Ratz´', tipo: 'Profesión', traduccion: 'Doctor(a)', audio: require('../../assets/sound/ratz.mp3') },
      { nombre: 'K´oy', tipo: 'Profesión', traduccion: 'Maestro(a)', audio: require('../../assets/sound/koy.mp3') },
      { nombre: 'Inhinyero', tipo: 'Profesión', traduccion: 'Ingeniero(a)', audio: require('../../assets/sound/inhinyero.mp3') },
      { nombre: 'Saqirik', tipo: 'Profesión', traduccion: 'Agricultor(a)', audio: require('../../assets/sound/saqirik.mp3') },
      { nombre: 'Xtirik', tipo: 'Profesión', traduccion: 'Carpintero(a)', audio: require('../../assets/sound/xtirik.mp3') },
    ],
    saludos: [
      { nombre: 'B´an xchi´m', tipo: 'Saludo', traduccion: 'Buenos días', audio: require('../../assets/sound/banxchim.mp3') },
      { nombre: 'Ri kxolb´a´', tipo: 'Saludo', traduccion: 'Hola, ¿cómo estás?', audio: require('../../assets/sound/rikxolba.mp3') },
      { nombre: 'okix', tipo: 'Saludo', traduccion: 'Hola', audio: require('../../assets/sound/okix.mp3') },
      { nombre: 'B´an jun kexi´', tipo: 'Saludo', traduccion: '¿Qué tal?', audio: require('../../assets/sound/ban jun kexi.mp3') },
      { nombre: 'B´an xk´ab´il', tipo: 'Saludo', traduccion: 'Buenas noches', audio: require('../../assets/sound/banxkabil.mp3') },
    ],
    numeros: [
      { nombre: 'Jun', tipo: 'Número', traduccion: 'Uno', audio: require('../../assets/sound/jun.mp3') },
      { nombre: 'Kab´e', tipo: 'Número', traduccion: 'Dos', audio: require('../../assets/sound/kabe.mp3') },
      { nombre: 'Oxe', tipo: 'Número', traduccion: 'Tres', audio: require('../../assets/sound/oxe.mp3') },
      { nombre: 'Kyaje', tipo: 'Número', traduccion: 'Cuatro', audio: require('../../assets/sound/kyaje.mp3') },
      { nombre: 'Jiwe', tipo: 'Número', traduccion: 'Cinco', audio: require('../../assets/sound/jiwe.mp3') },
    ],
    familia: [
      { nombre: 'Na', tipo: 'Familiar', traduccion: 'Madre', audio: require('../../assets/sound/na.mp3') },
      { nombre: 'Atil´', tipo: 'Familiar', traduccion: 'Padre', audio: require('../../assets/sound/atil.mp3') },
      { nombre: 'Xukulem', tipo: 'Familiar', traduccion: 'Hermano(a)', audio: require('../../assets/sound/xukulem.mp3') },
      { nombre: 'Taita', tipo: 'Familiar', traduccion: 'Abuelo(a)', audio: require('../../assets/sound/taita.mp3') },
      { nombre: 'Nohoq', tipo: 'Familiar', traduccion: 'Tío(a)', audio: require('../../assets/sound/nohoq.mp3') },
    ],
    transportes: [
      { nombre: 'Rik´ul', tipo: 'Transporte', traduccion: 'Caminar', audio: require('../../assets/sound/rikul.mp3') },
      { nombre: 'Be´i', tipo: 'Transporte', traduccion: 'Bicicleta', audio: require('../../assets/sound/bei.mp3') },
      { nombre: 'Vitsij', tipo: 'Transporte', traduccion: 'Automóvil', audio: require('../../assets/sound/vitsij.mp3') },
      { nombre: 'Litsij', tipo: 'Transporte', traduccion: 'Autobús', audio: require('../../assets/sound/litsij.mp3') },
      { nombre: 'K´ulb´al', tipo: 'Transporte', traduccion: 'Avión', audio: require('../../assets/sound/kulbal.mp3') },
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

