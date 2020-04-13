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

	$('#$gridName tbody').on( 'click', '.select-checkbox', function () {
		var $row=$(this).closest('tr');
	    if ( $row.hasClass('selected') ) {
	    	$row.removeClass('selected');
	    }
	    else {
	        table.$('tr.selected').removeClass('selected');
	        $row.addClass('selected');
	        var myocc = table.row( this ).data().DT_RowId;	    	
	    }
	} );
}

