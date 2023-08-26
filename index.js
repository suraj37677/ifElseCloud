const letterToNumber = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
    ' ': 0,"#":27,"*":28
  };
  
  function  SentenceTolatter(input) {
    const characters = input.toLowerCase().split('');
    const output = [];
  
    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
      if (char in letterToNumber) {
        output.push(letterToNumber[char]);
      }
    }
  
    return output.join('');
  }
  
  const input = "houston do you copy ";
  const output = SentenceTolatter(input);
  console.log(output); 
  