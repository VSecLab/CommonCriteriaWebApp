package com.unicampania.ccwebapp.repositories;


import com.unicampania.ccwebapp.model.FcoHierarchical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FcoHierarchicalRepository extends JpaRepository<FcoHierarchical, String> {


    @Query(value = "select * from fcohierarchical where idf = :id",
            nativeQuery = true)
    List<FcoHierarchical> fcohierarchicalQuery(@Param("id") String id);

}