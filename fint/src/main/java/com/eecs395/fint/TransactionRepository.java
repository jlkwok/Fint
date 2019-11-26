package com.eecs395.fint;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.Transaction;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Integer> {
	
	@Query("SELECT t FROM Transaction t WHERE t.tId=?1")
	public Transaction findTransactionsByTransactionId(Integer tId);
	
	@Query("SELECT t FROM Transaction t WHERE t.finteeId=?1 AND t.isReturned=False")
	public List<Transaction> findTransactionsByFinteeId(Integer finteeId);
	
	@Query("SELECT t FROM Transaction t, Item i WHERE t.itemId=i.itemId AND i.finterId=?1 AND t.isReturned=False")
	public List<Transaction> findTransactionsByFinterId(Integer finterId);
	
	@Query("SELECT t FROM Transaction t WHERE t.finteeId=?1 AND t.isReturned=True")
	public List<Transaction> findPastTransactionsByFinteeId(Integer finteeId);
	
	@Query("SELECT t FROM Transaction t, Item i WHERE t.itemId=i.itemId AND i.finterId=?1")
	public List<Transaction> findPastTransactionsByFinterId(Integer finterId);
	
	@Query("SELECT t FROM Transaction t WHERE t.finteeId=?1")
	public List<Transaction> findAllTransactionsByFinteeId(Integer finteeId);
	
	@Query("SELECT t FROM Transaction t, Item i WHERE t.itemId=i.itemId AND i.finterId=?1")
	public List<Transaction> findAllTransactionsByFinterId(Integer finterId);

	
}
