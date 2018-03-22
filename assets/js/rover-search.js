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
    console.log(result);
    }
}