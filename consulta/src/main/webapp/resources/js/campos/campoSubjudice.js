function campoSubjudice(instanceId) {
    var html = ''
    html += '<div class="row form-group" >'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label" for="codde_'+instanceId+'">Codigo do cliente de:</label>'
    html += '        <input class="form-control" type="text" name="codde_'+instanceId+'" id="codde_'+instanceId+'">'
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label" for="codate_'+instanceId+'">Codigo do cliente até:</label>'
    html += '        <input class="form-control" type="text" name="codate_'+instanceId+'" id="codate_'+instanceId+'" >'
    html += '    </div>'
    html += '    <div class="col-md-4">'
    html += '        <label class="control-label" for="nomeCliente_'+instanceId+'">Nome do cliente:</label>'
    html += '        <input class="form-control" type="text" name="nomeCliente_'+instanceId+'" id="nomeCliente_'+instanceId+'" >'
    html += '    </div>'
    html += '    <div class="col-md-4">'
    html += '        <label class="control-label" for="cidade_'+instanceId+'">Cidade:</label>'
    html += '        <input class="form-control" type="text" name="cidade_'+instanceId+'" id="cidade_'+instanceId+'" >'
    html += '    </div>'
    html += '</div>'
    html += '<div class="row form-group" >'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label" for="codfil_'+instanceId+'">Codigo da filial:</label>'
    html += '        <input class="form-control" type="text" name="codfil_'+instanceId+'" id="codfil_'+instanceId+'">'
    html += '    </div>'
    html += '    <div class="col-md-5">'
    html += '        <label class="control-label" for="emprendimento_'+instanceId+'">Empreendimento:</label>'
    html += '        <input class="form-control" type="text" name="emprendimento_'+instanceId+'" id="emprendimento_'+instanceId+'">'
    html += '    </div>'
    html += '    <div class="col-md-1">'
    html += '        <label class="control-label" for="lote_'+instanceId+'">Lote:</label>'
    html += '        <input class="form-control" type="text" name="lote_'+instanceId+'" id="lote_'+instanceId+'" >'
    html += '    </div>'
    html += '    <div class="col-md-1">'
    html += '        <label class="control-label" for="quadra_'+instanceId+'">Quadra:</label>'
    html += '        <input class="form-control" type="text" name="quadra_'+instanceId+'" id="quadra_'+instanceId+'" >'
    html += '    </div>'
    html += '    <div class="col-md-3">'
    html += '        <label class="control-label" for="vara_'+instanceId+'">Vara do Processo:</label>'
    html += '        <select class="form-control" name="vara_'+instanceId+'" id="vara_'+instanceId+'" >'
    html += '               <option value="">Selecione uma Vara</option>'
	html += '				<option value="1° Vara">1° Vara</option>'
	html += '				<option value="2° Vara">2° Vara</option>'
	html += '				<option value="3° Vara">3° Vara</option>'
	html += '				<option value="4° Vara">4° Vara</option>'
	html += '				<option value="5° Vara">5° Vara</option>'
	html += '				<option value="6° Vara">6° Vara</option>'
	html += '				<option value="7° Vara">7° Vara</option>'
	html += '				<option value="8° Vara">8° Vara</option>'
	html += '				<option value="9° Vara">9° Vara</option>'
	html += '				<option value="10° Vara">10° Vara</option>'
	html += '				<option value="11° Vara">11° Vara</option>'
	html += '				<option value="12° Vara">12° Vara</option>'
	html += '				<option value="13° Vara">13° Vara</option>'
	html += '				<option value="14° Vara">14° Vara</option>'
	html += '				<option value="15° Vara">15° Vara</option>'
	html += '				<option value="16° Vara">16° Vara</option>'
	html += '				<option value="17° Vara">17° Vara</option>'
	html += '				<option value="18° Vara">18° Vara</option>'
	html += '				<option value="19° Vara">19° Vara</option>'
	html += '				<option value="20° Vara">20° Vara</option>'
	html += '				<option value="21° Vara">21° Vara</option>'
	html += '				<option value="22° Vara">22° Vara</option>'
	html += '				<option value="23° Vara">23° Vara</option>'
	html += '				<option value="24° Vara">24° Vara</option>'
	html += '				<option value="25° Vara">25° Vara</option>'
	html += '				<option value="26° Vara">26° Vara</option>'
	html += '				<option value="27° Vara">27° Vara</option>'
	html += '				<option value="28° Vara">28° Vara</option>'
	html += '				<option value="29° Vara">29° Vara</option>'
	html += '				<option value="30° Vara">30° Vara</option>'
	html += '				<option value="31° Vara">31° Vara</option>'
	html += '				<option value="32° Vara">32° Vara</option>'
	html += '				<option value="33° Vara">33° Vara</option>'
	html += '				<option value="34° Vara">34° Vara</option>'
	html += '				<option value="35° Vara">35° Vara</option>'
	html += '				<option value="36° Vara">36° Vara</option>'
	html += '				<option value="37° Vara">37° Vara</option>'
	html += '				<option value="38° Vara">38° Vara</option>'
	html += '				<option value="39° Vara">39° Vara</option>'
	html += '				<option value="40° Vara">40° Vara</option>'
	html += '				<option value="41° Vara">41° Vara</option>'
	html += '				<option value="42° Vara">42° Vara</option>'
	html += '				<option value="43° Vara">43° Vara</option>'
	html += '				<option value="44° Vara">44° Vara</option>'
	html += '				<option value="45° Vara">45° Vara</option>'
	html += '				<option value="46° Vara">46° Vara</option>'
	html += '				<option value="47° Vara">47° Vara</option>'
	html += '				<option value="48° Vara">48° Vara</option>'
	html += '				<option value="49° Vara">49° Vara</option>'
	html += '				<option value="50° Vara">50° Vara</option>'
	html += '				<option value="51° Vara">51° Vara</option>'
	html += '				<option value="52° Vara">52° Vara</option>'
	html += '				<option value="53° Vara">53° Vara</option>'
	html += '				<option value="54° Vara">54° Vara</option>'
	html += '				<option value="55° Vara">55° Vara</option>'
	html += '				<option value="56° Vara">56° Vara</option>'
	html += '				<option value="57° Vara">57° Vara</option>'
	html += '				<option value="58° Vara">58° Vara</option>'
	html += '				<option value="59° Vara">59° Vara</option>'
	html += '				<option value="60° Vara">60° Vara</option>'
    html += '        </select>'
    html += '    </div>'
    html += '</div>'
    html += '<div class="row form-group">'
    html += '     <div class="col-md-2">'
    html += '         <label class="control-label">Status:</label><br>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="Aberto_'+instanceId+'" name="Aberto_'+instanceId+'" checked>'
    html += '             <label for="Aberto_'+instanceId+'">Aberto</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="Finalizado_'+instanceId+'" name="Finalizado_'+instanceId+'" checked>'
    html += '             <label for="Finalizado_'+instanceId+'">Finalizado</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="Cancelado_'+instanceId+'" name="Cancelado_'+instanceId+'" checked>'
    html += '             <label for="Cancelado_'+instanceId+'">Cancelado</label>'
    html += '         </div>'
    html += '     </div>'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label">Contrato Registrado</label><br>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="ContratoSim_'+instanceId+'" name="ContratoSim_'+instanceId+'" checked>'
    html += '             <label for="ContratoSim_'+instanceId+'">Sim</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="ContratoNao_'+instanceId+'" name="ContratoNao_'+instanceId+'" checked>'
    html += '             <label for="ContratoNao_'+instanceId+'">Não</label>'
    html += '         </div>'                                                                
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label">Possui construção</label><br>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="ConstrucaoSim_'+instanceId+'" name="ConstrucaoSim_'+instanceId+'" checked>'
    html += '             <label for="ConstrucaoSim_'+instanceId+'">Sim</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="ConstrucaoNao_'+instanceId+'" name="ConstrucaoNao_'+instanceId+'" checked>'
    html += '             <label for="ConstrucaoNao_'+instanceId+'">Não</label>'
    html += '         </div>'                                                                
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label">1° Instância</label><br>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="1InstFav_'+instanceId+'" name="1InstFav_'+instanceId+'" checked>'
    html += '             <label for="1InstFav_'+instanceId+'">Favorável</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="1InstDesFav_'+instanceId+'" name="1InstDesFav_'+instanceId+'" checked>'
    html += '             <label for="1InstDesFav_'+instanceId+'">Desfavorável</label>'
    html += '         </div>'                                                                
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label">2° Instancia</label><br>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="2InstFav_'+instanceId+'" name="2InstFav_'+instanceId+'" checked>'
    html += '             <label for="2InstFav_'+instanceId+'">Favorável</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="2InstDesFav_'+instanceId+'" name="2InstDesFav_'+instanceId+'" checked>'
    html += '             <label for="2InstDesFav_'+instanceId+'">Desfavorável</label>'
    html += '         </div>'                                                                
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '        <label class="control-label">Tribunal Superior</label><br>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="SupInstFav_'+instanceId+'" name="SupInstFav_'+instanceId+'" checked>'
    html += '             <label for="SupInstFav_'+instanceId+'">Favorável</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="SupInstDesFav_'+instanceId+'" name="SupInstDesFav_'+instanceId+'" checked>'
    html += '             <label for="SupInstDesFav_'+instanceId+'">Desfavorável</label>'
    html += '         </div>'                                                                
    html += '    </div>'
    html += ' </div>'
    html += '<div class="row form-group">'
    html += '     <div class="col-md-2">'
    html += '         <br>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="Reu'+instanceId+'" name="Reu'+instanceId+'" checked>'
    html += '             <label for="Reu'+instanceId+'">Reu</label>'
    html += '         </div>'
    html += '         <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '             <input type="checkbox" id="Autor'+instanceId+'" name="Autor'+instanceId+'" checked>'
    html += '             <label for="Autor'+instanceId+'">Autor</label>'
    html += '         </div>' 
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '       <label class="control-label">Advogado Responsável</label><br>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="Vitor'+instanceId+'" name="Vitor'+instanceId+'" checked>'
    html += '            <label for="Vitor'+instanceId+'">Vitor</label>'
    html += '        </div>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="Vidal'+instanceId+'" name="Vidal'+instanceId+'" checked>'
    html += '            <label for="Vidal'+instanceId+'">Vidal</label>'
    html += '        </div>' 
    html += '    </div>' 
    html += '    <div class="col-md-2">'
    html += '       <label class="control-label">Categoria</label><br>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="catA'+instanceId+'" name="catA'+instanceId+'" checked>'
    html += '            <label for="catA'+instanceId+'">Categoria A</label>'
    html += '        </div>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="catB'+instanceId+'" name="catB'+instanceId+'" checked>'
    html += '            <label for="catB'+instanceId+'">Categoria B</label>'
    html += '        </div>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="catC'+instanceId+'" name="catC'+instanceId+'" checked>'
    html += '            <label for="catC'+instanceId+'">Categoria C</label>'
    html += '        </div>'
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '       <label class="control-label">Tese</label><br>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="teseA'+instanceId+'" name="teseA'+instanceId+'" checked>'
    html += '            <label for="teseA'+instanceId+'">Tese A</label>'
    html += '        </div>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="teseB'+instanceId+'" name="teseB'+instanceId+'" checked>'
    html += '            <label for="teseB'+instanceId+'">Tese B</label>'
    html += '        </div>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="teseC'+instanceId+'" name="teseC'+instanceId+'" checked>'
    html += '            <label for="teseC'+instanceId+'">Tese C</label>'
    html += '        </div>'
    html += '    </div>'
    html += '    <div class="col-md-2">'
    html += '       <label class="control-label">Impacto</label><br>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="SPE'+instanceId+'" name="SPE'+instanceId+'" checked>'
    html += '            <label for="SPE'+instanceId+'">SPE</label>'
    html += '        </div>'
    html += '        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">'
    html += '            <input type="checkbox" id="Holding'+instanceId+'" name="Holding'+instanceId+'" checked>'
    html += '            <label for="Holding'+instanceId+'">Holding</label>'
    html += '        </div>'
    html += '    </div>'
    html += ' </div>'
    document.getElementById('camposConsulta').innerHTML += html
}