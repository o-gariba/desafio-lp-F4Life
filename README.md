# Desafio Labenu - Desenvolve 2022 - Landing Page da F4Life

### Diário do desenvolvimento
>Fiz anotações e resumos do que era REQUERIDO no projeto e quais as avaliações que seriam feitas  
>Logo depois estipulei um cronograma ideal de como eu imaginei que poderia ocorrer o desenvolvimento do projeto. Ficou assim:  
>  
>**19/03**
>>- Criação dos elementos básicos HTML
>>>- header com:
>>>>- logo
>>>>- 2 links para dentro do próprio site
>>- Sessão quem somos com a missão da empresa
>>- Formulario fale conosco
>>- Rodapé com: 
>>>- redes sociais
>>- Entender como validar o formulário após apertar o botão de envio

>**20/03**
>>- Terminar o primeiro esboço do site (mobile e desktop) no Figma
>>- Início da estilização (Mobile First)
>>>- Cabeçalho
>>>- Destaque

>**21/03 (segunda)**
>>- Finalizar estilos (Mobile First)
>>- Iniciar estilos desktop
>>- Encerrar estilo desktop

#### Dia 1 (sábado, 19/03/2022)
>Consegui colocar todo o HTML básico na página, do cabeçalho até o rodapé, incluindo inclusive algumas imagens representando o que será mantido até o final.  
  
>Consegui fazer uma validação com retorno no console do e-mail, seguindo todos os critérios mencionados. Preciso fazer com que isso exiba uma mensagem dentro do site.  
  
>A validação do campo de texto está completa, mas quem devolve a mensagem de campo vazio é o proprio navegador, não a página (verificar se isso pode ficar assim).  

#### Dia 2 (domingo, 20/03/2022)
>Aprimorei a verificação do e-mail usando javascript, agora o próprio navegador exibe sempre as mensagens de erro quando não é cumprido o RegEx.  

>Consegui terminar tanto o [design da versão mobile quanto da versão desktop no figma](https://www.figma.com/file/zokm0hJa4922JMDuEltO7r/Desafio-Labenu---F4Life?node-id=0%3A1), com imagens e ilustrações 3D, que indicaram no grupo de mentorias, e também escrevi todo o conteúdo em texto que será necessário. No final das contas achei que ficou um design bem bonito.  

>Isso acabou me tomando o dia todo e consequentemente não consegui cumprir o cronograma pretendido para o dia, vou deixar para amanhã o início da estilizaçao das primeiras sessões da versão mobile.

#### Dia 3 (segunda, 21/03/2022)
>Codar os estilos pretendidos foi uma tarefa muuito difícil, levei praticamente o dia todo para finalizar tudo. Terminei com vontade de refatorar o código, uma vez que a responsividade não estava 100%, notei que preciso estudar mais CSS, vou rever os cursos iniciais, pois acredito que mesclei muitas unidades de medidas diferentes, o que complica quando manipulamos o tamanho da janela.

>Tarde da noite eu comecei a dar os primeiros passos na estilização da versão desktop. Pude perceber desde o início que seria bem mais fácil que codar o mobile, uma vez que muitas regras já estavam definidas.

#### Dia 4 (terça-feira, 22/03/2022)
>Chegou o último dia, eu literalmente sonhei com esse código TODOS OS DIAS, mas logo de manhã, até 12h eu já pude terminar todo o Desktop. Vitória

>Durante o período da tarde eu foquei em aprimorar o sistema de verificação de email e mensagem do formulário, usando js. Consegui fazer com que a mensagem não fosse mais exibida em forma de `alert()`, mas como dentro de uma nova `div` logo abaixo do campo de mensagem.

>Durante a noite continuei aprimorando e polindo o visual, excluindo linhas comentadas no código e tentando refatorá-lo. Já estava bem cansado de lidar com ele e enfim o enviei!