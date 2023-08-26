//guarda os valores passados em nossa form = list
//apresentar esses valores na tabela
//deletar algum contato

const contactForm = document.getElementById('contactForm');
const contatosTable = document.getElementById('contatosTable').getElementsByTagName('tbody')[0];
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            
            const newRow = contatosTable.insertRow();
            newRow.innerHTML = `<td>${nome}</td><td>${telefone}</td><td><button class="delete-btn" onclick="deleteRow(this)">Excluir</button></td>`;
            
            // Limpar os campos do formulário após adicionar
            document.getElementById('nome').value = '';
            document.getElementById('telefone').value = '';
        });
        
        function deleteRow(button) {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

