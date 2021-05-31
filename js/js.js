//Função para colocar data e horário na página
var dataAtual, ano, mes, dia, hora, minuto, segundo, horaImprimivel;

function atualizarData(){
    dataAtual = new Date();
    ano = dataAtual.getFullYear();
    mes = (dataAtual.getMonth()+1);
    dia = dataAtual.getDate();
    hora = dataAtual.getHours();
    minuto = dataAtual.getMinutes();
    segundo = dataAtual.getSeconds();
    horaImprimivel = hora + ":" + minuto + ":" + segundo;
    horarioAtual = dia + "/0" + mes + "/" + ano + " - " + horaImprimivel
    $(".span-horario").text(dia + "/0" + mes + "/" + ano + " - " + horaImprimivel)

    setTimeout("atualizarData()", 1000);
};

// ---------- Função tamanho letra---------
function tamanhoLetra(){
    var imagemFonte = document.getElementsByClassName("imagem-letra")[0].src;
    if(imagemFonte.includes("18.png")){
        document.getElementsByClassName("imagem-letra")[0].src="img/17.png";
        document.getElementById("html").style.fontSize = "22px"
    }else if(imagemFonte.includes("17.png")){
        document.getElementsByClassName("imagem-letra")[0].src="img/18.png";
        document.getElementById("html").style.fontSize = "18px"
      }
}

// ------------ Função voltar ao topo -------------

$(function () {
    $(window).scroll(() => pegarAltura()); 
    $("#botao-topo").toggle();
    pegarAltura();
});
// UTILIZAÇÃO SCROLL() - Voltar ao topo

function pegarAltura() {
    if ($(window).scrollTop() > 400) {
        $("#botao-topo").fadeIn(500);
    } else{
        $("#botao-topo").fadeOut(500)
    }   
}
//-------------------- Funções Index-----------------
$(document).ready(function(){

    // - Voltar ao topo devagar
    $(function() {
        $('#botao-topo').click(function() {
            var target = $(this.hash);
            $('html, body').animate({ scrollTop: target.offset().top }, 1000);
            return false;
        });
        });

    atualizarData();
    // Utilização JQuery UI accordion 
    $("#accordion").accordion();

    // Utilização plugin galeria de fotos
    $('.my-slider').unslider({
        autoplay: true
    });

    $('.card').mouseover(function(){
        $(this).css("background-color", "gold")
    });
    $('.card').mouseout(function(){
        $(this).css("background-color", "white")
    });

    $('#card-protocolo').click(function(){
        window.location="covid19.html";
    });
    $('#card-vacina').click(function(){
        window.location="vacinacao.html";
    });
    $('#card-leitos').click(function(){
        window.location="sistema.html";
    });
    $('#card-quem-somos').click(function(){
        window.location="quem-somos.html";
    });
});
// ---------------- Formulário Vacinas ------------------
var profissoes = [
    "Profissional da Saúde",
    "Metroviário(a)",
    "Ferroviário(a)",
    "Motorista de ônibus",
    "Cobrador(a) de ônibus",
    "Profissional da Educação",
    "Dentista",
    "Veterinário",
    "Outro"
    ];

$(document).ready(function(){

    //Função autocomplete - Utilização JQuery UI Autocomplete
    $( function() {
        $( "#profissao" ).autocomplete({
        source: profissoes
        });
    });

    // Mudança de cor do background do input quando foca e volta à cor normal quando sai. Usamos o focus e blur.
    $("input").focus(function(){
        $(this).css("background-color", "#fff6c5")
    });
    $("input").blur(function(){
        $(this).css("background-color", "white")  
    });
});

$(function() {

    var $progress= $('#progressbar'), // Barra de Progresso.
        $progressElements = $('.input-form'), // Elementos que devem ser checados para modificar o valor da barra.
        TOTAL= $progressElements.length; // Total de elementos.

    //selecionando todos os inputs
    //Com a função on() você pode fazer uma validação e modificar o valor do progresso de acordo com a validade dos campos, incrementando ou decrementando o valor atual.
     $progressElements.on('blur, change', function() {
    
        // Faz um filtro com o total elementos válidos.
        // Nesse caso, campos que não estejam "em branco" e que não estejam marcados como ':invalid'.

        // val => usada para pegar valores de input, select e textarea 
        // val=> quando a area esta vazia retorna o valor "undefined" (https://api.jquery.com/val/)
        
        //seleciona os elementos validos parta serem contabilizados
        var valid = $progressElements.filter(function() {
            return ($(this).val() || $(this).prop('checked')) && !$(this).is(':invalid');
        }).length;
        
        // Calcula a porcentagem e altera o valor da barra.
        var percent = (valid * 100) / TOTAL,
            current = $progress.val();
        
        var increase = percent > current;
            //setInterval possui dois parametros setInterval{a,b}
            //a define a função a ser realizada
            //b define o tempo
            //setInterval não para de rodar até o clearInterval ser chamado ou a janela for fechada
        var transition = setInterval(function(){
            if((increase && current >= percent) ||
            (!increase && current <= percent))
                clearInterval(transition);

                // "condicao ? valor1 : valor2" | Se condicao for verdadeira, o operador terá o valor de valor1. Caso contrário, terá o valor de valor2. Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.
            
            var value = $progress.val();
            value = increase ? value+1 : value-1;
            current = value;
            
            $progress.val(current);
            },10);    
        });
    });



