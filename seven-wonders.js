const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const sevenPts = (T,C,G) => {
    if(T <= C && T <= G)
        return T
    else if(C <= T && C <= G)
        return C
    else if(G <= T && G <= C)
        return G
}

const calc = str => {
    let T = 0,C = 0,G = 0,sum = 0
    str.split('').forEach(ch => {
        switch(ch){
            case 'T':
                T++
                break
            case 'C':
                C++
                break
            case 'G':
                G++
                break
            default:
        }
    })
    if(T && C && G)
        sum += 7 * sevenPts(T,C,G)
    sum += Math.pow(T,2) + Math.pow(C,2) + Math.pow(G,2)
    console.log(sum)
}

rl.on('line', input => {
    calc(input)
    rl.close()
})