import { Component } from "@angular/core";
import { Item } from "../model/item.model";
import { ItemRepository } from "../model/item.repository";

@Component({
    selector: "logic",
    templateUrl: "logic.component.html"
})
export class LogicComponent {
    public selectedCategory = null;
    public itemsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ItemRepository) {}

    get items(): Item[] {
        let pageIndex = (this.selectedPage - 1) * this.itemsPerPage
        return this.repository.getItems(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.itemsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.itemsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository
            .getItems(this.selectedCategory).length / this.itemsPerPage)
    }

}
