package com.unicampania.ccwebapp.repositories;

import com.unicampania.ccwebapp.model.FcoHierarchical;
import com.unicampania.ccwebapp.model.FcoManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FcoManagementRepository extends JpaRepository<FcoManagement, String> {


    @Query(value = "select * from fcomanagement where idf = :id",
            nativeQuery = true)
    List<FcoManagement> fcomanagmentQuery(@Param("id") String id);
}
