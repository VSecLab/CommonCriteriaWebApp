package com.unicampania.ccwebapp.model.model_fclass;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@ToString
@Entity
@Table(name="fcomanagement")
public class FcoManagement {

    @Getter
    @Setter
    @Column(name = "num")
    private String num;

    @Id
    @Getter
    @Setter
    @Column(name = "id")
    private String id;

    @Getter
    @Setter
    @Column(name = "equal")
    private String equal;

    @Getter
    @Setter
    @Column(name = "text")
    private String text;

    @Getter
    @Setter
    @Column(name = "idf")
    private String idf;


}
