package com.unicampania.ccwebapp.repositories.repositories_fclass;


import com.unicampania.ccwebapp.model.model_fclass.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User, String> {

    User findByName(String name);


}
