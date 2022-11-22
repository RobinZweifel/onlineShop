import {Item} from "./Item";
import {AbstractResponse} from "./AbstractResponse";

export class ItemRestResponse extends AbstractResponse {
  items: Item[];
}
