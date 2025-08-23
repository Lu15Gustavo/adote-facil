# Histórias de Usuário e Cenários de Teste - Adote Fácil

Este documento detalha as principais histórias de usuário da plataforma "Adote Fácil" e seus respectivos cenários de teste, tanto os fluxos principais (caminho feliz) quanto os alternativos (erros e exceções).

## Perfil: Doador

### História 1: Cadastro Rápido de Doador
> Como **doador**, eu quero **me cadastrar na plataforma de forma rápida**, fornecendo meu nome, e-mail e uma senha, para que eu possa começar a anunciar os gatinhos que resgatei.

#### Cenário Principal: Cadastro realizado com sucesso
* **Dado que** o usuário está na página de cadastro.
* **Quando** ele preenche o campo "Nome" com um nome válido (ex: "João da Silva").
* **E** preenche o campo "E-mail" com um e-mail válido e não cadastrado (ex: `joao.silva.novo@email.com`).
* **E** preenche o campo "Senha" com uma senha de no mínimo 8 caracteres (ex: `Senha@123`).
* **E** preenche o campo "Confirme a senha" com o mesmo valor.
* **E** clica no botão "Cadastrar".
* **Então** o sistema deve criar a nova conta de usuário.
* **E** o usuário deve ser redirecionado para a página de `/login`.
* **E** uma mensagem de sucesso como "Cadastro efetuado com sucesso! Faça login para acessar nossa plataforma!" deve ser exibida.

#### Cenários Alternativos
* **Cenário 1.1: Tentativa de cadastro com e-mail já existente**
    * **Dado que** já existe um usuário cadastrado com o e-mail `email.existente@email.com`.
    * **Quando** um novo usuário tenta se cadastrar usando o mesmo e-mail.
    * **Então** o sistema não deve criar a conta.
    * **E** deve exibir uma mensagem de erro, como "Email já cadastrado.".

* **Cenário 1.2: Tentativa de cadastro com senhas que não coincidem**
    * **Dado que** o usuário está na página de cadastro.
    * **Quando** ele preenche o campo "Senha" com `Senha@123`.
    * **E** preenche o campo "Confirme a senha" com `Senha@456`.
    * **E** clica em "Cadastrar".
    * **Então** o sistema não deve criar a conta.
    * **E** uma mensagem de erro "As senhas não coincidem" deve ser exibida abaixo do campo de confirmação de senha.

* **Cenário 1.3: Tentativa de cadastro com campos obrigatórios em branco**
    * **Dado que** o usuário está na página de cadastro.
    * **Quando** ele deixa qualquer um dos campos obrigatórios (Nome, E-mail, Senha) em branco.
    * **E** clica em "Cadastrar".
    * **Então** o sistema não deve criar a conta.
    * **E** uma mensagem de erro como "O nome é obrigatório" ou "O email é obrigatório" deve ser exibida abaixo do respectivo campo.

* **Cenário 1.4: Tentativa de cadastro com senha fraca**
    * **Dado que** o usuário está na página de cadastro.
    * **Quando** ele preenche o campo "Senha" com menos de 8 caracteres.
    * **E** clica em "Cadastrar".
    * **Então** o sistema não deve criar a conta.
    * **E** uma mensagem de erro "A senha deve conter no mínimo 8 caracteres" deve ser exibida abaixo do campo de senha.

---

### História 2: Criar Anúncio de Animal
> Como **doador**, eu quero **criar um anúncio detalhado para cada gatinho**, incluindo nome, tipo (gato/cachorro), gênero, raça, uma descrição cativante e até 5 fotos, para que os potenciais adotantes tenham todas as informações necessárias para se interessarem.

