import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: windowWidth > 600 ? 40 : 20,
    backgroundColor: '#f0f0f0',
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: windowWidth > 600 ? 48 : 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E272E',
  },
  resultSummary: {
    fontSize: windowWidth > 600 ? 30 : 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#57606F',
  },
  resultMessage: {
    fontSize: windowWidth > 600 ? 34 : 28,
    textAlign: 'center',
    color: '#2980B9',
  },
  questionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: windowWidth > 600 ? 36 : 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E4053',
  },
  progressText: {
    fontSize: windowWidth > 600 ? 24 : 20,
    marginBottom: 20,
    color: '#57606F',
  },
  question: {
    fontSize: windowWidth > 600 ? 26 : 23,
    marginBottom: 15,
    textAlign: 'center',
    color: 'blue',
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    maxWidth: '80%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#2E4053',
    overflow: 'hidden',
  },
  selectedOption: {
    borderColor: '#2980B9',
  },
  optionText: {
    fontSize: windowWidth > 600 ? 22 : 18,
    color: '#2E4053',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#2980B9',
    width: windowWidth > 600 ? '50%' : '60%',
    paddingHorizontal: 24,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: windowWidth > 600 ? 40 : 30,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: windowWidth > 600 ? 24 : 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
