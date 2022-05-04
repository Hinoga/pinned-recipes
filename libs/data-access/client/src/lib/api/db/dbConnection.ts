import * as mongoose from 'mongoose';

const DB_URL = 'mongodb://127.0.0.1:27017/recipes';

export const dbConnection = async () => {
  const mongo = mongoose.connect(DB_URL);
  mongo.then(
    () => {
      console.log('Database connected!');
    },
    (error) => {
      console.log(error, 'error');
    }
  );
};
