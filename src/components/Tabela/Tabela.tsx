/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
// @flow
import * as React from 'react';
import { TabelaStyled } from './TabelaStyled';

interface TabelaProps {
  vetor: any;
  selecionar: any;
}

const Tabela: React.FC<TabelaProps> = ({ vetor, selecionar }) => {
  const [termo, setTermo] = React.useState('');

  return (
    <TabelaStyled>
      <input
        type="text"
        placeholder="Pesquise por nome"
        className="form-control pesquisa"
        onChange={(e) => setTermo(e.target.value)}
      />

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>Selecionar</th>
          </tr>
        </thead>
        <tbody>
          {vetor
            .filter((objeto: any) => objeto.nome.includes(termo))
            .map((objeto: any, indice: number) => (
              <tr key={indice}>
                <td>{indice + 1}</td>
                <td>{objeto.nome}</td>
                <td>{objeto.idade}</td>
                <td>{objeto.cidade}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => selecionar(indice)}
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TabelaStyled>
  );
};

export default Tabela;
