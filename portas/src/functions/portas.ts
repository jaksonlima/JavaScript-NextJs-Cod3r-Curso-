import PortaModel from "../model/portaModel";

export function criarPortas(qtd: number, comPresente: number): PortaModel[] {
  return Array.from({ length: qtd }, (_, index) => {
    const numero = index + 1
    const temPresente = numero === comPresente
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
  return portas.map(portaAtual => {
    const igualAModificada = portaAtual.numero === portaModificada.numero
    
    if(igualAModificada) {
      return portaModificada
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
    }
  })
}