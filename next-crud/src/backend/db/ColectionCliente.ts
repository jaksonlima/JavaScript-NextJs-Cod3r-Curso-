import Cliente from "../../core/Cliente";
import ClienteRepository from "../../core/ClienteRepository";
import firebase from "../firebase";

export default class ColectionCliente implements ClienteRepository {

  #conversor = {
    toFirestore(cliente: Cliente) {
      return cliente.converterToObject()
    },

    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
      options) {
      const data = snapshot.data(options)
      return new Cliente(data.nome, data.idade, snapshot.id)
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.colection().doc(cliente.id).set(cliente)
      return cliente
    } else {
      const doRef = await this.colection().add(cliente)
      const doc = await doRef.get()
      return doc.data()
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colection().doc(cliente.id).delete()
  }

  async findAll(): Promise<Cliente[]> {
    const query = await this.colection().get()
    return query.docs.map(doc => doc.data()) || []
  }

  private colection() {
    return firebase.firestore()
      .collection('clientes')
      .withConverter(this.#conversor)
  }
}