package com.eecs395.fint;

import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.Transaction;

public interface TransactionRepository extends CrudRepository<Transaction, Integer> {
}
