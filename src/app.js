import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Enkel hälsnings-route
app.get('/', (req, res) => {
  res.json({ message: 'Lektion 8, bygg CD/CI Pipeline', status: 'ok' });
});

app.get('/fruit', (req, res) => {
  const users = [
    { id: 1, item: 'Apple' },
    { id: 2, item: 'Banana' },
    { id: 3, item: 'Coconut'}
  ];
  res.json(users);
});

// Starta servern
  app.listen(PORT, () => {
    console.log(`Servern körs på port ${PORT}`);
  });


export default app;