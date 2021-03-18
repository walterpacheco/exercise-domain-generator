const pronoun = ['the', 'our', 'that'];
const adj = ['great', 'best', 'crazy'];
const noun = ['rabbit', 'racoon', 'lion'];
const extn = ['.com', '.cl', 'net', '.us'];

for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let e = 0; e < extn.length; e++) {
                const domain = pronoun[p] + adj[a] + noun[n] + extn[e];
                console.log(domain);
            }
        }
    }
}