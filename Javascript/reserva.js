var reservas = new Array(); // Array para armazenar as reservas

function mostrar_lista() {
    //mostrar a lista
    var saida = '';
    for (i = 0; i < reservas.length; i++) {
        saida += reservas[i].nome + ' - ' + reservas[i].cpf + ' - ' + reservas[i].rg + ' - ' + reservas[i].passaporte + ' - ' + reservas[i].nascimento + ' - ' + reservas[i].nacionalidade
            + ' - ' + reservas[i].destino + ' - ' + reservas[i].roteiro + ' - ' + reservas[i].datasaida + ' - ' + reservas[i].companhia
            + '<br />';
    } //fim do for

    document.getElementById('saida').innerHTML = saida;
    
}

function reservar() {
    var nome = document.freservas.nome.value;
    var cpf = document.freservas.cpf.value;
    var rg = document.freservas.rg.value;
    var passaporte = document.freservas.passaporte.value;
    var nascimento = document.freservas.nascimento.value;
    var nacionalidade = document.freservas.nacionalidade.value;
    var destino = document.freservas.destino.value;
    var roteiro = document.freservas.rdoroteiro.value; // corrigido
    var datasaida = document.freservas.datasaida.value;
    var companhia = document.freservas.Companhia.value; // corrigido
        //guardar no objeto produto

    // Criando um objeto com os dados da reserva
    var reserva = { "nome": nome, "cpf": cpf, "rg": rg, "passaporte": passaporte, "nascimento": nascimento, "nacionalidade": nacionalidade,
        "destino": destino, "roteiro": roteiro, "datasaida": datasaida, "companhia": companhia };

    // Adicionando a reserva ao array
    reservas.push(reserva);
    window.alert('Reservado com Sucesso!');
    mostrar_lista();
    
    setTimeout(function() {
window.location.href = "confirmacao.html";
}, 3000);
}

function voltar() {
    window.location.href = "login.html";

}
