package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AFamily;
import com.unicampania.ccwebapp.model.model_aclass.AcoDependsOnComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AcoDependsOnComponentRepository extends JpaRepository<AcoDependsOnComponent, String> {

    /*
    Select all from acodependsoncomponent where acomponent = id
    acomponent "is" a foreign key for acomponent table
         */
    @Query(value ="select * from acodependsoncomponent where idf = :id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AcoDependsOnComponent> AcoDependsOnComponentInAComponent(@Param("id") String id);

}
