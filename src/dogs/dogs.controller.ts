import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

interface Dog {
  name: string;
  breed: string;
}

@Controller('dogs')
export class DogsController {
  private dogs: Dog[] = [];

  @Get()
  findAll() {
    return this.dogs;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogs[+id] || { message: 'Dog not found' };
  }

  @Post()
  create(@Body() dog: Dog) {
    this.dogs.push(dog);
    return { message: 'Dog added successfully', dog };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dog: Partial<Dog>) {
    if (!this.dogs[+id]) {
      return { message: 'Dog not found' };
    }
    this.dogs[+id] = { ...this.dogs[+id], ...dog };
    return { message: 'Dog updated successfully', dog: this.dogs[+id] };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!this.dogs[+id]) {
      return { message: 'Dog not found' };
    }
    const deleted = this.dogs.splice(+id, 1);
    return { message: 'Dog removed successfully', dog: deleted[0] };
  }
}