#### Cenário Principal: Anúncio criado com sucesso
* **Dado que** o doador está logado na plataforma.
* **E** está na página "Disponibilizar animal para adoção".
* **Quando** ele preenche o campo "Nome" com "Bolinha".
* **E** seleciona o "Tipo" como "Gato".
* **E** seleciona o "Gênero" como "Macho".
* **E** preenche a "Descrição" com "Um gatinho muito brincalhão".
* **E** faz o upload de 3 fotos (com menos de 5MB cada).
* **E** clica no botão "Cadastrar".
* **Então** o sistema deve criar o anúncio do animal.
* **E** o doador deve ser redirecionado para a página "Meus Animais" (`/area_logada/meus_animais`).
* **E** uma mensagem de sucesso "Animal cadastrado com sucesso!" deve ser exibida.

#### Cenários Alternativos
* **Cenário 2.1: Tentativa de criar anúncio sem campos obrigatórios**
    * **Dado que** o doador está na página de criação de anúncio.
    * **Quando** ele deixa o campo "Nome", "Tipo" ou "Gênero" em branco.
    * **E** clica em "Cadastrar".
    * **Então** o sistema não deve criar o anúncio.
    * **E** uma mensagem de erro como "O nome é obrigatório" deve ser exibida abaixo do campo correspondente.

* **Cenário 2.2: Tentativa de criar anúncio sem fotos**
    * **Dado que** o doador está na página de criação de anúncio.
    * **Quando** ele preenche todos os campos de texto mas não faz upload de nenhuma foto.
    * **E** clica em "Cadastrar".
    * **Então** o sistema não deve criar o anúncio.
    * **E** uma mensagem de erro "Adicione ao menos uma foto do animal" deve ser exibida.

* **Cenário 2.3: Tentativa de fazer upload de mais de 5 fotos**
    * **Dado que** o doador já selecionou 5 fotos.
    * **Quando** ele tenta adicionar uma sexta foto.
    * **Então** o sistema deve impedi-lo de adicionar mais fotos.
    * **E** o botão para adicionar fotos deve ficar desabilitado.

* **Cenário 2.4: Tentativa de fazer upload de uma foto muito grande**
    * **Dado que** o doador está na página de criação de anúncio.
    * **Quando** ele tenta fazer upload de uma foto com mais de 5MB.
    * **Então** o sistema deve rejeitar o arquivo (o comportamento exato depende da implementação do backend, mas geralmente resulta em um erro 4xx).

---

### História 3: Gerenciar "Meus Animais"
> Como **doador**, eu quero **ter uma página onde eu possa ver todos os animais que anunciei ("Meus Animais")**, para que eu possa acompanhar meus anúncios e marcar um animal como "Adotado" assim que ele encontrar um lar.

#### Cenário Principal: Marcar animal como "Adotado"
* **Dado que** o doador está logado e na página "Meus Animais".
* **E** existe um card de um animal chamado "Frajola" com status "Disponível".
* **Quando** o doador clica no botão "Confirmar adoção" no card do "Frajola".
* **Então** o sistema deve atualizar o status do "Frajola" para "Adotado".
* **E** o card do "Frajola" não deve mais aparecer na lista da página "Meus Animais" após a atualização.
* **E** uma mensagem de sucesso como "Confirmada a adoção do animal!" deve ser exibida.

#### Cenários Alternativos
* **Cenário 3.1: Remover um anúncio**
    * **Dado que** o doador está na página "Meus Animais".
    * **Quando** ele clica no ícone de lixeira para remover o anúncio de um animal.
    * **Então** o sistema deve atualizar o status do animal para "Removido".
    * **E** o card do animal não deve mais aparecer na lista.
    * **E** uma mensagem de sucesso como "Animal removido com sucesso!" deve ser exibida.

* **Cenário 3.2: Doador sem animais cadastrados**
    * **Dado que** o doador está logado.
    * **E** ele não cadastrou nenhum animal.
    * **Quando** ele acessa a página "Meus Animais".
    * **Então** o sistema deve exibir uma mensagem indicando que não há animais, com um link para a página de cadastro, como "Você ainda não cadastrou nenhum animal para adoção. Clique aqui para cadastrar.".

---

### História 4: Chat (Visão do Doador)
> Como **doador**, eu quero **receber e responder mensagens de pessoas interessadas diretamente na plataforma através de um chat**, para que eu possa tirar dúvidas, conhecer melhor os candidatos e combinar os detalhes da adoção de forma segura.

