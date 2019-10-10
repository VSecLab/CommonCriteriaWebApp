package com.unicampania.ccwebapp.repositories;

import com.unicampania.ccwebapp.model.Ffamily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FfamilyReposiory  extends JpaRepository<Ffamily, String> {

    @Query(value = "select * from ffamily where idf = :id",
            nativeQuery = true)
    List<Ffamily> ffamilyclassQuery(@Param("id") String id);

}