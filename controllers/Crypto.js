const pool = require('../config/database');
const axios = require('axios');

exports.fetchAndStore = async (req, res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = response.data;
        const top10 = Object.values(data).slice(0, 10);

        const sql = `
            INSERT INTO top_cryptos (name, last, buy, sell, volume, base_unit)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        for (const crypto of top10) {
            const { name, last, buy, sell, volume, base_unit } = crypto;
            await pool.execute(sql, [name, last, buy, sell, volume, base_unit]);
        }

        res.json({ message: 'Data fetched and stored in MySQL database' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching data from API' });
    }
};


exports.topCryptos = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM top_cryptos');
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data from database');
    }
};