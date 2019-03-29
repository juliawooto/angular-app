import { Injectable } from "@angular/core";
import { Item } from "./item.model";
import { Observable, from } from "rxjs";


@Injectable()
export class StaticDataSource {
    private items: Item[] = [
        new Item(1, "Item 1", "Category 1", "Item 1 (Category 1)"),
        new Item(2, "Item 2", "Category 1", "Item 2 (Category 1)"),
        new Item(3, "Item 3", "Category 1", "Item 3 (Category 1)"),
        new Item(4, "Item 4", "Category 1", "Item 4 (Category 1)"),
        new Item(5, "Item 5", "Category 1", "Item 5 (Category 1)"),
        new Item(6, "Item 6", "Category 2", "Item 6 (Category 2)"),
        new Item(7, "Item 7", "Category 2", "Item 7 (Category 2)"),
        new Item(8, "Item 8", "Category 2", "Item 8 (Category 2)"),
        new Item(9, "Item 9", "Category 2", "Item 9 (Category 2)"),
        new Item(10, "Item 10", "Category 2", "Item 10 (Category 2)"),

    ];

    getItems(): Observable<Item[]> {
        return from([this.items]);
    }


}
