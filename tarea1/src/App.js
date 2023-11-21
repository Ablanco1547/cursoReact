import { ListaEstudiantes } from "./ListaEstudiantes";
import { ListaEstudiantesClass } from "./ListaEstudiantesClass";
import { NewsApi } from "./NewsApi";

const listaEstudiantes = [
  {
    nombre: "José",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Luis",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Cristian",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Fiorella",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Yensy",
    apellido: "Pérez",
    edad: 20,
  },

]
function App() {
  return (
    <div className="bg-gris">

      <ListaEstudiantes listaEstudiantes={listaEstudiantes} />
      <ListaEstudiantesClass listaEstudiantes={listaEstudiantes} />
      <NewsApi />
    </div>
  );
}

export default App;
