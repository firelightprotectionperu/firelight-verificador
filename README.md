# FIRELIGHT PROTECTION — Verificación de certificados

Sitio web estático listo para GitHub Pages.

## Publicación gratuita
1. Crea una cuenta en GitHub.
2. Crea un repositorio público llamado `certificados-firelight`.
3. Sube todos los archivos de esta carpeta a la raíz del repositorio.
4. En el repositorio entra a **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Elige la rama `main` y la carpeta `/ (root)`, luego guarda.
7. GitHub mostrará una dirección parecida a:
   `https://TUUSUARIO.github.io/certificados-firelight/`

## Enlace individual
Cada QR puede apuntar a:
`https://TUUSUARIO.github.io/certificados-firelight/?codigo=IC-002201`

## Actualizar certificados
Edita `certificados.js`. Cada registro contiene código, nombre, DNI, curso, fechas y un campo `pdf`.

Para habilitar el botón de descarga, sube el PDF a una carpeta `pdf/` y coloca, por ejemplo:
`"pdf": "pdf/IC-002201.pdf"`

## Privacidad
La consulta admite el DNI completo, pero la página solo muestra los primeros cuatro dígitos.
