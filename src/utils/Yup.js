/* eslint-disable no-template-curly-in-string */
import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: "Não é válido",
    required: "Campo obrigatório",
    min: "Campo deve ser maior que ${min} caracteres",
    max: "Campo deve ser menor que ${max} caracteres",
  },
  number: {
    default: "Formato inválido, conteúdo deve ser um número",
    min: "Valor deve ser maior ou igual a ${min}",
    max: "Valor deve ser menor ou igual a ${max}",
  },
  string: {
    email: "Campo de e-mail no formato inválido",
    min: "Campo deve ser maior que ${min} caracteres",
    matches: "Formato do campo não corresponde ao padrão REGEX",
    max: "Campo deve conter no máximo ${max} caracteres",
  },
});

export default yup;
