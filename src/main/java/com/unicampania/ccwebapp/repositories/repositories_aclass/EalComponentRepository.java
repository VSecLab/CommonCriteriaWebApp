package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.EalComponent;
import com.unicampania.ccwebapp.model.model_aclass.EalObjectives;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EalComponentRepository extends JpaRepository<EalComponent, String> {

    /*
    Select all from ealcomponent where ide = id
    ide is the foreign key for the eal
     */
    @Query(value ="select * from ealcomponent where id_eal = :id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<EalComponent> EalComponentInEal(@Param("id") String id);
}
