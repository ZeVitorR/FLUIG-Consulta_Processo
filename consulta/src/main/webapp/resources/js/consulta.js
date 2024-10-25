var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'chamarConsulta': ['click_executaConsulta'],
            'chamarExcel': ['click_executaExcel']
        },
        global: {}
    },
 
    executaConsulta: function() {
        
        var dataset = document.getElementById("dataset_"+this.instanceId).value;
        
        if( dataset == ''){
            FLUIGC.message.alert({
                message: 'Selecione um processo válido',
                title: 'Message',
                label: 'OK'
            });
        }else{ 
            alert("Aguarde um momento a consulta está sendo gerada");

            if(dataset == 'dsProcessoSubjudice'){
                consultarSubjudice(this.instanceId,1);
            }else if(dataset == 'dsContratoCartorio'){
                consultarContratoCart(this.instanceId)
            }else if(dataset == 'dsContratoAnalise'){
                consultarContratoAnalise(this.instanceId)
            }else if(dataset == 'dsContratacao'){
                consultarNovosTalentos(this.instanceId)
            }else if(dataset == 'dsContrato'){
                consultarContrato(this.instanceId)
            }else if(dataset == 'dsColaboradores'){
                consultaColaboradores(this.instanceId)
            }
        }
    },
    executaExcel: function() {
        
        var dataset = document.getElementById("dataset_"+this.instanceId).value;
        
        if( dataset == ''){
            FLUIGC.message.alert({
                message: 'Selecione um processo válido',
                title: 'Message',
                label: 'OK'
            });
        }else{ 
            

            if(dataset == 'dsProcessoSubjudice'){
                alert("Aguarde um momento a consulta está sendo gerada");
                ExcelSubjudice(this.instanceId);
            }else{
                alert("Excel em contrução, acesse novamente em breve")
            }
        }
    }
});