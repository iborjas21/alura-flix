# Challenge AluraFlix, React + Vite

AluraFlix es una aplicación web que permite a los usuarios gestionar una lista de videos.

Corresponde a un desafio Challenge de Alura Latam, en donde los usuarios pueden visualizar , agregar, editar y eliminar videos, utilizando tecnologías frontend modernas como React + Vite y un servidor JSON simulado.


_________________________________________________________________________________________________________________


Características:

Banner:

Presenta dos Links, el primero le redirige al Home y otro que le permitira añadir un nuevo video

![image](https://github.com/user-attachments/assets/f7fe5d70-88b9-4e77-b6fa-0ac6dbd06061)



Con esta aplicacion usted podrá

1- Visualizar videos : Los videos se cargan automáticamente desde el servidor simulado al abrir la página, dando click a la imágen del video.



2- Agregar videos : Completa el formulario con Titulo, Categoria, URL de la imágen, URL del video, una breve descripción y  luego haz clic en "Salvar" .  El video se agregará en el grupo de la categoría asignada. De momento estan configuradas 3 categorías (FRONT END, BACK END, IMNOVACION Y GESTION) que le asignarán un formato de color de fondo predefinido. Cualquier otra categoría que se agregue, no tendrá esa condición hasta modificar el código y darle estilos a esas nuevas categorías.


![image](https://github.com/user-attachments/assets/83100ae8-767a-48db-a3b7-f840633af3e8)



3- Eliminar videos : Haga clic en el ícono de la papelera para eliminar un video.


![image](https://github.com/user-attachments/assets/a24f2669-2ef8-493f-a7b0-996ea4bd9680)




4- Editar videos: Haga clic en el ícono de edicion para editar un video. Puede editar todos los campos 

    Título, 
    Categoría, 
    URL de la imágen, 
    URL del video,
    Descripción

![image](https://github.com/user-attachments/assets/f91040bb-0308-4a14-aeb9-663c956de0b2)



Al dar clik al ícono edición, se abrirá la siguiente pantalla

![image](https://github.com/user-attachments/assets/18f9a619-ce01-495a-9076-2727e6d1894f)

Complete todos los campos, o en todo caso modifique solo el campo que quiera editar y los cambios se reflejarán en la Card del video


   -  Clik en Guardar, para confirmar la modificación.
   -  Clik en Limpiar, para borrar todos los campos y agregar todo desde cero.
   -  Clik en Home en el Banner, para regresar a la página principal, si no quiere 
      guardar  ningún cambio.



Los cambios se verán reflejados en la Card del video.


Prueba de modificación de Título

Titulo Original

![image](https://github.com/user-attachments/assets/3fa550aa-5b5b-42a7-82b0-333b957df83a)



Titulo Modificado

![image](https://github.com/user-attachments/assets/79ae2f11-2dac-42b3-8a8c-4ecabeca6d39)



Prueba de modificación de la imágen


Imágen Original. Categoría FRONT END

![image](https://github.com/user-attachments/assets/4da17725-8912-4b9d-b360-16fdcab3cbe0)




Imágen Modificada. Cabe resaltar que En este caso se modificaron 3 campos. Título, Imágen y Categoria. Se puede observar la modificación ejecutada en las tres opciones

![image](https://github.com/user-attachments/assets/a23b9b60-c182-4d8f-a3e8-fccfedc821b8)



Prueba Modificacion del video

Primero hay que dar clik a la imágen para activar el video

Imágen

![image](https://github.com/user-attachments/assets/8a3f0e27-1134-4f65-928b-829a12cdd753)

Video activado

![image](https://github.com/user-attachments/assets/d026ced9-06f4-40f1-8b52-7025a2e071c6)


Prueba modificación video. Se modificó el título del video para dejar evidencia.

![image](https://github.com/user-attachments/assets/439ea8f6-1c18-4ad9-862e-c28153c30d7e)


Prueba de carga de nuevo video con una categoría no configurada en estilos.

![image](https://github.com/user-attachments/assets/9cbe6e45-fc9b-4105-ae8f-67da65f6f68d)




_________________________________________________________________________________________________________________
💻Tecnologías utilizadas

HTML5

CSS3

JavaScript

json-server. 

Fetch API, mediante https://my-json-server.typicode.com/

Node.js: https://nodejs.org/en

Visual Studio Code: https://code.visualstudio.com/

Extension Live Server

React: https://es.react.dev/

Vite: https://vite.dev/

React Router:  https://reactrouter.com/

React Icons: https://react-icons.github.io/react-icons/

Styled Components: https://styled-components.com/

ChatGpt: https://chatgpt.com/

GitHub: https://github.com/

Figma: https://www.figma.com/

Postimage:  https://postimages.org/

Vercel: https://vercel.com/


_________________________________________________________________________________________________________________

🗂️ Estructura del Proyecto


![image](https://github.com/user-attachments/assets/85155946-946d-43a5-a6a1-3b89f442c365)
![image](https://github.com/user-attachments/assets/52b03e77-a546-4d15-8f5c-37a8c8646975)





____________________________________________________________________________________________________________________________


Consideraciones generales del proyecto. ⚠️


El repositorio actual, archivo api.js apunta al servidor 
https://my-json-server.typicode.com/iborjas21/alura-flix-api

https://my-json-server.typicode.com/

el cual se encuentra en un server fake haciendo uso del recurso myJsonServer
por lo tanto al visitar el sitio disponible puede hacer las pruebas necesarias.

https://alura-flix-indol-seven.vercel.app/

Al ser un recurso free, contamos con limitaciones. Por ejemplo,  tiempo de respuesta, al refrescar o actualizar la pagina, los datos vuelven a la normalidad.

Las imagenes deben tener una url, para lo cual se utilizó un recurso free llamado Postimage https://postimages.org/

_________________________________________________________________________________________________________________

imagenes del proyecto

https://i.postimg.cc/9f4Xg7pW/player.png

https://i.postimg.cc/jWbrLCm9/player.png

https://i.postimg.cc/bGs1SNnx/imagen-1.png

https://i.postimg.cc/sM0hzdLv/imagen-2.png

https://i.postimg.cc/67k47VtK/imagen-3.png

https://i.postimg.cc/VJTWRCmG/imagen-4.png

https://i.postimg.cc/ft538GYz/imagen-5.png

https://i.postimg.cc/68wXQyDP/imagen-6.png

https://i.postimg.cc/DWw3qRfd/imagen-7.png

https://i.postimg.cc/qNQ9MQct/imagen-8.png

https://i.postimg.cc/DSCMK0FL/imagen-9.png


_________________________________________________________________________________________________________________

Videos del proyecto

https://www.youtube.com/embed/ov7vA5HFe6w?si=csb-YyfdAk7irpHS

https://www.youtube.com/embed/PztCEdIJITY?si=AyanVWHjZj0_W8CQ

https://www.youtube.com/embed/GJfOSoaXk4s?si=w1YEHyFKuVE72wxO

https://www.youtube.com/embed/rpvrLaBQwgg?si=osoFFJKySN3s30S3

https://www.youtube.com/embed/t-iqt1b2qqk?si=B7N5uZ27BhCPVSB0

https://www.youtube.com/embed/cLLKVd5CNLc?si=yZQFGMZYhFNjSMA7

https://www.youtube.com/embed/EoPvlE85XAQ?si=kha0GEfJtMH5YcLE

https://www.youtube.com/embed/vhwspfvI52k?si=yzxRUNsl3v0S7p2Z

https://www.youtube.com/embed/YhR7Zp8NUzE?si=lH42-yjHva0ONN9G

https://www.youtube.com/embed/6N3OkLCfK-0?si=J1DlNOXC_WVr9sZ9


_________________________________________________________________________________________________________________

En el entorno de desarrollo, para prueba de uso local, nos serviremos de archivo db.json utilizando json-server para simular el uso de servidor remoto.
para lo cual se debe cambiar la direccion al que apunta el archivo api.js y modificar la direccion actual por  http://localhost:3001/productos/


Se debe iniciar el servidor mediante los siguientes comandos

npm init -y

npm install json-server@0.17.3 --save-dev

npx json-server --watch db.json --port 3001



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
