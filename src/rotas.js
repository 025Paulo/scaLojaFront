import React from 'react';

import ListagemCliente from './views/listagem-clientes';
import ListagemProduto from './views/listagem-produtos';
import ListagemFornecedor from './views/listagem-fornecedores';
import ListagemPedido from './views/listagem-pedidos';


import Login from './views/login';
import CadastroCliente from './views/cadastro-cliente';
import CadastroProduto from './views/cadastro-produto';
import CadastroFornecedor from './views/cadastro-fornecedor';
import CadastroPedido from './views/cadastro-pedido';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro-clientes/:idParam?' element={<CadastroUsuario />}/>
        <Route path='/cadastro-produtos/:idParam?' element={<CadastroProduto />} />
        <Route path='/cadastro-fornecedores/:idParam?' element={<CadastroFornecedor />}/>
        <Route path='/cadastro-clientes/:idParam?' element={<CadastroCliente />} />
        <Route path='/cadastro-pedidos/:idParam?' element={<CadastroPedido />} />
        <Route path='/listagem-pedidos' element={<ListagemPedido />} />
        <Route path='/listagem-produtos' element={<ListagemProduto />} />
        <Route path='/listagem-fornecedores' element={<ListagemFornecedor />} />
        <Route path='/listagem-cliente' element={<ListagemCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
