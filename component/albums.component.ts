import { Component, OnInit} from '@angular/core';
import { myservices } from '../services/myservices';

@Component({
    selector : 'app-albums',
    templateUrl: './albums.component.html'
    
    
})

export class albums{
    data:any;
    data1:any;
    data2:any;
constructor(private psrv: myservices){
   
}
Fetchdata(){
    this.psrv.getalbumsdetails().subscribe(res => {
            this.data = res;
            
            console.log(this.data);
            this.data1 = this.data._body;
            this.data2 = JSON.parse(this.data1);
            console.log(this.data1);
    })
}

}

