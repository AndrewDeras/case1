import React from 'react'
import axios from "axios";

const Novo = () => {
  let [name, setName] = React.useState('');
  let [description, setDescription] = React.useState('');
  let [price, setPrice] = React.useState(0);

  let produto = {
    name,
    description,
    price
  }
  console.log(produto);

  const handleSubmit = () => {
    axios.post('http://localhost:5656/produto', produto)
  }


  return (
    <div className="container text-center">
      <h3>Cadastrar produto</h3>
      <form onSubmit={handleSubmit} >
        <div className="form-floating mb-3">
          <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" name="name" id="name" aria-describedby="nome" />
          <label>Nome</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setDescription(e.target.value) }} type="text" className="form-control" id="description" name="description" />
          <label >Descrição</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setPrice(e.target.value) }} type="number" step="any" className="form-control" id="price" name="price" />
          <label >Preço</label>
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>

    </div>
  )
}

export default Novo