var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Use native ES6 Promise instead of Mongoose's default

//------------------------------------------------------------------------
module.exports = {
	
	//Options
	connectionString: process.env.DATABASE_URL || 'mongodb://localhost:27017/flightdb',


	//Methods
	connect: function(connectionString, callback) {

		mongoose.connect(this.connectionString, function(err) {

            if (err) {
            	console.error('cant connect to mongoDB at ds031893.mlab.com:31893/flightdb');
            	callback(err);
            	return;
            }

            console.log('mongoDB connected at ds031893.mlab.com:31893/flightdb');
            callback();
        });
	}
}