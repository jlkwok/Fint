package com.eecs395.fint;

import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.Item;

public interface ItemRepository extends CrudRepository<Item, Integer> {
}
