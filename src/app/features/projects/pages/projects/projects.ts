import { Component, inject } from '@angular/core';
import { Session } from '../../../../shared/services/session';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  token: string | null = '';

   private _sessionService = inject(Session);

   recuperarToken(){
   //this.token = this._sessionService.getToken();

    this._sessionService.removeToken();
   }

}
