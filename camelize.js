export default function camelize(str) {
  return str
    .split('-')
    .map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)
    .join('')
}
