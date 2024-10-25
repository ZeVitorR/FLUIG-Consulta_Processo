function consultarSubjudice(instanceId,currentPage) {
     
    const codCliDe = ''+document.getElementById("codde_"+instanceId).value;
    const codCliAte = (''+document.getElementById("codate_"+instanceId).value == '') ? codCliDe : ''+document.getElementById("codate_"+instanceId).value;
    const nomeClien = ''+document.getElementById("nomeCliente_"+instanceId).value;
    const codFil = ''+document.getElementById("codfil_"+instanceId).value;
    const empree = ''+document.getElementById("emprendimento_"+instanceId).value;
    const lote = ''+document.getElementById("lote_"+instanceId).value;
    const quadra = ''+document.getElementById("quadra_"+instanceId).value;
    const cidade = ''+document.getElementById("cidade_"+instanceId).value;
    const vara = ''+document.getElementById("vara_"+instanceId).value;
    const Aberto = document.getElementById("Aberto_"+instanceId).checked 
    const Finalizado = document.getElementById("Finalizado_"+instanceId).checked
    const Cancelado = document.getElementById("Cancelado_"+instanceId).checked
    const ContratoRegistrado = document.getElementById("ContratoSim_"+instanceId).checked
    const ContratoNaoRegistrado = document.getElementById("ContratoNao_"+instanceId).checked
    const PossuiContrucao = document.getElementById("ConstrucaoSim_"+instanceId).checked
    const NaoPossuiContrucao = document.getElementById("ConstrucaoNao_"+instanceId).checked
    const PriEstanciaFav = document.getElementById("1InstFav_"+instanceId).checked
    const PriEstanciaDes = document.getElementById("1InstDesFav_"+instanceId).checked
    const SegEstanciaFav = document.getElementById("2InstFav_"+instanceId).checked
    const SegEstanciaDes = document.getElementById("2InstDesFav_"+instanceId).checked
    const SupEstanciaFav = document.getElementById("SupInstFav_"+instanceId).checked
    const SupEstanciaDes = document.getElementById("SupInstDesFav_"+instanceId).checked
    const Reu = document.getElementById("Reu"+instanceId).checked 
    const Autor = document.getElementById("Autor"+instanceId).checked
    const Vitor = document.getElementById("Vitor"+instanceId).checked
    const Vidal = document.getElementById("Vidal"+instanceId).checked
    const catA = document.getElementById("catA"+instanceId).checked
    const catB = document.getElementById("catB"+instanceId).checked
    const catC = document.getElementById("catC"+instanceId).checked
    const teseA = document.getElementById("teseA"+instanceId).checked
    const teseB = document.getElementById("teseB"+instanceId).checked
    const teseC = document.getElementById("teseC"+instanceId).checked
    const SPE = document.getElementById("SPE"+instanceId).checked
    const Holding = document.getElementById("Holding"+instanceId).checked
    const constraints2 = new Array();
    
    //link admin - https://thomasie156268.fluig.cloudtotvs.com.br:1150/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId=718&app_ecm_workflowview_currentMovto=2&app_ecm_workflowview_taskUserId=TIC000001&app_ecm_workflowview_managerMode=true

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
    if(vara != '' ){
        constraints2.push(DatasetFactory.createConstraint("varaProcesso", vara, vara, ConstraintType.SHOULD, true));
    }
    if(cidade != '' ){
        constraints2.push(DatasetFactory.createConstraint("cidade", cidade, cidade, ConstraintType.SHOULD, true));
    }
    if(ContratoRegistrado == true || ContratoNaoRegistrado == true ){
        if(ContratoRegistrado == true && ContratoNaoRegistrado == false){
            constraints2.push(DatasetFactory.createConstraint("radiotypes", "Sim", "Sim", ConstraintType.MUST));
        }else if(ContratoRegistrado == false && ContratoNaoRegistrado == true){
            constraints2.push(DatasetFactory.createConstraint("radiotypes", "Não", "Não", ConstraintType.MUST));
        }
    }
    if(PossuiContrucao == true || NaoPossuiContrucao == true ){
        if(PossuiContrucao == true && NaoPossuiContrucao == false){
            constraints2.push(DatasetFactory.createConstraint("opcao", "Sim", "Sim", ConstraintType.MUST));
        }else if(PossuiContrucao == false && NaoPossuiContrucao == true){
            constraints2.push(DatasetFactory.createConstraint("opcao", "Não", "Não", ConstraintType.MUST));
        }
    }
    if(PriEstanciaFav == true || PriEstanciaDes == true ){
        if(PriEstanciaFav == true && PriEstanciaDes == false){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca", "Favorável", "Favorável", ConstraintType.MUST));
        }else if(PriEstanciaFav == false && PriEstanciaDes == true){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca","Desfavorável", "Desfavorável", ConstraintType.MUST));
        }
    }
    if(SegEstanciaFav == true || SegEstanciaDes == true ){
        if(SegEstanciaFav == true && SegEstanciaDes == false){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca2", "Favorável", "Favorável", ConstraintType.MUST));
        }else if(SegEstanciaFav == false && SegEstanciaDes == true){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca2", "Desfavorável", "Desfavorável", ConstraintType.MUST));
        }
    }
    if(SupEstanciaFav == true || SupEstanciaDes == true ){
        if(SupEstanciaFav == true && SupEstanciaDes == false){
            constraints2.push(DatasetFactory.createConstraint("opcaoSuperior", "Favorável", "Favorável", ConstraintType.MUST));
        }else if(SupEstanciaFav == false && SupEstanciaDes == true){
            constraints2.push(DatasetFactory.createConstraint("opcaoSuperior", "Desfavorável", "Desfavorável", ConstraintType.MUST));
        }
    }
    if(Reu == true || Autor == true ){
        if(Reu == true && Autor == false){
            constraints2.push(DatasetFactory.createConstraint("tipoAcao", "Réu", "Réu", ConstraintType.MUST));
        }else if(Reu == false && Autor == true){
            constraints2.push(DatasetFactory.createConstraint("tipoAcao", "Autor", "Autor", ConstraintType.MUST));
        }
    }
    if(Vitor == true || Vidal == true ){
        if(Vitor == true && Vidal == false){
            constraints2.push(DatasetFactory.createConstraint("advResponsavel", "Vitor", "Vitor", ConstraintType.MUST));
        }else if(Vitor == false && Vidal == true){
            constraints2.push(DatasetFactory.createConstraint("advResponsavel", "Vidal", "Vidal", ConstraintType.MUST));
        }
    }
    if(catA == true || catB == true || catC == true){
        if(catA == true && catB == false && catC == false){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catA", "catA", ConstraintType.MUST))
        }else if(catA == false && catB == true && catC == false){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catB", "catB", ConstraintType.MUST))
        }else if(catA == false && catB == false && catC == true){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catC", "catC", ConstraintType.MUST))
        }if(catA == true && catB == true && catC == false){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catA", "catA", ConstraintType.SHOULD))
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catB", "catB", ConstraintType.SHOULD))
        }else if(catA == true && catB == false && catC == true){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catA", "catA", ConstraintType.SHOULD))
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catC", "catC", ConstraintType.SHOULD))
        }else if(catA == false && catB == true && catC == true){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catB", "catB", ConstraintType.SHOULD))
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catC", "catC", ConstraintType.SHOULD))
        }
    }
    if(teseA == true || teseB == true || teseC == true){
        if(teseA == true && teseB == false && teseC == false){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseA", "teseA", ConstraintType.MUST))
        }else if(teseA == false && teseB == true && teseC == false){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseB", "teseB", ConstraintType.MUST))
        }else if(teseA == false && teseB == false && teseC == true){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseC", "teseC", ConstraintType.MUST))
        }if(teseA == true && teseB == true && teseC == false &&  (valorTese == 'teseA' || valorTese == 'teseB')){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseA", "teseA", ConstraintType.SHOULD))
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseB", "teseB", ConstraintType.SHOULD))
        }else if(teseA == true && teseB == false && teseC == true &&  (valorTese == 'teseA' || valorTese == 'teseC')){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseA", "teseA", ConstraintType.SHOULD))
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseC", "teseC", ConstraintType.SHOULD))
        }else if(teseA == false && teseB == true && teseC == true &&  (valorTese == 'teseB' || valorTese == 'teseC')){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseB", "teseB", ConstraintType.SHOULD))
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseC", "teseC", ConstraintType.SHOULD))
        }
    }
    if(SPE == true || Holding == true ){
        if(SPE == true && Holding == false){
            constraints2.push(DatasetFactory.createConstraint("impacto", "SPE", "SPE", ConstraintType.MUST));
        }else if(SPE == false && Holding == true){
            constraints2.push(DatasetFactory.createConstraint("impacto", "Holding", "Holding", ConstraintType.MUST));
        }
    }

    //adicionando o head da tabela
    
    var header = '<tr>'
    //header += '<th>CODIGO</th>'
    header += '<th>CLIENTE</th>'
    header += '<th>ADV RESP</th>'
    header += '<th>PRODUTO</th>'
    header += '<th>CATEGORIA</th>'
    header += '<th>TESE</th>'
    header += '<th>DESPESAS</th>'
    header += '<th>VALOR CAUSA</th>'
    header += '<th>VALOR PED. CLIENTE</th>'
    header += '<th>VALOR PROCESSO</th>'
    header += '<th>LOCALIZAÇÃO</th>'
    header += '<th>STATUS</th>'
    header += '<th>SOLICITAÇÃO</th>'
    header += '</tr>'
    document.getElementById('tableHead_'+instanceId).innerHTML = header
    console.log(constraints2)
    var dsProcessoSubjudice = DatasetFactory.getDataset("dsProcessoSubjudice", null, constraints2, null);
    //adicionando o body da tabela
    document.getElementById('tableBody_'+instanceId).innerHTML = ''
    var contador = 0,despesas = 0, pedidoClienteVal = 0, valorProcesso = 0, valorCausa = 0, totalPago = 0, totalVencido = 0

    const constraints7 = new Array()
    constraints7.push(DatasetFactory.createConstraint("workflowColleagueRolePK.colleagueId", getWKUser(), getWKUser(), ConstraintType.MUST));
    constraints7.push(DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "SubGestor", "SubGestor", ConstraintType.MUST));
    var verificaGestor = DatasetFactory.getDataset("workflowColleagueRole", null, constraints7, null);
    console.log(verificaGestor)

    const qtdItensPagina = 10 
    const totalItens =  dsProcessoSubjudice.values.length
    const divisao = parseInt(totalItens / qtdItensPagina)
    const totalPaginas = (totalItens % qtdItensPagina > 0) ? divisao+1 : divisao

    itenInicial = (currentPage-1) == 0 ? 0 :((currentPage-1) * 10) - 1

    for (let index = 0; index < totalItens; index++) {
        //criando o filtro para pegar o processo atual
        var constraints = new Array()
        constraints.push(DatasetFactory.createConstraint("cardDocumentId", dsProcessoSubjudice.values[index].documentid, dsProcessoSubjudice.values[index].documentid, ConstraintType.MUST));
        if(Aberto == true && Finalizado == true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 2, ConstraintType.MUST));
        }if(Aberto == true && Finalizado == true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 1, ConstraintType.MUST_NOT));
        }if(Aberto == true && Finalizado != true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 1, ConstraintType.MUST));
        }if(Aberto == true && Finalizado != true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 0, ConstraintType.MUST));
        }if(Aberto != true && Finalizado == true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 2, ConstraintType.MUST));
        }if(Aberto != true && Finalizado == true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 2, 2, ConstraintType.MUST));
        }if(Aberto != true && Finalizado != true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 1, ConstraintType.MUST));
        }
        var workflowProcess = DatasetFactory.getDataset("workflowProcess", null, constraints, null);

        valorCat = ''+dsProcessoSubjudice.values[index]["catProcesso"]
        catBoleano = false
       
        valorTese = ''+dsProcessoSubjudice.values[index]["teseProcesso"]
       

        if(workflowProcess.values.length > 0 ){
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
            var link
            if(verificaGestor.values.length > 0 && workflowProcess.values[0]["status"] == 0){
                const constraints8 = new Array()
                constraints8.push(DatasetFactory.createConstraint("processTaskPK.processInstanceId", numProcess, numProcess, ConstraintType.MUST));
                var task = DatasetFactory.getDataset("processTask", null, constraints8, null);
                posTask = task.values.length-1
                movimento = task.values[posTask]["processTaskPK.movementSequence"]
                link ='https://thomasie156268.fluig.cloudtotvs.com.br:1150/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId='+numProcess+'&app_ecm_workflowview_currentMovto='+movimento+'&app_ecm_workflowview_taskUserId='+getWKUser()+'&app_ecm_workflowview_managerMode=true'
            }else{
                link = 'https://thomasie156268.fluig.cloudtotvs.com.br:1150/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+  numProcess
            }
            var despesaT = (dsProcessoSubjudice.values[index].TotalDespesas == null || dsProcessoSubjudice.values[index].TotalDespesas == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].TotalDespesas
            var advResponsavel = (dsProcessoSubjudice.values[index].advResponsavel == null || dsProcessoSubjudice.values[index].advResponsavel == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].advResponsavel
            var catProcesso = (dsProcessoSubjudice.values[index].catProcesso == null || dsProcessoSubjudice.values[index].catProcesso == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].catProcesso
            var teseProcesso = (dsProcessoSubjudice.values[index].teseProcesso == null || dsProcessoSubjudice.values[index].teseProcesso == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].teseProcesso
            valDes = ""+dsProcessoSubjudice.values[index].TotalDespesas
            valPCl = ""+dsProcessoSubjudice.values[index].valorPedClient
            valPro = ""+dsProcessoSubjudice.values[index].valorProcesso
            valCau = ""+dsProcessoSubjudice.values[index].valorCausa

            valDes = (dsProcessoSubjudice.values[index].TotalDespesas == null || dsProcessoSubjudice.values[index].TotalDespesas == 'null') ? 0 :parseFloat(valDes)
            valPCl = (isNaN(Number(valPCl)) == true) ? 0 : Number(valPCl)
            valPro = (isNaN(Number(valPro)) == true) ? 0 : Number(valPro)
            valCau = (isNaN(Number(valCau)) == true) ? 0 : Number(valCau)

            var body = '<tr>'
            //body += '<td>'+dsProcessoSubjudice.values[index].codigoCliente+'</td>'
            body += '<td>'+dsProcessoSubjudice.values[index].nomeCliente+'</td>'
            body += '<td>'+advResponsavel+'</td>'
            body += '<td>'+dsProcessoSubjudice.values[index].lote+'-'+dsProcessoSubjudice.values[index].quadra+'-'+dsProcessoSubjudice.values[index].empreendimento+'</td>'
            body += '<td>'+catProcesso+'</td>'
            body += '<td>'+teseProcesso+'</td>'
            body += '<td>'+despesaT+'</td>'
            body += '<td>'+valCau+'</td>'
            body += '<td>'+valPCl+'</td>'
            body += '<td>'+valPro+'</td>'
            body += '<td>'+localizacao+'</td>'
            body += '<td ><spam style="background-color:'+color+' ; border-radius: 25%; padding: 2%;width: 80%; height: 80%;">'+status+'<spam></td>'
            body += '<td>'
            body += '<a href="'+link+'" target="_blank">'
            body += 'Solicitação '+ numProcess 
            body += '</a>'
            body += '</td>' 
            body += '</tr>'
            document.getElementById('tableBody_'+instanceId).innerHTML += body
            
            contador++;
            

            despesas         += valDes
            pedidoClienteVal += valPCl
            valorProcesso    += valPro
            valorCausa       += valCau
            
        }
        
    }

    //realizaPaginacao(instanceId,currentPage,totalPaginas)
    tot = '<div class="col-md-2">'
    tot += '     <h5>Total de Processos:</h5><h5>'+contador+'</h5>'
    tot += '</div>'
    tot += '<div class="col-md-2">'
    tot += '     <h5>Total de Despesas:</h5><h5> R$ '+despesas.toLocaleString('pt-br', {minimumFractionDigits: 2});+'</h5>'
    tot += '</div>'
    tot += '<div class="col-md-2">'
    tot += '     <h5>Total da Causa:</h5><h5> R$ '+valorCausa.toLocaleString('pt-br', {minimumFractionDigits: 2});+'</h5>'
    tot += '</div>'
    tot += '<div class="col-md-3">'
    tot += '     <h5>Total Pedido pelo Cliente:</h5><h5> R$ '+pedidoClienteVal.toLocaleString('pt-br', {minimumFractionDigits: 2});+'</h5>'
    tot += '</div>'
    tot += '<div class="col-md-3">'
    tot += '     <h5>Total do Processo:</h5><h5> R$ '+valorProcesso.toLocaleString('pt-br', {minimumFractionDigits: 2});+'</h5>'
    tot += '</div>'
    document.getElementById('divInformativa_'+instanceId).innerHTML = tot

}

