package com.unicampania.ccwebapp.model.model_aclass;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "acodependsoncomponent")
public class AcoDependsOnComponent implements Serializable {

    @Id
    @Setter
    @Getter
    @Column(name = "id_acodependsoncomponent")
    private String id;

    @Setter
    @Getter
    @Column(name = "acomponent")
    private String acomponent;

    @Setter
    @Getter
    @Column(name = "ida")
    private String ida;

    @Setter
    @Getter
    @Column(name = "idf")
    private String idf;
}
