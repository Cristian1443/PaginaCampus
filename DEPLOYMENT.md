# Instrucciones de Despliegue en Netlify

## Configuración para Videos

### 1. Archivos de Configuración
Se han creado los siguientes archivos en la carpeta `public/`:

- `_headers`: Configura los headers HTTP para videos
- `_redirects`: Maneja las redirecciones de assets

### 2. Verificación del Video
El video `minisoft.mp4` debe estar en:
```
public/assets/video/minisoft.mp4
```

### 3. Configuración de Vite
El archivo `vite.config.js` está configurado para manejar correctamente los assets de video.

### 4. Solución de Problemas

Si el video no se reproduce en Netlify:

1. **Verificar la consola del navegador** para errores
2. **Comprobar que el archivo existe** en la carpeta correcta
3. **Verificar la configuración de Netlify**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 o superior

### 5. Configuración de Netlify

En el panel de Netlify, asegúrate de:

1. **Headers personalizados** (si no se aplican automáticamente):
   ```
   /assets/video/*
     Content-Type: video/mp4
     Cache-Control: public, max-age=31536000
   ```

2. **Variables de entorno** (si es necesario):
   ```
   NODE_VERSION=18
   ```

### 6. Respaldo Automático

El componente About tiene un respaldo automático:
- Si el video falla, muestra la imagen del robot
- La imagen tiene animación CSS como alternativa

### 7. Pruebas

Para probar localmente:
```bash
npm run build
npm run preview
```

Luego verifica que el video funcione en `http://localhost:4173` 