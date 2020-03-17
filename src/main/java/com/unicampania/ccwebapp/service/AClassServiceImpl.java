package com.unicampania.ccwebapp.service;

import com.unicampania.ccwebapp.model.model_aclass.AClass;
import com.unicampania.ccwebapp.repositories.repositories_aclass.AClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("aClassService")
@Transactional
public class AClassServiceImpl implements AClassService {
    @Autowired
    private AClassRepository aClassRepository;

    public AClass findById (String id) {
        return aClassRepository.findOne(id);
    }

    public AClass findByName (String name) {
        return aClassRepository.findByName(name);
    }

    public List<AClass> findAllAClasses() {
        return aClassRepository.findAll();
    }
}
