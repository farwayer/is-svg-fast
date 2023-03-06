import {parseXml} from '@rgrove/parse-xml'


export let isSvg = str => {
  typeof str === 'string' || "pass string!"()

  // svg tolerant to edge whitespace characters
  // but the parser is not
  str = str.trim()

  try {
    return parseXml(str).root.name === 'svg'
  }
  catch {
    return false
  }
}
