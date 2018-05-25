$(document).ready(() => {
	let $input = $("#link-input");
	let $button = $("#link-button");

	$button.on("click", () => {
		let a = document.createElement("A");
		a.download = true;
		if ($input.val() && $input.val().substring($input.val().length-4, $input.val()-1).toLowerCase() === "gpx") {
			console.log("Input fits");
			a.src = $input.val();
			console.log("Input Value: ", $input.val());
			a.click();
		} 
	});
});
