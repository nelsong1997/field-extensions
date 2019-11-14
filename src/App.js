import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            P: ""
        }
        this.PChange = this.PChange.bind(this)
    }
    
    PChange(evnt) {
        this.setState( {P: evnt.target.value} )
    }

    render() {
        return (
            <div>
                <p>We're going to extend a field! For now the only supported fields are of the form Z<sub><em>p</em></sub>, where <em>p</em> is a prime.</p>
                <label>
                    What field would you like to extend? Z<sub><em>p</em></sub> , <em>p</em> = <input id="input-p" type="number" style={{display: "inline", width: "50px"}} onChange={this.PChange}/>
                </label>
            </div>
        )
    }
}

//----------------helper functions------------------//

function checkIfNaturalNumber(n) { //assume n is a number
    if (n%1===0 && n > 0) {
        return true
    } else {
        return false
    }
}

function checkIfPrime(n) {                 //assume natural n
    let primesArray = [2]
    let theCandidate = 3
    while (theCandidate <= Math.sqrt(n)) { //building an array of prime numbers that could possibly be (smaller) factors of n
        let composite = false
        for (let p of primesArray) {
            if (theCandidate % p===0) {
                composite = true
                break
            }
        }
        if (!composite) {
            primesArray.push(theCandidate)
        }
        theCandidate = theCandidate + 2
    }

    for (let p of primesArray) {            //now we'll see if any of these possible factors divide n
        if (n % p === 0) {
            return false                    //if one of them does divide n, we return false (n is composite)
        }
    }
    return true                             //otherwise if none of the possible factors divide n, n is prime (return true)
}

export default App;