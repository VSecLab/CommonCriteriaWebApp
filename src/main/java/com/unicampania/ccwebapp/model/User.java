package com.unicampania.ccwebapp.model;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="fclass")
public class User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2966704200290943399L;

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
