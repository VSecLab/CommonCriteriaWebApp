package com.unicampania.ccwebapp.controller;

import java.util.List;


import com.unicampania.ccwebapp.model.*;
import com.unicampania.ccwebapp.repositories.*;
import com.unicampania.ccwebapp.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/SpringBootCRUDApp/api")
public class RestApiController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

	@Autowired
	UserRepository userRepository; //Service which will do all data retrieval/manipulation work

	@Autowired
	FcIntroductionRepository fcIntroductionRepository;

	@Autowired
	FcInformativeNotesRepository fcInformativeNotesRepository;

	@Autowired
	FfamilyReposiory ffamilyReposiory;

	@Autowired
	FComponentRepository fComponentRepository;

	@Autowired
	FcoDependenciesRepository fcoDipendenciesRepository;

	@Autowired
	FcoEvaluatorNotesRepository fcoEvaluatorNotesRepository;

	@Autowired
	ListFClassRepository listFClassRepository;

	@Autowired
	FfBehaviourRepository ffBehaviourRepository;

	@Autowired
	FcoUserNotesRepository fcoUserNotesRepository;

	// -------------------Retrieve Fclass---------------------------------------------

	@RequestMapping(value = "/user/", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllUsers() {
		List<User> users = userRepository.findAll();
		if (users.isEmpty()) {
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}


	// -------------------Ritorna gli elementi di fcintroduction------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getUser(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<FcIntroduction> fcintroductions = fcIntroductionRepository.fclassQuery(id);
		if (fcintroductions.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FcIntroduction>>(fcintroductions, HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di fcinformativenotes------------------------------------------

	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcInformativeNotes(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<FcInformativeNotes> fcinformationsnotes = fcInformativeNotesRepository.fcinformativenotesQuery(id);
		if (fcinformationsnotes.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FcInformativeNotes>>(fcinformationsnotes, HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di ffamily------------------------------------------

	@RequestMapping(value = "/family/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFfamily(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<Ffamily> ffamily = ffamilyReposiory.ffamilyclassQuery(id);
		if (ffamily .isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Ffamily>>(ffamily , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di fcomponent (Requirements)------------------------------------------

	@RequestMapping(value = "/fcomponent/{Name}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcomponent(@PathVariable("Name") String id) {
		logger.info("Fetching User with id {}", id);
		List<FComponent> fcomponents = fComponentRepository.fcomponentQuery(id);
		if ( fcomponents.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FComponent>>( fcomponents , HttpStatus.OK);
	}

// -------------------Ritorna gli elementi di fcodipendencies(Dipendenze)------------------------------------------

	@RequestMapping(value = "/fcodependencies/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoDipendencies(@PathVariable("id") String id) {

		logger.info("Fetching fcodipendencies with id {}", id);
		List<FcoDependencies> fcodependencies = fcoDipendenciesRepository.fcodipendenciesQuery(id);
		if ( fcodependencies.isEmpty() ) {
			logger.error("fcodependencies with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("fcodependencies with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FcoDependencies>>( fcodependencies , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di  fcoevaluatornotes(Evaluetor Notes)------------------------------------------

	@RequestMapping(value = "/fcoevaluatornotes/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoEvaluatorNotes(@PathVariable("id") String id) {

		logger.info("Fetching fcoevaluatornotes with id {}", id);
		List<FcoEvaluatorNotes> fcoevaluatornotes = fcoEvaluatorNotesRepository.fcoevaluatornotesQuery(id);
		if ( fcoevaluatornotes.isEmpty() ) {
			FcoEvaluatorNotes c = new FcoEvaluatorNotes();
			c.setId("");
			c.setType("");
			c.setPara("THERE ARE NO ELEMENTS");
			c.setIdf(id);
			fcoevaluatornotes.add(c);
			return new ResponseEntity<List<FcoEvaluatorNotes>>( fcoevaluatornotes , HttpStatus.OK);
		}
		return new ResponseEntity<List<FcoEvaluatorNotes>>( fcoevaluatornotes , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di  fcoevaluatornotes(Evaluetor Notes)------------------------------------------

	@RequestMapping(value = "/fcousernotes/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoUserNotes(@PathVariable("id") String id) {

		logger.info("Fetching fcousernotes with id {}", id);
		List<FcoUserNotes> fcousernotes = fcoUserNotesRepository.fcoUserNotesQuery(id);
		if ( fcousernotes.isEmpty() ) {

			logger.error(" fcousernotes with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType(" fcousernotes with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}

		System.out.println(fcousernotes.toString());
		return new ResponseEntity<List<FcoUserNotes>>( fcousernotes , HttpStatus.OK);
	}


	// -------------------Ritorna gli elementi di ffbehaviour (Behaviour)------------------------------------------

	@RequestMapping(value = "/ffbehaviour/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFfBehaviour(@PathVariable("id") String id) {

		logger.info("Fetching ffbehaviour with id {}", id);
		List<FfBehaviour> ffbehaviour = ffBehaviourRepository.ffbehaviourQuery(id);
		if ( ffbehaviour.isEmpty() ) {
			logger.error("ffbehaviour with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("ffbehaviour with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FfBehaviour>>(ffbehaviour , HttpStatus.OK);
	}
	// -------------------Creazione, lettura ed elimina elemento listFclass (preferiti)-------------------------------------------

	@RequestMapping(value = "/fclass/", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody ListFClass user, UriComponentsBuilder ucBuilder) {
		logger.info("Creating ListFclass : {}", user);

		List<ListFClass> listfclass = listFClassRepository.listFclassQuery();
		for (int i = 0; i < listfclass.size(); i++) {
			if (listfclass.get(i).getId().equals(user.getId())) {
				logger.error("Già presente in listFclass, {} already exist", user.getId());
				return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to create. A User with name " +
						user.getName() + " already exist."),HttpStatus.CONFLICT);
			}
		}

		listFClassRepository.save(user);
		return new ResponseEntity<String>(HttpStatus.CREATED);
	}


	@RequestMapping(value = "/fclass/", method = RequestMethod.GET)
	public ResponseEntity<?> getListClass() {

		logger.info("Fetching listclass with id");
		List<ListFClass> listfclass = listFClassRepository.listFclassQuery();
		if ( listfclass.isEmpty() ) {
			logger.error("listfclass not found.");
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("listfclass not found"), HttpStatus.OK);
		}
		return new ResponseEntity<List<ListFClass>>( listfclass, HttpStatus.OK);
	}

	@RequestMapping(value = "/fclass/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletelistFaclass(@PathVariable("id") String id) {

		logger.info("Fetching & Deleting User with id {}", id);

		ListFClass listFClass = listFClassRepository.findOne(id);
		if (listFClass  == null) {
			logger.error("Unable to delete. User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		listFClassRepository.delete(id);
		return new ResponseEntity<ListFClass>(HttpStatus.NO_CONTENT);
	}


	// --------

	// ------------------- Update a User ------------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@PathVariable("id") String id, @RequestBody User user) {
		logger.info("Updating User with id {}", id);

		User currentUser = userRepository.findOne(id);

		if (currentUser == null) {
			logger.error("Unable to update. User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to upate. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentUser.setName(user.getName());


		userRepository.save(currentUser);
		return new ResponseEntity<User>(currentUser, HttpStatus.OK);
	}

	// ------------------- Delete a User-----------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUser(@PathVariable("id") String id) {
		logger.info("Fetching & Deleting User with id {}", id);

		User user = userRepository.findOne(id);
		if (user == null) {
			logger.error("Unable to delete. User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		userRepository.delete(id);
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Users-----------------------------

	@RequestMapping(value = "/user/", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteAllUsers() {
		logger.info("Deleting All Users");

		userRepository.deleteAll();
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

}