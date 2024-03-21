export interface DatagridData{
    name: string;
    device: string;
    path: string;
    status: 'scheduled' | 'available';
    checked?: boolean
}