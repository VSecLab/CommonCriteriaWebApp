package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AcoDependsOnComponent;
import com.unicampania.ccwebapp.model.model_aclass.AeDeveloper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AeDeveloperRepository extends JpaRepository<AeDeveloper, String> {

    /*
Select all from aedeveloper where id_acomponent = id
id_acomponent is a foreign key for acomponent
     */
    @Query(value ="select * from aedeveloper where id_acomponent = :id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AeDeveloper> AeDeveloperInAComponent(@Param("id") String id);

}
