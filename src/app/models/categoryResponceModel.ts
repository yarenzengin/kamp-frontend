import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponceModel extends ResponseModel{
    data:Category[]
    
}
