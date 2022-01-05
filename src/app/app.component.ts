import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import DataSource from 'devextreme/data/data_source';
import { interval } from 'rxjs/observable/interval';

import { Service } from './app.service';
import { Employee } from './domain/employee';

/* Add this to dx-tree-list for traditional tree view
  parentIdExpr="headId"
 */

@Component({
  selector: 'demo-app',
  template: `
    <dx-tree-list
      [dataSource]="dataSource"
      keyExpr="seqId"
      parentIdExpr="headId"
      [showRowLines]="true"
      [showBorders]="true"
      [columnAutoWidth]="true"
      [allowColumnResizing]="true"
      [columnResizingMode]="'nextColumn'"
      [allowColumnReordering]="true"
      [expandedRowKeys]="[1]"
    >
      <dxo-column-chooser [enabled]="true" [mode]="'select'">
      </dxo-column-chooser>

      <dxi-column dataField="name" caption="Module"></dxi-column>
      <dxi-column
        dataField="fullAccess"
        caption="Full Access"
        cellTemplate="pickupTemplate1"
      >
        <div *dxTemplate="let data of 'pickupTemplate1'; let index = i">
          <input
            type="checkbox"
            (change)="checkFullAccess($event, data.data)"
            [checked]="data_[data.data.seqId - 1].fullAccess"
          />
        </div>
      </dxi-column>
      <dxi-column
        dataField="viewAccess"
        caption="Read Access"
        cellTemplate="pickupTemplate2"
      >
        <div *dxTemplate="let data of 'pickupTemplate2'; let index = i">
          <input
            type="checkbox"
            (change)="checkReadAccess($event, data.data)"
            [checked]="data_[data.data.seqId - 1].viewAccess"
          />
        </div>
      </dxi-column>
    </dx-tree-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: any;
  filterValue: Array<any>;
  data_: any;
  constructor(service: Service) {
    this.dataSource = new DataSource(service.getEmployees());
    this.data_ = service.getEmployees();
  }
  checkFullAccess(event, data) {
    event.stopPropagation();
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      this.data_[data.seqId - 1]['fullAccess'] = true;
      this.data_[data.seqId - 1]['viewAccess'] = true;

      for (let i = 0; i < this.data_.length; i++) {
        if (this.data_[i]['headId'] === data.seqId) {
          this.data_[i]['fullAccess'] = true;
          this.data_[i]['viewAccess'] = true;
        }
      }

      this.markFullAccess(data.seqId - 1, data);
      this.setData();
    } else {
      this.data_[data.seqId - 1]['fullAccess'] = false;
      // this.data_[data.seqId - 1]['viewAccess'] = false;
      for (let i = 0; i < this.data_.length; i++) {
        if (this.data_[i]['headId'] === data.seqId) {
          this.data_[i]['fullAccess'] = false;
        }
        this.traverseParentFullAcess(data, data.seqId - 1);
      }
      this.unMarkFullAccess(data.seqId - 1, data);
      this.setData();
    }
  }

  checkReadAccess(event, data) {
    event.stopPropagation();
    console.log('CHECK-' + data.seqId);
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      this.data_[data.seqId - 1]['viewAccess'] = true;
      for (let i = 0; i < this.data_.length; i++) {
        if (this.data_[i]['headId'] === data.seqId) {
          this.data_[i]['viewAccess'] = true;
        }
      }
      this.markReadAccess(data.seqId - 1, data);
      this.setData();
    } else {
      this.data_[data.seqId - 1]['viewAccess'] = false;
      this.data_[data.seqId - 1]['fullAccess'] = false;

      for (let i = 0; i < this.data_.length; i++) {
        if (this.data_[i]['headId'] === data.seqId) {
          this.data_[i]['fullAccess'] = false;
          this.data_[i]['viewAccess'] = false;
        }
        if (this.data_[i].seqId === data.headId) {
          this.data_[i]['viewAccess'] = false;
          this.data_[i]['fullAccess'] = false;
          this.traverseParentReadAcess(data, data.seqId - 1);
        }
      }
      this.unMarkReadAccess(data.seqId - 1, data);
      this.setData();
    }
  }

  traverseParentFullAcess(data: any, index: number) {
    this.data_[index]['fullAccess'] = false;

    for (let i = 0; i < this.data_.length; i++) {
      if (this.data_[i]['seqId'] === data.headId) {
        this.data_[i]['fullAccess'] = false;
        this.traverseParentFullAcess(this.data_[i], i);
      }
    }
  }

  traverseParentReadAcess(data: any, index: number) {
    this.data_[index]['fullAccess'] = false;
    this.data_[index]['viewAccess'] = false;

    for (let i = 0; i < this.data_.length; i++) {
      if (this.data_[i]['seqId'] === data.headId) {
        this.data_[i]['fullAccess'] = false;
        this.data_[i]['viewAccess'] = false;
        this.traverseParentReadAcess(this.data_[i], i);
      }
    }
  }

  markFullAccess(index, data) {
    this.data_[index]['fullAccess'] = true;
    this.data_[index]['viewAccess'] = true;
    let i = index + 1;

    while (i < this.data_.length && this.data_[i]['headId'] !== 0) {
      console.log('-' + this.data_[i]['headId']);
      if (data.seqId === this.data_[i].headId) {
        this.data_[i]['fullAccess'] = true;
        this.data_[i]['viewAccess'] = true;
        this.traverseFullChild(i, true);
      }

      i++;
    }
    this.traverseUpFullChecked(index, data);
  }

  markReadAccess(index, data) {
    this.data_[index]['viewAccess'] = true;
    let i = index + 1;

    while (i < this.data_.length && this.data_[i]['headId'] !== 0) {
      console.log('-' + this.data_[i]['headId']);
      if (data.seqId === this.data_[i].headId) {
        this.data_[i]['viewAccess'] = true;
        this.traverseReadChild(i, true);
      }

      i++;
    }
    this.traverseUpReadChecked(index, data);
  }

  traverseUpFullChecked(index, data) {
    console.log('RRR-' + index);
    if (this.data_[index].headId !== 0) {
      const parentID = this.data_[index].headId;
      const list = this.data_.filter(
        obj => obj.headId === parentID && !obj.fullAccess
      );
      console.log('^^^^' + list.length);
      console.log(this.data_);
      if (!list.length) {
        this.data_[parentID - 1].fullAccess = true;
        this.data_[parentID - 1].viewAccess = true;
        this.traverseUpFullChecked(parentID - 1, data);
        console.log('Title-' + this.data_[parentID - 1].Title);
      }
    }
  }

  traverseUpReadChecked(index, data) {
    console.log('RRR-' + index);
    if (this.data_[index].headId !== 0) {
      const parentID = this.data_[index].headId;
      const list = this.data_.filter(
        obj => obj.headId === parentID && !obj.viewAccess
      );
      console.log('^^^^' + list.length);
      console.log(this.data_);
      if (!list.length) {
        this.data_[parentID - 1].viewAccess = true;
        this.traverseUpReadChecked(parentID - 1, data);
        console.log('Title-' + this.data_[parentID - 1].Title);
      }
    }
  }

  traverseFullChild(index, isChecked) {
    for (let i = index; i < this.data_.length; i++) {
      if (
        this.data_[i]['headId'] !== 0 &&
        this.data_[i].headId === this.data_[index].seqId
      ) {
        this.data_[i]['fullAccess'] = isChecked;
        this.data_[i]['viewAccess'] = isChecked ? isChecked : !isChecked;
        this.traverseFullChild(i, isChecked);
      }
    }
  }

  traverseReadChild(index, isChecked) {
    for (let i = index; i < this.data_.length; i++) {
      if (
        this.data_[i]['headId'] !== 0 &&
        this.data_[i].headId === this.data_[index].seqId
      ) {
        this.data_[i]['viewAccess'] = isChecked;
        this.data_[i]['fullAccess'] = isChecked;
        this.traverseReadChild(i, isChecked);
      }
    }
  }

  unMarkFullAccess(index, data) {
    this.data_[index]['fullAccess'] = false;
    // this.data_[index]['viewAccess'] = false;
    let i = index + 1;

    while (i < this.data_.length && this.data_[i]['headId'] !== 0) {
      console.log('-' + this.data_[i]['headId']);
      if (data.seqId === this.data_[i].headId) {
        this.data_[i]['fullAccess'] = false;
        this.traverseFullChild(i, false);
      }

      i++;
    }
  }

  unMarkReadAccess(index, data) {
    this.data_[index]['fullAccess'] = false;
    this.data_[index]['viewAccess'] = false;
    let i = index + 1;
    while (i < this.data_.length && this.data_[i]['headId'] !== 0) {
      console.log('-' + this.data_[i]['headId']);
      if (data.seqId === this.data_[i].headId) {
        this.data_[i]['fullAccess'] = false;
        this.data_[i]['viewAccess'] = false;
        this.traverseReadChild(i, false);
      }
      i++;
    }
  }

  setData() {
    this.dataSource = new DataSource({
      store: this.data_
    });
  }
}
