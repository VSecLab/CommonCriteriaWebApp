package com.unicampania.ccwebapp.service;

import com.unicampania.ccwebapp.model.model_aclass.AClass;
import com.unicampania.ccwebapp.model.model_aclass.AComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface AClassService {

    AClass findById(String id);
    AClass findByName(String name);
    List<AClass> findAllAClasses();

}
