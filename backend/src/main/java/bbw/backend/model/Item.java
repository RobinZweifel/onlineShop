package bbw.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
public class Item {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private int price;
    @Column(name = "description")
    private String description;
    @Column(name = "imageURL")
    private String imageUrl;
    @Column(name = "quantity")
    private int quantity;

    // Constructor
    public void ItemController(int id, String name, int price, String description, String imageUrl, int quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }
}
