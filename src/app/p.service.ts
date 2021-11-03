import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PService {

  constructor(private myhttp:HttpClient) { }
  APIURL:string="https://api.publicapis.org/entries"
all():Observable<any[]>{
  return this.myhttp.get<any>(this.APIURL)
}
}
  /*j:{}={
    "id": "17096634-6798-45e5-af43-85445383a3e6",
    "data":"{\"main\":{\"attrs\":{\"name\":\"main\"},\"shapes\":[{\"type\":\"rect\",\"data\":{},\"attrs\":{\"stroke\":\"#000\",\"fill\":\"transparent\",\"strokeWidth\":5,\"x\":100,\"y\":43,\"draggable\":true,\"id\":\"1612092182210\",\"height\":143,\"width\":175}},{\"type\":\"circle\",\"data\":{},\"attrs\":{\"stroke\":\"#000\",\"fill\":\"transparent\",\"strokeWidth\":5,\"x\":221,\"y\":220,\"draggable\":true,\"height\":122,\"width\":230,\"id\":\"1612092185164\"}},{\"type\":\"rounded\",\"data\":{},\"attrs\":{\"stroke\":\"#000\",\"fill\":\"transparent\",\"strokeWidth\":5,\"x\":632,\"y\":70,\"draggable\":true,\"id\":\"1612092187917\",\"height\":64,\"width\":119}},{\"type\":\"straightline\",\"data\":{},\"attrs\":{\"points\":[0,0,548,109],\"stroke\":\"#000\",\"strokeWidth\":5,\"x\":957,\"y\":118,\"id\":\"1612092191880\",\"draggable\":true}},{\"type\":\"arrow\",\"data\":{},\"attrs\":{\"stroke\":\"#000\",\"fill\":\"#f032e6\",\"strokeWidth\":5,\"x\":681,\"y\":300,\"draggable\":true,\"height\":302,\"width\":431,\"id\":\"1612092194936\"}},{\"type\":\"star\",\"data\":{},\"attrs\":{\"stroke\":\"#000\",\"fill\":\"transparent\",\"strokeWidth\":5,\"x\":1464,\"y\":395,\"draggable\":true,\"id\":\"1612092201367\",\"height\":127,\"width\":164}},{\"type\":\"image\",\"data\":{},\"attrs\":{\"x\":107.77072453410415,\"y\":546.0955355496706,\"image\":\"http://localhost:3000/api/v1/reports/653c3bfd-63b6-11eb-a710-34415dab68b3//repository/d9c6bebc-63b6-11eb-a710-34415dab68b3/media/image\",\"draggable\":true,\"originalId\":\"d9c6bebc-63b6-11eb-a710-34415dab68b3\",\"id\":\"e053b5a2-82da-4e76-acc6-b9e0e3a7f4c7\",\"name\":\"Report snapshot\",\"width\":208,\"height\":109.18122743682311,\"scaleX\":2.678986901278345,\"scaleY\":2.678986901278345}},{\"type\":\"image\",\"data\":{},\"attrs\":{\"x\":1081,\"y\":756.01731620465,\"image\":\"http://localhost:3000/api/v1/reports/653c3bfd-63b6-11eb-a710-34415dab68b3//repository/d004a617-63b6-11eb-a710-34415dab68b3/media/image\",\"draggable\":true,\"originalId\":\"d004a617-63b6-11eb-a710-34415dab68b3\",\"id\":\"1b569026-f0cb-41cb-8977-363a82bae1fe\",\"name\":\"Report snapshot\",\"width\":208,\"height\":106.62815884476534,\"scaleX\":1.5877303430157095,\"scaleY\":1.5877303430157095}}]}}","name":null}
  }*/

