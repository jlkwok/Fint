package com.eecs395.fint;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends CrudRepository<CartItem, CartId>{
	
	@Query("SELECT i FROM CartItem i WHERE i.id.finteeId=?1")
	public List<CartItem> findCartById(Integer finteeId);
	
	@Query("SELECT i FROM CartItem c, Item i WHERE c.id.finteeId=?1 AND c.id.itemId=i.itemId")
	public List<Item> findCartItemsById(Integer finteeId);
}
