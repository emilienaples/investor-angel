import { Body, Controller, Get, Post ,UseInterceptors,UploadedFiles} from '@nestjs/common';
import { StocksService } from './stocks.service';
import { FilesInterceptor } from '@nestjs/platform-express';


@Controller('stocks')
export class StocksController {

    constructor(private readonly service:StocksService){}

    @Post('/upload_files')
    @UseInterceptors(FilesInterceptor('file'))
    async uploadFiles(@UploadedFiles() file) {
      return await this.service.upload_files(file)
    }

    @Post('/create')
    async create(@Body() body){
        return await this.service.create(body)
    }

    @Post('/update')
    async update(@Body() body){
        return await this.service.update(body)
    }
    @Post('/update_code')
    async update_code(@Body() body){
        return await this.service.update_code(body)
    }

    @Post('/delete')
    async delete(@Body() body){
        return await this.service.delete(body)
    }

    @Get('/')
    async get(){
        return await this.service.getAll()
    }
}
