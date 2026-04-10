import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGOOSE_URI}`,
		);
		console.log('DB connected', connectionInstance.connect.host);
	} catch (err) {
		console.log(`Failed to connect: ${err}`);
		process.exit();
	}
};

export default connectDB;
