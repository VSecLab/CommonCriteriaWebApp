package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AcoDependsOnComponent;
import com.unicampania.ccwebapp.model.model_aclass.AcoObjectives;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AcoObjectivesRepository extends JpaRepository<AcoObjectives, String> {

    /*
    Select all from acoobjectives where idf = id
    idf is foreign key for afamily
     */
    @Query(value ="select * from acoobjectives where idf = :id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AcoObjectives> AcoObjectivesInAComponent(@Param("id") String id);

}
