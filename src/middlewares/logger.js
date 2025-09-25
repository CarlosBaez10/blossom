const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const { method, url } = req;
    const timestamp = new Date().toISOString();

    console.log("\n [Request Info]");
    console.log(` Time: ${timestamp}`);
    console.log(` Method: ${method}`);
    console.log(` URL: ${url}`);
    console.log(` Duration: ${duration}ms`);

    if (req.body && Object.keys(req.body).length > 0) {

      if (req.body.query) {
        console.log("GraphQL Operation:");
        console.log(`   - Operation Name: ${req.body.operationName || "N/A"}`);
        console.log(`   - Query:\n${req.body.query.trim()}`);
        if (req.body.variables) {
          console.log("   - Variables:", req.body.variables);
        }
      } else {
        console.log("Body:", req.body);
      }
    }

    console.log("Headers:", {
      "content-type": req.headers["content-type"],
      "user-agent": req.headers["user-agent"],
    });

    console.log("------------------------------------");
  });

  next();
};

module.exports = logger;
