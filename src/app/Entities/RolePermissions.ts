import { NumberInput } from "@angular/cdk/coercion";
import {RoleElement} from './RoleElement';

export class RolePermissions
{
    designationName:string;
    departmentId:number;
    designationId:number;
    parentDesignationId:number;
    designationLevelNo:number;
    designationElementMappingList:RoleElement[];
}
    