package com.unicampania.ccwebapp.repositories.repositories_fclass;

import com.unicampania.ccwebapp.model.model_fclass.FComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface FComponentRepository  extends JpaRepository<FComponent, String> {

    @Query(value = "SELECT * FROM fcomponent WHERE idf IN (SELECT id FROM ffamily WHERE idf = :id)",
            nativeQuery = true)
    List<FComponent> fcomponentQuery(@Param("id") String id);

    @Query(value = "SELECT * FROM fcomponent WHERE idf = :id",
            nativeQuery = true)
    List<FComponent> fcomponentCatalogoQuery(@Param("id") String id);


}