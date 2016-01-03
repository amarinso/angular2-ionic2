import {Injectable} from 'angular2/core';

@Injectable()
export class Listas {
  data: any[];

  constructor() {
    this.data  = [
            {
                id: 1,
                title: 'Favoritos',
            },
            {
                id: 2,
                title: 'Comida diaria',
            },
            {
                id: 3,
                title: 'Cena de navidad',
            },
            {
                id: 4,
                title: 'Cosas de casa',
            }
        ];
      }
   getData() {
     return this.data;
   }

   addList(title: string) {
     this.data.push({
       id: this.data.length,
       title: title
     });
   }
}
