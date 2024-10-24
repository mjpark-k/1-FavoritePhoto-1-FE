import fs from "fs";
import https from "https";
import next from "next";

const app = next({ dev: true });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("C:/Users/SnowRang/Downloads/localhost+2-key.pem"),
  cert: fs.readFileSync("C:/Users/SnowRang/Downloads/localhost+2.pem"),
};

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on https://localhost:3000");
    });
});
