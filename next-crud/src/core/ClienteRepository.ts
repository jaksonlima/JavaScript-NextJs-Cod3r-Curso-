import Cliente from "./Cliente";

export default interface ClienteRepository {
  salvar(cliente: Cliente): Promise<Cliente>
  excluir(cliente: Cliente): Promise<void>
  findAll(): Promise<Cliente[]>
}