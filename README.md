# BTG-FPV-FIC-FrontEnd
Código fuente del Back-end para BTG FPV-FIC

Pasos para la ejecucion del codigo utilizando Docker (Se da por supuesto que ya se tiene docker instalado):

1. Para la creaciion de la imagen Docker utilizar:

docker build -t ffcv/ffcv:latest .

2. Para la creacion del contenedor docker:

docker run -d --name ffcv -p 3000:3000 ffcv/ffcv

--------------------------------------------------------------------------------------------------

Pasos para la ejecucion del codigo sin utilizar Docker (Se da por supuesto que ya se tiene node instalado y puede ejecutar comando npm):

1. Para la creaciion de la imagen Docker utilizar:

npm install

2. Para la creacion del contenedor docker:

npm start