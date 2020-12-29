var friends = ['Tim', 'Leanna', 'Anthony', 'Hernan', 'Maria']

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    for (let n = 99; n >= 2; n--) {
        console.log([n] + " lines of code in the file, " + [n] + " line of code; " + (friends[i]) + " strikes one out, clears it all out, " + [n - 1] + " lines of code in the file");
        if (n == 2) {
            console.log([n-1] + " lines of code in the file " + [n-1] + " line of code; " + (friends[i]) + " strikes one out, clears it all out, no more lines of code in the file!")
        }
    }
};