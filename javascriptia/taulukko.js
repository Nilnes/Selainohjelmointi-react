
const t = [1, -1, 3]

console.log(t.length) // tulostuu 3
console.log(t[1])     // tulostuu -1

const uusi = t.concat(5) // Lisätään taulukkoon luku 5

console.log(uusi.length) // tulostuu 4

const F = (value) => {
    console.log(value)
}

uusi.forEach(value => {
  console.log(value)  // tulostuu 1, -1, 3, 5 omille riveilleen
})

uusi.forEach(value => F(value)) // Sama asia kuin ylempi


const tt = [1, 2, 3]

const m1 = tt.map(value => value *2)
console.log(m1) // Tulostaa listan tt kerrottuna kahdella

const m2 = tt.map(value => '<li>' + value + '</li>')
console.log(m2) //Tulostaa listan ja arvot + html listaelementti elementit
