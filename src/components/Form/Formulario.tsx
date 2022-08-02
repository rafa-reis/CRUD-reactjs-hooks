// importar
import React from 'react';
import { FormularioStyled } from './FormularioStyled';

export interface BtnCadProps {
  btnCadastrar: boolean;
  setNome: any;
  setIdade: any;
  setCidade: any;
  cadastrar: any;
  remover: any;
  cancelar: any;
  alterar: any;
  nome: any;
  idade: any;
  cidade: any;
}

const Formulario: React.FC<BtnCadProps> = ({
  btnCadastrar,
  setNome,
  setIdade,
  setCidade,
  cadastrar,
  alterar,
  remover,
  cancelar,
  nome,
  idade,
  cidade,
}) => {
  return (
    <FormularioStyled>
      <form>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          className="form-control"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Idade"
          value={idade}
          className="form-control"
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          className="form-control"
          onChange={(e) => setCidade(e.target.value)}
        />

        {btnCadastrar ? (
          <input
            type="button"
            value="Cadastrar"
            className="btn btn-primary"
            onClick={cadastrar}
          />
        ) : (
          <div>
            <input
              type="button"
              value="Alterar"
              className="btn btn-secondary"
              onClick={alterar}
            />
            <input
              type="button"
              value="Excluir"
              className="btn btn-danger"
              onClick={remover}
            />
            <input
              type="button"
              value="Cancelar"
              className="btn btn-success"
              onClick={cancelar}
            />
          </div>
        )}
      </form>
    </FormularioStyled>
  );
};

// exportar
export default Formulario;
