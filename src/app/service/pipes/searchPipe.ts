import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"searchPipe"
})
export class SearchPipe implements PipeTransform{
    transform(searchQury: string, dataList: any[]):any {
        if(!dataList) return [];
        if(!searchQury) return dataList;
        searchQury=searchQury.toLowerCase();
        return dataList.filter((i)=>{
            return i.title.toLowerCase().includes(searchQury)||i.description.toLowerCase().includes(searchQury);
        })
    }
}