function verificarGestante(){
    var genero = (document).getElementById("genero").value;
    if(genero === "feminino"){
        $("#gestante").show()
    } else{
        $("#gestante").hide()
    }
};

var peso, altura, imc, obeso;

var dataUsuario, anoNascimento, diaNascimento, mesNascimento;

function verificarIdade(){
    dataUsuario = (document).getElementById("nascimento").value;
    anoNascimento = dataUsuario.substring(0,4)
    diaNascimento = dataUsuario.substring(8,10);
    mesNascimento = dataUsuario.substring(5,7);
    console.log(anoNascimento, ano)
    
    if(anoNascimento < (ano -130)){
        alert("Data inválida");
    } else if((anoNascimento == (ano - 130)) && (mesNascimento < mes)){
        alert("Data inválida" + ano + mes + mesNascimento)
    } else if(anoNascimento == (ano - 130) && mesNascimento == mes &&diaNascimento <= dia){
        alert("Data inválida")
    } else if (anoNascimento > ano){
        alert("Data inválida")
    } else if (anoNascimento == ano){
        if (mesNascimento > mes){
            alert("Data inválida")
        } else if(mesNascimento == mes){
            if(diaNascimento >= dia){
                alert("Data inválida")
            }
        }
    }
};
var checados = [];
var dadosUsuario = [];

$(document).ready(function() {
    $(".input-comorbidades:checkbox").change(function () {
        if ($(this).is(":checked")) {
            checados.push($(this).val());
            console.log(checados)
        }
    });
   // Função para capturar dados do usuário quando clicar fora do input
    $(".input-form").blur(function () {
            dadosUsuario.push($(this).val());
            console.log(dadosUsuario)
    });
});

// Função para pegar profissão
 var profissaoSelecionada;
 function pegarProfissao(){
    profissaoSelecionada = $("#profissao").val();
    console.log(profissaoSelecionada)
 }
 var profissaoVacina;
var idadeVacina;


function imprimirDados(){

    peso = (document).getElementById("peso").value;
    altura = (document).getElementById("altura").value;
    imc = (peso/(altura*altura)).toFixed(2);
    
    if((anoNascimento == "" || anoNascimento == undefined) || (altura == "" || altura == undefined) || (peso == "" || peso == undefined)){
        (document).getElementById("imprimir-dados").innerText = "Preencha corretamente os campos Data de Nascimento, altura e peso e verifique novamente seus dados no botão acima.";
        return;
    };

    if(anoNascimento > 1961){
        idadeVacina = "Sua faixa etária ainda não está na faixa de vacinação atual. Verifique novamente em alguns dias."
    } else if(anoNascimento = 1961){
        if(mesNascimento > mes){
            idadeVacina = "Sua faixa etária ainda não está na faixa de vacinação atual. Verifique novamente em alguns dias."
        }else if(mesNascimento == mes){
            if(diaNascimento > dia){
                idadeVacina = "Sua faixa etária ainda não está na faixa de vacinação atual. Verifique novamente em alguns dias."
            } else{
                idadeVacina = "Sua faixa etária já está na faixa de vacinação atual. Procure o posto de saúde mais próximo e vacine-se!<br/>"
            }
        } else{
            idadeVacina = "Sua faixa etária já está na faixa de vacinação atual. Procure o posto de saúde mais próximo e vacine-se!"
        }
    } else {
        idadeVacina = "Sua faixa etária já está na faixa de vacinação atual. Procure o posto de saúde mais próximo e vacine-se!"
    }

   if((profissoes.includes(profissaoSelecionada)) && (profissaoSelecionada != "Outro")){
       profissaoVacina = " Sua profissão te permite ser vacinado a partir do dia 10 de Maio. Fique atento."
   } else{
       profissaoVacina = ""
   }

    if(imc >= 30){
        obeso = " Você está com obesidade, que é uma das comorbidades para a covid-19.";
        if(checados.length == 0){
            (document).getElementById("imprimir-dados").innerText = "Olá! " + idadeVacina + " Seu imc é " + imc + "." + obeso + profissaoVacina;
        } else {
            (document).getElementById("imprimir-dados").innerText = "Olá! " + idadeVacina + " Seu imc é " + imc + "." + obeso + " Você também possui as seguintes comorbidades: " + checados + ". A vacinação para pessoas com comorbidades se iniciará em 12 de Maio para pessoas com mais de 55 anos." + profissaoVacina;
        } 
    } else if(checados.length == 0){
        (document).getElementById("imprimir-dados").innerText = "Olá! " + idadeVacina + " Seu imc é " + imc + "." + profissaoVacina;
    } else{
        (document).getElementById("imprimir-dados").innerText = "Olá! " + idadeVacina + " Seu imc é " + imc + ". Você também possui as seguintes comorbidades: " + checados + ". A vacinação para pessoas com comorbidades se iniciará em 12 de Maio para pessoas com mais de 55 anos." + profissaoVacina;
    }
    
}

