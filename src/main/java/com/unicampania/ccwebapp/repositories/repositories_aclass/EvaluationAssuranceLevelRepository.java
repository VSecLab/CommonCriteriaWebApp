package com.unicampania.ccwebapp.repositories.repositories_aclass;

import com.unicampania.ccwebapp.model.model_aclass.EvaluationAssuranceLevel;
import com.unicampania.ccwebapp.model.model_aclass.ListAssuranceRequirements;
import com.unicampania.ccwebapp.model.model_fclass.ListFco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EvaluationAssuranceLevelRepository extends JpaRepository<EvaluationAssuranceLevel, String> {


    ListFco findByName(String id);

    @Query(value = "select * from eal", nativeQuery = true)
    List<EvaluationAssuranceLevel> ListEvaluationAssuranceLevelQuery();
}
