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
    }
    output = eval(runCode)
  } catch(err) {
    alert(err)
  }
}