# README #

### What is this repository for? ###

Questa applicazione rappresenta il template di un'applicazione web di esempio che fa uso delle tecnologie: SpringBoot, AngularJS e JPA.

E' possibile comprendere la struttura del progetto e le varie tecnologie utilizzate andando alla pagina: http://websystique.com/spring-boot/spring-boot-angularjs-spring-data-jpa-crud-app-example/

Il progetto originale è stato modificato apportando delle semplificazioni di seguito espresse:

* Sono stati eliminati il file .yml ed il relativo file JPA Configuration per le configurazioni. Al loro posto è stato utilizzato il file application.properties (sotto la path src/main/resources) che contiene tutte le configuraizoni necessarie a MySql ed Hibernate
* Sono state elminate le classi di utilità UserService ed UserServiceImpl che servivano come interfaccia verso il repository jpa. Ho sostituito tutte le chiamate a queste classi di utilità con chiamate dirette al repository.

### How do I get set up? ###

Per poter utilizzare ed avviare l'applicazione occorre:

Scaricare in eclipse i seguenti plugin: 

* Spring tool suite
* Free Maker IDE from JBOSS

Mettere su un database MySql con i seguenti parametri:

* Nome database: websystique
* Username: root
* Password: root
* E' possibile modificare i parametri in ogni momento recandosi nel file application.properties

Scaricare il repository come general project

Cliccare col tasto destro sul progetto -> configure -> convert to maven project

Avviare l'applicativo attraverso le opzioni: Run Us -> Spring Boot App

Aprire sul browser la pagina localhost:8080

### Who do I talk to? ###

* Pasquale De Rosa
* p.derosa87@gmail.com