#### Cenário Principal: Doador responde a uma mensagem de um adotante
* **Dado que** o doador está logado.
* **E** um adotante iniciou uma conversa com ele.
* **Quando** o doador acessa a página "Minhas conversas".
* **E** clica na conversa com o adotante interessado.
* **E** digita uma resposta no campo de mensagem e envia.
* **Então** a mensagem deve aparecer na janela do chat.
* **E** a conversa deve ser atualizada para o adotante.

#### Cenários Alternativos
* **Cenário 4.1: Doador acessa uma conversa vazia**
    * **Dado que** um adotante iniciou uma conversa mas ainda não enviou nenhuma mensagem.
    * **Quando** o doador abre a conversa.
    * **Então** a janela do chat deve estar vazia, pronta para o doador enviar a primeira mensagem.

* **Cenário 4.2: Envio de mensagem em branco**
    * **Dado que** o doador está em uma conversa.
    * **Quando** ele tenta enviar uma mensagem com o campo de texto vazio.
    * **Então** o sistema não deve enviar a mensagem.

---

### História 5: Editar Perfil do Doador
> Como **doador**, eu quero **poder editar minhas informações de perfil**, como nome ou senha, para que minha conta esteja sempre atualizada e segura.

#### Cenário Principal: Doador edita o nome
* **Dado que** o doador está logado e na página "Editar dados pessoais".
* **Quando** ele altera o valor no campo "Nome".
* **E** clica em "Salvar alterações".
* **Então** o sistema deve atualizar o nome do usuário.
* **E** exibir uma mensagem de sucesso "Dados editados com sucesso!".
* **E** a página deve ser recarregada, exibindo o novo nome.

#### Cenário Principal 2: Doador altera a senha
* **Dado que** o doador está na página "Editar dados pessoais".
* **Quando** ele clica em "Alterar senha".
* **E** preenche os campos "Nova Senha" e "Confirmar nova senha" com um novo valor (mínimo 8 caracteres).
* **E** clica em "Salvar alterações".
* **Então** o sistema deve atualizar a senha do usuário.
* **E** exibir uma mensagem de sucesso "Dados editados com sucesso!".

#### Cenários Alternativos
* **Cenário 5.1: Tentativa de salvar sem nenhuma alteração**
    * **Dado que** o doador está na página de edição de perfil.
    * **Quando** ele clica em "Salvar alterações" sem modificar nenhum dado.
    * **Então** o backend retornará um erro indicando que nenhum dado foi informado.

* **Cenário 5.2: Tenta alterar senha com confirmação incorreta**
    * **Dado que** o doador está alterando a senha.
    * **Quando** os campos "Nova Senha" e "Confirmar nova senha" não coincidem.
    * **E** ele clica em "Salvar alterações".
    * **Então** o sistema não deve atualizar a senha.
    * **E** uma mensagem de erro "As senhas não coincidem" deve ser exibida.

## Perfil: Adotante

### História 6: Listar Animais Disponíveis
> Como **adotante**, eu quero **ver uma lista de todos os animais disponíveis para adoção** assim que eu entrar na área logada, para que eu possa ter uma visão geral das opções.

#### Cenário Principal: Visualizar lista de animais
* **Dado que** o adotante está logado.
* **Quando** ele acessa a página "Animais disponíveis para adoção".
* **Então** o sistema deve exibir uma lista de cards, cada um representando um animal disponível.
* **E** os animais do próprio usuário logado não devem ser exibidos na lista.

#### Cenário Alternativo
* **Cenário 6.1: Nenhum animal disponível na plataforma**
    * **Dado que** não há nenhum animal com status "Disponível" cadastrado na plataforma (ou todos os animais disponíveis são do próprio usuário).
    * **Quando** o adotante acessa a página de animais disponíveis.
    * **Então** o sistema deve exibir uma mensagem informativa como "Desculpe, no momento não temos nenhum animal disponível para adoção".

