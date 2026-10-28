(function () {
  var host = window.location.hostname;
  var isLocal = host === "localhost" || host === "127.0.0.1";
  window.REVOING_CONFIG = window.REVOING_CONFIG || {
    api: isLocal ? "http://localhost:5173" : "https://personal-profit.aniviet.workers.dev",
    turnstile: "0x4AAAAAAEQz9I-TXTQoVuii",
  };
})();
