package com.unicampania.ccwebapp.repositories.repositories_fclass;

import com.unicampania.ccwebapp.model.model_fclass.FfUserNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface FfUserNotesRepository extends JpaRepository<FfUserNotes, String> {

    @Query(value = "select * from ffusernotes where idf = :id",
            nativeQuery = true)
    List<FfUserNotes> ffusernotesQuery(@Param("id") String id);

}