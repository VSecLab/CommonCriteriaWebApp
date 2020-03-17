package com.unicampania.ccwebapp.repositories.repositories_fclass;

import com.unicampania.ccwebapp.model.model_fclass.FcoEvaluatorNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface FcoEvaluatorNotesRepository extends JpaRepository<FcoEvaluatorNotes, String> {


    @Query(value = "select * from fcoevaluatornotes where idf = :id",
            nativeQuery = true)
    List<FcoEvaluatorNotes> fcoevaluatornotesQuery(@Param("id") String id);
}
