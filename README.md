# Challenge Tecnico FullStack forEach

Generar una aplicación que permita a los colaboradores de la empresa poder registrar 
sus viajes.
Visualizar los viajes registrados en la plataforma

## Requisitos

Minimos: 
Que el trabajador pueda ingresar a la plataforma
Ver viajes registrados
Registro de viaje
Cálculo factor de emisión

Plus:
Para asegurar la información almacenada en el sistema se necesita implementar un sistema 
de autenticación que permita a los colaboradores ingresar a la plataforma para poder 
registrar sus viajes y además ver el historial de viajes que este ha realizado (sin poder ver 
los viajes de los demás trabajadores). Además debe permitir a la directora de medio 
ambiente poder ver todos los viajes que han registrado los trabajadores de la organización 
para que posteriormente pueda elaborar sus informes con esta información.

## Ejecución 

1. Clonal el repositorio.
2. Backend 
-> En la raiz utilizar el comando "npm install" 
-> Utilizar el comando "npm start"
3. Frontend
-> Entrar a la carpeta frontend 
-> tilizar el comando "npm install"
-> Utilizar el comando "npm start"


## Probar la aplicación
Puede crear una nueva cuenta o utilizar las siguientes cuentas:

### Trabajadores:
**usuario**: Carlos  
**password**: Asd12345  

### Directora:
**usuario**: Maria    
**password**: directora123   

Al ingresar a la app le pedira ingresar con su cuenta o bien crear una en caso de no tener.
Una vez ingresado podra ver sus viajes registrados y cargar un nuevo viaje.
En el caso de que la cuenta sea de la directora le permitira ver todos los viajes registrados.

## Tecnologias utilizadas
La app fue creada con el stack MERN

**Client**: 

ReactJS  
React-router-dom  
Redux  
React-toastify   
Axios   
Sass  

**Server**: 

NodeJS  
ExpressJS   
Bcryptjs   
Joi  
Jsonwebtoken  
Passport  
mongoose   
 
Como base de datos utilice MongoDB







