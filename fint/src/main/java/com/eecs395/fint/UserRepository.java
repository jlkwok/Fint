package com.eecs395.fint;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.eecs395.fint.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE u.username = ?1 AND u.password = ?2")
    public Optional<User> verifyUser(String username, String password);
}
