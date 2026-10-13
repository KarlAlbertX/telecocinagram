// Developed Lab - Core Utilities / Librería de Código (v1.2.0-alpha)

/**
 * Formatea una cantidad numérica a formato de CocinaCoin
 */
function formatCocinaCoin(amount) {
    return `${Number(amount).toFixed(2)} 🍳CC`;
}

/**
 * Logger oficial de la cocina con estampa de tiempo
 */
function kitchenLog(moduleName, message) {
    const timestamp = new Date().toISOString();
    console.log(`[Developed Lab][${timestamp}][${moduleName}] -> ${message}`);
}

module.exports = {
    formatCocinaCoin,
    kitchenLog
};
