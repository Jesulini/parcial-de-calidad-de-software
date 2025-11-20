const core = require('@actions/core');

function run() {
    try {
        const name = core.getInput('name');
        console.log(`👋 Hola, ${name}! Acción personalizada ejecutada correctamente.`);
    } catch (error) {
        core.setFailed(`Error en la acción: ${error.message}`);
    }
}

run();
