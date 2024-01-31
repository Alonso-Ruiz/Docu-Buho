"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[888],{6160:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var i=n(5893),s=n(1151);const r={sidebar_position:1},o="Tutorial para la instalcion de script",c={id:"Guia de Instalacion/Turoriales para instacion de script",title:"Tutorial para la instalcion de script",description:"Manual para la instalacion",source:"@site/docs/Guia de Instalacion/Turoriales para instacion de script.md",sourceDirName:"Guia de Instalacion",slug:"/Guia de Instalacion/Turoriales para instacion de script",permalink:"/Docu-Buho/docs/Guia de Instalacion/Turoriales para instacion de script",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Guia de Instalacion/Turoriales para instacion de script.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guia de Instalacion",permalink:"/Docu-Buho/docs/category/guia-de-instalacion"},next:{title:"Tutorial de Instalacion Docker + GitLab + SSL",permalink:"/Docu-Buho/docs/Guia de Instalacion/create-a-document"}},l={},t=[{value:"Descripcion",id:"descripcion",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:3}];function d(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"tutorial-para-la-instalcion-de-script",children:"Tutorial para la instalcion de script"}),"\n",(0,i.jsx)(a.p,{children:"Manual para la instalacion"}),"\n",(0,i.jsx)(a.h2,{id:"descripcion",children:"Descripcion"}),"\n",(0,i.jsx)(a.p,{children:"Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya est\xe9 configurado hacia la instancia), su ejecuci\xf3n es muy sencilla."}),"\n",(0,i.jsx)(a.h3,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor informaci\xf3n sobre el acceso SSH visite los siguientes manuales:\ngu\xeda para acceder con Putty (gesti\xf3n de servidor)\ngu\xeda para acceder con Winscp (gesti\xf3n de archivos con aplicaci\xf3n de escritorio)"}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalaci\xf3n se encuentre disponible el aplicativo. Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Docusaurus logo",src:n(5332).Z+"",width:"576",height:"307"})}),"\n",(0,i.jsxs)(a.ol,{start:"4",children:["\n",(0,i.jsx)(a.li,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usar el aplicativo con los contenedores de Docker."}),"\n"]}),"\n",(0,i.jsx)(a.h1,{id:"pasos",children:"Pasos"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Acceder a su instancia v\xeda SSH."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Loguearse como super usuario\nejecute ",(0,i.jsx)(a.code,{children:"sudo su"})]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Clonar el snippet de gitlab que contiene el script"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"git clone https://gitlab.com/snippets/2079063.git script\n"})}),"\n",(0,i.jsxs)(a.ol,{start:"4",children:["\n",(0,i.jsx)(a.li,{children:"Ingrese a la carpeta clonada:"}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"cd script\n"})}),"\n",(0,i.jsxs)(a.ol,{start:"5",children:["\n",(0,i.jsx)(a.li,{children:"Dar permisos de ejecuci\xf3n al script"}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"chmod +x install.sh\n"})}),"\n",(0,i.jsxs)(a.ol,{start:"6",children:["\n",(0,i.jsx)(a.li,{children:"El comando a utilizar para iniciar el despliegue requiere de un par\xe1metro principalmente:"}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"./install.sh [dominio]\n"})}),"\n",(0,i.jsxs)(a.ol,{start:"7",children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Una vez ejecutado el comando iniciar\xe1 el proceso de actualizaci\xf3n del sistema, en el proceso se le solicitar\xe1:"}),"\n",(0,i.jsx)(a.p,{children:"\u2022 el usuario y contrase\xf1a de GitLab, para que se pueda descargar el proyecto en su instancia"}),"\n",(0,i.jsx)(a.p,{children:"\u2022 si desea instalar SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 d\xedas, el mensaje ser\xe1 el siguiente:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"instalar con SSL? (debe tener acceso al panel de su dominio para \neditar/agregar records TXT). si[s] no[n] \n"})}),"\n",(0,i.jsx)(a.p,{children:"\u2022 deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n",(0,i.jsx)(a.p,{children:"-si selecciona S\xcd, deber\xe1 contestar las siguientes preguntas con \u201cy\u201d, son 2 en total, seguidamente se le ofrecer\xe1 un c\xf3digo que debe a\xf1adir en un r\xe9cord tipo TXT en su dominio quedando como _acme-challenge.example.com o simplemente _acme-challenge depender\xe1 de su proveedor."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Docusaurus logo",src:n(94).Z+"",width:"414",height:"103"})}),"\n",(0,i.jsx)(a.p,{children:"\u2022 para continuar presione enter, luego deber\xe1 repetir las acciones para a\xf1adir un segundo c\xf3digo y habr\xe1 finalizado la configuraci\xf3n, si el proceso es exitoso la ejecuci\xf3n del script continuar\xe1."}),"\n",(0,i.jsx)(a.p,{children:"\u2022 si desea obtener y gestionar actualizaciones autom\xe1ticas, deber\xe1 disponer de su sesi\xf3n de gitlab al momento"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"configurar clave SSH para actualizaci\xf3n autom\xe1tica? (requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]\n"})}),"\n",(0,i.jsx)(a.p,{children:"\u2022 deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n",(0,i.jsx)(a.p,{children:"\u2022 de seleccionar S\xcd, al final del despliegue se le dar\xe1 un extracto de texto que debe a\xf1adir a su configuraci\xf3n de gitlab"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Docusaurus logo",src:n(8895).Z+"",width:"403",height:"232"})}),"\n",(0,i.jsxs)(a.ol,{start:"8",children:["\n",(0,i.jsx)(a.li,{children:"Finalizado el script y dependiendo de sus selecciones anteriores, se le entregar\xe1 varios datos que debe guardar, como:"}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"\u2022 usuario administrador"}),"\n",(0,i.jsx)(a.p,{children:"\u2022 contrase\xf1a para usuario administrador"}),"\n",(0,i.jsx)(a.p,{children:"\u2022 url del proyecto"}),"\n",(0,i.jsx)(a.p,{children:"\u2022 ubicaci\xf3n del proyecto dentro del servidor"}),"\n",(0,i.jsx)(a.p,{children:"\u2022 clave ssh para a\xf1adir a gitlab (obligatorio para quienes seleccionan la instalaci\xf3n de SSH)"})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5332:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/img1-108dd0eec10b253b6ef1a5d9488c17e3.png"},94:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/img2-13b73412fd6daeaef4627fb444654d90.png"},8895:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/img3-555cdf11d17fc06da5d68aefc365e99b.png"},1151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);