package com.eecs395.fint;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.Item;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

    @Query("SELECT i FROM Items i WHERE i.finterId=?1")
    public List<Item> findItemsByFinterId(Integer finterId);

}