---

### História 7: Filtrar Lista de Animais
> Como **adotante**, eu quero **poder filtrar a lista de animais por tipo (cachorro) e gênero (macho/fêmea)**, para que eu possa encontrar rapidamente animais que correspondam ao que estou procurando.

#### Cenário Principal: Aplicar filtros com sucesso
* **Dado que** o adotante está na página de animais disponíveis.
* **Quando** ele clica em "Filtrar".
* **E** seleciona "Cachorro" no filtro de tipo.
* **E** seleciona "Fêmea" no filtro de gênero.
* **E** clica em "Filtrar".
* **Então** a lista deve ser atualizada para exibir apenas animais que sejam "Cachorro" E "Fêmea".

#### Cenários Alternativos
* **Cenário 7.1: Nenhum resultado para o filtro aplicado**
    * **Dado que** o adotante está na página de animais disponíveis.
    * **Quando** ele aplica um filtro que não corresponde a nenhum animal cadastrado.
    * **Então** a lista de animais deve ficar vazia.
    * **E** a mensagem "Desculpe, no momento não temos nenhum animal disponível para adoção" deve ser exibida.

* **Cenário 7.2: Limpar filtros**
    * **Dado que** o adotante aplicou filtros e a lista está sendo exibida.
    * **Quando** ele clica no botão "Limpar filtros".
    * **Então** todos os filtros devem ser removidos e a lista deve voltar a exibir todos os animais disponíveis.

---

### História 8: Ver Detalhes do Animal
> Como **adotante**, eu quero **clicar em um animal que me interessou e ver sua página de detalhes**, com todas as fotos e informações fornecidas pelo doador, para que eu possa saber mais sobre ele antes de entrar em contato.

#### Cenário Principal: Acessar página de detalhes
* **Dado que** o adotante está na lista de animais disponíveis.
* **Quando** ele clica no botão "Saiba mais" em um card de animal.
* **Então** ele deve ser redirecionado para a página de detalhes daquele animal.
* **E** a página deve exibir o nome, tipo, gênero, raça, descrição e todas as fotos do animal.

---

### História 9: Iniciar Conversa com Doador
> Como **adotante**, eu quero **um botão na página de detalhes do animal para "iniciar uma conversa" com o doador**, para que eu possa me apresentar, tirar dúvidas e demonstrar meu interesse na adoção.

#### Cenário Principal: Iniciar uma nova conversa
* **Dado que** o adotante está na página de detalhes de um animal.
* **E** ele nunca conversou com o doador deste animal.
* **Quando** ele clica no botão "Entrar em contato com o dono".
* **Então** o sistema deve criar um novo chat entre o adotante e o doador.
* **E** o adotante deve ser redirecionado para a tela de chat recém-criada (`/area_logada/conversas/[chatId]`).

#### Cenário Alternativo
* **Cenário 9.1: Iniciar conversa com um doador com quem já existe um chat**
    * **Dado que** o adotante já possui um chat com o doador de um determinado animal.
    * **Quando** ele clica novamente em "Entrar em contato com o dono" na página do mesmo animal (ou de outro animal do mesmo doador).
    * **Então** o sistema não deve criar um novo chat.
    * **E** deve redirecioná-lo para a tela do chat já existente.

---

### História 10: Gerenciar Conversas
> Como **adotante**, eu quero **ter uma área de "Conversas" onde eu possa ver e continuar todos os chats que iniciei com os doadores**, para que eu possa organizar e acompanhar o processo de adoção com diferentes animais.

#### Cenário Principal: Visualizar e continuar conversas
* **Dado que** o adotante está logado.
* **Quando** ele acessa a página "Minhas conversas".
* **Então** o sistema deve exibir uma lista de todas as suas conversas.
* **E** cada item da lista deve mostrar o nome do doador, a última mensagem trocada e o horário/data dela.
* **Quando** ele clica em uma conversa da lista.
* **Então** ele deve ser levado para a tela daquela conversa específica para poder continuar o diálogo.