package com.unicampania.ccwebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication(scanBasePackages={"com.unicampania.ccwebapp"})// same as @Configuration @EnableAutoConfiguration @ComponentScan
@ComponentScan(basePackages="com.unicampania.ccwebapp.controller, com.unicampania.ccwebapp.service")
@EntityScan(basePackages="com.unicampania.ccwebapp.model")
public class SpringBootCRUDApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootCRUDApp.class, args);
	}
}
