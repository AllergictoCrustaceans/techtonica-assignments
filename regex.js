function tonica(string) {
    let regexTonica = /tonica/;
    if(regexTonica.test(string)) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
  tonica('shetonica'); //expect true
  tonica('she'); // expect false





  