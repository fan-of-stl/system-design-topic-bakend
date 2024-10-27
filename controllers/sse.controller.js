const serverSentEvent = (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  // Generate random data and send it to the client every 5 seconds
  const intervalId = setInterval(() => {
    // Correct SSE format: "data:" followed by the message, then two newlines.
    const data = {
      message: "Hello SSE is working!",
      randomNumber: Math.random() * 1000,
    };
    // Properly format the SSE message
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 5000);

  // Clean up when the client closes the connection
  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
};

module.exports = serverSentEvent;
