function isProdEnv() {
  return !window.location.href.includes("localhost");
}

export default isProdEnv;
