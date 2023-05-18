/**
 * @param {string} s
 * @return {number}
 */

// This program convert roman numerials to integers
var romanToInt = function(s) {
    let num = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === "I"){
            if (s[i+1] === "V"){
                num += (5 - 1);
                i += i + 1;
            }else if(s[i+1] === "X"){
                num += (10 - 1);
                i += i + 1;
            }else{
                num += 1;
            }
        }
        if (s[i] === "X"){
            if(s[i+1] === "L"){
                num += (50 - 10);
                i += i + 1;
            }else if(s[i+1] === "C"){
                num += (100 - 10);
                i += i + 1;
            }else{
                num += 10;
            }
        }
        if (s[i] === "C"){
            if (s[i+1] === "D"){
                num += (500 - 100);
                i += ((s.length + i + 1) - s.length)
            }else if(s[i+1] === "M"){
                num += (1000 - 100);
                i += i + 1;
            }else{
                num += 100;
            }
        }
        if (s[i] === "V"){
            num += 5;
        }
        if(s[i] === "L"){
            num += 50;
        }
        if (s[i] === "D"){
            num += 500;
        }
        if(s[i] === "M"){
            num += 1000;
        }
    }
    return num;
};

console.log(romanToInt("MCMXCIV"));