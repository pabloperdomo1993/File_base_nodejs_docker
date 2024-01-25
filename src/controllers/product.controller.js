import { getConnection } from '../database/database';
import axios from 'axios';

const getProduct = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            'SELECT * FROM products'
        )

        const resp = await axios.get('https://pokeapi.co/api/v2/generation/1')

        console.log('****a', resp)
        // const dataResp = await resp.json();

        res.json({ message: 'Products', data: result, other: resp.data })
    } catch (error) {
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(
            'SELECT * FROM products WHERE id = ?', id
        )

        res.json({ message: 'Products', data: result })
    } catch (error) {
    }
}

const createProduct = async (req, res) => {
    try {
        const connection = await getConnection();
        const { name, dni, email } = req.body;
        const product = {
            name,
            dni,
            email
        };
        const result = await connection.query(
            'INSERT INTO products SET ?', product
        )

        res.json({ message: 'Created product!', data: result })
    } catch (error) {
    }
}

const updateProduct = async (req, res) => {
    try {
        const connection = await getConnection();
        const { name, dni, email, id } = req.body;
        const product = {
            name,
            dni,
            email
        };
        const result = await connection.query(
            'UPDATE products SET ? WHERE id = ?', [product, id]
        )

        res.json({ message: 'Created product!', data: result })
    } catch (error) {
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(
            'DELETE FROM products WHERE id = ?', id
        )

        res.json({ message: 'Products', data: result })
    } catch (error) {
    }
}

export const methods = {
    getProduct,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}