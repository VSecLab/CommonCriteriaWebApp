package com.unicampania.ccwebapp.model.model_aclass;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "aeevaluator")
public class AeEvaluator implements Serializable {

    @Id
    @Setter
    @Getter
    @Column(name = "id_aeevaluator")
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

    @Setter
    @Getter
    @Column(name = "id_acomponent")
    private String id_acomponent;
}
