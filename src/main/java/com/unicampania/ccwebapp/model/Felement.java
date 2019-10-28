package com.unicampania.ccwebapp.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "felement")
public class Felement {


    @Id
    @Getter
    @Setter
    @Column(name = "idr")
    private String idr;

    @Getter
    @Setter
    @Column(name = "num")
    private String num;


    @Getter
    @Setter
    @Column(name = "id")
    private String id;

    @Getter
    @Setter
    @Column(name = "text")
    private String text;

    @Getter
    @Setter
    @Column(name="idf")
    private String idf;



}
