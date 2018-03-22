"use strict";

var camera;
var rover;

function selectRover() {
    rover = document.getElementById('rover').value;

    switch (rover) {
        case 'curiosity':
            document.getElementById('cameraSpiritOppor').style.display = 'none';
            document.getElementById('cameraCuriosity').style.display = 'block';
            break;

        case 'spirit':
            document.getElementById('cameraCuriosity').style.display = 'none';
            document.getElementById('cameraSpiritOppor').style.display = 'block';
            break;

        case 'opportunity':
            document.getElementById('cameraCuriosity').style.display = 'none';
            document.getElementById('cameraSpiritOppor').style.display = 'block';
            break;

        default:
            break;
    }
}

function validCam() {
    const cam = document.getElementsByName('cam');
    for(var i = 0; i < cam.length; i++) {
        if(cam[i].checked) {
            camera = cam[i].value;
        }
    }
}

function validDatas() {
    const datasRovers = new roverSearch();
    datasRovers.search(rover, camera);
}
