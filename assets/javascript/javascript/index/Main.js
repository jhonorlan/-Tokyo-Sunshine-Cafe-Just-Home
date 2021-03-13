const NAVBAR = $("NAV");
const LINK = NAVBAR.find("#nav-links");
const LINKS = NAVBAR.find("#nav-links #nav-link");

const HAMBURGER = $("#hamburger-parent #hamburger");

function adjust() {
	if (innerWidth >= 1000) {
		LINK.css("visibility", "visible");
	}
}

$(window).on("resize", adjust);

HAMBURGER.on("click", function () {
	let vis = LINK.css("visibility");
	LINK.css("visibility", vis == "visible" ? "hidden" : "visible");
});
