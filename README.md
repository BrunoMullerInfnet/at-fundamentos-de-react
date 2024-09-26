# AT 

Esta é uma aplicação React que consome a API JSONPlaceholder para exibir usuários, postagens e comentários. O objetivo é demonstrar o uso de chamadas de API, gerenciamento de estado e navegação em um aplicativo React.

## Funcionalidades

- **Listagem de Usuários**: A página inicial exibe uma lista de usuários com o nome e a frase de destaque da empresa.
- **Exibição de Postagens**: Ao clicar em um usuário, a aplicação oculta a lista de usuários e exibe as postagens do usuário selecionado.
- **Exibição de Comentários**: Ao clicar em uma postagem, os comentários associados a ela são exibidos.
- **Navegação**: O usuário pode retornar à página anterior em qualquer etapa da navegação.
- **Alternância de Layout**: O usuário pode alternar entre visualização em grade e em lista.
- **Exclusão de Comentários**: Cada comentário possui um ícone para excluir, que requer confirmação antes da ação.
  
## Endpoints da API

- **Usuários**: `https://jsonplaceholder.typicode.com/users`
- **Postagens**: `https://jsonplaceholder.typicode.com/posts/?userId={userId}`
- **Comentários**: `https://jsonplaceholder.typicode.com/comments?postId={postId}`

## Estrutura do Projeto

A aplicação é organizada da seguinte forma:

- **src/**
  - **components/**: Contém todos os componentes reutilizáveis, como `User`, `Post`, `Comment`, e `FetchData`.
  - **App.js**: Componente principal que organiza a estrutura da aplicação, incluindo header, main e footer.
  - **FetchData.js**: Componente onde faço o consumo da api e chamo os demais componentes, passando os devidos parêmtros 
  - **User.js**: Componente onde organizo a exibição dos usuários
  - **Post.js**: Componente onde organizo a exibição dos posts.
  - **Comment.js**: Componente onde organizo a exibição dos comentários
  - **styles/**: Contém os arquivos CSS para estilização da interface.
