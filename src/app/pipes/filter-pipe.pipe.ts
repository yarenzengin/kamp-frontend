import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {//değişime uğramasını istediğim data product[], dönüş tipi de prod.çünkü tabloda ürünler gelecek
    //parametremize göre filtrelicek ama yine bir array vericek 
    filterText = filterText?filterText.toLocaleLowerCase():"" 
    return filterText?value
    .filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1 )
    :value//ürünleri filtrele, filtre şartına uyanı yeni bir arraye atıyor
  }//.filter = senin valuenu tek tek dolaşmaya yarıyor--index of= bir stringin içinde var mı yok mu arıyor -- (-1)den farklı demek  =varsa

}
