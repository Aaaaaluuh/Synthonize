import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})

export class RecommendationsComponent implements OnInit {
  showMoreInfo: boolean = false; // Initially set to false
  dropdownList: { item_id: number; item_text: string }[] = []; // Specify the type
  selectedItems: { item_id: number; item_text: string }[] = [];
  dropdownSettings: IDropdownSettings = {}; // Type is already defined by the library

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }


  onGenerateRecommendation() {
    this.showMoreInfo = true; // Toggle or set the variable to true
  }
  
}



