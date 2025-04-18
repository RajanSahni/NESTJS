
// Normal code 

// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Rajan First Nest.js Project Is Live now ';
//   }
// }


// // Using console here 
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Rajan First Nest.js Project Is Live now';
//   }
// }

// // ✅ Create instance to call method (for testing only)
// const appService = new AppService();
// console.log(appService.getHello());




//Using A lot of function here 

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private myName = 'Rajan Sahni';

  getHello(): string {
    return `Welcome ${this.myName}, Nest.js project is live now!`;
  }

  getInfo(): string {
    return `This is a simple example to show multiple methods in AppService.`;
  }

  add(a: number, b: number): number {
    return a + b;
  }
}

const addf = new AppService();
console.log(addf.add(9,15))
