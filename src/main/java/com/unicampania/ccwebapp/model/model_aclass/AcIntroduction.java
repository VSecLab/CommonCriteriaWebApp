package com.unicampania.ccwebapp.model.model_aclass;



import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "acintroduction")
public class AcIntroduction implements Serializable {

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

}
