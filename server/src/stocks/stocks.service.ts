import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as iconv from 'iconv-lite';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
import { writeFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class StocksService {
    constructor(private readonly prisma:PrismaService){}

    async create(body)
    {   const {name,imageId,category,code} = body;
        const stock = await this.prisma.stock.create({
            data:{
                name,imageId,category,code
            }
        });
        return stock;
    }

    async getAll(){
        const stock = await this.prisma.stock.findMany({});
        return stock;
    }

    async update(body)
    {
        const {id,name,imageId,code,category} = body;
        const stock = await this.prisma.stock.update({
            where:{id},
            data:{
                name,imageId,category,code
            }
        });
        return stock;
    }

    async update_code(body)
    {
        const {id,code} = body;
        const stock = await this.prisma.stock.update({
            where:{id},
            data:{
              code
            }
        });
        return stock;
    }

    async delete(body)
    {
        const {id} = body;
        const stock = await this.prisma.stock.delete({
            where:{id}
        });
        return stock;
    }

    async upload_files(files){
        const files_path: { type: string; name: string; path: string }[] = [];
        files.forEach((file) => {
          file.originalname = iconv.decode(
            Buffer.from(file.originalname, 'binary'),
            'utf-8',
          );
          const file_name = uuidv4()+slugify(file.originalname);
          try {
            writeFileSync(
              join(process.cwd(), 'public/static', file_name),
              file.buffer,
            );
            files_path.push({
              type: 'file',
              name: file.originalname,
              path: file_name,
            });
          } catch (err) {
            console.log('err', err);
          }
        });
        return files_path;
      }
  
}
