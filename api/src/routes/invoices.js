const {Router} = require('express');
const router = Router();
const orderSchema = require('../models/orders');
const userSchema = require('../models/users');
const invoiceSchema = require('../models/invoices');
const productSchema = require('../models/products');
const passport = require('passport');
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');

router.get(
	'/',
	passport.authenticate('jwt', {session: false}),
	async (req, res) => {
		try {
			const token = req.headers.authorization.split(' ');
			const decodificado = jwt_decode(token[1]);
			const findUser = await userSchema.findOne({email: decodificado.email});

			if (findUser.userStatus !== 'Admin') {
				const allInvoices = await invoiceSchema
					.find({user: findUser._id})
					.populate('user');
				return res.send(allInvoices);
			}
		} catch (err) {
			res.status(404).send('No autorizado para acceder a las facturas');
		}
	}
);

router.post(
	'/',
	passport.authenticate('jwt', {session: false}),
	async (req, res) => {
		try {
			const {items, totalAmount, service} = req.body;
			const token = req.headers.authorization.split(' ');
			const decodificado = jwt_decode(token[1]);
			const findUser = await userSchema.findOne({email: decodificado.email});
			const data = {
				items: items,
				totalAmount: totalAmount,
				user: findUser._id,
			};
			const newInvoice = await new invoiceSchema(data);
			await newInvoice.save();
			return res.send(newInvoice._id);
		} catch (err) {
			return res.status(404).send(err);
		}
	}
);

router.put(
	'/',
	passport.authenticate('jwt', {session: false}),
	async (req, res) => {
		try {
			const {items} = req.body;
			for (let i = 0; i < items.length; i++) {
				let productStock = await productSchema.findOne({
					name: `${items[i].name}`,
				});
				let actualStock = productStock.stock - items[i].quantity;
				let stockUpdate = await productSchema.findOneAndUpdate(
					{name: `${items[i].name}`},
					{stock: actualStock}
				);
			}
			return res.send('Actualizado');
		} catch (err) {
			return res.status(404).send('No se actualizar el stock.');
		}
	}
);

module.exports = router;
