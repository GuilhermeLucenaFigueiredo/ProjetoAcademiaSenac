
//Usuário e senha
const usuario = "marcela";
const senha = "marcela123";

        //Pegando os ID
        const form = document.getElementById("login-form");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const loginButton = document.getElementById("login-button");
        const loginMessage = document.getElementById("login-message");

       
        loginButton.addEventListener("click", function () {
            
            const usuarioInserido = usernameInput.value;
            const senhaInserida = passwordInput.value;

            
            if (usuarioInserido === usuario && senhaInserida === senha) {
                loginMessage.textContent = "Login bem-sucedido!";
                
                window.location.href = "menu.html"; 
            } else {
                loginMessage.textContent = "Usuário ou senha incorretos. Tente novamente.";
            }

            // Limpando os campos
            usernameInput.value = "";
            passwordInput.value = "";
        });

        document.addEventListener("DOMContentLoaded", function () {
            const listarAlunosBtn = document.getElementById("listarAlunosBtn");
            const infoAlunos = document.getElementById("infoAlunos");
        
            listarAlunosBtn.addEventListener("click", function () {
                // Requisição AJAX para buscar os dados dos alunos
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "/get.php", true); // Substitua por seu arquivo PHP
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        const data = JSON.parse(xhr.responseText);
        
                        // Limpe a tabela antes de adicionar os novos dados
                        infoAlunos.innerHTML = "";
        
                        // Preencha a tabela com os dados obtidos
                        data.forEach(function (aluno) {
                            const row = document.createElement("tr");
                            row.innerHTML = `
                                <td>${aluno.NOME}</td>
                                <td>${aluno.IDADE}</td>
                                <td>${aluno.GENERO}</td>
                                <td>${aluno.NASCIMENTO}</td>
                                <td>${aluno.TELEFONE}</td>
                                <td>${aluno.EMAIL}</td>
                                <td>${aluno.META}</td>
                                <td>${aluno.DIAS_DA_SEMANA}</td>
                                <td>${aluno.HORA}</td>
                            `;
                            infoAlunos.appendChild(row);
                        });
                    }
                };
                xhr.send();
            });
        });
