package com.unicampania.ccwebapp.repositories.repositories_fclass;


import com.unicampania.ccwebapp.model.model_fclass.Felement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface FelementRepository extends JpaRepository<Felement, String> {


    @Query(value = "SELECT DISTINCT * FROM felement WHERE idf = :id GROUP BY(id)",
            nativeQuery = true)
    List<Felement> felementQuery(@Param("id") String id);


}
