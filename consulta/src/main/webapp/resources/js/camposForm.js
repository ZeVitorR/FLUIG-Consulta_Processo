function camposForm(instanceId,event) {
    var html = ''
    console.log('Valor ='+event.value)
    console.log('instanceId ='+instanceId)

    document.getElementById('camposConsulta').innerHTML = ''
    document.getElementById('tableHead_'+instanceId).innerHTML = ''
    document.getElementById('tableBody_'+instanceId).innerHTML = ''

    if (event.value == 'dsProcessoSubjudice') {
        campoSubjudice(instanceId)
    }else if(event.value == 'dsContratoCartorio'){
        campoContratoCartorio(instanceId)
    }else if(event.value == 'dsContratoAnalise'){
        camposContratoAnalise(instanceId)
    }else if(event.value == 'dsContratacao'){
        campoContratacao(instanceId)
    }else if(event.value == 'dsContrato'){
        campoContrato(instanceId)
    }
}
var array = new Array()
function mascaraCNPJ(cnpj) {
    cnpj.value = cnpj.value.replace(/[^0-9/.-]/g, '').replace(/^(\d{2})(\d)/,'$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1/$2').replace(/(\d{4})(\d)/,'$1-$2')
}