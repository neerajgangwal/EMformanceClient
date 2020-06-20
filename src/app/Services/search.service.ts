import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private SourceData:any[];
  public SearchResults:any[];
  public Key="";
  constructor() { }


  public SetSource=function(data){
    this.SourceData=data;
    this.SearchResults=data;
  }

  public FilterData=function(event)
  {
    var temp=this.SourceData
    var data=event.target.value;
    console.log(data);

    this.SearchResults=temp.filter(item=>
      {
        console.log(item);
        console.log(item[this.Key]);
        console.log(item[this.Key].toLowerCase().startsWith(data.toLowerCase()));
        return item[this.Key].toLowerCase().includes(data.toLowerCase());
      }
      )
  }
}
