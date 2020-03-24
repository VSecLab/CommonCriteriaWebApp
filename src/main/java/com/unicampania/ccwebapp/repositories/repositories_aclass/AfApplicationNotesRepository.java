package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.AfApplicationNotes;
import com.unicampania.ccwebapp.model.model_aclass.AfLevellingCriteria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AfApplicationNotesRepository extends JpaRepository<AfApplicationNotes, String> {

    /*
        Select all from afapplicationnotes where idf = id
        idf is the foreign key for the afamily
         */
    @Query(value ="select * from afapplicationnotes where idf = :id",
            nativeQuery = true)
    /*
    We can also pass method parameters to the query using named parameters.
    We define these using the @Param annotation inside our repository method declaration.
    Each parameter annotated with @Param must have a value
    string matching the corresponding JPQL or SQL query parameter name
     */
    List<AfApplicationNotes> AfApplicationNotesInAFamily(@Param("id") String id);
}