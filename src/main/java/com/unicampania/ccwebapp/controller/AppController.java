package com.unicampania.ccwebapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

	/* Viene caricata index.ftl quando viene richiesta la root / */
	@RequestMapping("/")
	String home(ModelMap modelMap) {
		modelMap.addAttribute("title","Common Criteria | Catalogue");
		return "Home";
	}

	@RequestMapping("/partials/{page}")
	String partialHandler(@PathVariable("page") final String page) {
		return page;
	}

}
