import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import { NoFavourites } from '../components/NoFavourites';
import { WordCard } from '../components/WordCard';
import { WordStore } from '../store';
import { getFavourites } from '../store/Selectors';

const Tab3 = () => {

  const pageRef = useRef();
  const favourites = useStoreState(WordStore, getFavourites);

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favourites</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        { favourites.map((favourite, index) => {
          return <WordCard key={ index } word={ favourite } pageRef={ pageRef } />;
        })}

        { favourites.length < 1 && 
          <NoFavourites />
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
