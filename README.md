# Hakatombe
Project Developpement : Register for a Hackathon weekend with multiple schools

## Rôles
- Administrator : admin
- Type of Users : 
  + Team Leader : tl
  + Team Member : tm
  + User : user
- Everyone : guest

# Info de configuration
Pour configurer la connexion entre l'API et la partie Front de l'application il faut que les deux ports soient équivalents :
 - API : .env --> FRONT_PORT 
 - FRONT : .env --> PORT
 - JWT_KEY : .env --> Mettre une clef de connexion
 
 # POSTMAN
 Pour pouvoir tester entièrement les possibilités de l'API, nous avons joins une base de requête pour POSTMAN
 Afin de pouvoir les tester, il faut :
  - Créer un utilisateur
  - Se login
  - Récupérer le token fourni en retour de la connexion pour la renseigner dans le Header des requêtes qui en ont besoin

# Back Repository
https://github.com/MKaziel/Hakatombe
# Front Repository
https://github.com/MKaziel/hakatombe_front

# Developpeurs
Developped by:
  - Alexandre SZABO
  - Zakia GHOULI
  - Thomas NOMINE 

from IPSSI School