function ExcelSubjudice(instanceId) {
     
    const codCliDe = ''+document.getElementById("codde_"+instanceId).value;
    const codCliAte = (''+document.getElementById("codate_"+instanceId).value == '') ? codCliDe : ''+document.getElementById("codate_"+instanceId).value;
    const nomeClien = ''+document.getElementById("nomeCliente_"+instanceId).value;
    const codFil = ''+document.getElementById("codfil_"+instanceId).value;
    const empree = ''+document.getElementById("emprendimento_"+instanceId).value;
    const lote = ''+document.getElementById("lote_"+instanceId).value;
    const quadra = ''+document.getElementById("quadra_"+instanceId).value;
    const cidade = ''+document.getElementById("cidade_"+instanceId).value;
    const vara = ''+document.getElementById("vara_"+instanceId).value;
    const Aberto = document.getElementById("Aberto_"+instanceId).checked 
    const Finalizado = document.getElementById("Finalizado_"+instanceId).checked
    const Cancelado = document.getElementById("Cancelado_"+instanceId).checked
    const ContratoRegistrado = document.getElementById("ContratoSim_"+instanceId).checked
    const ContratoNaoRegistrado = document.getElementById("ContratoNao_"+instanceId).checked
    const PossuiContrucao = document.getElementById("ConstrucaoSim_"+instanceId).checked
    const NaoPossuiContrucao = document.getElementById("ConstrucaoNao_"+instanceId).checked
    const PriEstanciaFav = document.getElementById("1InstFav_"+instanceId).checked
    const PriEstanciaDes = document.getElementById("1InstDesFav_"+instanceId).checked
    const SegEstanciaFav = document.getElementById("2InstFav_"+instanceId).checked
    const SegEstanciaDes = document.getElementById("2InstDesFav_"+instanceId).checked
    const SupEstanciaFav = document.getElementById("SupInstFav_"+instanceId).checked
    const SupEstanciaDes = document.getElementById("SupInstDesFav_"+instanceId).checked
    const Reu = document.getElementById("Reu"+instanceId).checked 
    const Autor = document.getElementById("Autor"+instanceId).checked
    const Vitor = document.getElementById("Vitor"+instanceId).checked
    const Vidal = document.getElementById("Vidal"+instanceId).checked
    const catA = document.getElementById("catA"+instanceId).checked
    const catB = document.getElementById("catB"+instanceId).checked
    const catC = document.getElementById("catC"+instanceId).checked
    const teseA = document.getElementById("teseA"+instanceId).checked
    const teseB = document.getElementById("teseB"+instanceId).checked
    const teseC = document.getElementById("teseC"+instanceId).checked
    const SPE = document.getElementById("SPE"+instanceId).checked
    const Holding = document.getElementById("Holding"+instanceId).checked
    const constraints2 = new Array();
    
    //link admin - https://thomasie156268.fluig.cloudtotvs.com.br:1150/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId=718&app_ecm_workflowview_currentMovto=2&app_ecm_workflowview_taskUserId=TIC000001&app_ecm_workflowview_managerMode=true

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
    if(vara != '' ){
        constraints2.push(DatasetFactory.createConstraint("varaProcesso", vara, vara, ConstraintType.SHOULD, true));
    }
    if(cidade != '' ){
        constraints2.push(DatasetFactory.createConstraint("cidade", cidade, cidade, ConstraintType.SHOULD, true));
    }
    if(ContratoRegistrado == true || ContratoNaoRegistrado == true ){
        if(ContratoRegistrado == true && ContratoNaoRegistrado == false){
            constraints2.push(DatasetFactory.createConstraint("radiotypes", "Sim", "Sim", ConstraintType.MUST));
        }else if(ContratoRegistrado == false && ContratoNaoRegistrado == true){
            constraints2.push(DatasetFactory.createConstraint("radiotypes", "Não", "Não", ConstraintType.MUST));
        }
    }
    if(PossuiContrucao == true || NaoPossuiContrucao == true ){
        if(PossuiContrucao == true && NaoPossuiContrucao == false){
            constraints2.push(DatasetFactory.createConstraint("opcao", "Sim", "Sim", ConstraintType.MUST));
        }else if(PossuiContrucao == false && NaoPossuiContrucao == true){
            constraints2.push(DatasetFactory.createConstraint("opcao", "Não", "Não", ConstraintType.MUST));
        }
    }
    if(PriEstanciaFav == true || PriEstanciaDes == true ){
        if(PriEstanciaFav == true && PriEstanciaDes == false){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca", "Favorável", "Favorável", ConstraintType.MUST));
        }else if(PriEstanciaFav == false && PriEstanciaDes == true){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca","Desfavorável", "Desfavorável", ConstraintType.MUST));
        }
    }
    if(SegEstanciaFav == true || SegEstanciaDes == true ){
        if(SegEstanciaFav == true && SegEstanciaDes == false){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca2", "Favorável", "Favorável", ConstraintType.MUST));
        }else if(SegEstanciaFav == false && SegEstanciaDes == true){
            constraints2.push(DatasetFactory.createConstraint("opcaoSetenca2", "Desfavorável", "Desfavorável", ConstraintType.MUST));
        }
    }
    if(SupEstanciaFav == true || SupEstanciaDes == true ){
        if(SupEstanciaFav == true && SupEstanciaDes == false){
            constraints2.push(DatasetFactory.createConstraint("opcaoSuperior", "Favorável", "Favorável", ConstraintType.MUST));
        }else if(SupEstanciaFav == false && SupEstanciaDes == true){
            constraints2.push(DatasetFactory.createConstraint("opcaoSuperior", "Desfavorável", "Desfavorável", ConstraintType.MUST));
        }
    }
    if(Reu == true || Autor == true ){
        if(Reu == true && Autor == false){
            constraints2.push(DatasetFactory.createConstraint("tipoAcao", "Réu", "Réu", ConstraintType.MUST));
        }else if(Reu == false && Autor == true){
            constraints2.push(DatasetFactory.createConstraint("tipoAcao", "Autor", "Autor", ConstraintType.MUST));
        }
    }
    if(Vitor == true || Vidal == true ){
        if(Vitor == true && Vidal == false){
            constraints2.push(DatasetFactory.createConstraint("advResponsavel", "Vitor", "Vitor", ConstraintType.MUST));
        }else if(Vitor == false && Vidal == true){
            constraints2.push(DatasetFactory.createConstraint("advResponsavel", "Vidal", "Vidal", ConstraintType.MUST));
        }
    }
    var catBoleano = false
    if(catA == true || catB == true || catC == true){
        if(catA == true && catB == false && catC == false){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catA", "catA", ConstraintType.MUST))
            catBoleano = true
        }else if(catA == false && catB == true && catC == false){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catB", "catB", ConstraintType.MUST))
            catBoleano = true
        }else if(catA == false && catB == false && catC == true){
            constraints2.push(DatasetFactory.createConstraint("catProcesso", "catC", "catC", ConstraintType.MUST))
            catBoleano = true
        }
    }
    var teseBoleana = false
    if(teseA == true || teseB == true || teseC == true){
        if(teseA == true && teseB == false && teseC == false){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseA", "teseA", ConstraintType.MUST))
            teseBoleana = true
        }else if(teseA == false && teseB == true && teseC == false){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseB", "teseB", ConstraintType.MUST))
            teseBoleana = true
        }else if(teseA == false && teseB == false && teseC == true){
            constraints2.push(DatasetFactory.createConstraint("teseProcesso", "teseC", "teseC", ConstraintType.MUST))
            teseBoleana = true
        }
    }
    if(SPE == true || Holding == true ){
        if(SPE == true && Holding == false){
            constraints2.push(DatasetFactory.createConstraint("impacto", "SPE", "SPE", ConstraintType.MUST));
        }else if(SPE == false && Holding == true){
            constraints2.push(DatasetFactory.createConstraint("impacto", "Holding", "Holding", ConstraintType.MUST));
        }
    }
    const cabecalho = ["Nome do Cliente", "Empreendimento", "Lote", "Quadra","Cidade", "Número do Processo","Valor do Processo","Contrato Registrado","Valor Pago","Valor em Atraso","Valor de Mercado","Existe Construção","Valor da Proposta","1° Instância", "2° Instância","Tribunal Superior","Advogado Responsável","Categoria do Processo","Tese do Processo","Valor da Causa", "Valor Pedido pelo Cliente","Valor da Despesas","Localização do Processo", "Status da Solicitação","Vara","Impacto", "Numero da Solicitação"]
    
    var dsProcessoSubjudice = DatasetFactory.getDataset("dsProcessoSubjudice", null, constraints2, null);
    //adicionando o body da tabela
    document.getElementById('tableBody_'+instanceId).innerHTML = ''
    var contador = 0,despesas = 0, pedidoClienteVal = 0, valorProcesso = 0, valorCausa = 0, totalPago = 0, totalVencido = 0
    const constraints7 = new Array()
    constraints7.push(DatasetFactory.createConstraint("workflowColleagueRolePK.colleagueId", getWKUser(), getWKUser(), ConstraintType.MUST));
    constraints7.push(DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "SubGestor", "SubGestor", ConstraintType.MUST));
    var verificaGestor = DatasetFactory.getDataset("workflowColleagueRole", null, constraints7, null);
    console.log(verificaGestor)
    
    const line = []
    for (let index = 0; index < dsProcessoSubjudice.values.length; index++) {
        //criando o filtro para pegar o processo atual
        var constraints = new Array()
        constraints.push(DatasetFactory.createConstraint("cardDocumentId", dsProcessoSubjudice.values[index].documentid, dsProcessoSubjudice.values[index].documentid, ConstraintType.MUST));
        if(Aberto == true && Finalizado == true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 2, ConstraintType.MUST));
        }if(Aberto == true && Finalizado == true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 1, ConstraintType.MUST_NOT));
        }if(Aberto == true && Finalizado != true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 1, ConstraintType.MUST));
        }if(Aberto == true && Finalizado != true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 0, 0, ConstraintType.MUST));
        }if(Aberto != true && Finalizado == true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 2, ConstraintType.MUST));
        }if(Aberto != true && Finalizado == true && Cancelado != true){
            constraints.push(DatasetFactory.createConstraint("status", 2, 2, ConstraintType.MUST));
        }if(Aberto != true && Finalizado != true && Cancelado == true){
            constraints.push(DatasetFactory.createConstraint("status", 1, 1, ConstraintType.MUST));
        }
        var workflowProcess = DatasetFactory.getDataset("workflowProcess", null, constraints, null);

        valorCat = ''+dsProcessoSubjudice.values[index]["catProcesso"]
        catBoleano = false
        if(catA == true && catB == true && catC == false &&  (valorCat == 'catA' || valorCat == 'catB') ){
            catBoleano = true
        }else if(catA == true && catB == false && catC == true &&  (valorCat == 'catA' || valorCat == 'catC')){
            catBoleano = true
        }else if(catA == false && catB == true && catC == true &&  (valorCat == 'catB' || valorCat == 'catC')){
            catBoleano = true
        }else if((catA == true && catB == true && catC == true) || (catA == false && catB == false && catC == false)){
            catBoleano = true
        }else if((catA == true && catB == false && catC == false) || (catA == false && catB == true && catC == false) || ((catA == false && catB == false && catC == true) )){
            catBoleano = true
        }
        valorTese = ''+dsProcessoSubjudice.values[index]["teseProcesso"]
        teseBoleana = false
        if(teseA == true && teseB == true && teseC == false &&  (valorTese == 'teseA' || valorTese == 'teseB')){
            teseBoleana = true
        }else if(teseA == true && teseB == false && teseC == true &&  (valorTese == 'teseA' || valorTese == 'teseC')){
            teseBoleana = true
        }else if(teseA == false && teseB == true && teseC == true &&  (valorTese == 'teseB' || valorTese == 'teseC')){
            teseBoleana = true
        }else if((teseA == true && teseB == true && teseC == true) || (teseA == false && teseB == false && teseC == false)){
            teseBoleana = true
        }else if((teseA == true && teseB == false && teseC == false) || (teseA == false && teseB == true && teseC == false) || ((teseA == false && teseB == false && teseC == true) )){
            teseBoleana = true
        }

        if(workflowProcess.values.length > 0 && catBoleano && teseBoleana){
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
            var link
            if(verificaGestor.values.length > 0 && workflowProcess.values[0]["status"] == 0){
                const constraints8 = new Array()
                constraints8.push(DatasetFactory.createConstraint("processTaskPK.processInstanceId", numProcess, numProcess, ConstraintType.MUST));
                var task = DatasetFactory.getDataset("processTask", null, constraints8, null);
                posTask = task.values.length-1
                movimento = task.values[posTask]["processTaskPK.movementSequence"]
                link ='https://thomasie156268.fluig.cloudtotvs.com.br:1150/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId='+numProcess+'&app_ecm_workflowview_currentMovto='+movimento+'&app_ecm_workflowview_taskUserId='+getWKUser()+'&app_ecm_workflowview_managerMode=true'
            }else{
                link = 'https://thomasie156268.fluig.cloudtotvs.com.br:1150/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+  numProcess
            }
            var despesaT = (dsProcessoSubjudice.values[index].TotalDespesas == null || dsProcessoSubjudice.values[index].TotalDespesas == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].TotalDespesas
            var advResponsavel = (dsProcessoSubjudice.values[index].advResponsavel == null || dsProcessoSubjudice.values[index].advResponsavel == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].advResponsavel
            var catProcesso = (dsProcessoSubjudice.values[index].catProcesso == null || dsProcessoSubjudice.values[index].catProcesso == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].catProcesso
            var teseProcesso = (dsProcessoSubjudice.values[index].teseProcesso == null || dsProcessoSubjudice.values[index].teseProcesso == 'null') ? 'Sem Informação' : dsProcessoSubjudice.values[index].teseProcesso
            
            line[contador] = [dsProcessoSubjudice.values[index].nomeCliente ,
                                dsProcessoSubjudice.values[index].empreendimento ,
                                dsProcessoSubjudice.values[index].lote ,
                                dsProcessoSubjudice.values[index].quadra ,
                                dsProcessoSubjudice.values[index].cidade ,
                                dsProcessoSubjudice.values[index].numProcesso ,
                                dsProcessoSubjudice.values[index].valorProcesso ,
                                dsProcessoSubjudice.values[index].radiotypes ,
                                dsProcessoSubjudice.values[index].valorPago ,
                                dsProcessoSubjudice.values[index].valorAtraso ,
                                dsProcessoSubjudice.values[index].valorMercado ,
                                dsProcessoSubjudice.values[index].opcao ,
                                dsProcessoSubjudice.values[index].valorProposta ,
                                dsProcessoSubjudice.values[index].opcaoSetenca ,
                                dsProcessoSubjudice.values[index].opcaoSetenca2 ,
                                dsProcessoSubjudice.values[index].opcaoSuperior ,
                                advResponsavel ,
                                catProcesso ,
                                teseProcesso ,
                                dsProcessoSubjudice.values[index].valorCausa ,
                                dsProcessoSubjudice.values[index].valorPedClient ,
                                despesaT ,
                                localizacao ,
                                status ,
                                dsProcessoSubjudice.values[index].varaProcesso ,
                                dsProcessoSubjudice.values[index].impacto ,
                                numProcess];
            
            contador++;
        }
    }
    tot = "<h3 >Total:"+contador+"</h3>"
    tot += "<h3 >Total de Despesas:"+contador+"</h3>"
    document.getElementById('divInformativa_'+instanceId).innerHTML = tot
    
    const dados = [];
    dados[0] = cabecalho  
    for (let posEx = 1; posEx <= contador; posEx++) {
        dados[posEx] = line[posEx-1];
    }
    const ws = XLSX.utils.aoa_to_sheet(dados);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Dados");
    XLSX.writeFile(wb, "Planilha do Processo do Subjudice.xlsx");
           
    
}

