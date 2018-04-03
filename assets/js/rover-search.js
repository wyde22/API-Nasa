class roverSearch {

    constructor() {
        this.nasaAPI = new nasaAPI();
    }

    search(rover, camera) {
        this.nasaAPI.chooseRover(rover,camera)
            .then(result => {
                this.buildDomRovers(result)
            })
            .catch(error => {
            console.error("error !", error);
        });
    }

    buildDomRovers(result) {
        let photosRovers = document.getElementById('photosRovers');
        let dashboard = document.getElementById('dashboard');

        dashboard.className = "pure-u-1";
        photosRovers.className = "pure-u-1";

        let wrapInfos = document.createElement('div');
        let wrapInfosCamera = document.createElement('div');
        let infosRovers = document.createElement('span');
        let infosStatus = document.createElement('span');
        let infosLaunch = document.createElement('span');
        let infosCam = document.createElement('span');
        let infosLanding = document.createElement('span');

        let roverName = result.photos[0].rover.name;
        let roverStatus = result.photos[0].rover.status;
        let roverLaunch = result.photos[0].rover.launch_date;
        let roverLanding = result.photos[0].rover.landing_date;
        let camName = result.photos[0].camera.full_name;


        infosRovers.innerHTML = roverName;
        infosStatus.innerHTML = roverStatus;
        infosLaunch.innerHTML = roverLaunch;
        infosCam.innerHTML = camName;
        infosLanding.innerHTML = roverLanding;

        photosRovers.innerHTML = "";
        dashboard.innerHTML = "";

        wrapInfos.className = "dashboardRover l-box-lrg pure-u-1 pure-u-md-1-2";
        wrapInfosCamera.className = "dashboardCamera l-box-lrg pure-u-1 pure-u-md-1-2";

        dashboard.appendChild(wrapInfos);
        dashboard.appendChild(wrapInfosCamera);

        wrapInfosCamera.appendChild(infosCam);

        wrapInfos.appendChild(infosRovers);
        wrapInfos.appendChild(infosStatus);
        wrapInfos.appendChild(infosLaunch);
        wrapInfos.appendChild(infosLanding);

        if(photosRovers && result) {
            let datasPhotos = result.photos;

            for(let i = 0; i < datasPhotos.length; i++) {
                let photoRover = datasPhotos[i];

                console.log(photoRover);

                let div = document.createElement('div');
				div.className = "item-photos l-box pure-u-md-1-2 pure-u-lg-1-4";
                let img = document.createElement('img');
                img.className = "pure-img";



                photosRovers.appendChild(div);
				img.src = photoRover.img_src;
                div.appendChild(img);
            }
        }
    }
}