function run() {
  runCode = document.getElementById('code').value;
  var output;
  try {
    if (runCode === "runCode") {
      throw ReferenceError("runCode is not defined")
    } else if (runCode === "output") {
      throw ReferenceError("output is not defined")
    } else if (runCode === "") {
      throw WebAssembly.RuntimeError("code is needed")
    } else if (runCode === "lightMode()") {
      code = document.getElementById('code');
      code.style.background = "#ffffff";
      code.style.color = "black";
      document.body.style.background = "#ffffff";
      alert("Changed to light mode.");
      return;
    } else if (runCode === "darkMode()") {
      code = document.getElementById('code');
      code.style.background = "#282828";
      code.style.color = "white";
      document.body.style.background = "#282828";
      alert("Changed to dark mode.")
      return;
    } else if (runCode.includes("run()")) {
      throw WebAssembly.RuntimeError("your going to crash your pc")
    }
    output = eval(runCode)
  } catch (err) {
    alert(err)
  }
}