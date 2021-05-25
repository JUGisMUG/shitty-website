function pp(btn) {
  const options = [true, false];
  const option = options[Math.floor(Math.random() * options.length)];
  const pp = document.getElementById('pp');
  const txtArray = pp.innerHTML.split('');
  if (option) {
    if (!txtArray.includes("8")) txtArray[0] = "8";    
    txtArray.pop();
    for (let i = 0; i <= Math.floor(Math.random() * txtArray.length); i++) {
      txtArray[txtArray.length] = "=";
    }
    pp.innerHTML = txtArray.join('') + "D";
  } else {
    if (!txtArray.includes("8")) txtArray.unshift("8")
    txtArray.pop();
    for (let i = 0; i <= Math.floor(Math.random() * txtArray.length); i++) {
      if (!(txtArray[txtArray.length-1] === "8")) txtArray.pop();
    }
    pp.innerHTML = txtArray.join('') + "D";
  }
}