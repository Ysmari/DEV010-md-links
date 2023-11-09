// Contiene las "microfunciones" o funciones auxiliares que son necesarias para llevar a cabo el proceso principal en mdLinks.

const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const axios = require('axios')

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
        throw new Error(`El archivo ${ruta} no contiene enlaces.`)
      }
      return links
    })
}

const validateLink = link => {
  return axios.get(link.href)
    .then(response => ({
      ...link,
      status: response.status,
      ok: 'OK'
    }))
    .catch(error => ({
      ...link,
      status: error.response ? error.response.status : 0,
      ok: 'Fail'
    }))
}

module.exports = {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks,
  validateLink
}
