import { Controller,Post ,Body, Get} from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {

    constructor(private readonly service:FormsService){}
    @Post('/create')
    async create(@Body() body){
        return this.service.create(body)
    }

    @Get('/investment_details')
    async investment_details(){
        return this.service.get_investment_details()
    }

    @Get('/insurance_details')
    async insurance_details(){
        return this.service.get_insurance_details()
    }

    @Get('/annuity_details')
    async annuity_details(){
        return this.service.get_annuity_details()
    }

    @Get('/debt_details')
    async debt_details(){
        return this.service.get_debt_details()
    }

    @Post('/update_insurance')
    async update_insurance(@Body() body){
        return this.service.update_insurance(body)
    }

    @Post('/update_annuity')
    async update_annuity(@Body() body){
        return this.service.update_annuity(body)
    }

    @Post('/update_risk')
    async update_risk(@Body() body){
        return this.service.update_risk(body)
    }

    @Post('/update_debt')
    async update_debt(@Body() body){
        return this.service.update_debt(body)
    }

    
}
