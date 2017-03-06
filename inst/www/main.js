
ocpu.seturl("http://192.168.88.128/ocpu/library/stats/R")
$(document).ready(function(){
	$("#norm-btn").click(function(){
		var req = ocpu.call(
			"rnorm", 
			{n: 100},
			function(session){
				$("#key").text(session.getKey());
				$("#location").text(session.getLoc());

				session.getConsole(function(output){
					$("#output").text(output);
				});

				session.getObject(function(data){
					console.log('Array of length' + data.length + ".\nFirst few values: " + data.slice(0, 10));
				});
			});
	});
	
});
