"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68],{4450:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(5893),r=s(1151);const a={sidebar_position:3},t="Tutorial de Instalacion - Linux | Valet",o={id:"Guia de Instalacion/create-a-blog-post",title:"Tutorial de Instalacion - Linux | Valet",description:"Manual de instalacion Linux-Valet.",source:"@site/docs/Guia de Instalacion/create-a-blog-post.md",sourceDirName:"Guia de Instalacion",slug:"/Guia de Instalacion/create-a-blog-post",permalink:"/Docu-Buho/docs/Guia de Instalacion/create-a-blog-post",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Guia de Instalacion/create-a-blog-post.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tutorial de Instalacion Docker + GitLab + SSL",permalink:"/Docu-Buho/docs/Guia de Instalacion/create-a-document"},next:{title:"Tutorial del Facturador - Docker | Linux | SSL externo",permalink:"/Docu-Buho/docs/Guia de Instalacion/deploy-your-site"}},l={},c=[{value:"Requisitos Previos",id:"requisitos-previos",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tutorial-de-instalacion---linux--valet",children:"Tutorial de Instalacion - Linux | Valet"}),"\n",(0,i.jsxs)(n.p,{children:["Manual de instalacion ",(0,i.jsx)(n.strong,{children:"Linux-Valet."})]}),"\n",(0,i.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos Previos"}),"\n",(0,i.jsx)(n.p,{children:"Antes de iniciar la instalaci\xf3n, aseg\xfarese de cumplir con los siguientes requisitos:"}),"\n",(0,i.jsxs)(n.p,{children:["1.",(0,i.jsx)(n.strong,{children:"Acceso Root:"})]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Contar con acceso root al servidor local."}),"\n",(0,i.jsxs)(n.p,{children:["2.",(0,i.jsx)(n.strong,{children:"Instalaci\xf3n de PHP 7.2 y Librer\xedas:"})]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Ubuntu no cuenta con la versi\xf3n 7.2 de PHP de manera nativa. Ejecute los siguientes comandos para agregar un repositorio y proceder con la instalaci\xf3n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt-get update\napt-get install software-properties-common\napt-get install python-software-properties\nadd-apt-repository ppa:ondrej/php\napt-get update\napt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Instalaci\xf3n de MySQL y PhpMyAdmin:"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instale MySQL y PhpMyAdmin (opcional) con los siguientes comandos:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Se le solicitar\xe1 la contrase\xf1a dos veces."}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Instalaci\xf3n de Git, Curl, Composer:"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instale Git y Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt-get install git\napt-get install curl\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instale Composer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt-get install composer\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Dar permisos a la carpeta composer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"chmod -R 777 ~/.composer\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instale librer\xedas de Valet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"composer global require cpriego/valet-linux\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Vaya a la carpeta ~/.profile y a\xf1ada la siguiente l\xednea al final del documento y guarde:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'nano ~/.profile\nPATH="HOME/.composer/vendor/bin:$PATH"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Luego ejecute en terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"source ~/.profile\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instale las siguientes librer\xedas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt install network-manager libnss3-tools jq xsel\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instalaci\xf3n de Nginx y Valet:\nDetenga servicios de Apache2 si est\xe1 instalado:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"service apache2 stop\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instale Nginx:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt install nginx\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Verifique que el servidor de Nginx se est\xe1 ejecutando correctamente:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"systemctl status nginx\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Instale Valet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"valet install\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Configuraci\xf3n de Valet:"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Cree una carpeta para el c\xf3digo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir ~/code\ncd code\nvalet park\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Clone el repositorio:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://gitlab.com/b.mendoza/facturadorpro3.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Entre en la carpeta y configure el archivo .env:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd facturadorpro3\ncp .env.example .env\nphp artisan key:generate\ncomposer dump-autoload\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Registre la base de datos mediante phpmyadmin."}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Ejecute las migraciones:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"composer install\nphp artisan migrate --seed\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Verificaci\xf3n y Acceso:"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Verifique el aplicativo actualizando phpmyadmin."}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Ejecute los siguientes comandos para establecer los permisos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"chmod -R 755 storage\nchmod -R 755 bootstrap/cache\nphp artisan storage:link\n"})}),"\n",(0,i.jsx)(n.p,{children:"Acceda al proyecto en su dominio:"}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Facturadorpro3.test"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 Usuario: ",(0,i.jsx)(n.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"})]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Contrase\xf1a: 123456"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(7294);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);