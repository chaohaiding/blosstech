/**
* Connection class for blosstech
* This class is used to contruct the connection between BLE devices and front-end darshboard.
*/

export default class Connection {
  /**
  *constructor
  */
  constructor(url) {
    this.url = url;
    this.port = 7379;

  }

  send(data) {

  }


  /**
  * getECG()
  * @description: targetECG BLE devies sends back 6 Byte data in 60ms with one notification. collect 15*60ms=900 ms
  * @param:
  * @return:
  */


  getECG() {
    //Using LRANGE to fetch the realtime heart rate data
    const url=this.url+":"+this.port+"/LRANGE/ecg/0/-1";




    fetch(url).then(data=>{
      return data.json();
    }).then(res=>{
      console.log(res);
    })
    .catch(error=>{
      console.log(error);
    });
  }



  /**
   *getTemp()
   */
  getTemp(){
    //Using LRANGE to fetch the realtime heart rate data
    const url=this.url+":"+this.port+"/LRANGE/temp/0/-1";
    fetch(url).then(data=>{
      return data.json();
    }).then(res=>{console.log(res);})
    .catch(error=>{console.log(error);});
  }


  /**
  *delete displayed data
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
