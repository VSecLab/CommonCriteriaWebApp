package com.unicampania.ccwebapp.model.model_aclass;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "ealassurancecomponents")
public class EalAssuranceComponents implements Serializable {

    @Id
    @Setter
    @Getter
    @Column(name = "id_ealassurancecomponents")
    private String id_ealassurancecomponents;

    @Setter
    @Getter
    @Column(name = "testo")
    private String testo;

    @Setter
    @Getter
    @Column(name = "id_eal")
    private String ide;

}
