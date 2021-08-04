// avances pre julian
const {Router} = require('express');
const router = Router();
const mercadopago = require('mercadopago');

mercadopago.configure({
	access_token:
		'TEST-3886982048825324-071417-78b25982e05ba3f21663b439b9a051e1-185367723',
});

router.post('/create_preference', async (req, res) => {
	console.log('arra: ', req.body.cart);

	const preference = {
		items: req.body.cart,
		back_urls: {
			success: 'localhost:3000/checkOutMp', //PONER PAGINA QUE QUEREMOS QUE NOS VAYA CUANDOS EFECTUA EL PAGO
			pending: 'localhost:3000/checkOutMp',
			failure: 'localhost:3000/checkOutMp',
		},
		payment_methods: {
			excluded_payment_types: [
				{
					id: 'ticket',
				},
			],
			installments: 12,
		},
		auto_return: 'approved',
	};
	try {
		const response = await mercadopago.preferences.create(preference);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;
