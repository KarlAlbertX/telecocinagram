# 🍳 Telecocinagram Wiki - Developed Lab

> **Bienvenido a la documentación oficial de Telecocinagram (v1.2.0-alpha)**, una plataforma social culinaria modular, local y autohospedada optimizada para entornos móviles y de alta eficiencia en Termux.

---

## 🏛️ 1. Arquitectura Modular del Sistema
Telecocinagram descarta los monolitos tradicionales y adopta una arquitectura basada en micro-módulos desacoplados construidos sobre **Node.js** y **Express**:

- **`/src/models/`**: Contiene la lógica de persistencia de entidades y gestión de activos (ej. `wallet.js` para los fondos y saldos).
- **`/src/routes/`**: Puentes lógicos de comunicación, pasarelas financieras e interfaces de usuario por API (ej. `finance.js`, `recipes.js`, `library.js`).
- **`/src/security/`**: Capas de auditoría, control de acceso y cumplimiento normativo (ej. `petrona.js` y el Decreto del Fregadero Vacío).
- **`/src/lib/`**: Utilidades centrales, formateadores de moneda culinaria y herramientas de registro del sistema (`helpers.js`).

---

## 👥 2. Entidades del Ecosistema
El ecosistema interactúa a través de actores bien definidos:
- **`chef_master`**: Operador principal de los fogones y autor de las recetas de la plataforma.
- **`Petrona`**: Inteligencia de seguridad automatizada encargada de auditar la cocina y velar por el orden.
- **`IABank`**: Entidad descentralizada de micro-financiamiento, gestión de liquidez y préstamos.
- **`Binance`**: Puente de conversión de activos digitales (tasa de conversión oficial: `cocinaCoin` a `USD` con factor de 1.25).
- **`Developed Lab`**: Entidad matriz de desarrollo, autoría e ingeniería (`core@telecocinagram.dev`).

---

## 📜 3. El Rincón Histórico y la Biblioteca Culinaria
Como parte de nuestra filosofía descentralizada y libre, Telecocinagram incluye un módulo de biblioteca dedicado a la historia financiera y digital:
- **El Sagrado Libro Blanco de Bitcoin**: Alojamiento local y referencias directas al *Whitepaper* original de Satoshi Nakamoto (2008), sirviendo como inspiración para los sistemas de IABank.
- **Módulo de Ayuda API**: Endpoints accesibles vía `/api/library/help` para auditar el estado del sistema en tiempo real.

---

## ⚖️ 4. Gobernanza y Licenciamiento (GPL v3)
Este proyecto se distribuye bajo los términos estrictos de la **GNU General Public License v3 (GPL v3)**. 
- **Libertad total** para ejecutar, estudiar, modificar y compartir el código fuente.
- Cualquier obra derivada debe mantener la misma licencia abierta bajo la autoría original de **Developed Lab**.

---
*Desarrollado con pasión en los fogones de Termux (Samsung Galaxy J7 Pro).*
