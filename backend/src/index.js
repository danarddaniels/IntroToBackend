import dotenv from 'dotenv';
import connectDB from './config/database.js';

dotenv.config({
	path: './.env',
});

const startServer = async () => {
	try {
		await connectDB();

		app.on('error', (error) => {
			throw error;
		});

		app.listen(process.env.PORT, () => {
			console.log(`app is running on port: ${PORT}`);
		});
	} catch (err) {
		console.log(`Failed to connect to server: ${err}`);
	}
};
