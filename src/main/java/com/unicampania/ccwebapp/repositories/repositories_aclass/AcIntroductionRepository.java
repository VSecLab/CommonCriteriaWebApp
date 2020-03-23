package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AFamily;
import com.unicampania.ccwebapp.model.model_aclass.AcIntroduction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AcIntroductionRepository extends JpaRepository<AcIntroduction, String> {

    /*
    Select all from acintroduction where ida = id
    ida is the foreign key for the aclass
     */
    @Query(value = "SELECT * FROM acintroduction WHERE ida =:id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AcIntroduction> AcIntroductionInAClass(@Param("id") String id);





}
