const express = require('express');
const app = express();
const port = 3001;

app.get('/api/photos', (req, res) => {
  res.json([
    {
      id: 1,
      url: 'https://astronoo.com/images/nebuleuses/nebuleuse-orion-m42.jpg',
      description: 'Nébuleuse d\'Orion'
    },
    {
      id: 2,
      url: 'https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2021/12/double-coeur-andromede-mystere-est-resolu.jpg',
      description: 'Galaxie d\'Andromède'
    }
  ]);
});

app.get('/api/events', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Observation de la nébuleuse d\'Orion',
      date: '2024-06-15',
      location: 'Observatoire local'
    },
    {
      id: 2,
      title: 'Conférence sur la galaxie d\'Andromède',
      date: '2024-06-20',
      location: 'Salle de conférence'
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
