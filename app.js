$(document).ready(() => {
	let $input = $("#link-input");
	let $button = $("#link-button");

	$button.on("click", () => {
		let a = document.createElement("A");
		a.download = "FahrradRoute.gpx";
		if ($input.val() && $input.val().split(".")[$input.val().split(".").length-1] === "gpx") {
			console.log("Input fits");
			a.href = "http://sk-cdn.net/websites/rad.luca.lk/api.php?url="+$input.val();
			a.download = true;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			delete a;
		} 
	});
});
