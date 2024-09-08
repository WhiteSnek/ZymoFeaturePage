import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID ,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URI
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const FirebaseContext = createContext();


export const FirebaseProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllCars = async () => {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, 'cars')); 
      if (snapshot.exists()) {
        const data = snapshot.val();
        const carList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setCars(carList);
        return carList;
      } else {
        console.log('No cars found');
        return [];
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };


  const getOneCar = async (carId) => {
    const dbRef = ref(getDatabase());
    try {

      const carSnapshot = await get(child(dbRef, `cars/${carId}`));
      if (!carSnapshot.exists()) {
        console.log(`Car with ID ${carId} not found`);
        return null;
      }
      
      const carData = carSnapshot.val();

      const [additionalImagesSnapshot, featuresSnapshot, feedbackSnapshot, faqsSnapshot, specsSnapshot, rentalPoliciesSnapshot, similarCarsSnapshot] = await Promise.all([
        get(child(dbRef, `additionalImages/${carId}`)),
        get(child(dbRef, `features`)),
        get(child(dbRef, `feedback`)),
        get(child(dbRef, `faq`)),
        get(child(dbRef, `specs`)),
        get(child(dbRef, `rentalPolicies`)),
        get(child(dbRef, `similarCars`)),
      ]);
  

      return {
        id: carId,
        company: carData.company,
        model: carData.model,
        year: carData.year,
        rent: carData.rent,
        img: carData.img,
        additionalImages: additionalImagesSnapshot.exists() ? additionalImagesSnapshot.val() : [],
        features: featuresSnapshot.exists() ? featuresSnapshot.val() : [],
        feedback: feedbackSnapshot.exists() ? feedbackSnapshot.val() : [],
        faqs: faqsSnapshot.exists() ? faqsSnapshot.val() : [],
        specs: specsSnapshot.exists() ? specsSnapshot.val() : {},
        rentalPolicies: rentalPoliciesSnapshot.exists() ? rentalPoliciesSnapshot.val() : [],
        similarCars: similarCarsSnapshot.exists() ? similarCarsSnapshot.val() : []
      };
    } catch (error) {
      console.error(`Error fetching car with ID ${carId}:`, error);
      return null;
    }
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <FirebaseContext.Provider value={{ cars, loading, getAllCars, getOneCar}}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
