package com.unicampania.ccwebapp.repositories.repositories_fclass;

import com.unicampania.ccwebapp.model.model_fclass.FcoUserNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FcoUserNotesRepository extends JpaRepository<FcoUserNotes, String> {


    @Query(value = "select * from fcousernotes where idf = :id",
            nativeQuery = true)
    List<FcoUserNotes> fcoUserNotesQuery(@Param("id") String id);
}
