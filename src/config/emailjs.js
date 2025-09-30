// Configuración de EmailJS
// Para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta gratuita
// 3. Crea un servicio de email (Gmail, Outlook, etc.)
// 4. Crea un template de email
// 5. Reemplaza los valores a continuación con los tuyos

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_uj6k3vd', // Reemplaza con tu Service ID
  TEMPLATE_ID: 'template_contact', // Reemplaza con tu Template ID
  PUBLIC_KEY: 'BGTtNdQmNqWOGKCYk', // Reemplaza con tu Public Key
};

// Template sugerido para EmailJS:
/*
Subject: Nuevo mensaje de {{from_name}} - {{subject}}

Mensaje:
{{message}}

Datos del remitente:
Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

---
Este mensaje fue enviado desde el portfolio de Alex Silva
*/
