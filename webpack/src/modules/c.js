function logMessage() {
  return import('path').then(path => {
    return path.join('Module', 'C')
  })
}

export default logMessage
