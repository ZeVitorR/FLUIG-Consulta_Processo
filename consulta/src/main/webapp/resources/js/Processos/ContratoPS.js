function consultarContrato(instanceId) {
     
    const razao        = ''+document.getElementById("razaoSocial_"+instanceId).value;
    const cnpj         = ''+document.getElementById("CNPJ_"+instanceId).value;
    const obra         = ''+document.getElementById("obra_"+instanceId).value;
    const servico      = ''+document.getElementById("servico_"+instanceId).value;
    const dataDe       = ''+document.getElementById("dataDe_"+instanceId).value;
    const dataAte      = ''+(document.getElementById("dataAte_"+instanceId).value ) > dataDe ?  document.getElementById("dataAte_"+instanceId).value : dataDe;
    const Aberto       = document.getElementById("Aberto_"+instanceId).checked 
    const Finalizado   = document.getElementById("Finalizado_"+instanceId).checked
    const Cancelado    = document.getElementById("Cancelado_"+instanceId).checked
    const constraints2 = new Array();

    if(razao != ''){
        constraints2.push(DatasetFactory.createConstraint("razaoSocial2", razao, razao, ConstraintType.SHOULD, true));
    }
    if(cnpj != '' ){
        constraints2.push(DatasetFactory.createConstraint("cnpjContratada", cnpj, cnpj, ConstraintType.MUST));
    }
    if(obra != '' ){
        constraints2.push(DatasetFactory.createConstraint("obra", obra, obra, ConstraintType.SHOULD, true));
    }    
    if(servico != '' ){
        constraints2.push(DatasetFactory.createConstraint("servico", servico, servico, ConstraintType.SHOULD, true));
    }
    if(dataDe != '' ){
        constraints2.push(DatasetFactory.createConstraint("dataContrato", dataDe, dataAte, ConstraintType.SHOULD, true));
    }
    
    //adicionando o head da tabela
    var header = '<tr>'
    header += '<th>RAZÃO SOCIAL</th>'
    header += '<th>CNPJ</th>'
    header += '<th>DATA DO CONTRATO</th>'
    header += '<th>OBRA</th>'
    header += '<th>SERVIÇO</th>'
    header += '<th>LOCALIZAÇÃO</th>'
    header += '<th>STATUS</th>'
    header += '<th>SOLICITAÇÃO</th>'
    header += '</tr>'
    document.getElementById('tableHead_'+instanceId).innerHTML = header
    var dsContrato = DatasetFactory.getDataset("dsContrato", null, constraints2, null);
    //adicionando o body da tabela
    document.getElementById('tableBody_'+instanceId).innerHTML = ''
    console.log('tamanho: '+dsContrato.values.length)
    for (let index = 0; index < dsContrato.values.length; index++) {
        //criando o filtro para pegar o processo atual
        var constraints = new Array()

        constraints.push(DatasetFactory.createConstraint("cardDocumentId", dsContrato.values[index].documentid, dsContrato.values[index].documentid, ConstraintType.MUST));
        

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
            
            var dataCT = ''+dsContrato.values[index].dataContrato
            var data3 = dataCT.split('-')
            var dataCTfmt = data3[0]+data3[1]+data3[2]
            dataCT = data3[2]+'/'+data3[1]+'/'+data3[0]
            var body = '<tr>'
            if(dataDe != ''){
                var data1 = dataDe.split('-')
                var dataDeFmt = data1[0]+data1[1]+data1[2]
                var data2 = dataAte.split('-')
                var dataAteFmt = data2[0]+data2[1]+data2[2]
                if(dataCTfmt >= dataDeFmt && dataCTfmt <= dataAteFmt){
                    body += '<td>'+dsContrato.values[index].razaoSocial2+'</td>'
                    body += '<td>'+dsContrato.values[index].cnpjContratada+'</td>'
                    body += '<td>'+dataCT+'</td>'
                    body += '<td>'+dsContrato.values[index].obra+'</td>'
                    body += '<td>'+dsContrato.values[index].servico+'</td>'
                    body += '<td>'+localizacao+'</td>'
                    body += '<td ><spam style="background-color:'+color+' ; border-radius: 25%; padding: 2%;width: 80%; height: 80%;">'+statusC+'<spam></td>'
                    body += '<td>'
                    body += '<a href="https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+  numProcess +'" target="_blank">'
                    body += 'Solicitação '+ numProcess 
                }  
            }else{
                body += '<td>'+dsContrato.values[index].razaoSocial2+'</td>'
                body += '<td>'+dsContrato.values[index].cnpjContratada+'</td>'
                body += '<td>'+dataCT+'</td>'
                body += '<td>'+dsContrato.values[index].obra+'</td>'
                body += '<td>'+dsContrato.values[index].servico+'</td>'
                body += '<td>'+localizacao+'</td>'
                body += '<td ><spam style="background-color:'+color+' ; border-radius: 25%; padding: 2%;width: 80%; height: 80%;">'+statusC+'<spam></td>'
                body += '<td>'
                body += '<a href="https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+  numProcess +'" target="_blank">'
                body += 'Solicitação '+ numProcess
            }
            body += '</a>'
            body += '</td>' 
            body += '</tr>'
            document.getElementById('tableBody_'+instanceId).innerHTML += body
        }
    }            
}