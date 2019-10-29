package com.eecs395.fint;

import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.User;

public interface UserRepository extends CrudRepository<User, Integer> {
}
