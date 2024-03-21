import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DATAGRID_DATA } from "../mocks/mock-datagrid.data";
import { DatagridData } from "../models/datagrid.model";


@Injectable({ providedIn: 'root' })
export class DatagridService {

    public getDatagridData(): Observable<DatagridData[]>{
        return of(DATAGRID_DATA);
    }
}