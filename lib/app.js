// Contiene las "microfunciones" o funciones auxiliares que son necesarias para llevar a cabo el proceso principal en mdLinks.

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const isAbsolutePath = ruta => path.isAbsolute(ruta)
const convertToAbsolutePath = ruta => path.resolve(ruta)
const pathExists = ruta => fs.existsSync(ruta)

const validMarkdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown']
const isMarkdown = ruta => validMarkdownExtensions.includes(path.extname(ruta))

const extractLinks = ruta => {
  return fsPromises.readFile(ruta, 'utf-8')
    .then(content => {
      const regex = /\[([^[]+)\]\((http[s]?:\/\/[^)]+)\)/g
      let match
      const links = []
      while ((match = regex.exec(content)) !== null) {
        links.push({
          text: match[1],
          href: match[2],
          ruta
        })
      }
      if (links.length === 0) {
        return Promise.reject(new Error(`El archivo ${ruta} no contiene enlaces.`))
      }
      return links
    })
    .catch(err => {
      return Promise.reject(new Error('Error al leer el archivo o extraer enlaces: ' + err.message))
    })
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
