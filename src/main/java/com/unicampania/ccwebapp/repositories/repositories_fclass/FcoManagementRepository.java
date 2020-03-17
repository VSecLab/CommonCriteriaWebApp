package com.unicampania.ccwebapp.repositories.repositories_fclass;

import com.unicampania.ccwebapp.model.model_fclass.FcoManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FcoManagementRepository extends JpaRepository<FcoManagement, String> {


    @Query(value = "select * from fcomanagement where idf = :id",
            nativeQuery = true)
    List<FcoManagement> fcomanagmentQuery(@Param("id") String id);
}
