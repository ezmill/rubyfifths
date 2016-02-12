/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

 Detector = {

 	canvas : !! window.CanvasRenderingContext2D,
 	webgl : ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
 	workers : !! window.Worker,
 	fileapi : window.File && window.FileReader && window.FileList && window.Blob,

 	getWebGLErrorMessage : function () {

 		var domElement = document.getElementById( 'container' );

		// domElement.style.border = "solid 0px #f00";
		// domElement.style.color = '#eee';
		// domElement.style.width = '100%';
		// domElement.style.height = ( height - 61 ) + 'px';
		// domElement.style.position = 'absolute';
		// domElement.style.top = '0px';
		// domElement.style.left = '0px';
		// domElement.style.margin = '0';
		// domElement.style.padding = '0 0 -61px 0';
		// domElement.style.display = 'block';
		// domElement.style.background = "url('img/mixtapenogl.jpg') no-repeat center";
		// domElement.style.backgroundSize = 'auto 100%';

		// var textElement = document.createElement( 'div' );
		// textElement.style.fontFamily = 'Avenir, Helvetica, Arial, sans-serif';
		// textElement.style.fontWeight = 'bold';
		// textElement.style.fontSize = '9px';
		// textElement.style.textAlign = 'center';
		// textElement.style.lineHeight = '1.5em';
		// textElement.style.background = '#000';
		// textElement.style.opacity = "0.75" ;
		// textElement.style.padding = '1em';
		// textElement.style.margin = '0 auto 0';
		// textElement.style.marginTop = marginTop + 4 + 'em';
		// textElement.style.width = width + '%';
		// textElement.style.border = "solid 3px #fff";

 		// domElement.style.fontFamily = 'monospace';
 		// domElement.style.font = 'bold 9px Avenir';
 		// domElement.style.textAlign = 'center';
 		// domElement.style.background = '#000' ;
 		// domElement.style.opacity = "0.75" ;
 		// domElement.style.border = "solid #eee";
 		// domElement.style.color = '#eee';
 		// domElement.style.display = 'block';
 		// domElement.style.padding = '1em';
 		// domElement.style.width = '100%';
 		// domElement.style.height = '100';
 		// domElement.style.margin = '100%';
 		// document.getElementById("loading").style.display = "none";
 		// document.getElementById("yo").style.display = "none";




 		document.body.style.background = "url(img/rubydetect2.jpg) no-repeat center center fixed";
 		document.body.style.backgroundSize = 'cover';
        document.body.style.webkitBackgroundSize = 'cover';
        document.body.style.mozBackgroundSize = 'cover';
        document.body.style.oBackgroundSize = 'cover';
        // document.body.style.backgroundPosition = "50% 10%";
 		// document.getElementById("extra").style.display = "none"; 

 
		if ( ! this.webgl ) {

			
			// domElement.innerHTML = window.WebGLRenderingContext ? [
			// 	'<b>THIS VISUAL REQUIRES WEBGL</b><br/><br/>',
			// 'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" target="_top">WebGL</a>.<br/>',
			// 'Find out how to get WebGL working <a href="http://get.webgl.org/" target="_top">here</a> or try visiting with a different browser or computer.'
			// ]
			
			
			// .join( '\n' ) : [
			// 	'THIS VISUAL REQUIRES WEBGL<br />',
			// 	'TRY LOADING WITH GOOGLE CHROME ON YOUR LAPTOP OR DESKTOP'
			// ]
			
			// .join( '\n' );

		}

		return domElement;

	},

	addGetWebGLMessage : function ( parameters ) {

		var parent, id, domElement;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		domElement = Detector.getWebGLErrorMessage();
		domElement.id = id;

		parent.appendChild( domElement );

	}

};
