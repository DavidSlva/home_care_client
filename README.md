# Home Care Scheduling
## Introducción
- La Clínica Reb, es un centro de atención médica a domicilio, mejor conocido como Home Care. Recién se están montando en una página web para mostrar información, pero las citas médicas aún se agendan manualmente. Se nos pide realizar un sitio web complementario al existente, que facilite el agendamiento de citas médicas, donde pueda coincidir el horario deseado del paciente, como el disponible de los trabajadores (Personal de Salud) de manera automática. El paciente debe ser capaz de enviar un formulario con sus horarios disponibles, servicios a solicitar, historial médico, etc; mientras el administrador, con nuestro software, le genera una cotización y un horario disponible de atención. Se nos pide también ayudar en la contabilidad de la empresa, registrando lo que se debe pagar a un empleado de la salud (tomando en cuenta la cantidad de turnos realizados) y lo que han pagado los clientes, para a fin de mes poder hacer un balance contable.
## Ejecución de Dockerfile
-  Buildeo
- - `docker build -t mysql-custom .`
-  Montaje
- - `docker run -d -p <puerto_deseado>:3306 --name mysql-container mysql-custom`