// ------------- Protocolos e Técnicas ----------------- //

$(document).ready(function () {
    //SlideToggle "O QUE É?"
            $("#btnSlideToggle1").click(function () {
                $("#display1").slideToggle();
            });
    //SlideToggle "SINTOMAS"
            $("#btnSlideToggle2").click(function () {
                $("#display2").slideToggle();
            });
    //SlideToggle "TRASMISSÃO"
            $("#btnSlideToggle3").click(function () {
                $("#display3").slideToggle();
            });
    //Toggle "Novos Medicamentos"
            $("#btnToggle1").click(function () {
                $("#display4").toggle(1000);
            });
    //Toggle "Novos Medicamentos"
            $("#btnToggle2").click(function () {
                $("#display5").toggle(1000);
            });
    //FadeToggle "Hospitais"
            $("#btnFadeTo1").click(function () {
                $("#display6").fadeToggle();
            });
    //FadeToggle "UBS's"
            $("#btnFadeTo2").click(function () {
                $("#display7").fadeToggle("slow");
            });

            // Utilização JQuery UI Dialog

            //VIAJOU?  ----------------
			// Link to close the dialog
			$( "#dialog" ).dialog({
                autoOpen: false,
                width: 400,
                buttons: [
                    {
                    text: "Ok",
                    click: function() {
                        $( this ).dialog( "close" );
                    } }, ] });
        
                // Link to open the dialog
                $( "#dialog-link" ).click(function( event ) {
                    $( "#dialog" ).dialog( "open" );
                    event.preventDefault();
                });
        //ISOLAMENTO DOMICILIAR PACIENTE ----------------
                // Link to close the dialog
                $( "#dialog2" ).dialog({
                autoOpen: false,
                width: 800,
                buttons: [
                    {
                    text: "Ok",
                    click: function() {
                        $( this ).dialog( "close" );
                    } }, ] });
        
                // Link to open the dialog
                $( "#dialog-link2" ).click(function( event ) {
                    $( "#dialog2" ).dialog( "open" );
                    event.preventDefault();
                });
    
        //ISOLAMENTO DOMICILIAR CASA ----------------
    
                // Link to close the dialog
                $( "#dialog3" ).dialog({
                autoOpen: false,
                width: 800,
                buttons: [
                    {
                    text: "Ok",
                    click: function() {
                        $( this ).dialog( "close" );
                    } }, ] });
        
                // Link to open the dialog
                $( "#dialog-link3" ).click(function( event ) {
                    $( "#dialog3" ).dialog( "open" );
                    event.preventDefault();
                });
    
});

