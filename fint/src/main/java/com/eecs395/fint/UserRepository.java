package com.eecs395.fint;

import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.User;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
}