function getWKUser(){ 
    return  WCMAPI.userCode;
}

function realizaPaginacao(instanceId,currentPage,ntotal) {
    var pag = ""

    
    if( currentPage < 3){
        pag += '     <li class="disabled">«</li>'
        pag += (currentPage == 1) ? '<li class="active">1</li>' : '<li onclick="consultarSubjudice('+instanceId+','+1+','+ntotal+')">1</li>'
        pag += (currentPage == 2) ? '<li class="active">2</li>' : '<li onclick="consultarSubjudice('+instanceId+','+2+','+ntotal+')">2</li>'
        pag += '     <li onclick="consultarSubjudice('+instanceId+','+3+','+ntotal+')>3</li>'
        pag += '     <li onclick="consultarSubjudice('+instanceId+','+4+','+ntotal+')>4</li>'
        pag += '     <li onclick="consultarSubjudice('+instanceId+','+5+','+ntotal+')>5</li>'
        pag += '     <li onclick="realizaPaginacao('+instanceId+','+3+','+ntotal+')>»</li>'
    }else{
        var tam = (currentPage+3 >= ntotal) ? ntotal : currentPage+3
        pag += '<li onclick="realizaPaginacao('+instanceId+','+currentPage-2+','+ntotal+')>«</li>'
        for (let nPage = currentPage-1; nPage < tam; nPage++) {
            if(nPage == currentPage){
                pag += '<li class="active">'+nPage+'</li>'
            }else{
                pag += '<li onclick="consultarSubjudice('+instanceId+','+3+','+ntotal+')>3</li>'
            }
        }
        pag += (currentPage+3 >= ntotal) ? '<li class="disabled">«</li>' : '<li onclick="realizaPaginacao('+instanceId+','+currentPage+4+','+ntotal+')>»</li>'
    }
    
    document.getElementById('Paginacao'+instanceId).innerHTML = pag
}