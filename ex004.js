const amostras = [
    {id:1, paciente:"Maria Silva", tipo:"sangue", status:"concluido" },
    {id:2, paciente:"João Tembe", tipo:"urina", status:"pendente" },
    {id:3, paciente:"Ana Machel", tipo:"sangue", status:"pendente" },
    {id:4, paciente:"Carlos Mondlane", tipo:"sangue", status:"concluido" },
    {id:5, paciente:"Rosa Nhaca", tipo:"urina", status:"concluido" },
]

//Amostras Pendentes
console.log("=======================================")

const pendentes = amostras.filter(amostra => {
    return amostra.status == "pendente"
})

console.log(pendentes)


//Amostras Actualizados
console.log("=======================================")

const statusActualizados = amostras.map(amostra => {
    amostra.status = "concluido"
    return amostra
})

console.log(statusActualizados)

//Número de Amostras de Sangue
console.log("=======================================")
const numAmostraSangue = amostras.filter(amostra => {
 return amostra.tipo == "sangue"
})

 console.log(`O número de mostras de sangue é ${numAmostraSangue.length}`)

/*id impar
const impar = amostras.filter(amostra => {
    if  (amostra.id % 2 != 0){
        return amostra
    }

})


let imparActualizado = impar.map(amostra => {
       amostra.status = "rejeitado"
       return amostras
}
)

*/



