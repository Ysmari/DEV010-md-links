// Contiene las "microfunciones" o funciones auxiliares que son necesarias para llevar a cabo el proceso principal en mdLinks.

const fs = require('fs') // Módulo para interactuar con el sistema de archivos.
const path = require('path') // Módulo para trabajar con rutas de archivos.
/* const axios = require('axios') // Módulo para hacer solicitudes HTTP. */
// const marked = require('marked')

// Verifica si la ruta es absoluta
const isAbsolutePath = ruta => path.isAbsolute(ruta)

// Convierte una ruta relativa a absoluta
const convertToAbsolutePath = ruta => path.resolve(ruta)

// Verifica si la ruta existe
const pathExists = ruta => fs.existsSync(ruta)

// Verifica si es un archivo Markdown
const isMarkdown = ruta => path.extname(ruta) === '.md'

// Extrae los enlaces del archivo Markdown
const extractLinks = ruta => {
  const content = fs.readFileSync(ruta, 'utf-8') // cambiar a forma asincrona
  const regex = /\[([^[]+)\]\((http[s]?:\/\/[^)]+)\)/g

  let match
  const links = []
  // Extrae todos los enlaces que coincidan con la expresión regular.
  while ((match = regex.exec(content)) !== null) {
    links.push({
      text: match[1],
      href: match[2]
    })
  }

  return links
}
// Valida un enlace, comprobando su estado con una solicitud HTTP.
/* const validateLink = (link) => {
  return axios.get(link.href)
    .then(response => {
      return {
        ...link,
        status: response.status,
        statusText: response.statusText
      }
    })
    .catch(error => {
      return {
        ...link,
        status: (error.response) ? error.response.status : 'No Response',
        statusText: (error.response) ? error.response.statusText : 'Failed to fetch'
      }
    })
} */

// Exporta las funciones para que puedan ser utilizadas en otros archivos.
module.exports = {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks
  /* validateLink */
}
