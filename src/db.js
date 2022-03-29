import mongoose from 'mongoose'

const mongoURI = 'mongodb://localhost:27017/diseny-clone?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';


const connectToMongo = async () => {
    mongoose.connect(mongoURI, () => {
        console.log('connectToMongoose successfully')
    }).catch(err => console.log(err));

}

export default connectToMongo;