package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AFamily;
import com.unicampania.ccwebapp.model.model_aclass.AfObjectives;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AfObjectivesRepository extends JpaRepository<AfObjectives, String> {

    /*
    Select all from afobjectives where idf = id
    idf is the foreign key for the afamily
     */
    @Query(value ="select * from afobjectives where idf = :id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AfObjectives> AfObjectivesInAFamily(@Param("id") String id);
}
