package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.ListAssuranceRequirements;
import com.unicampania.ccwebapp.model.model_fclass.ListFco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListAssuranceRequirementsRepository extends JpaRepository<ListAssuranceRequirements, String> {

    ListFco findByName(String id);

    @Query(value = "select * from listassurancerequirements", nativeQuery = true)
    List<ListAssuranceRequirements> ListAssuranceRequirementsQuery();

}
