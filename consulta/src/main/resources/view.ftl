<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h2>Consulta de Processo</h2>
		</div>
	    <div class="panel-body" >
	    	<div class="row form-group"><!--Definido a div da linha da pergunda-->
				<div class="col-md-4">
					<label class="control-label" for="dataset_${instanceId}">Processo:</label>
					<select name="dataset_${instanceId}" id="dataset_${instanceId}" class="form-control" onchange="camposForm('${instanceId}',this)">
						<option value="">Selecione o processo</option>
						<option value="dsProcessoSubjudice">Subjudice</option>
						<option value="dsContratoCartorio">Registro de Contrato no Cartorio</option>
						<option value="dsContratoAnalise">Tratativa de Contrato Registrado</option>
						<option value="dsContratacao">Cadastro de novos talentos</option>
						<option value="dsContrato">Contrato De Prestação De Serviço</option>
						<option value="dsColaboradores">Colaboradores</option>
					</select>
				</div>
			</div>
		
			<div id="camposConsulta" >
			</div>
			
			<div class="row form-group" >
				<div class="col-md-1">
					<button type="button" class="btn btn-info" data-chamarConsulta>Consultar</button>
				</div>
				<div class="col-md-2">
					<button type="button" class="btn btn-success" data-chamarExcel>Exportar Excel</button>
				</div>
			</div>
		</div>
		
		<div class="panel-body" >
			<div class="row form-group" >
				<div id="divInformativa_${instanceId}"></div>
			</div>
	    </div>
		
	    <div class="panel-footer">
	    	<div id="divLoad" style="display: none;">
				<span class="loading"></span>
				<p>Carregando o dataset</p>
			</div>
			<div class="row form-group"><!--Definido a div da linha da pergunda-->
				<table class="table table-hover">
					<thead id="tableHead_${instanceId}">
					</thead>
					<tbody id="tableBody_${instanceId}">
					</tbody>
					
				</table>
				
			</div>
	    </div>
		<ul class="pagination" id="Paginacao${instanceId}">
			
		</ul>
	</div>
</div>

<!-- Link de referêcia a biblioteca vcXMLRPC que permite manipular os objetos de dataset diretamente no front  -->
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>
