package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AClass;
import com.unicampania.ccwebapp.model.model_fclass.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AClassRepository extends JpaRepository<AClass, String> {
    AClass findByName(String name);
}
