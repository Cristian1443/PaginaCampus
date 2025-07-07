# Instrucciones de Despliegue en Netlify

## Configuración para Videos

### 1. Archivos de Configuración
Se han creado los siguientes archivos:

- `netlify.toml`: Configuración principal de Netlify
- `public/_headers`: Configura los headers HTTP para videos
- `public/_redirects`: Maneja las redirecciones de assets

### 2. Verificación del Video
El video `minisoft.mp4` debe estar en:
```
public/assets/video/minisoft.mp4
```

### 3. Sistema de Carga Mejorado
El componente About ahora incluye:

- **Múltiples fuentes de video**: Intenta cargar desde diferentes rutas
- **Sistema de fallback**: Si el video falla, muestra una animación CSS atractiva
- **Componente de prueba**: `VideoTest.jsx` para debuggear problemas de carga
- **Logs detallados**: Console.log para identificar problemas

### 4. Solución de Problemas

Si el video no se reproduce en Netlify:

1. **Verificar la consola del navegador** para errores específicos
2. **Usar el componente VideoTest** (temporal) para ver qué rutas funcionan
3. **Verificar la configuración de Netlify**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 o superior

### 5. Configuración de Netlify

El archivo `netlify.toml` incluye:

```toml
[[headers]]
  for = "/assets/video/*"
  [headers.values]
    Content-Type = "video/mp4"
    Cache-Control = "public, max-age=31536000"
    Access-Control-Allow-Origin = "*"
```

### 6. Rutas de Video Probadas

El sistema intenta cargar desde:
1. `/assets/video/minisoft.mp4`
2. `assets/video/minisoft.mp4`
3. `./assets/video/minisoft.mp4`
4. `https://campusue.netlify.app/assets/video/minisoft.mp4`

### 7. Respaldo Automático

Si todas las rutas fallan:
- Muestra una animación CSS con robot 🤖
- Efectos de partículas flotantes
- Gradiente animado
- No requiere archivos externos

### 8. Componente de Prueba

Para debuggear, el componente `VideoTest` muestra:
- Estado de carga de cada ruta
- Errores específicos
- Botón para retestear

### 9. Pruebas

Para probar localmente:
```bash
npm run build
npm run preview
```

Luego verifica que el video funcione en `http://localhost:4173`

### 10. Limpieza

Después de confirmar que funciona:
- Remover `VideoTest` del `App.jsx`
- Eliminar el archivo `VideoTest.jsx` 