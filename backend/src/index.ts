
import { Request, Response } from 'express';

import express from "express";
import cors from "cors";

const app = express();

// Add cors to enable post request
app.use(cors());
app.use(express.json());

// Default Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

// Api Routes
app.post('/api', (req, res) => {
  const receivedData = req.body;

  // validate that received data has been posted
  if (!receivedData) {
    res.status(400).send("invalid list data");
  }

  const even = receivedData.evenArr;
  const odd = receivedData.oddArr;

  // validate that the received
  if (even.length != odd.length) {
    res.status(400).send("invalid list data");
  }

  even.sort((a: number, b: number) => a - b); 
  odd.sort((a: number, b: number) => a - b);
  let sum = 0;
  for (let i = 0; i < even.length; i++) {
    let value = even[i] - odd[i];
    if (value < 0) {
      value = -1 * value;
    }
    sum = sum + value;
  }
  // return success status with sum
  res.status(200).json({ sum });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
