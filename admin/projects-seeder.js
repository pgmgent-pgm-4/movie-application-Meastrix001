import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

const REVIEWS = 'https://api.sidebox.com/plugin/randomreviews';

(async () => {
  // Get Reviews collection
  let reviewsDb = db.collection('Reviews');

  // Create a Project
  const createProject = (project) => {
    // Add a document via project object
    const data = {
      title: project.Title,
      description: project.Description,
      thumbnailURL: project.Picture,
      ...generateTimestamps()
    };

    reviewsDb.doc(uuidv4()).set(data).then(documentReference => {
      console.log(`Added project.`);
    });
  };

  // Create Reviews via promises
  const createReviews = async () => {
    const response = await fetch(`${REVIEWS}`);
    const jsonData = await response.json();

    db.collection('counters').doc('Reviews').set({numAmount: jsonData.length}, {merge: true});

    const promises = [];
    jsonData.forEach(project => {
      promises.push(createProject(project));
    });
    return await Promise.all(promises);
  };

  await createReviews(); 
})();