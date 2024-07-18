export const name = "brayan"
export const age = 27
export const isValid = true

export const templateString = `esto es un string
multilinea
que puede tener
" dobles
'simple
inyectar valores ${name}
expresiones ${5 + 10}
numeros ${age}
boolenanos ${isValid}
`

console.log(templateString);
