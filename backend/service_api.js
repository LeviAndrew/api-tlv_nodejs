var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'api_node_tlv_service',
  description: 'Serviço de API para maps',
  script: 'C:\\Api-Node\src\server.js'
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', () => {
  svc.start();
});

svc.on('uninstall', () => {
  console.log('Desinstalado com sucesso.');
});
 
svc.install();