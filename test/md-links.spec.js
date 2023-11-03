/* const mdLinks = require('../')

describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!')
  })
}) */

/* eslint-env jest */

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn()
  },
  existsSync: jest.fn()
}))

const path = require('path')
const fsPromises = require('fs').promises
const fs = require('fs')
const {
  isAbsolutePath,
  convertToAbsolutePath,
  pathExists,
  isMarkdown,
  extractLinks
} = require('../lib/app')

describe('isAbsolutePath', () => {
  it('should return true for absolute paths', () => {
    expect(isAbsolutePath('/absolute/path/to/file.md')).toBe(true)
  })

  it('should return false for relative paths', () => {
    expect(isAbsolutePath('./relative/path/to/file.md')).toBe(false)
  })
})
describe('convertToAbsolutePath', () => {
  it('should convert a relative path to an absolute path', () => {
    const relativePath = './relative/path'
    const absolutePath = path.resolve(relativePath)
    expect(convertToAbsolutePath(relativePath)).toBe(absolutePath)
  })
})
describe('pathExists', () => {
  it('should return true if path exists', () => {
    fs.existsSync.mockReturnValue(true)
    expect(pathExists('/path/to/existing/file.md')).toBe(true)
  })

  it('should return false if path does not exist', () => {
    fs.existsSync.mockReturnValue(false)
    expect(pathExists('/path/to/nonexistent/file.md')).toBe(false)
  })
})
describe('isMarkdown', () => {
  it('should recognize valid markdown files', () => {
    expect(isMarkdown('/path/to/file.md')).toBe(true)
    expect(isMarkdown('/path/to/file.mkd')).toBe(true)
    // ... para otros formatos válidos
  })

  it('should return false for other extensions', () => {
    expect(isMarkdown('/path/to/file.txt')).toBe(false)
    expect(isMarkdown('/path/to/file.doc')).toBe(false)
    // ... para otros formatos inválidos
  })
})
describe('extractLinks', () => {
  it('should extract links from markdown content', async () => {
    const mockContent = '[Node.js](https://nodejs.org/es/)'
    fsPromises.readFile.mockResolvedValue(mockContent)

    const result = await extractLinks('/path/to/mock/file.md')
    expect(result).toEqual([
      {
        text: 'Node.js',
        href: 'https://nodejs.org/es/',
        ruta: '/path/to/mock/file.md'
      }
    ])
  })
})
