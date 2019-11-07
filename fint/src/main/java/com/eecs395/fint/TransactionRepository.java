package com.eecs395.fint;

import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.Transaction;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Integer> {
}
