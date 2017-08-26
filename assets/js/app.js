$( document ).ready( function() {

	// Nav
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

	// BUTTON CLICK SCROLLING

	$( ".scroll-to-top" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#hero" ).offset().top }, 1000 );

	});
	
	// Schedule Now
	$( ".scroll-to-schedule" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#schedule" ).offset().top }, 1000 );

	});

	// About Therapist
	$( ".scroll-to-about-therapist" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#about-therapist" ).offset().top }, 1000 );

	});

	// Benefits
	$( ".scroll-to-benefits" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#benefits" ).offset().top }, 1000 );

	});

	// Testimonials
	$( ".scroll-to-testimonials" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#testimonials" ).offset().top }, 1000 );

	});

	// Services & Rates
	$( ".scroll-to-rates" ).click( function() {
		
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