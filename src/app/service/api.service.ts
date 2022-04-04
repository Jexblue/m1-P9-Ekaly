import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url="https://my.api.mockaroo.com/students_angular.json?key=452b2e30";
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.url);
  }

  getPagingServiceItems(totalItems: number, currentPage: number = 1, pageSize: number = 10, totalPageLinkButtons: number = 5) {

    totalItems = totalItems || 1;

    /* if currentPage not exists default value will be '1' */
    currentPage = currentPage || 1;

    /* The default value of the number of items in the page is 10 if not exist */
    pageSize = pageSize || 10;

    /* The default value of the number of total page link buttons is 10 if not exist */
    totalPageLinkButtons = totalPageLinkButtons || 10;

    /* calculate total pages  */
    const totalPages = Math.ceil(totalItems / pageSize);


    let startPage: number; // start Page Button number
    let endPage: number;   // end Page Button number

    if (totalPages <= totalPageLinkButtons) {

      // less than totalPageButtons then show all
      // 1,2,3,.., totalPages are buttons
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than totalPageButtons then calculate start and end pages
      // currentPage will be on the center of the paging

      if (currentPage <= Math.ceil(totalPageLinkButtons / 2)) {
        startPage = 1;
        endPage = totalPageLinkButtons;
      } else if (currentPage + Math.ceil(totalPageLinkButtons / 2) > totalPages) {
        startPage = totalPages - totalPageLinkButtons + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.ceil(totalPageLinkButtons / 2) + 1;
        endPage = startPage + totalPageLinkButtons - 1;
      }
    }

    // calculate start and end item indexes
    // Indexes are started from 0 ! It is important

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = [];
    // create an array of pages to ng-repeat in the pager control
    for ( let i = startPage; i <= endPage ; i++) {
      pages.push(i);
    }

    // return object with all paging properties required by the view
    return {
      startPage           : startPage,
      endPage             : endPage,
      startIndex          : startIndex,
      endIndex            : endIndex,
      totalPageLinkButtons: totalPageLinkButtons,
      totalItems          : totalItems,
      currentPage         : currentPage,
      pageSize            : pageSize,
      totalPages          : totalPages,
      pages               : pages
    };
  }

}
