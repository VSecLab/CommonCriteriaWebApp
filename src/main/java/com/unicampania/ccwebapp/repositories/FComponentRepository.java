package com.unicampania.ccwebapp.repositories;

import com.unicampania.ccwebapp.model.FComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface FComponentRepository  extends JpaRepository<FComponent, String> {

    @Query(value = "SELECT * FROM fcomponent WHERE idf IN (SELECT id FROM ffamily WHERE idf = :id)",
            nativeQuery = true)
    List<FComponent> fcomponentQuery(@Param("id") String id);

}