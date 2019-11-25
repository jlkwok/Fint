package com.eecs395.fint;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.Item;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

    @Query("SELECT i FROM Item i WHERE i.finterId=?1")
    public List<Item> findItemsByFinterId(Integer finterId);

    @Query("SELECT i FROM Item i WHERE LOWER(i.name) LIKE CONCAT('%', LOWER(?1), '%')")
    public List<Item> query(String query);

}
