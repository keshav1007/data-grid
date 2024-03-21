import { Component, Input } from '@angular/core';
import { MESSAGES_EN } from '../../messages/en';
import { DatagridData } from '../../models/datagrid.model';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})

export class DatagridComponent{
  @Input()
  datagridData: DatagridData[] = [];

  public messages_en = MESSAGES_EN;
  public selectAll = false;
  public allowDownload = false;

  private selectedItemsCount = 0;

  public download(){
    let textToAlert = `Downloaded Items`;
    for(let item of this.datagridData){
      if(item.checked){
        textToAlert += `\n Name: ${item.name} Device: ${item.device} Path: ${item.path}`; 
      }
    }
    alert(textToAlert);
  }

  private setSelectedItemsCountAndAllowDownload(){
    let allowDownload = true;
    let selectedItemsCount = 0;
    for(let item of this.datagridData){
      if(item.checked){
        selectedItemsCount++;
        if(item.status !== 'available'){
          allowDownload = false;
        }
      }
    }
    if(selectedItemsCount === 0){
      allowDownload = false;
    }
    this.selectedItemsCount = selectedItemsCount;
    this.allowDownload = allowDownload;
  }

  public onSelectAllChange(){
    for(let item of this.datagridData){
      item.checked = this.selectAll;
    }
    this.setSelectedItemsCountAndAllowDownload();
  }  

  private setIndeteminateState(state: boolean){
    const selectAllElement = document.getElementById('selectAllCheckbox') as HTMLInputElement;
    selectAllElement.indeterminate = state;
  }

  public onRowSelection(){
    this.setSelectedItemsCountAndAllowDownload();
    if(this.selectedItemsCount === this.datagridData.length){
      this.selectAll = true;
      this.setIndeteminateState(false);
    } else if(this.selectedItemsCount === 0){
      this.selectAll = false;
      this.setIndeteminateState(false);
    } else {
      this.selectAll = false;
      this.setIndeteminateState(true);
    }
  }

  public getSelectedMessage(){
    if(this.selectedItemsCount === 0){
      return this.messages_en['app.datagrid.selected.none'];
    } else {
      return `${this.messages_en['app.datagrid.selected']} ${this.selectedItemsCount}`
    }
  }

  public getDisplayValue(key: string){
    return this.messages_en[`app.datagrid.status.${key}`] || '';
  }
  
}
