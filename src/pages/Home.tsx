import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Formulario, { BtnCadProps } from '../components/Form/Formulario';
import Tabela from '../components/Tabela/Tabela';

const Home: React.FC = () => {
  const [indiceVetor, setIndiceVetor] = useState<any>('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');

  const [vetor, setVetor] = useState<any>([]);

  const cadastrar = () => {
    const obj = {
      nome,
      idade,
      cidade,
    };
    setVetor([...vetor, obj]);

    setNome('');
    setIdade('');
    setCidade('');
  };

  const selecionar = (indice: any) => {
    setIndiceVetor(indice);
    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false);
  };

  const alterar = () => {
    const obj = {
      nome,
      idade,
      cidade,
    };

    const copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj;
    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');

    setBtnCadastrar(true);
  };

  const remover = () => {
    const copiaVetor = [...vetor];
    copiaVetor.splice(indiceVetor, 1);

    setVetor(copiaVetor);
    setNome('');
    setIdade('');
    setCidade('');

    setBtnCadastrar(true);
  };

  const cancelar = () => {
    setNome('');
    setIdade('');
    setCidade('');

    setBtnCadastrar(true);
  };

  return (
    <>
      <Typography variant="h4" align="center" margin={3}>
        CRUD
      </Typography>
      {/*    <h1>{JSON.stringify(vetor)}</h1> */}
      <Formulario
        btnCadastrar={btnCadastrar}
        setNome={setNome}
        setIdade={setIdade}
        setCidade={setCidade}
        cadastrar={cadastrar}
        alterar={alterar}
        remover={remover}
        cancelar={cancelar}
        nome={nome}
        idade={idade}
        cidade={cidade}
      />
      <Tabela vetor={vetor} selecionar={selecionar} />
    </>
  );
};

export default Home;
