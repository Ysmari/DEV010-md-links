/* global describe, it, expect */
/* eslint-disable no-unused-vars */
/* global jest */
const path = require('path')
const axios = require('axios')
const {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks,
  validateLink
} = require('../lib/app')
jest.mock('axios')

describe('Funciones auxiliares', () => {
  it('isAbsolutePath - Debería identificar correctamente las rutas absolutas', () => {
    expect(isAbsolutePath('/ruta/absoluta')).toBe(true)
    expect(isAbsolutePath('./ruta/relativa')).toBe(false)
  })

  it('convertToAbsolutePath - Debería convertir rutas relativas a absolutas', () => {
    const relativePath = './archivo.md'
    const expectedPath = path.resolve(relativePath)
    expect(convertToAbsolutePath(relativePath)).toBe(expectedPath)
  })

  it('pathExists - Debería verificar si una ruta de archivo existe', () => {
    const testFilePath = path.resolve(__dirname, '../example/readmeEjemplo.md')
    expect(pathExists(testFilePath)).toBe(true)
  })

  it('isMarkdown - Debería identificar archivos Markdown correctamente', () => {
    expect(isMarkdown('archivo.md')).toBe(true)
    expect(isMarkdown('archivo.txt')).toBe(false)
  })

  it('isMarkdown - Debería identificar un archivo Markdown vacío', () => {
    expect(isMarkdown('emptyMarkdown.md')).toBe(true)
  })
})
describe('Funciones de extracción de enlaces', () => {
  const testFilePath = path.resolve(__dirname, '../example/readmeEjemplo.md')
  const noLinkFilePath = path.resolve(__dirname, '../example/archivoSinEnlaces.md')

  it('extractLinks - Debería extraer enlaces de archivos Markdown', done => {
    const expectedLinks = [
      { text: 'Node.js', href: 'https://nodejs.org/es/', ruta: testFilePath },
      { text: 'motor de JavaScript V8 de Chrome', href: 'https://developers.google.com/v8/', ruta: testFilePath },
      { text: 'Enlace con espacios', href: 'https://google com', ruta: testFilePath },
      { text: 'Enlace roto', href: 'https://este-enlace-no-existe123456789.com', ruta: testFilePath },
      { text: 'Enlace con caracteres especiales', href: 'https://google.com/?query=ejemplo%20de%20búsqueda', ruta: testFilePath }
    ]

    extractLinks(testFilePath)
      .then(links => {
        expect(links.sort((a, b) => a.href.localeCompare(b.href)))
          .toEqual(expectedLinks.sort((a, b) => a.href.localeCompare(b.href)))
        done()
      })
      .catch(error => done(error))
  })

  it('debería rechazar con un error si el archivo no contiene enlaces', done => {
    extractLinks(noLinkFilePath)
      .then(() => {
        done(new Error('Se esperaba que la función rechazara, pero se resolvió.'))
      })
      .catch(error => {
        expect(error.message).toBe(`El archivo ${noLinkFilePath} no contiene enlaces.`)
        done()
      })
  })
})
describe('Validación de enlaces', () => {
  const axios = require('axios') // Obtén la versión mockeada de axios

  it('validateLink - Debería resolver con el estado y texto "OK" para un enlace válido', done => {
    const link = {
      href: 'https://nodejs.org/es/',
      text: 'Node.js',
      ruta: '/ruta/al/archivo.md'
    }
    // Configura axios para simular una respuesta exitosa para esta URL
    axios.get.mockResolvedValueOnce({ status: 200 })

    validateLink(link).then(result => {
      expect(result).toEqual({ ...link, status: 200, ok: 'OK' })
      done()
    })
  })

  it('validateLink - Debería resolver con el estado "Fail" para un enlace con error de red', done => {
    const link = {
      href: 'https://este-enlace-no-existe123456789.com',
      text: 'Enlace roto',
      ruta: '/ruta/al/archivo.md'
    }
    // Configura axios para simular un error de red
    axios.get.mockRejectedValueOnce({ response: null })

    validateLink(link).then(result => {
      expect(result).toEqual({ ...link, status: 0, ok: 'Fail' })
      done()
    })
  })

  it('validateLink - Debería resolver con el estado y texto "Fail" para un enlace no válido con respuesta de servidor', done => {
    const link = {
      href: 'https://pagina-con-error-500.com',
      text: 'Error interno del servidor',
      ruta: '/ruta/al/archivo.md'
    }
    // Configura axios para simular una respuesta de error 500 del servidor
    axios.get.mockRejectedValueOnce({ response: { status: 500 } })

    validateLink(link).then(result => {
      expect(result).toEqual({ ...link, status: 500, ok: 'Fail' })
      done()
    })
  })
})
