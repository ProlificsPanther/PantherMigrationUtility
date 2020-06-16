$(document).ready(function() {
	_buildGrid();
	
});

var _buildGrid = function() {
	// create the data array
	var dataSet = [];
	var i = 1;
	$varDeclar

	while (true) {
		$varAssign
		$dataAssign
		var row = i;
		var jsonObj = {"0":"","1":"",$json"DT_RowId": row };
		i++;
		dataSet.push(jsonObj);
	}

	$('#$gridName').DataTable({
		data : dataSet,
		columns : [ 
			{ "orderable": false},
			{ "orderable": false ,className:'select-checkbox'},
			$colTitle
		],
		select:{
			style:'os',
			selector:'td:second-child'
		},
		"order" : [2,'asc']
	});
	var table = $('#$gridName').DataTable();
	
	//Make an on click for the row
	$('#$gridName').on( 'click', 'tr', function (){
		var row_id= table.row( this ).id(); 		//Get the row ID
		var row_value = table.row( this ).data(); 	//Get the row value
	});
}
