package com.unicampania.ccwebapp.repositories;

import com.unicampania.ccwebapp.model.ListFClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListFClassRepository extends JpaRepository<ListFClass, String> {

    ListFClass findByName(String id);

    @Query(value = "select * from listfclass", nativeQuery = true)
    List<ListFClass> listFclassQuery();


}
