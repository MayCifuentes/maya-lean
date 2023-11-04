import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles_component = StyleSheet.create({
  container: {
    flex: 1,
    padding: windowWidth > 600 ? 40 : 20,
    backgroundColor: "#F5F5F5",
  },
  paypalButton: {
    backgroundColor: "#1E88E5",
    paddingHorizontal: windowWidth > 600 ? 30 : 15, // Ajusta el tamaño del padding
    paddingVertical: windowWidth > 600 ? 15 : 10, // Ajusta el tamaño del padding
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  contenidoContainer: {},
  header: {
    fontSize: windowWidth > 600 ? 30 : 20, // Aumenta el tamaño de la fuente para tablets
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  categoriasContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  categoriaButton: {
    paddingHorizontal: windowWidth > 600 ? 15 : 10, // Ajusta el tamaño del padding
    paddingVertical: windowWidth > 600 ? 10 : 6, // Ajusta el tamaño del padding
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  categoriaSeleccionada: {
    backgroundColor: "#FFD700",
  },
  categoriaButtonText: {
    fontSize: windowWidth > 600 ? 24 : 18, // Aumenta el tamaño de la fuente para tablets
    fontWeight: "bold",
    color: "#333",
  },
  buttonText: {
    color: "#FFF",
    fontSize: windowWidth > 600 ? 22 : 16, // Aumenta el tamaño de la fuente para tablets
  },
  landscapeContainer: {
    flex: 3,
    padding: windowWidth > 600 ? 40 : 20,
    backgroundColor: "#000",
    flexDirection: windowWidth > 600 ? "row" : "column",
  },
  itemContainer: {
    backgroundColor: "#FFF",
    padding: 8,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  itemNombre: {
    fontSize: windowWidth > 600 ? 24 : 18, // Aumenta el tamaño de la fuente para tablets
    fontWeight: "bold",
    color: "#333",
  },
  itemTipo: {
    fontSize: windowWidth > 600 ? 22 : 16, // Aumenta el tamaño de la fuente para tablets
    color: "#666",
  },
  itemTraduccion: {
    fontSize: windowWidth > 600 ? 22 : 16, // Aumenta el tamaño de la fuente para tablets
    color: "#388E3C",
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
  },
  audioButton: {
    backgroundColor: "#1E88E5",
    paddingHorizontal: windowWidth > 600 ? 20 : 15, // Ajusta el tamaño del padding
    paddingVertical: windowWidth > 600 ? 12 : 8, // Ajusta el tamaño del padding
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  audioButtonText: {
    color: "#FFF",
    fontSize: windowWidth > 600 ? 20 : 14, // Aumenta el tamaño de la fuente para tablets
  },
});

export default styles_component;
