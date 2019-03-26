import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'child-cell',
  template: `<span><button (click)="invokeParentMethod()" class="btn btn-primary btn-lg round">Email</button></span>`,
  styles: [
      `.btn {
        display: inline-block;
        padding: 0px 0px;
        margin-bottom: 0;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;        
      }
        
      .btn-lg {
        font-size: 10px;
        border-radius: 6px;
      }
      
      .btn-primary {
        color: #fff;
        background-color: #428bca;
        border-color: #357ebd;
      }
      
      .btn-primary:hover,
      .btn-primary:focus,
      .btn-primary:active,
      .btn-primary.active,
      .open .dropdown-toggle.btn-primary {
        color: #fff;
        background-color: #3276b1;
        border-color: #285e8e;
      }
      
      .round {
        border-radius: 24px;
      }
      
      .btn {
          padding: 3px 5px;
          border: 0 none;
          font-weight: 700;
          letter-spacing: 1px;
      }
      .btn:focus, .btn:active:focus, .btn.active:focus {
          outline: 0 none;
      }
      
      .btn-primary {
          background: #0099cc;
          color: #ffffff;
      }
      .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {
          background: #33a6cc;
      }
      .btn-primary:active, .btn-primary.active {
          background: #007299;
          box-shadow: none;
      }`
  ]
})
export class ChildMessageComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
      this.params = params;
  }

  public invokeParentMethod() {
    console.log(this.params);
    console.log(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`);
  }

  refresh(): boolean {
      return false;
  }
}
