function carregarDados() {
    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []

    const nomeEl = document.querySelector("#nome")
    const emailEl = document.querySelector("#email")
    const cargoEl = document.querySelector("#cargo")
    const departamentoEl = document.querySelector("#departamento")
    const senhaEl = document.querySelector("#senha")
    const btnCadastrarEl = document.querySelector("#btnCadastrar")

    const listaEl = document.querySelector("#listaFuncionarios")
    
    const totalFuncionariosEl = document.querySelector("#totalFuncionarios") 

    function listarFuncionarios() {
        listaEl.innerHTML = ""

        funcionarios.forEach(funcionario => {
            const novoCardEl = document.createElement("div")
            novoCardEl.classList.add("card")

            novoCardEl.innerHTML = `
                <h3>${funcionario.nome}</h3>
                <p><strong>E-mail:</strong> ${funcionario.email}</p>
                <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
                <p><strong>Departamento:</strong> ${funcionario.departamento}</p>
            `

            listaEl.appendChild(novoCardEl)

        })

        totalFuncionariosEl.innerHTML = `Total de funcionários: ${funcionarios.length}`
    }


    function cadastrarFuncionario() {
        const nome = nomeEl.value.trim()
        const email = emailEl.value.trim()
        const cargo = cargoEl.value.trim()
        const departamento = departamentoEl.value.trim()
        const senha = senhaEl.value.trim()

        if (nome === "" || email === "" || cargo === "" || departamento === "" || senha === "") {
            alert("Preencha todos os campos.")
            return
        }

        const funcionario = {
            id: Date.now(),
            nome: nome,
            email: email,
            cargo: cargo,
            departamento: departamento,
            senha: senha
        }

        funcionarios.push(funcionario)

        localStorage.setItem("funcionarios", JSON.stringify(funcionarios))

        listarFuncionarios()

        nomeEl.value = emailEl.value = cargoEl.value = departamentoEl.value = senhaEl.value = ""
    }

    btnCadastrarEl.addEventListener("click", cadastrarFuncionario)

    listarFuncionarios()
}

carregarDados()