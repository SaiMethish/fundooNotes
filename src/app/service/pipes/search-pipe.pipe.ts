import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(dataList: any[], searchMessage:string){
    if(!dataList) return [];
    if(!searchMessage) return dataList;
    searchMessage=searchMessage.toLowerCase();
    return dataList.filter((i)=>{
        return i.title.toLowerCase().includes(searchMessage)||i.description.toLowerCase().includes(searchMessage);
    })
}

}
