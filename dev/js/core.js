(function () {
	var bars = [];

	function MyProgressBar( element ) {
		if ( !(element instanceof HTMLElement) ) {
			throw new Error( "element should be HTMLElement" );
		}
		this._element = element;
		this._line = this._element.querySelector( ".line" );

		if ( !this._line ) {
			this._line = document.createElement( 'div' );
			this._line.classList.add( 'line' );
			this._element.appendChild( this._line );
		}

		if ( element.hasAttribute( "data-to" ) ) {
			this.setValue( element.getAttribute( "data-to" ) );
		} else {
			this.setValue( 0 );
		}
	}

	MyProgressBar.prototype.setValue = function ( value ) {
		value = parseInt( value, 10 );
		if ( value > 100 || value < 0 ) {
			throw new Error( "value unexpected value" );
		}
		setTimeout( function () {
			this._line.style.width = value + "%";
		}.bind( this ) );
	};

	if ( !window.MyProgressBar ) {
		window.MyProgressBar = MyProgressBar
	}

	if ( !window.progressBarsInstance ) {
		window.progressBarsInstance = bars;
	}

	document.addEventListener( "DOMContentLoaded", function () {
		var elements = document.querySelectorAll( ".my-bar" );

		for (var i = 0; i < elements.length; i++ ) {
			bars.push( new MyProgressBar( elements[i] ) );
		}
	});
})();
