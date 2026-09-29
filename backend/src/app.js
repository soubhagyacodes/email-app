import express from 'express';
import { prisma } from '../prisma/prisma';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
   console.log("hit")
   res.send({
      status: 'ok'
   });
});

app.listen(port, () => {
  console.log(`Email app listening on port ${port}`);
});