const express = require("express");
const db = require("./db/db");
const articlesRouter = require('./routers/routes/articles');
const usersRouter = require ("./routers/routes/users")
const commentsRouter = require ("./routers/routes/comments")
const loginRouter = require ("./routers/routes/login")
const roleRouter = require ("./routers/routes/role")
const app = express();
app.use(express.json());


app.use('/',usersRouter);
app.use('/',articlesRouter);
app.use('/',commentsRouter);
app.use('/',loginRouter);
app.use('/',roleRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});