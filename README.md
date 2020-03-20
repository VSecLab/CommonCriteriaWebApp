Index
---------------------

 * [Introduction](#introduction)
 * [Requirements](#requirements)
 * [Installation](#installation)
 * [Configuration](#configuration)
 * [Built With](#built-with)
 * [Authors](#authors)
 * [License](#license)


Introduction
------------

Il progetto, sviluppato all'Università della Campania Luigi Vanvitelli, si occupa della gestione,
 tramite un'applicazione web, 
di un database contenente informazioni relative allo
 standard internazionale ISO/IEC 15408 v3.1 Release 5.
 
Lo standard è suddiviso in 3 parti:
- Introduction and General Model - [Link](https://www.commoncriteriaportal.org/files/ccfiles/CCPART1V3.1R5.pdf)
- Security Functional Requirements - [Link](https://www.commoncriteriaportal.org/files/ccfiles/CCPART2V3.1R5.pdf)
- Security Assurance Requirements - [Link](https://www.commoncriteriaportal.org/files/ccfiles/CCPART3V3.1R5.pdf)

La web application si occupa della gestione dei Security Functional Requirements e dei Security
 Assurance Requirements.
 
L'applicazione presenta casi d'uso diversi a seconda dell'utilizzatore, ovvero:
- Developer/Consumer:
  - Sfoglia Catalogo
  - Ricerca Requirements
  - Aggiungi Requirements
  - Elimina Requirements
- Evaluator:
  - Visualizza Anteprima

Nello specifico, lo scenario _Visualizza Anteprima_, permette il download di un file PDF contenente
i _Requirements_ selezionati.



Requirements
------------

Per poter utilizzare l'applicazione bisogna avere:
- un ambiente di sviluppo per il linguaggio di programmazione JAVA
- una piattaforma costituita da un Apache Server 2.0 e il database MariaDB 



Installation
------------

L'installazione prevede il download della repository del progetto oppure 
clonare il progetto ed aprirlo dall'IDE.
Successivamente bisogna scaricare il file _springbatch.sql_ ed inserirlo 
nel server in locale.

Configuration
------------
 
Per configurare il database bisogna utilizzare le seguenti credenziali:
 - username: root
 - password: root
 
Nella configurazione dell'IDE bisogna selezionare la versione 1.8 di JAVA.
 
Built with
----------

* [Spring](https://spring.io) - framework utilizzato per backend e frontend
* [Hibernate](https://hibernate.org) - framework che fornisce un servizio di Object-relational mapping
* [JPA](https://spring.io/projects/spring-data-jpa) - framework utilizzato per la persistenza dei dati
* [Maven](https://maven.apache.org/) - strumento di gestione delle dipendenze

Authors
-------

**Lorenzo Diana** - [GitHub](https://github.com/Fiorenzo92), [Mail](mailto:lorenzo.diana92@gmail.com?subject=[GitHub]%20CommonCriteriaWebApplication)

**Roberto Chello** - [GitHub](https://github.com/robertochello), [Mail](mailto:robertochello@gmail.com?subject=[GitHub]%20CommonCriteriaWebApplication)
                                                            


License
-------

Questo progetto è sotto licenza Apache 2.0 - [Licenza](LICENSE.md)