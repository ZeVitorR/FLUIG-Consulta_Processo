function consultarNovosTalentos(instanceId) {
     
    const nome    = ''+document.getElementById("nome_"+instanceId).value;
    const nivel   = ''+document.getElementById("nivel_"+instanceId).value;
    const area    = ''+document.getElementById("area_"+instanceId).value;
    const cidade  = ''+document.getElementById("cidade_"+instanceId).value;
    const efetivo = document.getElementById("Efetivo_"+instanceId).checked
    const estagio = document.getElementById("Estagio_"+instanceId).checked
    const idadeDe  = document.getElementById("idadeDe_"+instanceId).value;
    const idadeAte = (document.getElementById("idadeAte_"+instanceId).value ) > idadeDe ?  document.getElementById("idadeAte_"+instanceId).value : idadeDe;
    const Aberto = document.getElementById("Aberto_"+instanceId).checked 
    const Finalizado = document.getElementById("Finalizado_"+instanceId).checked
    const Cancelado = document.getElementById("Cancelado_"+instanceId).checked
    const constraints2 = new Array();

    if(cidade != ''){
        console.log(cidade)
        constraints2.push(DatasetFactory.createConstraint("cidade", cidade, cidade, ConstraintType.SHOULD, true))
    }
    if(nome != ''){
        constraints2.push(DatasetFactory.createConstraint("nomeCandidato", nome, nome, ConstraintType.MUST, true));
    }
    
    if(nivel != '' ){
        constraints2.push(DatasetFactory.createConstraint("nivelEduCandidato", nivel, nivel, ConstraintType.MUST));
    }
    if(area != '' ){
        constraints2.push(DatasetFactory.createConstraint("areaCandidato", area, area, ConstraintType.MUST));
    }
    if(efetivo == true && estagio == false){
        constraints2.push(DatasetFactory.createConstraint("aplicacaoCandidato", "Efetivo", "Efetivo", ConstraintType.SHOULD));
    }else if(efetivo == false && estagio == true){
        constraints2.push(DatasetFactory.createConstraint("aplicacaoCandidato", "Estagio", "Estagio", ConstraintType.SHOULD));
    }            
    
    if(idadeDe != '' ){
        console.log('idadeate = '+ idadeAte)
        constraints2.push(DatasetFactory.createConstraint("idadeCandidato", idadeDe, idadeAte, ConstraintType.MUST));
    }
    
    //adicionando o head da tabela
    var header = '<tr>'
    header += '<th>DATA DE INCLUSÃO</th>'
    header += '<th>NOME</th>'
    header += '<th>IDADE</th>'
    header += '<th>EMAIL</th>'
    header += '<th>ÁREA</th>'
    header += '<th>APLICAÇÃO</th>'
    header += '<th>NIVEL EDUCACIONAL</th>'
    header += '<th>TELEFONE</th>'
    header += '<th>CIDADE</th>'
    header += '<th>LOCALIZAÇÃO</th>'
    header += '<th>STATUS</th>'
    header += '<th>SOLICITAÇÃO</th>'
    header += '</tr>'
    document.getElementById('tableHead_'+instanceId).innerHTML = header
    var dsContratacao = DatasetFactory.getDataset("dsProcessoSeletivo", null, constraints2, null);
    //adicionando o body da tabela
    document.getElementById('tableBody_'+instanceId).innerHTML = ''
    console.log('tamanho: '+dsContratacao.values.length)
    for (let index = 0; index < dsContratacao.values.length; index++) {
        //criando o filtro para pegar o processo atual
        var constraints = new Array()

        constraints.push(DatasetFactory.createConstraint("cardDocumentId", dsContratacao.values[index].documentid, dsContratacao.values[index].documentid, ConstraintType.MUST));
        

        if(Aberto == true && Finalizado == true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 2, ConstraintType.MUST));
        }else if(Aberto == true && Finalizado == true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 1, ConstraintType.MUST_NOT));
        }else if(Aberto == true && Finalizado != true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 1, ConstraintType.MUST));
        }else if(Aberto == true && Finalizado != true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 0, ConstraintType.MUST));
        }else if(Aberto != true && Finalizado == true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 2, ConstraintType.MUST));
        }else if(Aberto != true && Finalizado == true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 2, 2, ConstraintType.MUST));
        }else if(Aberto != true && Finalizado != true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 1, ConstraintType.MUST));
        }
        var workflowProcess = DatasetFactory.getDataset("workflowProcess", null, constraints, null);
        if(workflowProcess.values.length > 0){
            numProcess = '' + workflowProcess.values[0]["workflowProcessPK.processInstanceId"]
            var dataInicio = new Date(workflowProcess.values[0]["startDateProcess"])
            var dia = dataInicio.getDate()
            dia = (dia < 10 ) ?  '0'+dia : dia;
            var mes = (dataInicio.getMonth()+1)	
            mes = (mes < 10 ) ?  '0'+mes : mes;
            var ano = dataInicio.getFullYear()
            var dataInicioFMT = dia+'/'+mes+'/'+ano

            var statusC
            if(workflowProcess.values[0]["status"] == 0){
                statusC = 'Aberto'
                color = '#a8f0a8'
            }else if(workflowProcess.values[0]["status"] == 2){
                statusC = 'Finalizado'
                color = '#c8f4ff'
            }else if(workflowProcess.values[0]["status"] == 1){
                statusC = 'Cancelado'
                color = '#FFB6C1'
            }
            //criando o filtro para pegar o histórico
            var constraints3 = new Array()
            constraints3.push(DatasetFactory.createConstraint("processHistoryPK.processInstanceId", numProcess, numProcess, ConstraintType.MUST));
            var processHistory = DatasetFactory.getDataset("processHistory", null, constraints3, null);
            
            processId = workflowProcess.values[0]["processId"]
            var pos = processHistory.values.length -1
            stateSequence = processHistory.values[pos].stateSequence
            version = workflowProcess.values[0]["version"]
            //criando o filtro para consultar o nome da atividade atual
            var constraints4 = new Array()
            constraints4.push(DatasetFactory.createConstraint("processStatePK.processId", processId, processId, ConstraintType.MUST));
            constraints4.push(DatasetFactory.createConstraint("processStatePK.sequence", stateSequence, stateSequence, ConstraintType.MUST));
            constraints4.push(DatasetFactory.createConstraint("processStatePK.version", version, version, ConstraintType.MUST));
            var processState = DatasetFactory.getDataset("processState", null, constraints4, null);
            localizacao = processState.values[0]["stateName"]
            var body = '<tr>'
            body += '<td>'+dataInicioFMT+'</td>'
            body += '<td>'+dsContratacao.values[index].nomeCandidato+'</td>'
            body += '<td>'+dsContratacao.values[index].idadeCandidato+'</td>'
            body += '<td>'+dsContratacao.values[index].emailCandidato+'</td>'
            body += '<td>'+dsContratacao.values[index].areaCandidato+'</td>'
            body += '<td>'+dsContratacao.values[index].aplicacaoCandidato+'</td>'
            var nivelEduCandidato = dsContratacao.values[index].nivelEduCandidato
            if(nivelEduCandidato == 'superiorIncompleto'){
                nivelEduCandidato = 'Superior Incompleto'
            }else if(nivelEduCandidato == 'SuperiorCompleto'){
                nivelEduCandidato = 'Superior Completo'
            }else if(nivelEduCandidato == 'medioCompleto'){
                nivelEduCandidato = 'Médio Completo'
            }else if(nivelEduCandidato == 'OutraEscolariedade'){
                nivelEduCandidato = 'Outra Escolariedade'
            }
            body += '<td>'+nivelEduCandidato+'</td>'
            body += '<td>'+dsContratacao.values[index].telefoneCandidato+'</td>'
            body += '<td>'+dsContratacao.values[index].cidade+'</td>'
            body += '<td>'+localizacao+'</td>'
            body += '<td ><spam style="background-color:'+color+' ; border-radius: 25%; padding: 2%;width: 80%; height: 80%;">'+statusC+'<spam></td>'
            body += '<td>'
            body += '<a href="https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+  numProcess +'" target="_blank">'
            body += 'Solicitação '+ numProcess 
            body += '</a>'
            body += '</td>' 
            body += '</tr>'
            document.getElementById('tableBody_'+instanceId).innerHTML += body
        }
    }            
}