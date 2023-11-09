// index.js
// Importando las funciones necesarias del archivo app.js y módulos nativos de Node.js
// index.js
const {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks,
  validateLink
} = require('./lib/app')

const mdLinks = (ruta, validate = false) => {
  return new Promise((resolve, reject) => {
    const absolutePath = isAbsolutePath(ruta) ? ruta : convertToAbsolutePath(ruta)

    if (!pathExists(absolutePath)) {
      return reject(new Error('Error - Ruta no válida.'))
    }

    if (!isMarkdown(absolutePath)) {
      return reject(new Error('Error - El archivo no es un archivo Markdown.'))
    }

    extractLinks(absolutePath)
      .then(links => {
        if (validate) {
          return Promise.all(links.map(validateLink))
        }
        console.table(links)
        return links
      })
      .then(results => {
        resolve(results)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Ejemplo de uso de la función mdLinks
mdLinks('./example/readmeEjemplo.md')
  .then(links => {
    console.log('Enlaces encontrados:', links)
  })
  .catch(error => {
    console.error('Error:', error.message)
  })

// Ejemplo de uso de la función mdLinks con validación
mdLinks('./example/readmeEjemplo.md', true)
  .then(validatedLinks => {
    console.log('Enlaces validados:', validatedLinks)
  })
  .catch(error => {
    console.error('Error durante la validación de los enlaces:', error.message)
  })

module.exports = mdLinks
