import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

// import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroConsulta() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/consultas`;

  const [id, setId] = useState('');
  const [idCliente, setIdCliente] = useState(0);
  const [idFornecedor, setIdFornecedor] = useState(0);
  const [idPedido, setIdPedido] = useState(0);

  const [dados, setDados] = React.useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setIdPaciente('');
      setIdMedico('');
      setIdPedido(0);
    } else {
      setId(dados.id);
      setIdCliente(dados.idCliente);
      setIdFornecedor(dados.idFornecedor);
      setIdPedido(dados.idPedido);
    }
  }

  async function salvar() {
    let data = { id, data, idCliente, idFornecedor, idPedido};
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`produto ${id} cadastrado com sucesso!`);
          navigate(`/listagem-produtos`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${baseURL}/${idParam}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Produto ${id} alterado com sucesso!`);
          navigate(`/listagem-produto`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    if (idParam != null) {
      await axios.get(`${baseURL}/${idParam}`).then((response) => {
        setDados(response.data);
      });
      setId(dados.id);
      setIdCliente(dados.idCliente);
      setIdFornecedor(dados.idFornecedor);
      setIdPedido(dados.idPedido);     
    }
  }

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setDados(response.data);
  //   });
  // }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Pedidos'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Data: *' htmlFor='inputData'>
                <input
                  type='date'
                  id='inputData'
                  value={data}
                  className='form-control'
                  name='data'
                  onChange={(e) => setData(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='ID Cliente: *' htmlFor='inputIdCliente'>
                <input
                  type='number'
                  id='inputIdCliente'
                  value={idCliente}
                  className='form-control'
                  name='idCliente'
                  onChange={(e) => setIdCliente(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='ID Fornecedor: *' htmlFor='inputIdFornecedor'>
                <input
                  type='number'
                  id='inputIdFornecedor'
                  value={idFornecedor}
                  className='form-control'
                  name='idMedico'
                  onChange={(e) => setIdFornecedor(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='ID Pedidos: *' htmlFor='inputIdPedido'>
                <input
                  type='number'
                  id='inputIdPedido'
                  value={idPedido}
                  className='form-control'
                  name='idPedido'
                  onChange={(e) => setIdPedido(e.target.value)}
                />
              </FormGroup>
              <Stack spacing={1} padding={1} direction='row'>
                <button
                  onClick={salvar}
                  type='button'
                  className='btn btn-success'
                >
                  Salvar
                </button>
                <button
                  onClick={inicializar}
                  type='button'
                  className='btn btn-danger'
                >
                  Cancelar
                </button>
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CadastroProduto;