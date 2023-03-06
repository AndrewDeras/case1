import axios from "axios";
import React from "react";

const Home = () => {
  let [produtos, setProdutos] = React.useState();

  React.useEffect(() => {
    axios.get('http://localhost:5656/produto/1').then((res) => {
      console.log(res.data);
      setProdutos(res.data);
    })
  }, [])
  return (
    <div className="container text-center">
      <h1>PRODUTOS</h1>
      <div className="container">
        <table className="table table-striped table-hover table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">DESCRIÇÃO</th>
              <th scope="col">PREÇO</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        <div className="row">
          <div className="col">
            <a className="btn btn-primary" href="/produtos/novo"
            >Cadastrar novo produto</a
            >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home