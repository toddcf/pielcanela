$( document ).ready( function() {

	// FOOTER

	// Pass current year into footer copyright:
	var thisYear = new Date().getFullYear();

	if ( thisYear > 2012 ) {
		// Footer (IIFE):
		var footerInfo = ( function() {
			$( ".currentYear" ).html( " &ndash; " + thisYear + "&nbsp;" );
		}) ();
	}

} );