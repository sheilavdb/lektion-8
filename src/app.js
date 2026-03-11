import express from 'express';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Enkel hälsnings-route
app.get('/', (req, res) => {
  res.json({ message: 'Lektion 8, bygg CD/CI Pipeline', status: 'ok' });
});

// En route som returnerar användare
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  res.json(users);
});

// Starta servern endast om filen körs direkt (inte vid tester)
const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  app.listen(PORT, () => {
    console.log(`Servern körs på port ${PORT}`);
  });
}

export default app;