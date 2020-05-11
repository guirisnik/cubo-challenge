const database = require('mongoose');

require('dotenv').config();

export const dbConnect = () => database.connect(
  process.env.DB_HOST.replace('<password>', process.env.DB_PASSWORD),
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
).then(() => console.log('Database connected.'));
