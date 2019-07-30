function getLetters(string) {
    let A ='aeiou';
    let B = 'bcdfg';
    let C = 'hjklm';
    let D = 'npqrstvwxyz';
    let word = string[0].toLowerCase();
    console.log(word);
    switch(true) {
      case A.includes(word):
        console.log('A');
        break;
      case B.includes(word):
        console.log('B');
        break;
      case C.includes(word):
        console.log('C');
        break;
      case D.includes(word):
        console.log('D');
        break;
    } 
  }
  
  getLetters('armadillo');
  getLetters('bacon');
  getLetters('manolo');
  getLetters('zombie');