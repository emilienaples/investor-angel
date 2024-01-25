import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FormsService {
    constructor(private readonly prisma:PrismaService){}

    async create(body){
        const {sessionId,amount,duration,purpose,monthly} = body;
        const form = await this.prisma.form.create({
            data:{
                sessionId
            }
        });
        const investmentDetails = await this.prisma.investmentDetail.create({
            data:{
                formId:form.id,
                amount,
                duration,
                monthly,
                purpose
            }
        });
        return {form,investmentDetails}
    }

    async get_investment_details(){
        const data = await this.prisma.investmentDetail.findMany({});
        return data;
    }

    async get_debt_details(){
        const data = await this.prisma.debtDetail.findMany({});
        return data;
    }

    async get_insurance_details(){
        const data = await this.prisma.insuranceDetail.findMany({});
        return data;
    }

    async get_annuity_details(){
        const data = await this.prisma.annuityDetail.findMany({});
        return data;
    }

    async get_risk_details(){
        const data = await this.prisma.riskDetail.findMany({});
        return data;
    }
    
    async update_risk(body){
        const {sessionId,question1,question2,question3,question4,question5,question6,question7} = body;

        const form = await this.prisma.form.findFirst({
            where:{
                sessionId
            }
        });
        if(!form)
        {
            return new HttpException("No session exist",400)
        }
        const overallScore = question1+question2+question3+question4+question5+question6+question7;
        const existing_risk = await this.prisma.riskDetail.findFirst({where:{
            formId:form.id
        }});
        let risk = null;
        if(existing_risk)
        {
             risk = await this.prisma.riskDetail.update({
                where:{
                    formId:form.id
                },
                data:{
                    formId:form.id,question1,question2,question3,question4,question5,question6,question7,overallScore
                }
            })
        }
        else{
            risk = await this.prisma.riskDetail.create({
                data:{
                    formId:form.id,question1,question2,question3,question4,question5,question6,question7,overallScore
                }
            })
        }

        return {risk}
    }

    async update_insurance(body){
        const {sessionId,haveMortgage,married,multiMillionaire,relationship} = body;

        const form = await this.prisma.form.findFirst({
            where:{
                sessionId
            }
        });
        if(!form)
        {
            return new HttpException("No session exist",400)
        }

        const insurance = await this.prisma.insuranceDetail.create({
            data:{
                formId:form.id,mortgage:!!haveMortgage,married:!!married,multiMillionaire:!!multiMillionaire,relationShip:relationship
            }
        })

        return {insurance}

    }

    async update_annuity(body){
        const {sessionId,longevity,ampleLiquidityFinancial,loaded,fiftyYearsOld} = body;

        const form = await this.prisma.form.findFirst({
            where:{
                sessionId
            }
        });
        if(!form)
        {
            return new HttpException("No session exist",400)
        }

        const annuity = await this.prisma.annuityDetail.create({
            data:{
                formId:form.id,longevity,ampleLiquidity:ampleLiquidityFinancial,loaded:loaded,fiftyYearsOld:fiftyYearsOld
            }
        })

        return {annuity}

    }

    async update_debt(body){
        const {sessionId,ccDebt,marginDebt,autoDebt,studentDebt,mortgageDebt,otherDebt} = body;
        const form = await this.prisma.form.findFirst({
            where:{
                sessionId
            }
        });
        if(!form)
        {
            return new HttpException("No session exist",400)
        }

        const debt = await this.prisma.debtDetail.create({
            data:{
                formId:form.id,ccDebt,marginDebt,autoDebt,studentDebt,mortgageDebt,otherDebt
            }
        })

        return {debt}
    }
}
