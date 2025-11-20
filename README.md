1. Diferencia entre CI y CD
CI – Integración Continua

La Integración Continua (CI) es la práctica donde cada cambio realizado en el código se integra automáticamente al repositorio ejecutando un conjunto de tareas automatizadas:

Linter

Compilación

Pruebas

Análisis de calidad

CI busca detectar errores temprano y evitar que la rama principal se dañe.

CD – Entrega/Despliegue Continuo

El CD tiene dos significados:

Continuous Delivery: el sistema está listo para desplegarse en cualquier momento. El despliegue lo aprueba un humano.

Continuous Deployment: cada vez que un cambio pasa CI, se despliega automáticamente al ambiente final.

En resumen:

CI = validación automática continua del código.

CD = despliegue automático o automatizable del software validado.

2. Lenguaje, linter y herramienta de cobertura seleccionados
Lenguaje elegido: JavaScript/TypeScript

Justificación:

Ecosistema grande.

Integración sencilla con GitHub Actions.

Herramientas de pruebas y linters muy maduras.

Linter: ESLint

Justificación:

Estándar en la industria.

Configurable y soporta TypeScript.

Compatible con GitHub Actions.

Framework de pruebas: Jest

Justificación:

Permite pruebas rápidas.

Soporta mocks, snapshots y cobertura.

Integrado fácilmente en pipelines CI.

Herramienta de cobertura: Jest + istanbul (builtin)

Justificación:

Genera reportes de cobertura automáticamente.

No requiere instalación adicional.

Compatible con GitHub Actions.

3. Umbral mínimo de cobertura

Umbral propuesto: 80%

Justificación:

70% es aceptable pero algo permisivo.

90% es muy alto y puede forzar pruebas artificiales.

80% es un equilibrio entre calidad y productividad.

El pipeline debe fallar si:

La cobertura global es < 80%.

Algún archivo cae por debajo del umbral.