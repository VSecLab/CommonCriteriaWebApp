package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AComponent;
import com.unicampania.ccwebapp.model.model_aclass.AFamily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AComponentRepository extends JpaRepository<AComponent, String> {

    /*
    Select all from acomponent where ida = id
    ida is the foreign key for the aclass
     */
    @Query(value = "" +
            "SELECT * " +
            "FROM acomponent" +
            "WHERE ida = :id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AComponent> AComponentInAClass(@Param("id") String id);


    /*
    Select all from afamily where idf = id_afamily
    idf is the foreign key for the afamily
     */
    @Query(value = "" +
            "SELECT * " +
            "FROM acomponent" +
            "WHERE idf = :id_afamily",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AFamily> AComponentInAFamily(@Param("id_afamily") String id_afamily);
}
