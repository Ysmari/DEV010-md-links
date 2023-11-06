//  Contiene la función principal mdLinks
// Utiliza las microfunciones para cumplir con cada paso
// Importando las funciones del archivo app.js

const {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks
} = require('./lib/app')

const fs = require('fs')
const path = require('path')

const isDirectory = ruta => fs.lstatSync(ruta).isDirectory()

const mdLinks = (ruta) => {
  return new Promise((resolve, reject) => {
    // Verifica si la ruta es absoluta, si no lo es, la convierte.
    if (!isAbsolutePath(ruta)) {
      console.log('Convirtiendo ruta relativa a absoluta...')
      ruta = convertToAbsolutePath(ruta)
    }

    // Verifica si la ruta existe.
    if (!pathExists(ruta)) {
      return reject(new Error('Error - Ruta no válida.'))
    }

    if (isDirectory(ruta)) {
      // Si es un directorio, leemos el contenido.
      const files = fs.readdirSync(ruta)
      const markdownFiles = files.filter(file => isMarkdown(file))

      if (markdownFiles.length === 0) {
        return reject(new Error('El directorio no contiene archivos Markdown.'))
      }

      // Procesamos cada archivo Markdown en el directorio.
      Promise.all(markdownFiles.map(file => extractLinks(path.join(ruta, file))))
        .then(results => {
          // Concatenamos todos los enlaces de todos los archivos.
          const links = [].concat.apply([], results)
          if (links.length === 0) {
            return reject(new Error('Los archivos no contienen enlaces.'))
          }
          resolve(links)
        })
        .catch(err => {
          reject(new Error('Error al extraer los enlaces: ' + err.message))
        })
    } else {
      // Verifica si la ruta pertenece a un archivo Markdown.
      if (!isMarkdown(ruta)) {
        return reject(new Error(`El archivo ${ruta} no es un archivo Markdown válido.`))
      }

      // Extrae los enlaces del archivo Markdown.
      extractLinks(ruta)
        .then(links => {
          // Si no se encontraron enlaces, rechaza la promesa.
          if (links.length === 0) {
            return reject(new Error('El archivo no contiene enlaces.'))
          }
          console.table(links)
          resolve(links) // Resuelve con los enlaces extraídos.
        })
        .catch(err => {
          reject(new Error('Error al extraer los enlaces: ' + err.message))
        })
    }
  })
}

// Ejemplo de uso de la función mdLinks
mdLinks('./example/readmeEjemplo.md')
  .then(links => {
    console.log('Enlaces encontrados:', links)
  })
  .catch(error => {
    console.error(error.message)
  })
