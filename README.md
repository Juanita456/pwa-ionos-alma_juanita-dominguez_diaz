# pwa-ionos-alma_juanita-dominguez_diaz
Actividad: Investigación, Implementación y Despliegue de una PWA

# Investigación PWA


## 1. Web App Manifest (manifest.json)

El **Web App Manifest** define cómo la aplicación debe comportarse cuando se instala en un dispositivo.

- **theme_color**: Color de la barra de herramientas del navegador y del sistema operativo cuando la app está abierta.  
- **background_color**: Color de fondo mostrado mientras se carga la aplicación.  
- **display**:  
  - **standalone**: La app se abre como independiente, sin interfaz del navegador.  
  - **browser**: Se abre dentro del navegador con su interfaz completa.  
- **icons**: Array de imágenes en diferentes tamaños y resoluciones. Son esenciales para que la app se vea correctamente en distintos dispositivos y sistemas operativos.

---

## 2. Service Workers

Los **Service Workers** son scripts que corren en segundo plano y permiten funciones avanzadas como caché, notificaciones push y soporte offline.

- **Registro**: Se realiza con `navigator.serviceWorker.register()`.  
- **Ciclo de vida**:  
  - **Installation**: Descarga y guarda el Service Worker.  
  - **Activation**: Limpia cachés antiguas y empieza a controlar páginas.  
  - **Fetching**: Intercepta solicitudes de red y decide si responder con caché o con la red.  
- **Proxy de red**: Actúan como intermediarios entre la aplicación y el servidor, pudiendo servir contenido desde caché o modificar respuestas.

---

## 3. Estrategias de Almacenamiento (Caching)

| Estrategia              | Descripción | Ventajas | Desventajas |
|--------------------------|-------------|----------|-------------|
| **Stale-While-Revalidate** | Devuelve contenido en caché inmediatamente y actualiza en segundo plano. | Respuesta rápida + datos frescos luego. | Puede mostrar datos desactualizados inicialmente. |
| **Cache First**          | Prioriza el caché; si no existe, va a la red. | Excelente para apps offline. | Riesgo de servir contenido obsoleto. |
| **Network First**        | Intenta primero la red; si falla, usa caché. | Garantiza datos actualizados. | Puede ser lento si la red es deficiente. |

---

## 4. Seguridad y TLS

- **HTTPS como requisito**: Los Service Workers pueden interceptar y modificar tráfico. Para evitar ataques de tipo *man-in-the-middle*, los navegadores exigen que las PWAs se sirvan por HTTPS.  
- **Impacto en el Install Prompt**: Los navegadores solo muestran el aviso de instalación (“Add to Home Screen”) si la PWA cumple con los requisitos de seguridad, incluyendo un certificado TLS válido. Esto asegura confianza y credibilidad para el usuario.

---
