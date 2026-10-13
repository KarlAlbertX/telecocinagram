const express = require('express');
const router = express.Router();

// El sagrado Libro Blanco de Bitcoin (Satoshi Nakamoto, 2008) resumido/alojado localmente en la cocina
const bitcoinWhitepaper = {
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    author: "Satoshi Nakamoto",
    year: 2008,
    abstract: "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.",
    sections: [
        "1. Introduction",
        "2. Transactions",
        "3. Timestamp Server",
        "4. Proof-of-Work",
        "5. Network",
        "6. Incentive",
        "7. Reclaiming Disk Space"
    ],
    fullTextUrl: "https://bitcoin.org/bitcoin.pdf"
};

// Endpoint para leer información y extractos del Libro Blanco
router.get('/whitepaper', (req, res) => {
    res.json({
        success: true,
        message: "📜 Libro Blanco de Bitcoin consultado desde la biblioteca de Developed Lab.",
        document: bitcoinWhitepaper
    });
});

// Endpoint de ayuda general de Telecocinagram (Módulo de Ayuda)
router.get('/help', (req, res) => {
    res.json({
        success: true,
        system: "Telecocinagram v1.2.0-alpha",
        developedBy: "Developed Lab (core@telecocinagram.dev)",
        license: "GPL v3",
        availableEndpoints: {
            wallet: "GET /api/wallet",
            mining: "POST /api/mine",
            loans: "POST /api/bridge/iabank-sync",
            conversion: "POST /api/bridge/binance-convert",
            petronaSecurity: "POST /api/petrona/audit-kitchen",
            recipes: "GET/POST /api/recipes",
            libraryWhitepaper: "GET /api/library/whitepaper",
            help: "GET /api/library/help"
        }
    });
});

module.exports = router;
