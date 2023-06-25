import React from 'react';

import ListagemCliente from './views/listar-cliente';
import ListagemProdutos from './views/listar-produto';
import ListagemFornecedor from './views/listar-fornecedor';
import ListagemPedidos from './views/listar-pedido';


import CadastroCliente from './views/cadastro-cliente';
import CadastroProduto from './views/cadastro-produto';
import CadastroFornecedor from './views/cadastro-fornecedor';
import CadastroPedido from './views/cadastro-pedido';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro-cliente/:idParam?' element={<CadastroCliente />}/>
        <Route path='/cadastro-produtos/:idParam?' element={<CadastroProduto />} />
        <Route path='/cadastro-fornecedores/:idParam?' element={<CadastroFornecedor />}/>
        <Route path='/cadastro-pedidos/:idParam?' element={<CadastroPedido />} />
        <Route path='/listagem-pedidos' element={<ListagemPedidos />} />
        <Route path='/listagem-produtos' element={<ListagemProdutos />} />
        <Route path='/listagem-fornecedores' element={<ListagemFornecedor />} />
        <Route path='/listagem-cliente' element={<ListagemCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