//Accordion Vacinas
var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    };


    // ------------------ JAVASCRIPT QUEM SOMOS ------------------
    function informarCliente(){
        var infosCliente = prompt("Digite aqui as informações da sua empresa:");
        document.getElementById("p-info-cliente").innerText = infosCliente
    }


    $(document).ready(


        function(){
            $('#mapa').mouseover( function(){
            $('#mapa').width("120%")
            })
        
            $('#mapa').mouseout( function(){
            $('#mapa').width("100%")
            ;})
        });
        $(document).ready(
        function(){
            $('#img1').mouseover( function(){
            $('#img1').width("105%").height("105%")});
         
            $('#img1').mouseout( function(){
            $('#img1').width("100%").height("100%")});
    
            $('#img2').mouseover( function(){
            $('#img2').width("105%").height("105%")});
         
            $('#img2').mouseout( function(){
            $('#img2').width("100%").height("100%")});
    
            $('#img3').mouseover( function(){
            $('#img3').width("105%").height("105%")});
         
            $('#img3').mouseout( function(){
            $('#img3').width("100%").height("100%")});
        });

        // Utilização JQuery Ui Color Animation
        $( function() {
            var state = true;
            $( "#effect1" ).click(function() {
            if ( state ) {
                $( "#effect1" ).animate({
                backgroundColor: "#fff6c5",
                color: "black",
                height: 500
                }, 1000 );
                $('#aline').text("Estudante de Desenvolvimento FullStack com ênfase em Front-end, na instituição SoulCode Academy.");
    
            } else {
                $( "#effect1" ).animate({
                backgroundColor: "rgb(248, 242, 242)",
                color: "#000",
                height: 240
                }, 1000 );
                $('#aline').text("")
            }
            state = !state;
            });
        } );
    
        $( function() {
            var state = true;
            $( "#effect2" ).click(function() {
            if ( state ) {
                $( "#effect2" ).animate({
                backgroundColor: "#fff6c5",
                color: "black",
                height: 500
                }, 1000 );
                $('#geisiane').text("Estudante de Desenvolvimento FullStack com ênfase em Front-end, na instituição SoulCode Academy.");
    
            } else {
                $( "#effect2" ).animate({
                backgroundColor: "rgb(248, 242, 242)",
                color: "#000",
                height: 240
                }, 1000 );
                $('#geisiane').text("")
            }
            state = !state;
            });
        } );
    
        $( function() {
            var state = true;
            $( "#effect3" ).click(function() {
            if ( state ) {
                $( "#effect3" ).animate({
                backgroundColor: "#fff6c5",
                color: "black",
                height: 500
                }, 1000 );
                $('#juliana').text("Estudante de Desenvolvimento FullStack com ênfase em Front-end, na instituição SoulCode Academy.");
    
            } else {
                $( "#effect3" ).animate({
                backgroundColor: "rgb(248, 242, 242)",
                color: "#000",
                height: 240
                }, 1000 );
                $('#juliana').text("")
            }
            state = !state;
            });
        } );
    
        $( function() {
            var state = true;
            $( "#effect4" ).click(function() {
            if ( state ) {
                $( "#effect4" ).animate({
                backgroundColor: "#fff6c5",
                color: "black",
                height: 500
                }, 1000 );
                $('#marilia').text("Estudante de Desenvolvimento FullStack com ênfase em Front-end, na instituição SoulCode Academy.");
    
            } else {
                $( "#effect4" ).animate({
                backgroundColor: "rgb(248, 242, 242)",
                color: "#000",
                height: 240
                }, 1000 );
                $('#marilia').text("")
            }
            state = !state;
            });
        } );
