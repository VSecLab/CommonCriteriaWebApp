package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AFamily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AFamilyRepository extends JpaRepository<AFamily, String> {

    /*
    Select all from afamily where ida = id
    ida is the foreign key for the aclass
     */
    @Query(value ="select * from afamily where ida = :id",
    nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AFamily> AFamilyInAClass(@Param("id") String id);


}
