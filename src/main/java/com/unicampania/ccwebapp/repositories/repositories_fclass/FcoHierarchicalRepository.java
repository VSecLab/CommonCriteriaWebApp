package com.unicampania.ccwebapp.repositories.repositories_fclass;


import com.unicampania.ccwebapp.model.model_fclass.FcoHierarchical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FcoHierarchicalRepository extends JpaRepository<FcoHierarchical, String> {


    @Query(value = "select * from fcohierarchical where idf = :id",
            nativeQuery = true)
    List<FcoHierarchical> fcohierarchicalQuery(@Param("id") String id);

}