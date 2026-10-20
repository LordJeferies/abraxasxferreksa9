import data from '../../shared/catalog.json';
export type Product=typeof data[number];
export const products:Product[]=data;
export const categories=[...new Set(products.map(p=>p.category))];
export const asset=(file:string)=>'/abraxasxferreksa9/assets/'+file;
export const money=(cents:number)=>new Intl.NumberFormat('es-VE',{style:'currency',currency:'USD'}).format(cents/100);
export const whatsapp=(text:string)=>'https://wa.me/584123525139?text='+encodeURIComponent(text);
