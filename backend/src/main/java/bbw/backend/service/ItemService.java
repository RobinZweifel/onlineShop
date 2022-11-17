package bbw.backend.service;

import bbw.backend.model.Item;
import bbw.backend.repo.ItemPreo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class ItemService {

    Logger logger = Logger.getLogger(ItemService.class.getName());

    @Autowired
    private ItemPreo itemPreo;

    //REST service for Item
    public List<Item> getAllItems() {
        logger.log(Level.INFO, "getAllItems() called");
        return itemPreo.findAll();
    }

    public Item getItem(int id) {
        logger.log(Level.INFO, "getItem() called");
        System.out.println(itemPreo.findById(id).toString());
        return itemPreo.findById(id).get();
    }

    //methode to add new item to the database
    public void addItem(Item item) {
        itemPreo.save(item);
    }

    public void deleteItem(int id) {
        itemPreo.deleteById(id);
    }

}
