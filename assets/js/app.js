$( document ).ready( function() {

	// Mobile Nav
	$( ".js-nav-icon" ).click( function() {
		
		var nav = $( ".js-main-nav" );
		var icon = $( ".js-nav-icon i" );

		// Open and close the box:
		nav.slideToggle( 200 );

		if ( icon.hasClass( "ion-navicon-round" )) {
			icon.addClass( "ion-close-round" );
			icon.removeClass( "ion-navicon-round" );
		} else {
			icon.addClass( "ion-navicon-round" );
			icon.removeClass( "ion-close-round" );
		}
		
	});




					// <li><a href="#" class="scroll-to-about-therapist">About the Therapist</a></li>
					// <li><a href="#" class="scroll-to-benefits">Benefits of Massage</a></li>
					// <li><a href="#" class="scroll-to-testimonials">Testimonials</a></li>
					// <li><a href="#" class="scroll-to-rates">Services&nbsp;&amp;&nbsp;Rates</a></li>

	// BUTTON CLICK SCROLLING
	
	// I'm Hungry & Plans buttons:
	$( ".scroll-to-schedule" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( "#schedule" ).offset().top }, 1000 );
	});

	// Show Me More & Features buttons:
	$( ".scroll-to-about-therapist" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( "#about-therapist" ).offset().top }, 1000 );
	});

	// Works button:
	$( ".scroll-to-benefits" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( "#benefits" ).offset().top }, 1000 );
	});

	// Cities button:
	$( ".scroll-to-testimonials" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( "#testimonials" ).offset().top }, 1000 );
	});

	// Cities button:
	$( ".scroll-to-rates" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( "#rates" ).offset().top }, 1000 );
	});

















	// Waypoints for project testimonials:
	$( ".js--t1" ).waypoint( function( direction ) {
			$( ".js--t1" ).addClass( "fadeIn" );
		}, {
			offset: "75%"
		});

	$( ".js--t2" ).waypoint( function( direction ) {
			$( ".js--t2" ).addClass( "fadeIn" );
		}, {
			offset: "75%"
		});

	$( ".js--t3" ).waypoint( function( direction ) {
			$( ".js--t3" ).addClass( "fadeIn" );
		}, {
			offset: "75%"
		});

} );