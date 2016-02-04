var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    						var isFull = state ? 'FullscreenOn' : 'FullscreenOff';

    						// Now do something interesting
    						console.log('Event: ' + isFull);   	

							

							plays[currentVideo].style.display = "none";

							currentVideo++;

							
							plays[currentVideo].style.display = "block";
							plays[currentVideo].play();	

							if(isFull == 'FullscreenOn' ){
								console.log('esta full e o proximo sera' + currentVideo);
								var videoantigo = currentVideo-1;
								if ($("video")[videoantigo].exitFullscreen) {
									$("video")[videoantigo].exitFullscreen();
								} else if ($("video")[videoantigo].mozExitFullScreen) {
									$("video")[videoantigo].mozExitFullScreen(); // Firefox
								} else if ($("video")[videoantigo].webkitExitFullscreen) {
									$("video")[videoantigo].webkitExitFullscreen(); // Chrome and Safari
								}

								if ($("video")[currentVideo].requestFullscreen) {
									$("video")[currentVideo].requestFullscreen();
								} else if ($("video")[currentVideo].mozRequestFullScreen) {
									$("video")[currentVideo].mozRequestFullScreen(); // Firefox
								} else if ($("video")[currentVideo].webkitRequestFullscreen) {
									$("video")[currentVideo].webkitRequestFullscreen(); // Chrome and Safari
								}

								$("video")[currentVideo].requestFullscreen;
							}