package com.unicampania.ccwebapp.repositories.repositories_fclass;

import com.unicampania.ccwebapp.model.model_fclass.FcInformativeNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FcInformativeNotesRepository extends JpaRepository<FcInformativeNotes, String> {

    @Query(value = "select * from fcinformativenotes where idf = :id",
            nativeQuery = true)
    List<FcInformativeNotes> fcinformativenotesQuery(@Param("id") String id);

}