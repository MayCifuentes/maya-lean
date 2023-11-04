import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LenguaComponent from '../components/lenguaComponent';

const AprenderIdiomas = ({route}) => {
  const [responseData, setResponseData] = useState(null);
  const { id, testRoute } = route.params;
  const idUser = id;
  const lengua_id = 2;
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
      { nombre: "Ixim", tipo: "Fruta", traduccion: "Maíz", audio: require("../../assets/sound/ixim.mp3") },
      { nombre: "Tz'ib'il", tipo: "Fruta", traduccion: "Banana", audio: require("../../assets/sound/chibil.mp3") },
      { nombre: "K'ik", tipo: "Fruta", traduccion: "Fresa", audio: require("../../assets/sound/kik.mp3") },
      { nombre: "Wan", tipo: "Fruta", traduccion: "Uva", audio: require("../../assets/sound/wan.mp3") },
      { nombre: "Chiriyá", tipo: "Fruta", traduccion: "Manzana", audio: require("../../assets/sound/chiriya.mp3") }
    ],
    profesiones: [
      { nombre: "Nawal", tipo: "Profesión", traduccion: "Doctor(a)", audio: require("../../assets/sound/nawal.mp3") },
      { nombre: "Ajaw", tipo: "Profesión", traduccion: "Maestro(a)", audio: require("../../assets/sound/ajaw.mp3") },
      { nombre: "Ri K'iche'", tipo: "Profesión", traduccion: "Traductor(a) k'iche'", audio: require("../../assets/sound/rikiche.mp3") },
      { nombre: "Ajpop", tipo: "Profesión", traduccion: "Agricultor(a)", audio: require("../../assets/sound/ajpop.mp3") },
      { nombre: "Tata", tipo: "Profesión", traduccion: "Papá", audio: require("../../assets/sound/tata.mp3") }
    ],
    saludos: [
      { nombre: "Ruk'ux", tipo: "Saludo", traduccion: "Buenos días", audio: require("../../assets/sound/grabacion.mp3") },
      { nombre: "Tzetik", tipo: "Saludo", traduccion: "Hola, ¿cómo estás?", audio: require("../../assets/sound/grabacion.mp3") },
      { nombre: "Ati't", tipo: "Saludo", traduccion: "Hola, amigo(a)", audio: require("../../assets/sound/audio.mp3") },
      { nombre: "Ko'xomalik", tipo: "Saludo", traduccion: "¿Cómo ha estado su día?", audio: require("../../assets/sound/audio.mp3") },
      { nombre: "In tijoxik", tipo: "Saludo", traduccion: "Te extrañé", audio: require("../../assets/sound/audio.mp3") }
    ],
    numeros: [
      { nombre: "Jun", tipo: "Número", traduccion: "Uno", audio: require("../../assets/sound/jun.mp3") },
      { nombre: "Kaaw", tipo: "Número", traduccion: "Dos", audio: require("../../assets/sound/kaaw.mp3") },
      { nombre: "Oxib", tipo: "Número", traduccion: "Tres", audio: require("../../assets/sound/oxib.mp3") },
      { nombre: "kijeb'", tipo: "Número", traduccion: "Cuatro", audio: require("../../assets/sound/kijeb.mp3") },
      { nombre: "Job'", tipo: "Número", traduccion: "Cinco", audio: require("../../assets/sound/job.mp3") }
    ],
    familia: [
      { nombre: "Naan'", tipo: "Familiar", traduccion: "Madre", audio: require("../../assets/sound/naan.mp3") },
      { nombre: "Tat", tipo: "Familiar", traduccion: "Padre", audio: require("../../assets/sound/tat.mp3") },
      { nombre: "At", tipo: "Familiar", traduccion: "Hermano(a)", audio: require("../../assets/sound/at.mp3") },
      { nombre: "Upuja'j", tipo: "Familiar", traduccion: "Amigo(a)", audio: require("../../assets/sound/upujaj.mp3") },
      { nombre: "Tux", tipo: "Familiar", traduccion: "Hijo(a)", audio: require("../../assets/sound/Tux.mp3") }
    ],
    transportes: [
      { nombre: "B'iinem", tipo: "Transporte", traduccion: "Caminar", audio: require("../../assets/sound/biinem.mp3") },
      { nombre: "B'isiklet", tipo: "Transporte", traduccion: "Bicicleta", audio: require("../../assets/sound/bisiklet.mp3") },
      { nombre: "Xe'chol", tipo: "Transporte", traduccion: "Automóvil", audio: require("../../assets/sound/xechol.mp3") },
      { nombre: "Jukub'", tipo: "Transporte", traduccion: "Barco", audio: require("../../assets/sound/jukub.mp3") },
      { nombre: "Xo'w", tipo: "Transporte", traduccion: "Avión", audio: require("../../assets/sound/xow.mp3") }
    ]
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