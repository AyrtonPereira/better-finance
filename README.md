# Better Finance

Esta é uma aplicação de consulta a informações de moedas, ações e bitcoins, criada utilizando as seguintes tecnologias:
- Vue.js 3 (Vite, Composition API, Vuex)
- Tailwind.css (Framework CSS)
- JOSE (validação de Token JWT)
- HG Brasil (API de informações das cotações)

## Login

A tela de login é muito simples, basta inserir o seu `usuário` e `senha`.
O seu login ficará ativo por 5 minutos e após isso você terá que realizar um novo acesso.

![image](https://user-images.githubusercontent.com/39170090/211318442-45c6881a-9e2b-4905-ad8c-b928eb9418a6.png)

## Cadastro de um novo usuário

Para realizar um cadastro, basta inserir seu `nome`, `e-mail` e `senha` (que deve conter no mínimo 8 caracteres).
Após o cadastro, você será redirecionado para a tela de login.

![image](https://user-images.githubusercontent.com/39170090/211318823-e5e59b6e-9924-4723-a304-7875610970c1.png)

## Dashboard

Ao logar, você estará no Dashboard da aplicação.
As principais informações exibidas são: `Moedas`, `Ações` e `Bitcoins`. O sistema atualiza automaticamente a cada 2 minutos.

![image](https://user-images.githubusercontent.com/39170090/211320201-2bc8eac9-400b-4ea5-8719-d17ccf1a88b3.png)

Para verificar a variação de alguma cotação ao longo da execução da aplicação, basta clicar em cima do card daquela cotação.
Um gráfico de linha será exibido.

![image](https://user-images.githubusercontent.com/39170090/211319347-089ca73d-c363-46ec-9359-7e4a719f7d84.png)

## Deslogar

Para sair da aplicação, basta clicar em `sair` no menu superior da lateral direita.

![image](https://user-images.githubusercontent.com/39170090/211319695-c4e668e3-eb85-473a-8438-b1e76e1173ae.png)
