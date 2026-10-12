#!/usr/bin/env node
// ========================================================
// TELECOCINAGRAM - SERVIDOR PRINCIPAL MODULAR v1.2.0-alpha
// ========================================================

const express = require('express');
const app = express();
app.use(express.json());

// --- IMPORTACIÓN DE MÓDULOS ---
const { getWallet, creditWallet } = require('./src/models/wallet');
const { handleIABankSync, handleBinanceConvert } = require('./src/routes/finance');
const { verifyHologram, auditKitchen } = require('./src/security/petrona');

// --- RUTAS DE BILLETERA (Models) ---
app.get('/api/wallet/:userId', (req, res) => {
    const { userId } = req.params;
    const wallet = getWallet(userId);
    res.status(200).json({ 
        success: true, 
        message: "Billetera bajo la supervisión de Petrona.", 
        data: wallet 
    });
});

app.post('/api/wallet/mine', (req, res) => {
    const { userId, coinType, amount, source } = req.body;
    const result = creditWallet(userId, coinType, amount, source);
    
    if (result.success) {
        res.status(200).json({ 
            success: true, 
            message: `¡Acreditado en ${coinType}!`, 
            newBalance: result.newBalance 
        });
    } else {
        res.status(400).json({ success: false, message: result.message });
    }
});

// --- RUTAS DE PUENTE FINANCIERO (Routes) ---
app.post('/api/bridge/iabank-sync', handleIABankSync);
app.post('/api/bridge/binance-convert', handleBinanceConvert);

// --- RUTAS DE SEGURIDAD Y PETRONA (Security) ---
app.post('/api/petrona/hologram-verify', verifyHologram);
app.post('/api/petrona/audit-kitchen', auditKitchen);

// --- INICIAR SERVIDOR ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🍳 Telecocinagram Modular v1.2.0-alpha activo en el puerto ${PORT}`);
});

