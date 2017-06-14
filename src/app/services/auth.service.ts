import {Injectable, Output,EventEmitter} from '@angular/core'
import { ApiService } from './api.service'



@Injectable()
export class AuthService {

    @Output()
        isLogged: EventEmitter<any> = new EventEmitter();

    constructor(private API: ApiService){}

    checkLoggedStatus(): void{

        let status: any;

        this.API.getLoginUser()
                .subscribe((response)=>this.isLogged.emit(response));

    }

   getLoggedStatus(): EventEmitter<any> {
       
       return this.isLogged

   }

}
