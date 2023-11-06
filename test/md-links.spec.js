/* global describe, it, expect */
/* eslint-disable no-unused-vars */
const path = require('path')
const {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks
} = require('../lib/app')

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
        expect(error.message).toBe('Error al leer el archivo o extraer enlaces: El archivo C:\\Users\\Aeronautico\\Desktop\\PROYECTO MD-LINKS\\DEV010-md-links\\example\\archivoSinEnlaces.md no contiene enlaces.')

        done()
      })
  })
})
