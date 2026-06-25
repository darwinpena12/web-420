/**
 * Name: Darwin Pena Cabrera
 * Date: June 25. 2026
 * File Name: app.js
 * Description: Server setup for the In-N-Out-Books API application.
 */

const express = require("express");
const createError = require("http-errors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",async(req, res, next)=>{

  const html =`
    <html>
      <head>
        <title>In-N-Out-Books</title>
        <style>
          body {
            background: #f5f5f5;
            color: #333;
            font-family: Arial, sans-serif;
            margin:0;
            padding:0;
          }

          .container {
            width: 60%;
            margin: 50px auto;
            text-align: center;
          }

          h1 {
            color: #0077ff;
          }
          
          h2 {
            color: #000000;
          }

          h1, h2 { 
            text-align: center;
            font-family: "times-new-roman", serif;
          }

          .book-card {
            background: white;
            border: 2px solid #0077ff;
            border-radius: 10px;
            padding: 20px;
            margin: 20px;
          }

          footer {
            margin-top: 35px;
            color: #000000;
          }
          section {
          background: white;
          padding: 20 px;
          margin: 20 px;
          border-radius: 10px;
          }
          main {
          border: 2px solid #0077ff;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <header>
            <h1> Welcome to In-N-Out Books</h1>
            <h2> The only online library that you need</h2>
          </header>

          <br />

          <main>
            <section>
              <div class="book-card">
                <h3> Keep all your books in one place </h3>

                <p> Welcome to In-N-Out Books the place where you can organize all your books in one simple location that allows you to enjoy your hobby. </p>
              </div>
            </section>

            <section>
              <h2> Top Selling Books </h2>
                <article>
                  <h3> The 48 Laws of Power </h3>
                  <p> Author: Robert Greene </p>
                </article>

                </article>
                  <h3> The laws of Human Nature </h3>
                  <p> Author: Robert Greene </p>

                </article>

                <article>
                  <h3> The Art of Seduction </h3>
                  <p> Author: Robert Greene </p>

                </article>
              <section>

                <h2> Hours of Operations </h2>

                <p> Monday - Friday: 8:00 AM to 8:00 PM
                <br>
                Saturday - Sunday: Closed
                </p>

              </section>

              <section>
                <h2> Contact Information </h2>

                <p> Email: In-N-Out-Books@libraryonline.com
                <br>
                Phone: (123) - 456 - 7789
                </p>
              </section>


            
          </main>

          <footer>
            <p> Welcome to your online library</p>
          </footer>

        </div>
      </body>
    </html>
  `;
  res.send(html);
});

// catch 404 and forward to error handler
app.use(function(req, res, next){
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next){
  res.status(err.status || 500);

  res.json({
    type:'error',
    status: err.message,
    stack: req.app.get('env') ==='development'?err.stack : undefined
  });
});

module.exports = app;