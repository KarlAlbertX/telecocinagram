// ========================================================
// TELECOCINAGRAM - PUENTE FINANCIERO (src/routes/finance.js)
// ========================================================

const { getWallet } = require('../models/wallet');

// Manejar micro-préstamos de IABank
function handleIABankSync(req, res) {
    const { userId, action, targetAmount } = req.body;
    const wallet = getWallet(userId);

    if (action === 'MICRO_LOAN') {
        wallet.balances.cocinaCoin += parseFloat(targetAmount);
        wallet.transactions.push({ 
            id: Date.now(), 
            type: 'IABANK_LOAN', 
            amount: targetAmount, 
            status: 'Approved', 
            timestamp: new Date().toISOString() 
        });
        return res.status(200).json({ 
            success: true, 
            message: "Préstamo aprobado por IABank.", 
            newBalance: wallet.balances.cocinaCoin 
        });
    }
    res.status(400).json({ success: false, message: "Acción IABank no reconocida." });
}

// Manejar conversión de criptomonedas vía Binance
function handleBinanceConvert(req, res) {
    const { userId, fromAsset, toCurrency, amount } = req.body;
    const wallet = getWallet(userId);

    if (wallet.balances[fromAsset] === undefined || wallet.balances[fromAsset] < parseFloat(amount)) {
        return res.status(400).json({ success: false, message: "Fondos insuficientes." });
    }

    wallet.balances[fromAsset] -= parseFloat(amount);
    const rate = fromAsset === 'bitcoin' ? 65000 : 1.25;
    const converted = amount * rate;

    wallet.transactions.push({ 
        id: Date.now(), 
        type: 'BINANCE_CONVERSION', 
        from: `${amount} ${fromAsset}`, 
        to: `${converted} ${toCurrency}`, 
        timestamp: new Date().toISOString() 
    });

    res.status(200).json({ 
        success: true, 
        message: "Convertido vía Binance.", 
        convertedDetails: { 
            sent: `${amount} ${fromAsset}`, 
            received: `${converted} ${toCurrency}`, 
            remaining: wallet.balances[fromAsset] 
        } 
    });
}

module.exports = {
    handleIABankSync,
    handleBinanceConvert
};
