module.exports = {
  presets: [
      "@babel/preset-env", // Altera as funcionalidades do javascript que o navegador *ainda* não entende. Ex: Import/export, arrow function, classes.
      "@babel/preset-react" // Transforma as coisas que o navegador não entende do React. Ex: Jsx, funcionalidades específicas.
  ],
};