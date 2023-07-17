import {Pipe, PipeTransform } from '@angular/core';
@Pipe({name:'countspecialchar'})
export class CountspecialcharPipe implements PipeTransform {
    transform(value: string):any{
        let i :number
        let count:number=0
        let specialchar="!@#$%^&*~"
        for(i=0;i<value.length;i++)
        {
            if(!specialchar.includes(value[i])){
                continue
            }
            count =count+1
        }
        return count
    }
}