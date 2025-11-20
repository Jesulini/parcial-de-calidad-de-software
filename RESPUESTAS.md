1. Cómo identificar fallos en linter, pruebas y cobertura

Cuando se ejecuta el pipeline de GitHub Actions (o usando act), cada paso del workflow muestra logs. Para saber qué falló:

Fallo en el Linter (ESLint)

Aparece en el paso "Run linter".

Los mensajes típicos incluyen:

"error" o "warning"

"Unexpected token", "Missing semicolon", "no-unused-vars"

Si el linter falla, el pipeline marca Failure - Run linter.

Fallo en Pruebas (Jest)

Aparece en el paso "Run tests with coverage".

Se identifican por:

Tests en rojo.

Mensajes como:

"Expected X but received Y"

"Test failed"

"Cannot read property..."

El pipeline marca Failure - tests.

Fallo en el porcentaje de cobertura

Aparece en el paso "Validate coverage threshold".

El log muestra:

"Coverage: 62%"

Si es menor a 80% →
"Coverage threshold not met. Required: 80%"

El pipeline termina con exit 1.

2. Ejemplo de un run fallido vs uno exitoso
Run fallido

Un run falla cuando cualquier paso del pipeline produce un error.
Los casos más comunes:

Ejemplo: Linter fallido

sh: 1: eslint: Permission denied
Failure - Run linter

Ejemplo: Prueba fallida

Calculator › divide › throws when dividing by 0
Error: No se puede dividir entre cero

Ejemplo: Cobertura insuficiente

Coverage: 65%
Coverage threshold not met. Required: 80%

Resultado final:

Job failed


