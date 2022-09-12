# agency
<h1 align="center"> Creative Agency </h1>

Creative Agency é um projeto pessoal de um site para modelos, ele conta com 3 páginas: Início, Sobre nós e Contato.
A idéia inicial é fazer um site simples onde apresenta de forma rápida o objetivo do site e o usuário já consiga entrar em contato diretamente.

primeiro passo: 
DESIGN
o design do site foi feito utilizando PhotoShop e figma e como modelo para layout foram usadas como molde sites de agência de moda.

<div align="center">
<img src="https://user-images.githubusercontent.com/108352730/189651492-53dc6611-7f48-44ad-8a17-d476a6bdb32d.jpg" width="50%">

</div>

após o layout base pronto, é hora da linguagem de marcação, comecei criando seções para cada área do site, onde seria útil para a navegação no futuro.<br>
seção página 1 -> Início<br>
seção página 2 -> Sobre nós<br>
seção página 3 -> Contato<br>

dentro de cada seção era recebido seus devidos assets e textos.<br>

após terminar de adicionar os elementos no site, é hora da linguagem de estilização (CSS3).<br>
no projeto existem dois arquivos CSS, um para estilizar o site e outro para aplicar a responsividade.<br>

foi definido que em 800px no site, o menu trocaria do normal para menu hambúguer.
após aplicar o css e deixar pronto para ser exibido em qualquer dispositivo, é hora da linguagem de programação. JavaScript foi usado para ser aplicado algumas funcionalidades e funcionar considerando coisas como tamanho da página ou posição do scroll.<br>

<strong>AMBAS VERSÕES</strong><br>
se o site for aberto tanto para celular quanto computador, será executada suas devidas funções para manter todos os elementos adicionados com DOM funcionando ou funcionalidades que deveriam funcionar com o redimensionamento.

<strong>VERSÃO DE COMPUTADOR</strong><br>
primeiro-> funcionalidade do menu.<br>
quando o menu chegar em uma posição da tela, o comportamento padrão é não ser visto, pois a cor dele é a mesma de alguns elementos que ele passaria por cima. foi criada uma função que considera a posição da página e adiciona uma cor de fundo ao menu, para que ele não se misture com elementos da página.

<strong>VERSÃO DE CELULAR</strong><br>
primeiro-> funcionalidade do menu hambúrguer.<br>
função que transforma o elemento com texto do menu em apenas ícones, para uma visualização mais limpa. quanto a funcionalidade, evento de clique para abrir o menu e deixar fixo na tela. quando o menu hambúrguer chegar em uma posição da tela, o comportamento padrão é não ser visto, pois a cor dele é a mesma do background da página. foi criada uma função que considera a posição da página e a cor do menu hambúrguer muda e cada condição de uso, para que ele sempre possa ser visto na tela.



<strong>#Início</strong><br>
nesssa página, quando diminuida, o elemento CONTACT US, que está em texto, se transforma em um círculo e fica fixado na página e o texto muda para um ícone de telefone, quando o menu hambúrguer é aberto, por possuir a mesma opção, o círculo desaparece e só aparece quando o menú é fechado novamente.


