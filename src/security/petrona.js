// ========================================================
// TELECOCINAGRAM - SEGURIDAD Y PETRONA (src/security/petrona.js)
// ========================================================

const petronaSecurityDB = new Map();

function verifyHologram(req, res) {
    const { userId, securityToken } = req.body;
    if (securityToken !== "SECURE_NEXUS_PASS_2026") {
        return res.status(403).json({ success: false, message: "¡Intruso! Holograma en rojo: Acceso denegado." });
    }
    petronaSecurityDB.set(userId, { hologramActive: true, status: "Protegido" });
    res.status(200).json({ success: true, message: "✨ Holograma de Petrona proyectado con éxito." });
}

function auditKitchen(req, res) {
    const { kitchenCleanlinessScore } = req.body;
    if (kitchenCleanlinessScore < 80) {
        return res.status(400).json({ 
            success: false, 
            decree: "DECRETO DEL FREGADERO VACÍO VIOLADO", 
            message: "Petrona cruza los brazos: 'Platos sucios detectados. Sin minería hasta limpiar'." 
        });
    }
    res.status(200).json({ 
        success: true, 
        decree: "¡Área aprobada!", 
        message: "Petrona sonríe en el holograma. Minería autorizada." 
    });
}

module.exports = {
    verifyHologram,
    auditKitchen
};
