package com.unicampania.ccwebapp.model.model_aclass;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "acomponent")
public class AComponent implements Serializable {


    @Id
    @Setter
    @Getter
    @Column(name = "id_acomponent")
    private String id_acomponent;

    @Id
    @Setter
    @Getter
    @Column(name = "name")
    private String name;

    @Id
    @Setter
    @Getter
    @Column(name = "ida")
    private String ida;

    @Id
    @Setter
    @Getter
    @Column(name = "idf")
    private String idf;

}
