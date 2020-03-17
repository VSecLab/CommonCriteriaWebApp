package com.unicampania.ccwebapp.model.model_fclass;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;


@Entity
@Table(name="fcomponent")
public class FComponent implements Serializable {

    @Id
    @Getter
    @Setter
    @Column(name = "id")
    private String id;


    @Getter
    @Setter
    @Column(name = "name")
    private String name;

    @Getter
    @Setter
    @Column(name = "idf")
    private String idf;
}
