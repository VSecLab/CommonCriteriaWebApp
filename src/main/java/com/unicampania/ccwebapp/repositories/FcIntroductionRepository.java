package com.unicampania.ccwebapp.repositories;

import com.unicampania.ccwebapp.model.FcIntroduction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FcIntroductionRepository extends JpaRepository<FcIntroduction, String> {

    @Query(value = "select * from fcintroduction where idf = :id",
            nativeQuery = true)
    List<FcIntroduction> fclassQuery(@Param("id") String id);

}