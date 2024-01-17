import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/login', (req, res) => {
  res.send('I am login');
});

app.get('/api/info', (req, res) => {
  console.log('data requested');
  res.json({
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 28,
        address: {
          city: 'New York',
          state: 'NY',
          country: 'USA',
        },
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        age: 24,
        address: {
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
        },
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        age: 32,
        address: {
          city: 'Chicago',
          state: 'IL',
          country: 'USA',
        },
      },
      {
        id: 4,
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        age: 22,
        address: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
        },
      },
    ],
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server running');
});
