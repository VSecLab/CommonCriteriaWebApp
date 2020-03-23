package com.unicampania.ccwebapp.model.model_aclass;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "afobjectives")
public class AfObjectives {

    @Id
    @Setter
    @Getter
    @Column(name = "id")
    private String id;

    @Setter
    @Getter
    @Column(name = "testo")
    private String testo;

    @Setter
    @Getter
    @Column(name = "ida")
    private String ida;

    @Setter
    @Getter
    @Column(name = "idf")
    private String idf;
}
