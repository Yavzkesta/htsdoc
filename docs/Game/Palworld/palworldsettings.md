---
sidebar_position: 1
title: Configuration Serveur Palworld
description: Guide rapide pour configurer le serveur Palworld en utilisant le bot Discord hebergtonserv, facilitant la modification des paramètres comme BaseCampWorkerMaxNum.
keywords:
  - Palworld
  - Serveur
  - Configuration
  - Automatisation
  - Discord Bot
  - BaseCampWorkerMaxNum
---

## **Configurer votre Serveur Palworld avec Facilité**

L'automatisation de la configuration du serveur Palworld permet une gestion simplifiée et efficace des paramètres du serveur, comme le `BaseCampWorkerMaxNum`.

### **Préparation**

1. **Modifier PalWorldSettings.ini**
   - Ouvrez le fichier `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` sur votre serveur.
   - Modifiez les valeurs selon vos besoins.
   - Sauvegardez le fichier dans le répertoire de sauvegarde du serveur.

### **Utilisation du Bot Discord**

2. **Exécution de la Commande Bot**
   - Sur notre serveur Discord, utilisez la commande `/palworld`.
   - Téléchargez votre fichier `PalWorldSettings.ini` modifié via cette commande.

### **Traitement et Mise en Place**

3. **Récupération du Fichier Généré**
   - Le bot traitera le fichier et générera `WorldOption.sav`. 
   - Téléchargez ce fichier depuis le message du bot.

4. **Mise à Jour du Serveur**
   - Placez le fichier `WorldOption.sav` dans le répertoire approprié sur votre serveur Palworld. exemple Pal/Saved/SaveGames/0/C7DE174E04964B639B5C70353FB91ED3
   - Redémarrez le serveur pour appliquer les modifications.

Ce processus facilite grandement la mise à jour des paramètres de votre serveur Palworld.
