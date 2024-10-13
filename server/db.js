const mongoose=require('mongoose');

const connectDB= async ()=>{
	try{
		const conn = await mongoose.connect(
			'mongodb+srv://piyushupadhyay:22KttiQa5BBsMDdH@cluster0.sugwb.mongodb.net/Business?retryWrites=true&w=majority&appName=Cluster0'
		,);
		console.log(`MongoDB connected : ${conn.connection.host}`);
	}catch(error){
		console.error(error);
		process.exit(1);
	}

}

module.exports=connectDB;