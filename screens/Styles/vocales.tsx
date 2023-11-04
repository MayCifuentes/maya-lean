import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5, // Aumenté el padding para que se vea mejor en tablets
  },
  letterContainer: {
    marginBottom: 5, // Reduje el margen inferior para dispositivos más grandes
    alignItems: 'center',
  },
  letter: {
    fontSize: windowWidth > 600 ? 36 : 24, // Aumenté el tamaño de la fuente en tablets
    fontWeight: 'bold',
    marginBottom: 5, // Espaciado inferior adicional en tablets
  },
  image: { 
    width: windowWidth * 0.8, // Tamaño relativo al ancho de la ventana
    height: windowHeight * 0.3, // Tamaño relativo al alto de la ventana
    marginBottom: 5, // Espaciado inferior adicional en tablets
    borderRadius: 5, // Agregué bordes redondeados para mejorar el aspecto
  },
  description: {
    textAlign: 'center',
    fontSize: windowWidth > 600 ? 5 : 16, // Tamaño de fuente ajustado para tablets
    marginTop: 5, // Espaciado superior adicional en tablets
  },
  nextButton: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 50,
    elevation: 10,
    backgroundColor: '#EFEFEF',
  },
  audioButton: {
    backgroundColor: '#0070BA',
  },
  webviewContainer: {
    marginTop: 10, // Espaciado superior adicional en tablets
    paddingHorizontal: 10, // Espaciado lateral adicional en tablets
  },
  imageBackground: {
    flex: 1,
  },
  webview: {
    height: windowHeight * 0.3, // Tamaño relativo al alto de la ventana
    borderRadius: 10, // Agregué bordes redondeados para mejorar el aspecto
    overflow: 'hidden',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  slideImage: {
    width: windowWidth * 0.5, // Tamaño relativo al ancho de la ventana
    height: windowHeight * 0.2, // Tamaño relativo al alto de la ventana
    marginHorizontal: 5, // Espaciado lateral adicional
    borderRadius: 6, // Agregué bordes redondeados para mejorar el aspecto
  },
});

export default styles;
