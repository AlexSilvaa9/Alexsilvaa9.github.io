# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate con tu email (es gratuito hasta 200 emails/mes)

### 2. Configurar el Servicio de Email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor (Gmail recomendado)
4. Sigue las instrucciones para conectar tu cuenta
5. Anota el **Service ID** que se genera

### 3. Crear el Template de Email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa este template como base:

```
Subject: Nuevo mensaje de {{from_name}} - {{subject}}

Hola Alex,

Has recibido un nuevo mensaje desde tu portfolio:

**Remitente:** {{from_name}}
**Email:** {{from_email}}
**Asunto:** {{subject}}

**Mensaje:**
{{message}}

---
Este mensaje fue enviado desde https://alexsilvaa9.github.io
```

4. Anota el **Template ID** que se genera

### 4. Obtener la Public Key
1. Ve a "Account" → "General"
2. Copia tu **Public Key**

### 5. Actualizar la configuración
Edita el archivo `src/config/emailjs.js` con tus datos:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'tu_service_id_aqui',
  TEMPLATE_ID: 'tu_template_id_aqui', 
  PUBLIC_KEY: 'tu_public_key_aqui',
};
```

### 6. Probar el formulario
1. Ejecuta `npm start`
2. Ve a la sección Contact
3. Envía un mensaje de prueba
4. Verifica que recibas el email

## Troubleshooting

### Si no recibes emails:
- Verifica que el Service esté conectado correctamente
- Revisa la carpeta de spam
- Asegúrate de que las variables en `emailjs.js` sean correctas
- Verifica que el template tenga las variables correctas: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

### Si hay errores en consola:
- Verifica que `@emailjs/browser` esté instalado
- Asegúrate de que las URLs en el template sean correctas
- Revisa que la Public Key sea válida

## Límites del plan gratuito
- 200 emails por mes
- Perfecto para un portfolio personal
- Si necesitas más, puedes actualizar a un plan de pago
