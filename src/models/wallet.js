// ========================================================
// TELECOCINAGRAM - MÓDULO DE BILLETERA (src/models/wallet.js) v1.2.0-alpha
// ========================================================

const walletsDB = new Map();

function createInitialWallet(userId) {
    return {
        userId: userId,
        balances: {
            cocinaCoin: 0.00,   
            kitchenCoin: 0.00,  
            bitcoin: 0.00000000 
        },
        transactions: []
    };
}

function getWallet(userId) {
    if (!walletsDB.has(userId)) {
        walletsDB.set(userId, createInitialWallet(userId));
    }
    return walletsDB.get(userId);
}

function creditWallet(userId, coinType, amount, source) {
    const wallet = getWallet(userId);
    if (wallet.balances[coinType] !== undefined) {
        wallet.balances[coinType] += parseFloat(amount);
        wallet.transactions.push({
            id: Date.now(), 
            type: 'MINING_REWARD', 
            coin: coinType, 
            amount,
            source: source || 'Premio Petrona', 
            timestamp: new Date().toISOString()
        });
        return { success: true, newBalance: wallet.balances[coinType] };
    }
    return { success: false, message: "Criptomoneda inválida." };
}

module.exports = {
    getWallet,
    creditWallet,
    walletsDB
};
