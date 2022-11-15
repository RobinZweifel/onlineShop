package bbw.backend.controller;

import bbw.backend.model.Item;
import bbw.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class ItemController {

    Logger logger = Logger.getLogger(ItemController.class.getName());

    @Autowired
    private ItemService itemService;

    //GET method for all items
    @GetMapping("/items")
    public List<Item> getAllItems() {
        logger.info("getAllItems() called");
        System.out.println(itemService.getAllItems().toArray().length);
        return itemService.getAllItems();
    }

    //POST
    //POST mapping for adding new item to the database
    @RequestMapping("/item")
    public void addItem(@RequestBody Item item) {
        logger.info("addItem() called");
        try
        {
            itemService.addItem(item);
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    //PUT
    @PutMapping("/item")
    public String updateItem() {
        logger.info("updateItem() called");
        return "Item updated";
    }

    //DELETE
    @DeleteMapping("/item/{id}")
    public String deleteById(@PathVariable("id") int id) {
        logger.info("deleteById() called");
        itemService.deleteItem(id);
        return "Item deleted";
    }
}
