class nasaAPI {

    //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

    constructor() {
        this.API_KEY = "jreP4FHvZSF5ulpnCdTjrP3MVHLPgWIZg47IalIt";
        this.ROVER = "https://api.nasa.gov/mars-photos/api/v1/rovers/{ROVERS}/photos?sol=100&camera={CAMERA}&api_key={API_KEY}";
        this.URL_EARTH_DATE = "{ROVER}earth_date={DATE}&api_key={API_KEY}";
    }

    chooseRover(rover, camera) {
        let promise = new Promise((resolve, reject) => {
                let url = this.ROVER;

                url = url.replace('{ROVERS}', rover)
                    .replace('{CAMERA}', camera)
                    .replace('{API_KEY}', this.API_KEY);

                let req = new XMLHttpRequest();

                req.onreadystatechange = function (event) {

                    if(this.readyState === XMLHttpRequest.DONE) {
                        if(this.status === 200) {
                            var result = JSON.parse(this.responseText);

                            if (result) {
                                console.log(result);
                                resolve(result);
                            } else {
                                reject("pas de resultat");
                            }

                        } else {
                            reject("Status de la réponse : %d (%s)", this.status, this.statusText);
                        }
                    }
                };

                req.open('GET', url, true);
                req.send(null);
            });

        // noinspection JSAnnotator
    return promise;
    }
}