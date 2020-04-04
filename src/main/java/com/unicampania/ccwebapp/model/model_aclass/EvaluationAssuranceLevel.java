package com.unicampania.ccwebapp.model.model_aclass;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "eal")
public class EvaluationAssuranceLevel implements Serializable {

    @Id
    @Setter
    @Getter
    @Column(name = "id_eal")
    private String id;

    @Setter
    @Getter
    @Column(name = "name")
    private String name;

}
