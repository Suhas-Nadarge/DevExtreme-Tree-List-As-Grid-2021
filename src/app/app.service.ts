import { Injectable } from '@angular/core';
import { Employee } from './domain/employee';

@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;
  }
}

var employees: any[] = [
  {
    id: '947cfdab-f4fc-40a7-a5be-39c0bc3399b7',
    parentId: null,
    name: 'Preferences',
    isModule: true,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 1,
    headId: 0
  },
  {
    id: '73b6480f-a1ad-4976-81d6-401370c21529',
    parentId: null,
    name: 'Inventory',
    isModule: true,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 2,
    headId: 0
  },
  {
    id: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    parentId: '73b6480f-a1ad-4976-81d6-401370c21529',
    name: 'FSL',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 3,
    headId: 2
  },
  {
    id: '1b76f07c-7f32-40b9-8887-25bbc9e61724',
    parentId: '73b6480f-a1ad-4976-81d6-401370c21529',
    name: 'SPL',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 4,
    headId: 2
  },
  {
    id: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    parentId: '73b6480f-a1ad-4976-81d6-401370c21529',
    name: 'Parts',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 5,
    headId: 2
  },
  {
    id: '65fca656-dc7d-4855-919f-6fac7f84a14b',
    parentId: '73b6480f-a1ad-4976-81d6-401370c21529',
    name: 'Inventory',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 6,
    headId: 2
  },
  {
    id: '85e75164-b13e-421d-b364-0c17a269a7d6',
    parentId: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    name: 'Part Associated FSL',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 7,
    headId: 5
  },
  {
    id: '1ad6055b-74d7-4ea2-a9ab-293311d4f90e',
    parentId: '65fca656-dc7d-4855-919f-6fac7f84a14b',
    name: 'CycleCountConfiguration',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 8,
    headId: 6
  },
  {
    id: 'c049bc6c-25c4-4c4c-b429-30c34f7643b3',
    parentId: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    name: 'FSL Master',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 9,
    headId: 3
  },
  {
    id: '64848a08-9bf4-41a1-b165-35404ec87d7e',
    parentId: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    name: 'Bin Setup',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 10,
    headId: 3
  },
  {
    id: 'de02d11e-0e6a-4b1b-b271-50608983dc82',
    parentId: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    name: 'Part Document',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 11,
    headId: 5
  },
  {
    id: '68e68700-c09e-4a9e-a06c-55f44800eb62',
    parentId: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    name: 'Trade Data',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 12,
    headId: 5
  },
  {
    id: '42bcbd40-e632-4cec-812a-62c6eaf01a03',
    parentId: '65fca656-dc7d-4855-919f-6fac7f84a14b',
    name: 'CustomerFslAssociation',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 13,
    headId: 6
  },
  {
    id: 'ebcd86cb-6e6e-4c00-be2d-6a03c4815fd7',
    parentId: '65fca656-dc7d-4855-919f-6fac7f84a14b',
    name: 'CreateInventoryProfile',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 14,
    headId: 6
  },
  {
    id: 'd4c9c6f4-8609-4a7f-90a4-73f6f8198c39',
    parentId: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    name: 'Alternate Part',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 15,
    headId: 5
  },
  {
    id: '58a4e5da-fcaf-4045-bdcd-7fa88f2ddbfd',
    parentId: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    name: 'Part Reorder',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 16,
    headId: 5
  },
  {
    id: 'd9aab711-c15e-4a95-9b4f-8b6090b498fa',
    parentId: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    name: 'Operating Hours',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 17,
    headId: 3
  },
  {
    id: '90cd2c7b-2185-479f-86a9-ac107dbf29ad',
    parentId: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    name: 'FSL Group',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 18,
    headId: 3
  },
  {
    id: '6ea50904-4ae8-434b-a57d-b9ebeb89d2cd',
    parentId: '1b76f07c-7f32-40b9-8887-25bbc9e61724',
    name: 'Create ASN',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 19,
    headId: 4
  },
  {
    id: '4cb52407-a3c4-4644-8e3f-be1010f13d2e',
    parentId: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    name: 'Part',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 20,
    headId: 5
  },
  {
    id: '15ca2b0f-9c04-40bc-9688-cb5b3421b4bd',
    parentId: '65fca656-dc7d-4855-919f-6fac7f84a14b',
    name: 'InventoryCategory',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 21,
    headId: 6
  },
  {
    id: '171c41e6-6bcc-4a2d-97e5-cc48caf7b8b8',
    parentId: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    name: 'Cycle Count Bin',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 22,
    headId: 3
  },
  {
    id: 'c40fe6c6-e1db-425a-a4c8-dc82a964e39e',
    parentId: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    name: 'Associated Customer',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 23,
    headId: 3
  },
  {
    id: 'ba866095-fdf4-4bd4-a5cb-e6e5798ae477',
    parentId: '3b25f16d-1d79-4fb8-8091-3b83a45b588a',
    name: 'Note Details',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 24,
    headId: 5
  },
  {
    id: '1ac36471-ad52-4e8e-9fb8-eeb1ab876247',
    parentId: '65fca656-dc7d-4855-919f-6fac7f84a14b',
    name: 'CustomInventoryField',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 25,
    headId: 6
  },
  {
    id: '10b2a22e-9dc9-4843-88ba-f12638654b14',
    parentId: 'f7e23161-489d-4586-aa29-1530f6fb9155',
    name: 'Integrator Hours',
    isModule: false,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 26,
    headId: 3
  },
  {
    id: 'a02b9160-e214-4242-a158-bcb0fbc72316',
    parentId: null,
    name: 'Tools',
    isModule: true,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 27,
    headId: 0
  },
  {
    id: '49d6bdf4-bebe-4fec-976c-c29488232f52',
    parentId: null,
    name: 'Billing',
    isModule: true,
    fullAccess: false,
    viewAccess: false,
    roleTypeGuid: '63BC91A1-820B-477C-88A6-6B8E1BED17CE',
    roleType: 'customer',
    seqId: 28,
    headId: 0
  }
];
