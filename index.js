var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
var extension1 = ['.io', 'com', '.net', '.cl', '.us'];

var domainGenerator = (pronoun, adj, noun, extension1) => {
    for (var i = 0; i < pronoun.length; i++) {
        for (var j = 0; j < adj.length; j++) {
            for (var k = 0; k < noun.length; k++) {
                for (var l = 0; l < extension1.length; l++) {
                    console.log( pronoun[i] + adj[j] + noun[k] + extension1[l]);
                }
            }
        }
    }

};
domainGenerator(pronoun, adj, noun, extension1);