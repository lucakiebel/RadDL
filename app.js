$(document).ready(() => {
	let $input = $("#link-input");
	let $button = $("#link-button");

	$button.on("click", () => {
		let a = document.createElement("A");
		a.download = "FahrradRoute.gpx";
		if ($input.val() && $input.val().split(".")[$input.val().split(".").length-1] === "gpx") {
			console.log("Input fits");
			$.get($input.val(), data => {
				console.log(data);
				a.href = $input.val();
				console.log("Input Value: ", $input.val());
				document.body.appendChild(a);
				//a.click();
			});
			
		} 
	});
});
