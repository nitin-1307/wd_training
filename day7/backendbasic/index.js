const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!    good morning');
});


app.get("/getData", (req, res) => {
  res.json({
    success: true,
    message: "Data fetched",
    myData: data,
  });
});

app.post("/abcPost", (req, res) => {
  const a=req.query.a;
  const b=req.query.b;
  console.log (a);
  const sum=parseInt(a) + parseInt(b);
  console.log (sum);
  res.send("Method Post : " + sum);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const data = [
  { id: 1, name: "A",  },

  { id: 2, name: "B",  },

  { id: 3, name: "C",  }

]; 