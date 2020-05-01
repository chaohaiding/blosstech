/**
*Connection class for blosstech
*/

export default class Connection {
  /**
  *constructor
  */
  constructor(url) {
    this.url = url;
    this.port=7379;
  }

  send(data) {

  }

  /**
  *getECG//1 tick/second
  */
  getECG() {
    //Using LRANGE to fetch the realtime heart rate data
    const url=this.url+":"+this.port+"/LRANGE/ecg/0/-1";
    fetch(url).then(data=>{
      return data.json();
    }).then(res=>{console.log(res);})
    .catch(error=>{console.log(error);});
  }

  /**
  *
  */

  trimECGData(){
    //LTRIM
    const url=this.url+":"+this.port+"/LTRIM/ecg/0/-1";
    fetch(url).then(data=>{
      return data.json();
    }).then(res=>{console.log(res);})
    .catch(error=>{console.log(error);});
  }


  /**
  * get monitor data with 1 tick/30 mins
  */
  getHearRate() {
    //Using LRANGE to fetch the realtime heart rate data
    const url=this.url+":"+this.port+"/LRANGE/md/0/-1";
    fetch(url).then(data=>{
      return data.json();
    }).then(res=>{console.log(res);})
    .catch(error=>{console.log(error);});
  }
}


//connection = new Connection("127.0.0.1");
