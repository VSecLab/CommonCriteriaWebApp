package com.unicampania.ccwebapp.model.model_aclass;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "afamily")
public class AFamily implements Serializable {

    @Id
    @Setter
    @Getter
    @Column(name = "id_afamily")
    private String id_afamily;

    @Setter
    @Getter
    @Column(name = "name")
    private String name;

    @Setter
    @Getter
    @Column(name = "ida")
    private String ida;
}