// ---------------- Página SISTEMA DE SAÚDE ----
var enfermaria, uti;
$(document).ready(
    function(){
    // chama a função quando Deselecionar o input
        $('#enfermaria').blur(
            function(){enfermaria= $('#enfermaria').val();// Guarda do valor digitado enfermaria
                        uti= $('#uti').val(); // Guarda do valor digitado uti
                        console.log(uti, enfermaria)
                if (enfermaria < 0 || enfermaria > 100) {alert("Digite a Ocupação Correta"); enfermaria = 0}
    //Muda a cor da barra de progresso da ocupação na enfermaria
                if (enfermaria > 80) {$('#myBarra').css("background-color","red")}
                else if (enfermaria >= 70 && enfermaria <= 80) {$('#myBarra').css("background-color","orange")}
                else if (enfermaria >= 60 && enfermaria < 70) {$('#myBarra').css("background-color","yellow")}
                if (enfermaria < 60 && enfermaria >= 0 && enfermaria != ""){$('#myBarra').css("background-color","green")}
            })
    // chama a função quando Deselecionar o input
        $('#uti').blur(
            function(){enfermaria= $('#enfermaria').val();// Guarda do valor digitado enfermaria
                        uti= $('#uti').val(); // Guarda do valor digitado uti
                        console.log(uti, enfermaria)
                if (uti < 0 ||  uti > 100) {alert("Digite a Ocupação Correta"); uti = 0}

                //Muda a cor da barra de progresso da ocupação na UTI
            if (uti > 80) {$('#myBar').css("background-color","red")}
            else if (uti >= 70 && uti <= 80) {$('#myBar').css("background-color","orange")}
            else if (uti >= 60 && uti < 70) {$('#myBar').css("background-color","yellow")}
            if (uti < 60 && uti >= 0 && uti != ""){$('#myBar').css("background-color","green")}
            })
        
        })

        $(document).click(function(){
                
            //Muda a Tabela de comércio de acordo com a Fase  
            if (uti < 60 && uti >= 0 && uti != "" && (enfermaria < 85)) {$("#imobiliaria, #conce,#escritorio").css("background-color","green").text("Aberto");
            $("#salao,#academia, #shopping,#comercio,#bares").css("background-color","orange").text("Aberto com Restrições");
            $("#espaços,#teatro,#eventos").css("background-color","red").text("Fechado");
            $("#educacao,#transporte").css("background-color","#E6E6FA").text("A Definir");
        } else if (uti < 60 && uti >= 0 && uti != "" && (enfermaria >= 85)) {$("#imobiliaria, #conce,#escritorio").css("background-color","green").text("Aberto");
        $("#salao, #shopping,#comercio,#bares").css("background-color","orange").text("Aberto com Restrições");
        $("#espaços,#academia,#teatro,#eventos").css("background-color","red").text("Fechado");
        $("#educacao,#transporte").css("background-color","#E6E6FA").text("A Definir");
        }
        else if (uti >= 60 && uti < 70 && (enfermaria < 85))  {$("#imobiliaria, #conce,#escritorio").css("background-color","green").text("Aberto");
            $("#salao, #shopping,#comercio,#bares").css("background-color","orange").text("Aberto com Restrições");
            $("#espaços,#academia,#teatro,#eventos").css("background-color","red").text("Fechado");
            $("#educacao,#transporte").css("background-color","#E6E6FA").text("A Definir");
        }else if (uti >= 60 && uti < 70 && (enfermaria >= 85))  {$("#espaços, #bares,#salao,#academia,#teatro,#eventos").css("background-color","red").text("Fechado");
        $("#imobiliaria, #conce,#escritorio,#comercio,#shopping").css("background-color","orange").text("Aberto com Restrições")
        $("#educacao,#transporte").css("background-color","#E6E6FA").text("A Definir");
        } 
        else if (uti >= 70 && uti <= 80 && (enfermaria < 85))  {$("#espaços, #bares,#salao,#academia,#teatro,#eventos").css("background-color","red").text("Fechado");
            $("#imobiliaria, #conce,#escritorio,#comercio,#shopping").css("background-color","orange").text("Aberto com Restrições")
            $("#educacao,#transporte").css("background-color","#E6E6FA").text("A Definir");
        }  else if (uti >= 70 && uti <= 80 && enfermaria >= 85)  {$("#imobiliaria, #conce,#escritorio,#comercio,#shopping,#espaços, #bares,#salao,#academia,#teatro,#eventos").css("background-color","red").text("Fechado")
        $("#educacao,#transporte").css("background-color","#E6E6FA").text("A Definir")
        }
        else if (uti > 80)  {$("#imobiliaria, #conce,#escritorio,#comercio,#shopping,#espaços, #bares,#salao,#academia,#teatro,#eventos").css("background-color","red").text("Fechado")
            $("#educacao,#transporte").css("background-color","#E6E6FA").text("A Definir")
        }
//Adiciona a fase da pandemia na dia de fase
        if (uti > 80 ) {$('#fase').css("background-color","red").html("FASE 1")}
        if (uti >= 70 && uti <= 80 && enfermaria >= 85) {$('#fase').css("background-color","red").html("FASE 1")}
        if (uti >= 70 && uti <= 80 && enfermaria <85) {$('#fase').css("background-color","orange").html("FASE 2")}
        if (uti >= 60 && uti < 70 && enfermaria >= 85) {$('#fase').css("background-color","orange").html("FASE 2")}
        if (uti >= 60 && uti < 70 && enfermaria < 85) {$('#fase').css("background-color","yellow").html("FASE 3")}
        if (uti < 60 && uti >= 0 && uti != "" && enfermaria >=85){$('#fase').css("background-color","yellow").html("FASE 3")}
        if (uti < 60 && uti >= 0 && uti != "" && enfermaria <85) {$('#fase').css("background-color","green").html("FASE 4")}
        })


// faz a barra de progresso da enfermaria avançar
var i = 0;
function barra() {
    if (i == 0) {
        i = 1;
        var element =  document.getElementById("myBarra");
        var largura = 1;
        var ide = setInterval(myTimer, 10);
        function myTimer() {
            if (largura >= enfermaria) {
                clearInterval(ide);
                i = 0;
            }
            else {
                largura++;
                element.style.width = largura+"%"; 
            }}
        }}
// faz a barra de progresso da UTI avançar        
var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem =  document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= uti) {
                clearInterval(id);
                i = 0;
            }
            else {
                width++;
                elem.style.width = width+"%"; 
            }}
        }}

        