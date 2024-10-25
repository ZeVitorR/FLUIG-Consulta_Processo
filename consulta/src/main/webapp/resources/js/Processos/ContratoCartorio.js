function consultarContratoCart(instanceId) {
     
    const codCliDe = ''+document.getElementById("codde_"+instanceId).value;
    const codCliAte = (''+document.getElementById("codate_"+instanceId).value == '') ? codCliDe : ''+document.getElementById("codate_"+instanceId).value;
    const nomeClien = ''+document.getElementById("nomeCliente_"+instanceId).value;
    const codFil = ''+document.getElementById("codfil_"+instanceId).value;
    const empree = ''+document.getElementById("emprendimento_"+instanceId).value;
    const lote = ''+document.getElementById("lote_"+instanceId).value;
    const quadra = ''+document.getElementById("quadra_"+instanceId).value;
    const motivo = ''+document.getElementById("motivo_"+instanceId).value;
    const Aberto = document.getElementById("Aberto_"+instanceId).checked 
    const Finalizado = document.getElementById("Finalizado_"+instanceId).checked
    const Cancelado = document.getElementById("Cancelado_"+instanceId).checked
    const constraints2 = new Array();

    if(codCliDe != ''){
        constraints2.push(DatasetFactory.createConstraint("codigoCliente", codCliDe, codCliAte, ConstraintType.MUST));
    }
    if(nomeClien != '' ){
        constraints2.push(DatasetFactory.createConstraint("nomeCliente", nomeClien, nomeClien, ConstraintType.SHOULD, true));
    }
    if(codFil != '' ){
        constraints2.push(DatasetFactory.createConstraint("codigoFilial", codFil, codFil, ConstraintType.MUST));
    }
    if(empree != '' ){
        constraints2.push(DatasetFactory.createConstraint("empreendimento", empree, empree, ConstraintType.SHOULD, true));
    }
    if(lote != '' ){
        constraints2.push(DatasetFactory.createConstraint("lote", lote, lote, ConstraintType.MUST));
    }
    if(quadra != '' ){
        constraints2.push(DatasetFactory.createConstraint("quadra", quadra, quadra, ConstraintType.MUST));
    }
    if(motivo != ''){
        constraints2.push(DatasetFactory.createConstraint("motivo", motivo, motivo, ConstraintType.MUST));
    }
    //adicionando o head da tabela
    var header = '<tr>'
    header += '<th>CODIGO</th>'
    header += '<th>CLIENTE</th>'
    header += '<th>CODIGO FILIAL</th>'
    header += '<th>EMPREENDIMENTO</th>'
    header += '<th>LOTE</th>'
    header += '<th>QUADRA</th>'
    header += '<th>MOTIVO</th>'
    header += '<th>LOCALIZAÇÃO</th>'
    header += '<th>STATUS</th>'
    header += '<th>SOLICITAÇÃO</th>'
    header += '</tr>'
    document.getElementById('tableHead_'+instanceId).innerHTML = header
    var dsContratoCartorio = DatasetFactory.getDataset("dsRegistroContratoCartorio", null, constraints2, null);
    //adicionando o body da tabela
    document.getElementById('tableBody_'+instanceId).innerHTML = ''
    for (let index = 0; index < dsContratoCartorio.values.length; index++) {
        //criando o filtro para pegar o processo atual
        var constraints = new Array()
        constraints.push(DatasetFactory.createConstraint("cardDocumentId", dsContratoCartorio.values[index].documentid, dsContratoCartorio.values[index].documentid, ConstraintType.MUST));
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
            var status
            if(workflowProcess.values[0]["status"] == 0){
                status = 'Aberto'
                color = '#a8f0a8'
            }else if(workflowProcess.values[0]["status"] == 2){
                status = 'Finalizado'
                color = '#c8f4ff'
            }else if(workflowProcess.values[0]["status"] == 1){
                status = 'Cancelado'
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
            body += '<td>'+dsContratoCartorio.values[index].codigoCliente+'</td>'
            body += '<td>'+dsContratoCartorio.values[index].nomeCliente+'</td>'
            body += '<td>'+dsContratoCartorio.values[index].codigoFilial+'</td>'
            body += '<td>'+dsContratoCartorio.values[index].empreendimento+'</td>'
            body += '<td>'+dsContratoCartorio.values[index].lote+'</td>'
            body += '<td>'+dsContratoCartorio.values[index].quadra+'</td>'
            body += '<td>'+dsContratoCartorio.values[index].situacao+'</td>'
            body += '<td>'+localizacao+'</td>'
            body += '<td ><spam style="background-color:'+color+' ; border-radius: 25%; padding: 2%;width: 80%; height: 80%;">'+status+'<spam></td>'
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