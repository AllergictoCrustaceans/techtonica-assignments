function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    for (let i = 0; i < s.length; i++) {
        if (vowels.match(s[i])) {
            console.log(s[i]);
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (!vowels.match(s[j])) {
            console.log(s[j]);
        }
    }
}

vowelsAndConsonants('javascript');