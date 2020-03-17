package com.unicampania.ccwebapp.model.model_fclass;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="listfco")

public class ListFco implements Serializable {


    private static final long serialVersionUID = 2916704200290943399L;

    @Id
    @Getter
    @Setter
    @Column(name = "id")
    private String id;


    @Getter
    @Setter
    @Column(name="name")
    private String name;





}
