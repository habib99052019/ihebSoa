import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { SeoService } from './services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ihebProgectSOA';
  message:any
  constructor(private  messagingService:MessagingService ,private http:HttpClient, private  seo:SeoService ,private meta:Meta){

  }
  ngOnInit() {
    this.meta.addTags([
      {
        name: 'keywords',
        content:'estate dubai ,real estate, vila dubai, real estate developers dubai, azizi,عقارات  دبي,منازل  في دبي, ابراج دبي' // Keywords
    
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Pick your Property with heartofcarthage and enjoy with our best offer   Find your Perfect Property in dubai with us.  Luxuary Properties, Wonderful Views , the comfortable life in waiting for you ' },
      
    ]);
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  //   const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':"czEAEx7YWFnCC8Ei3wBBdv:APA91bEOyuQ0J4h2oD_OM2n292PsNI4bZX4pe1C2wTpg0ExGiecP3j"});
  //  var noti=  {notification: {
  //   title: "Hey there", 
  //   body: "Subscribe to mighty ghost hack youtube channel"
  //  },
  //  to : "uFvjswjLphkOzCEO0OcgM7yQGmzCZ7pKaFZ3iBhGJH4IxDlw9VIagvCVqFtFJ1a1esQqkKJG4jBtI58foa7CnB"
  // }
    // const requestOptions = { headers: headers };
    // this.http
    //     .post('https://fcm.googleapis.com/fcm/send/',noti, requestOptions )
    //     .subscribe(res => {
    //       console.log(res);
    //     });  
   ;  

 
}
  
}
