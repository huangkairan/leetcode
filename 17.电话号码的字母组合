function letterCombinations(digits: string): string[] {
    const map = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }
    let res = [];
    if(!digits) return [];
    if(digits.length === 1) {
      return map[digits[0]];
    }

    function back(cur, index) {
      if(index > digits.length -1) {
        return res.push(cur);
      }
      const letters = map[digits[index]];
      for(const letter of letters) {
        back(cur + letter, index + 1);
      }
    }
    
    back('',0);
    return res;
};