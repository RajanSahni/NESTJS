// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }

//   @Get('add')
//   getInfo(): string {
//     return this.appService.getInfo();
//   }
// }






// src/app.controller.ts
import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('add')
  getInfo(): string {
    return this.appService.getInfo();
  }

  // Redirect route
  // //http://localhost:3000/docs

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 301)
  redirectToDocs() {
    // Optional: Dynamic redirection example
    return { url: 'https://docs.nestjs.com' };
  }

  // Dynamic route with ID
  //http://localhost:3000/:2
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}

