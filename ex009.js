amostra = {
    tipo: "sangue",
    status: "concluido"
}

let statusAmostra = am => am.status == "concluido"? console.log("Concluído") : console.log("Pendente")

statusAmostra(amostra)