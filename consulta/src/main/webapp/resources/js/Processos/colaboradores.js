function consultaColaboradores(instanceId) {

    
    //adicionando o head da tabela
    var header = '<tr>'
    header += '<th>NOME</th>'
    header += '<th>EMAIL</th>'
    header += '<th>DEPARTAMENTO</th>'
    header += '<th>CARGO</th>'
    header += '<th>SERVIÇOS LIBERADOS</th>'
    header += '<th>MÓDULOS PROTHEUS LIBERADOS</th>'
    header += '<th>MÓDULOS FLUIG LIBERADOS</th>'
    header += '<th>OBSERVAÇÃO</th>'
    header += '</tr>'
    document.getElementById('tableHead_'+instanceId).innerHTML = header
    var sortingFields = new Array("nomeCompleto");
    var colaboradores1 = DatasetFactory.getDataset("dsAtualizacaoColaboradores", null, null, sortingFields);
    var colabora = new Array()
    for (let index = 0; index < colaboradores1.values.length; index++){
        jaFoi = false
        chave = ''+colaboradores1.values[index].nomeCompleto+colaboradores1.values[index].emailColaborador
        for(let cont=0; cont < colabora.length; cont++){
            if(chave == colabora[cont]){
                console.log("jaFoi")
                jaFoi = true
            }
        }
        if (jaFoi == false){
            colabora.push(chave)
            console.log(chave)
            console.log(colabora.length)
            console.log(colabora[colabora.length-1])
            var constraints = new Array()
            constraints.push(DatasetFactory.createConstraint("nomeCompleto", colaboradores1.values[index].nomeCompleto, colaboradores1.values[index].nomeCompleto, ConstraintType.MUST));
            constraints.push(DatasetFactory.createConstraint("emailColaborador", colaboradores1.values[index].emailColaborador, colaboradores1.values[index].emailColaborador, ConstraintType.MUST));
            constraints.push(DatasetFactory.createConstraint("tipo", "Desligamento de colaborador", "Desligamento de colaborador", ConstraintType.MUST_NOT));
            var colaboradores2 = DatasetFactory.getDataset("dsAtualizacaoColaboradores", null, constraints, sortingFields);
            var pos = colaboradores2.values.length - 1
            console.log('nome: '+colaboradores2.values[pos]["nomeCompleto"])
            console.log('email: '+colaboradores2.values[pos]["emailColaborador"])
            console.log('setor: '+colaboradores2.values[pos]["setor"])
            console.log('nome: '+colaboradores2.values[pos]["cargo"])
            var veri = true
            while (veri){
                var constraints = new Array()
                constraints.push(DatasetFactory.createConstraint("cardDocumentId", colaboradores2.values[pos].documentid, colaboradores2.values[pos].documentid, ConstraintType.MUST));
                var workflowProcess = DatasetFactory.getDataset("workflowProcess", null, constraints, null);
                numProcess = '' + workflowProcess.values[0]["workflowProcessPK.processInstanceId"]
                console.log(numProcess)
                if(pos >= 0){
                    
                    if (workflowProcess.values[0]["status"] == 1){
                        pos -= 1
                    }else{
                        veri = false
                    }
                }else{
                    veri = false
                }
            }
            if(pos >= 0){
                if(colaboradores2.values[pos]["nomeCompleto"] != ''){
                    //definindo a parte de serviços liberadas
                    var servicos = ''
                    if(colaboradores2.values[pos]["ad"] == 'on'){
                        servicos += 'Active Directory<br>'
                    }
                    if(colaboradores2.values[pos]["Protheus"] == 'on'){
                        servicos += 'Totvs Protheus<br>'
                    }
                    if(colaboradores2.values[pos]["fluig"] == 'on'){
                        servicos += 'Totvs Fluig<br>'
                    }
                    if(colaboradores2.values[pos]["TAE"] == 'on'){
                        servicos += 'Totvs Assinatura Eletrônica<br>'
                    }
                    if(colaboradores2.values[pos]["RM"] == 'on'){
                        servicos += 'Totvs RM<br>'
                    }
                    if(colaboradores2.values[pos]["Transmite"] == 'on'){
                        servicos += 'Totvs Transmite<br>'
                    }

                    var modprotheu = ''
                    if(colaboradores2.values[pos]["compras"] == 'on'){
                        modprotheu += 'Compras<br>'
                    }
                    if(colaboradores2.values[pos]["contaPagar"] == 'on'){
                        modprotheu += 'Contas a Pagar<br>'
                    }
                    if(colaboradores2.values[pos]["Contabilidade"] == 'on'){
                        modprotheu += 'Contabilidade<br>'
                    }
                    if(colaboradores2.values[pos]["Faturamento"] == 'on'){
                        modprotheu += 'Faturamento<br>'
                    }
                    if(colaboradores2.values[pos]["AtivoFixo"] == 'on'){
                        modprotheu += 'Ativo Fixo<br>'
                    }
                    if(colaboradores2.values[pos]["EstoqueCusto"] == 'on'){
                        modprotheu += 'Estoque e Custo<br>'
                    }
                    if(colaboradores2.values[pos]["contaReceber"] == 'on'){
                        modprotheu += 'Contas a Receber<br>'
                    }
                    if(colaboradores2.values[pos]["tesouraria"] == 'on'){
                        modprotheu += 'Tesouraria<br>'
                    }
                    if(colaboradores2.values[pos]["rh"] == 'on'){
                        modprotheu += 'RH<br>'
                    }
                    if(colaboradores2.values[pos]["TAF"] == 'on'){
                        modprotheu += 'TAF<br>'
                    }
                    if(colaboradores2.values[pos]["LivrosFiscais"] == 'on'){
                        modprotheu += 'Livros Fiscais<br>'
                    }
                    if(colaboradores2.values[pos]["Configurador"] == 'on'){
                        modprotheu += 'Configurador<br>'
                    }

                    var modfluig = ''
                    if(colaboradores2.values[pos]["gedParc"] == 'on'){
                        modfluig += 'GED Parcialmente<br>'
                    }
                    if(colaboradores2.values[pos]["gedTot"] == 'on'){
                        modfluig += 'GED Totalmente<br>'
                    }
                    if(colaboradores2.values[pos]["proParc"] == 'on'){
                        modfluig += 'Processo Parcialmente<br>'
                    }
                    if(colaboradores2.values[pos]["proTot"] == 'on'){
                        modfluig += 'Processo Totalmente<br>'
                    }
                    if(colaboradores2.values[pos]["cfgParc"] == 'on'){
                        modfluig += 'Configurador Parcialmente<br>'
                    }
                    if(colaboradores2.values[pos]["cfgTot"] == 'on'){
                        modfluig += 'Configurador Totalmente<br>'
                    }

                    var body = '<tr>'
                    body += '<td>'+colaboradores2.values[pos]["nomeCompleto"]+'</td>'
                    body += '<td>'+colaboradores2.values[pos]["emailColaborador"]+'</td>'
                    body += '<td>'+colaboradores2.values[pos]["setor"]+'</td>'
                    body += '<td>'+colaboradores2.values[pos]["cargo"]+'</td>'
                    body += '<td>'+servicos+'</td>'
                    body += '<td >'+modprotheu+'</td>'
                    body += '<td >'+modfluig+'</td>'
                    body += '<td >'+colaboradores2.values[pos]["obs"]+'</td>'
                    body += '</tr>'
                    document.getElementById('tableBody_'+instanceId).innerHTML += body
                }
            }
        }
        
    }
    
           
}