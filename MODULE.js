class TESTE {
  constructor() {
    this.dado = 777;
  }

  logaDado() {
    console.log(this.dado)
  }
}

var teste = new TESTE();

export function actualInstance() {
  return teste;
}