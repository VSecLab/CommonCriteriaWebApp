package com.unicampania.ccwebapp.repositories;

import com.unicampania.ccwebapp.model.FfBehaviour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;



@Repository
public interface FfBehaviourRepository extends JpaRepository<FfBehaviour, String> {

    @Query(value = "select * from ffbehaviour where idf = :id GROUP BY(para)",
            nativeQuery = true)
    List<FfBehaviour> ffbehaviourQuery(@Param("id") String id);

}