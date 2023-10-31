//  Contiene la función principal mdLinks
// Utiliza las microfunciones para cumplir con cada paso
// Importando las funciones del archivo app.js

const {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks
  /* validateLink */
} = require('./lib/app')

// Función principal 'mdLinks' que toma una ruta como argumento.
const mdLinks = ruta => {
  return new Promise((resolve, reject) => {
    // Verifica si la ruta es absoluta, si no lo es, la convierte.
    if (!isAbsolutePath(ruta)) {
      ruta = convertToAbsolutePath(ruta)
    }
    // Verifica si la ruta existe.
    if (!pathExists(ruta)) {
      reject(new Error('Error - Ruta no válida.'))
      return // Termina la ejecución si la ruta no es válida.
    }
    // Verifica si la ruta pertenece a un archivo Markdown.
    if (!isMarkdown(ruta)) {
      reject(new Error('Error - No es un archivo Markdown.'))
      return // Termina la ejecución si no es un archivo Markdown.
    }
    // Extrae los enlaces del archivo Markdown.
    const links = extractLinks(ruta)
    // Si no se encontraron enlaces, se rechaza la promesa.
    if (links.length === 0) {
      reject(new Error('Error - No hay enlaces encontrados.'))
      return // Salimos después de rechazar la promesa.
    }
    resolve(links) // Resuelve con los enlaces extraídos.
  })
}

// Ejemplo de uso de la función mdLinks
mdLinks('./README.md')
  .then(links => {
    console.log('Enlaces encontrados:', links)
  })
  .catch(error => {
    console.error(error)
  })
