import { gptTurboEngine } from "./services/openaiService";
import { DatabaseService } from "./services/databaseService";

const databaseService = new DatabaseService();

async function main() {
  // Ejemplo de entrada de usuario
  const userInput =
    "Incidente: Fallo del servidor, Nivel: Alto, Descripción: El servidor principal no responde, Fecha: 2023-04-16";

  // Extraer la instrucción SQL utilizando el servicio OpenAI
  const sqlStatement = await gptTurboEngine(userInput);

  // Extraer valores de la instrucción SQL
  const valuesRegex = /VALUES\s*\((.*?)\)/i;
  const match = valuesRegex.exec(sqlStatement);

  if (match) {
    const valuesString = match[1];
    const values = valuesString
      .split(",")
      .map((value) => value.trim().replace(/^'(.*)'$/, "$1"));

    if (values.length === 4) {
      const incident = {
        name: values[0],
        level: values[1],
        description: values[2],
        date: values[3],
      };

      // Agregar el incidente a la base de datos
      databaseService.addIncident(incident);
    } else {
      console.error("Error al extraer valores de la instrucción SQL");
    }
  } else {
    console.error("Error al extraer valores de la instrucción SQL");
  }

  // Mostrar todos los incidentes en la base de datos
  console.log(databaseService.getAllIncidents());
}

main().catch((error) => console.error(error));

